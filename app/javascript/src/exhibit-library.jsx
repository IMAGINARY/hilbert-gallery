import React from 'react';
import PropTypes from 'prop-types';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { exhibitIdToDraggableId } from './aux/draggable-id';

export default function ExhibitLibrary(props) {
  const { exhibits } = props;

  const items = exhibits.map((exhibit, i) => {
    const draggableId = exhibitIdToDraggableId('L', 1, exhibit.id, 0);
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
            <div className="exhibit-thumbnail" key={i}>
              {exhibit.id}
            </div>
          </div>
        )}
      </Draggable>
    );
  });

  return (
    <div className="exhibit-library">
      <Droppable isDropDisabled droppableId="droppable-library-1">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            { items }
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}

ExhibitLibrary.propTypes = {
  exhibits: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
