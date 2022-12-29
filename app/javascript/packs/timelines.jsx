import React from 'react';
import { createRoot } from 'react-dom/client';
import TimelineEditor from '../src/timeline-editor';

document.addEventListener('DOMContentLoaded', () => {
  const element = document.getElementById('timelineEditorApp');
  const root = createRoot(element);
  root.render(<TimelineEditor
    timelineId={element.getAttribute('data-timeline-id')}
    timelinesApiRoot={element.getAttribute('data-timelines-api')}
    stationsApiRoot={element.getAttribute('data-stations-api')}
    exhibitsApiRoot={element.getAttribute('data-exhibits-api')}
  />);
});
