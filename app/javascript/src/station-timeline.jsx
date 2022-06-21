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
      <div className="stationName">{ `Station ${index} `}</div>
      <Droppable droppableId={station.id}>
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            <div className="station-script">
              <div className="sequence">
                { items }
                {provided.placeholder}
              </div>
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
}

StationTimeline.propTypes = {
  index: PropTypes.number.isRequired,
  station: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  sequence: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })),
};

StationTimeline.defaultProps = {
  sequence: [],
};
