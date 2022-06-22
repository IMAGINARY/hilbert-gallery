import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export default function DemoPlayer(props) {
  const { playing, onPlay } = props;

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

  return (
    <div className="demo-player">
      <div className="form-inline">
        <button type="button" className={classNames('play-stop', { playing })} onClick={handleClick} />
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
      </div>
    </div>
  );
}

DemoPlayer.propTypes = {
  playing: PropTypes.bool,
  onPlay: PropTypes.func,
};

DemoPlayer.defaultProps = {
  playing: false,
  onPlay: () => {},
};
