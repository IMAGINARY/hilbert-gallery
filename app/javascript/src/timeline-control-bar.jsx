import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import EditableField from './editable-field';
import { cloneTimeline } from './timeline-actions';

export default function TimelineControlBar(props) {
  const {
    playing, onPlay, timeline, onTimelineUpdate,
    saving,
  } = props;

  const [duration, setDuration] = useState('7.5');
  const [transition, setTransition] = useState('none');
  const [delay, setDelay] = useState('0');

  const handleClick = () => {
    onPlay({
      duration,
      transition,
      delay,
    });
  };

  const handleTitleChange = (title) => {
    const newTimeline = cloneTimeline(timeline);
    newTimeline.title = title;
    onTimelineUpdate(newTimeline);
  };

  return (
    <div className="timeline-control-bar">
      <div className="form-inline">
        <button type="button" className={classNames('play-stop', { playing })} onClick={handleClick} />
        <EditableField id="title" value={(timeline && timeline.title) || ''} onChange={handleTitleChange} />
        <label htmlFor="duration">Duration:</label>
        <select id="duration" className="custom-select custom-select-sm" value={duration} onChange={(ev) => { setDuration(ev.target.value); }}>
          <option value="5">5s</option>
          <option value="7.5">7.5s</option>
          <option value="10">10s</option>
          <option value="15">15s</option>
          <option value="20">20s</option>
          <option value="30">30s</option>
        </select>
        <label htmlFor="transition">Transition:</label>
        <select id="transition" className="custom-select custom-select-sm" value={transition} onChange={(ev) => { setTransition(ev.target.value); }}>
          <option value="none">None</option>
          <option value="crossfade">Crossfade</option>
          <option value="ken-burns">Ken Burns</option>
        </select>
        <label htmlFor="delay">Delay:</label>
        <select id="delay" className="custom-select custom-select-sm" value={delay} onChange={(ev) => { setDelay(ev.target.value); }}>
          <option value="0">None</option>
          <option value="1/n">1/n</option>
        </select>
        { saving && <div className="saving-icon" /> }
      </div>
    </div>
  );
}

TimelineControlBar.propTypes = {
  playing: PropTypes.bool,
  saving: PropTypes.bool,
  onPlay: PropTypes.func,
  timeline: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    script: PropTypes.object,
  }),
  onTimelineUpdate: PropTypes.func,
};

TimelineControlBar.defaultProps = {
  playing: false,
  saving: false,
  onPlay: () => {},
  timeline: null,
  onTimelineUpdate: () => {},
};
