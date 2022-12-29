import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import { exhibitIdToDraggableId } from './aux/draggable-id';
import ExhibitThumbnail from './exhibit-thumbnail';

export default function ExhibitLibrary(props) {
  const { exhibits } = props;
  const [filter, setFilter] = useState({});

  const tags = useMemo(() => {
    return Object.keys(exhibits.reduce((tags, exhibit) => Object.assign(
      tags,
      Object.fromEntries(exhibit.tags.map(t => [t, true]))
    ), {}), []).sort();
  }, [exhibits]);

  const handleChange = (ev) => {
    setFilter(Object.assign({}, filter, { tags: ev.target.value }));
  };

  const filteredExhibits = exhibits
    .filter(e => !filter.tags || e.tags.includes(filter.tags))
    .sort((a, b) => a.id - b.id);

  const items = filteredExhibits.map((exhibit, i) => {
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
            <ExhibitThumbnail exhibit={exhibit} key={draggableId} />
          </div>
        )}
      </Draggable>
    );
  });

  return (
    <div className="exhibit-library">
      <div className="exhibit-library-filters">
        <div className="form-inline">
          <label htmlFor="tag">Tag:</label>
          <select
            id="tag"
            className="custom-select custom-select-sm"
            onChange={handleChange}
            value={filter.tags}
            defaultValue=""
          >
            <option value="">---</option>
            {tags.map(t => <option value={t} key={t}>{t}</option>)}
          </select>
          <label htmlFor="tag">Year:</label>
          <select id="tag" className="custom-select custom-select-sm" disabled>
            <option>---</option>
          </select>
          <label htmlFor="country">Country:</label>
          <select id="country" className="custom-select custom-select-sm" disabled>
            <option>---</option>
          </select>
          <label htmlFor="location">Location:</label>
          <select id="location" className="custom-select custom-select-sm" disabled>
            <option>---</option>
          </select>
          <label htmlFor="type">Type:</label>
          <select id="type" className="custom-select custom-select-sm" disabled>
            <option>---</option>
          </select>
        </div>
      </div>
      <div className="exhibit-library-list">
        <Droppable droppableId="droppable-library-1" direction="horizontal">
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
