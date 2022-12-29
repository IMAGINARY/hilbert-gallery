import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import Loader from './loader';
import ExhibitLibrary from './exhibit-library';
import StationTimeline from './station-timeline';
import TimelineControlBar from './timeline-control-bar';
import SequencerConn from './sequencer-conn';
import buildPlaylist from './playlist-builder';
import { exhibitIdFromDraggableId } from './aux/draggable-id';
import {
  fetchExhibits, fetchExhibit, fetchStations, fetchTimeline,
  updateTimeline,
} from './hilbert-gallery-api';
import {
  timelineMoveItem,
  timelineSeq,
  timelineSeqInsertItem,
  timelineSeqMoveItem,
  timelineSeqRemoveItem,
} from './timeline-actions';
import ThrottledSaver from './throttled-saver';

export default function TimelineEditor(props) {
  const {
    timelineId, exhibitsApiRoot, stationsApiRoot, timelinesApiRoot,
  } = props;

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [stations, setStations] = useState([]);
  const [timeline, setTimeline] = useState(null);
  const [exhibits, setExhibits] = useState([]);
  const [playing, setPlaying] = useState(false);

  const sequencer = useMemo(() => {
    const connector = new SequencerConn();
    connector.events.on('start', () => { setPlaying(true); });
    connector.events.on('stop', () => { setPlaying(false); });
    return connector;
  }, []);

  const preview = useCallback(async (stationId, exhibitId) => {
    const exhibit = await fetchExhibit(exhibitsApiRoot, exhibitId);
    sequencer.display(stationId, exhibit);
  }, []);

  const exhibitsById = useMemo(
    () => Object.fromEntries(exhibits.map(exhibit => [exhibit.id, exhibit])),
    [exhibits]
  );

  const throttledSaver = useMemo(
    () => {
      const saver = new ThrottledSaver(
        newTimeline => updateTimeline(timelinesApiRoot, newTimeline)
      );
      saver.events.on('saveStart', () => { setSaving(true); });
      saver.events.on('saveEnd', () => { setSaving(false); });
      return saver;
    },
    [timelinesApiRoot]
  );

  const handleTimelineUpdate = useCallback(async (updatedTimeline) => {
    setTimeline(updatedTimeline);
    throttledSaver.save(updatedTimeline);
  });

  window.testSave = async function () {
    console.log('Saving... ', timeline);
    await updateTimeline(timelinesApiRoot, timeline);
    console.log('Saved.');
  };

  // Initialization
  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(null);
      try {
        await sequencer.status();

        const fetchedStations = await fetchStations(stationsApiRoot);
        setStations(fetchedStations);

        const fetchedTimeline = await fetchTimeline(timelinesApiRoot, timelineId);
        setTimeline(fetchedTimeline);

        const fetchedExhibits = await fetchExhibits(exhibitsApiRoot);
        setExhibits(fetchedExhibits);

        setLoading(false);
      } catch (err) {
        setError(err.message);
      }
    })();
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
        handleTimelineUpdate(timelineSeqRemoveItem(timeline, source.droppableId, source.index));
      }
    } else if (source.droppableId === 'droppable-library-1') {
      // Moving from the library to a sequence
      const exhibitId = exhibitIdFromDraggableId(result.draggableId);
      const exhibit = exhibitsById[exhibitId];
      handleTimelineUpdate(
        timelineSeqInsertItem(timeline, destination.droppableId, destination.index, exhibit)
      );
      preview(destination.droppableId, exhibitId);
    } else if (source.droppableId === destination.droppableId) {
      // Reordering within a sequence
      const exhibitId = exhibitIdFromDraggableId(result.draggableId);
      handleTimelineUpdate(
        timelineSeqMoveItem(timeline, destination.droppableId, source.index, destination.index)
      );
      preview(destination.droppableId, exhibitId);
    } else {
      // Moving from one sequence to another
      const exhibitId = exhibitIdFromDraggableId(result.draggableId);
      handleTimelineUpdate(
        timelineMoveItem(timeline,
          source.droppableId, source.index,
          destination.droppableId, destination.index)
      );
      preview(destination.droppableId, exhibitId);
    }
  }, [timeline, exhibits]);

  const handlePlay = useCallback(async (options) => {
    if (sequencer.isPlaying) {
      await sequencer.stop();
    } else {
      buildPlaylist(timeline, Object.assign({}, options, {
        exhibitsApiRoot,
      })).then(async (playlist) => {
        await sequencer.start(playlist);
      });
    }
  }, [timeline, exhibitsApiRoot]);

  return (
    <div className="timeline-editor">
      <Loader loading={loading} error={error}>
        <DragDropContext onDragEnd={onDragEnd}>
          <ExhibitLibrary exhibits={exhibits} />
          <div className="station-scripts">
            { stations.map((station, i) => (
              <StationTimeline
                index={i}
                key={station.id}
                station={station}
                sequence={timelineSeq(timeline, station.id)}
              />
            ))}
          </div>
        </DragDropContext>
        <TimelineControlBar
          playing={playing}
          onPlay={handlePlay}
          timeline={timeline}
          onTimelineUpdate={handleTimelineUpdate}
          saving={saving}
        />
      </Loader>
    </div>
  );
}

TimelineEditor.propTypes = {
  timelineId: PropTypes.string.isRequired,
  exhibitsApiRoot: PropTypes.string.isRequired,
  stationsApiRoot: PropTypes.string.isRequired,
  timelinesApiRoot: PropTypes.string.isRequired,
};
