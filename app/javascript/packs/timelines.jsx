import React from 'react'
import { createRoot } from 'react-dom/client';
import PropTypes from 'prop-types';
import TimelineEditor from '../src/timeline-editor';

document.addEventListener('DOMContentLoaded', () => {
  const root = createRoot(document.getElementById('timelineEditorApp'));
  root.render(<TimelineEditor />);
});
