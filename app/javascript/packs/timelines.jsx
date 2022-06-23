import React from 'react'
import { createRoot } from 'react-dom/client';
import TimelineEditor from '../src/timeline-editor';

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('timelineEditorApp');
  const root = createRoot(element);
  root.render(<TimelineEditor exhibitsApiRoot={`${element.getAttribute('data-exhibits-api')}`} />);
});
