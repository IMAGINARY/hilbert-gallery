import React, { useState, useCallback } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import ExhibitLibrary from './exhibit-library';
import StationTimeline from './station-timeline';
import mockExhibits from './mock-data-exhibits';
import mockStations from './mock-data-stations';
import { exhibitIdFromDraggableId } from './aux/draggable-id';

export default function TimelineEditor() {
  const [timelines, setTimelines] = useState(
    Object.fromEntries(
      mockStations.map(s => [s.id, { sequence: [] }])
    ),
  );

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

    if (result.source.droppableId === 'droppable-library-1') {
      // Moving from library to a sequence
      const exhibitId = exhibitIdFromDraggableId(result.draggableId);
      const newSequence = Array.from(timelines[destination.droppableId].sequence);
      const newTimelineId = Object.values(timelines).reduce((timelineMax, timeline) => Math.max(
        timelineMax,
        timeline.sequence.reduce((seqMax, item) => Math.max(seqMax, item.timelineId), 0)
      ), 0) + 1;
      newSequence.splice(destination.index, 0,
        { id: exhibitId, timelineId: newTimelineId });
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
      <DragDropContext onDragEnd={onDragEnd}>
        <ExhibitLibrary exhibits={mockExhibits} />
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
    </div>
  );
}
