import React, {useState, useCallback, useEffect, useMemo} from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import axios from 'axios';
import ExhibitLibrary from './exhibit-library';
import StationTimeline from './station-timeline';
import mockStations from './mock-data-stations';
import { exhibitIdFromDraggableId } from './aux/draggable-id';
import Loader from './loader';
import DemoPlayer from './demo-player';
import buildPlaylist from './playlist-builder';
import ViewerConn from './viewer-conn';
import Sequencer from "./sequencer";

export default function TimelineEditor(props) {
  const { exhibitsApiRoot } = props;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [exhibits, setExhibits] = useState([]);
  const [timelines, setTimelines] = useState(
    Object.fromEntries(
      mockStations.map(s => [s.id, { sequence: [] }])
    ),
  );
  const [playing, setPlaying] = useState(false);
  const sequencer = useMemo(() => new Sequencer(), []);
  sequencer.events.on('play', () => { setPlaying(true); });
  sequencer.events.on('stop', () => { setPlaying(false); });

  function preview(stationId, exhibitId) {
    axios.get(`${exhibitsApiRoot}/${exhibitId}`)
      .then((response) => {
        ViewerConn.show(stationId, response.data);
      });
  };

  const exhibitsById = Object.fromEntries(exhibits.map(exhibit => [exhibit.id, exhibit]));

  useEffect(() => {
    setLoading(true);
    setError(null);
    axios.get(exhibitsApiRoot)
      .then((response) => {
        setExhibits(response.data.exhibits);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  const onDragEnd = useCallback((result) => {
    const { source, destination } = result;

    if (!destination) {
      // Moving something nowhere
      return;
    }

    if (source.droppableId === destination.droppableId
      && source.index === destination.index) {
      // Moving something in place
      return;
    }

    if (destination.droppableId === 'droppable-library-1') {
      // Moving to the library
      if (source.droppableId !== 'droppable-library-1') {
        const newSource = Array.from(timelines[source.droppableId].sequence);
        newSource.splice(source.index, 1);
        setTimelines(Object.assign({}, timelines,
          Object.fromEntries([
            [source.droppableId, { sequence: newSource }],
          ])));
      }
      // Ignore otherwise
    } else if (source.droppableId === 'droppable-library-1') {
      // Moving from library to a sequence
      const exhibitId = exhibitIdFromDraggableId(result.draggableId);
      preview(destination.droppableId, exhibitId);
      const newSequence = Array.from(timelines[destination.droppableId].sequence);
      const newTimelineId = Object.values(timelines).reduce((timelineMax, timeline) => Math.max(
        timelineMax,
        timeline.sequence.reduce((seqMax, item) => Math.max(seqMax, item.timelineId), 0)
      ), 0) + 1;
      newSequence.splice(destination.index, 0,
        Object.assign({}, exhibitsById[exhibitId], { timelineId: newTimelineId }));
      setTimelines(Object.assign({}, timelines,
        Object.fromEntries([[destination.droppableId, { sequence: newSequence }]])));

    } else if (source.droppableId === destination.droppableId) {
      // Reordering within a sequence
      const exhibitId = exhibitIdFromDraggableId(result.draggableId);
      const newSequence = Array.from(timelines[destination.droppableId].sequence);
      const movedItem = newSequence[source.index];
      newSequence.splice(source.index, 1);
      newSequence.splice(destination.index, 0, movedItem);
      setTimelines(Object.assign({}, timelines,
        Object.fromEntries([[destination.droppableId, { sequence: newSequence }]])));
      preview(destination.droppableId, exhibitId);
    } else {
      // Moving from one sequence to another
      const exhibitId = exhibitIdFromDraggableId(result.draggableId);
      const newSource = Array.from(timelines[source.droppableId].sequence);
      const newDestination = Array.from(timelines[destination.droppableId].sequence);
      const movedItem = newSource[source.index];
      newSource.splice(source.index, 1);
      newDestination.splice(destination.index, 0, movedItem);
      setTimelines(Object.assign({}, timelines,
        Object.fromEntries([
          [source.droppableId, { sequence: newSource }],
          [destination.droppableId, { sequence: newDestination }],
        ])));
      preview(destination.droppableId, exhibitId);
    }
  });

  const handlePlay = useCallback((options) => {
    if (sequencer.isPlaying) {
      sequencer.stop();
    } else {
      buildPlaylist(timelines, Object.assign({}, options, {
        exhibitsApiRoot,
      })).then((playlist) => {
        console.log('Playing', playlist);
        sequencer.play(playlist);
      });
    }
  }, [timelines, exhibitsApiRoot]);

  return (
    <div className="timeline-editor">
      <Loader loading={loading} error={error}>
        <DragDropContext onDragEnd={onDragEnd}>
          <ExhibitLibrary exhibits={exhibits} />
          <div className="station-scripts">
            { mockStations.map((station, i) => (
              <StationTimeline
                index={i}
                key={station.id}
                station={station}
                sequence={timelines[station.id].sequence}
              />
            ))}
          </div>
        </DragDropContext>
      </Loader>
      <DemoPlayer onPlay={handlePlay} playing={playing} />
    </div>
  );
}

TimelineEditor.propTypes = {
  exhibitsApiRoot: PropTypes.string.isRequired,
};
