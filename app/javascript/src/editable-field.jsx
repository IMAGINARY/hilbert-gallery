import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * This react component implements a field that shows text
 * and can be edited by clicking on it.
 */
export default function EditableField(props) {
  const { id, value, onChange } = props;
  const [editing, setEditing] = React.useState(false);
  const [text, setText] = React.useState(value);

  const handleBlur = () => {
    setEditing(false);
    onChange(text);
  };

  const handleChange = (ev) => {
    setText(ev.target.value);
  };

  // Detect Enter key
  const handleKeyDown = (ev) => {
    // If it's enter, blur the field
    if (ev.key === 'Enter' || ev.keyCode === 13) {
      handleBlur();
    }
    // If it's esc, undo the input
    if (ev.key === 'Escape' || ev.keyCode === 27) {
      setText(value);
      setEditing(false);
    }
  };

  let content = null;
  if (editing) {
    content = (
      <input
        type="text"
        className="editable-field-input form-control"
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        autoFocus
      />
    );
  } else {
    content = (
      <span
        className="editable-field-label"
        onFocus={() => { setEditing(true); }}
        onClick={() => { setEditing(true); }}
        role="textbox"
        tabIndex="0"
      >
        {text}
      </span>
    );
  }

  return (
    <div id={id} className={classNames(['editable-field', { 'editable-field-editable': editing }])}>
      {content}
    </div>
  );
}

EditableField.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

EditableField.defaultProps = {
  id: null,
  value: '',
  onChange: () => {},
};
