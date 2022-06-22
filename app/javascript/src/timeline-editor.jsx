import React, { useState, useCallback, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import axios from 'axios';
import ExhibitLibrary from './exhibit-library';
import StationTimeline from './station-timeline';
import mockStations from './mock-data-stations';
import { exhibitIdFromDraggableId } from './aux/draggable-id';
import Loader from './loader';
import DemoPlayer from './demo-player';

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
      const newSequence = Array.from(timelines[destination.droppableId].sequence);
      const movedItem = newSequence[source.index];
      newSequence.splice(source.index, 1);
      newSequence.splice(destination.index, 0, movedItem);
      setTimelines(Object.assign({}, timelines,
        Object.fromEntries([[destination.droppableId, { sequence: newSequence }]])));
    } else {
      // Moving from one sequence to another
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
    }
  });

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
      <DemoPlayer onPlay={(data) => { console.log('play', data); }} />
    </div>
  );
}

TimelineEditor.propTypes = {
  exhibitsApiRoot: PropTypes.string.isRequired,
};
