import React from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import { exhibitIdToDraggableId } from './aux/draggable-id';
import ExhibitThumbnail from './exhibit-thumbnail';

export default function StationTimeline(props) {
  const { index, station, sequence } = props;

  const items = sequence.map((exhibit, i) => {
    const draggableId = exhibitIdToDraggableId('S', index, exhibit.id, exhibit.timelineId);
    return (
      <Draggable
        draggableId={draggableId}
        index={i}
        key={draggableId}
      >
        {(provided, snapshot) => (
          <div
            data-exhibit-id={exhibit.id}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <ExhibitThumbnail exhibit={exhibit} key={draggableId} />
          </div>
        )}
      </Draggable>
    );
  });

  return (
    <div className="station-timeline">
      <div className="station-script">
        <div className="sequence">
          <div className="stationName">{ station.name }</div>
          <Droppable droppableId={String(station.id)}>
            {(provided, snapshot) => (
              <div className="droppable-area" ref={provided.innerRef} {...provided.droppableProps}>
                { items }
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </div>
  );
}

StationTimeline.propTypes = {
  index: PropTypes.number.isRequired,
  station: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  sequence: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })),
};

StationTimeline.defaultProps = {
  sequence: [],
};
