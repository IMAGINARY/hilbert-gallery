import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import EditableField from './editable-field';
import { cloneTimeline } from './timeline-actions';

export default function TimelineControlBar(props) {
  const {
    playing, onPlay, timeline, onTimelineUpdate,
    saving,
  } = props;

  const handleClick = () => {
    onPlay();
  };

  const handleTitleChange = useCallback((title) => {
    const newTimeline = cloneTimeline(timeline);
    newTimeline.title = title;
    onTimelineUpdate(newTimeline);
  }, [timeline]);

  const handleDurationChange = useCallback((ev) => {
    const newTimeline = cloneTimeline(timeline);
    if (newTimeline.script.options === undefined) {
      newTimeline.script.options = {};
    }
    newTimeline.script.options.duration = ev.target.value;
    onTimelineUpdate(newTimeline);
  }, [timeline]);

  const handleTransitionChange = useCallback((ev) => {
    const newTimeline = cloneTimeline(timeline);
    if (newTimeline.script.options === undefined) {
      newTimeline.script.options = {};
    }
    newTimeline.script.options.transition = ev.target.value;
    onTimelineUpdate(newTimeline);
  }, [timeline]);

  const handleDelayChange = useCallback((ev) => {
    const newTimeline = cloneTimeline(timeline);
    if (newTimeline.script.options === undefined) {
      newTimeline.script.options = {};
    }
    newTimeline.script.options.delay = ev.target.value;
    onTimelineUpdate(newTimeline);
  }, [timeline]);

  const options = (timeline && timeline.script.options) || {};

  return (
    <div className="timeline-control-bar">
      <div className="form-inline">
        <button type="button" className={classNames('play-stop', { playing })} onClick={handleClick} />
        <EditableField id="title" value={(timeline && timeline.title) || ''} onChange={handleTitleChange} />
        <label htmlFor="duration">Duration:</label>
        <select id="duration" className="custom-select custom-select-sm" value={options.duration || '10'} onChange={handleDurationChange}>
          <option value="5">5s</option>
          <option value="7.5">7.5s</option>
          <option value="10">10s</option>
          <option value="15">15s</option>
          <option value="20">20s</option>
          <option value="30">30s</option>
        </select>
        <label htmlFor="transition">Transition:</label>
        <select id="transition" className="custom-select custom-select-sm" value={options.transition || 'crossfade'} onChange={handleTransitionChange}>
          <option value="none">None</option>
          <option value="fade">Fade (black)</option>
          <option value="fade-white">Fade (white)</option>
          <option value="crossfade">Crossfade</option>
          <option value="ken-burns">Ken Burns</option>
        </select>
        <label htmlFor="delay">Delay:</label>
        <select id="delay" className="custom-select custom-select-sm" value={options.delay || '0'} onChange={handleDelayChange}>
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
