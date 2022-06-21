import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { exhibitIdToDraggableId } from './aux/draggable-id';
import Loader from './loader';
import ExhibitThumbnail from './exhibit-thumbnail';

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
            <ExhibitThumbnail exhibit={exhibit} key={exhibit.id} />
          </div>
        )}
      </Draggable>
    );
  });

  return (
    <div className="exhibit-library">
      <Droppable isDropDisabled droppableId="droppable-library-1" direction="horizontal">
        {(provided, snapshot) => (
          <div
            className="exhibit-library-droppable"
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
