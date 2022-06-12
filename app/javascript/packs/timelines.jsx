import React from 'react'
import { createRoot } from 'react-dom/client';
import PropTypes from 'prop-types';

function TimelineEditor() {
  return <h1>This is the timeline editor</h1>
}

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('timelineEditor'));
  root.render(<TimelineEditor />);
});
