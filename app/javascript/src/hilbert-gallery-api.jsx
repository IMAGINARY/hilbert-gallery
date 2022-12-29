import axios from 'axios';

export async function fetchTimeline(timelinesApiRoot, timelineId) {
  const response = await axios.get(`${timelinesApiRoot}/${timelineId}`);
  const timeline = response.data;
  timeline.script = JSON.parse(timeline.script);
  return timeline;
}

export async function fetchExhibits(exhibitsApiRoot) {
  const response = await axios.get(exhibitsApiRoot);
  return response.data.exhibits;
}

export async function fetchExhibit(exhibitsApiRoot, exhibitId) {
  const response = await axios.get(`${exhibitsApiRoot}/${exhibitId}`);
  return response.data;
}

export async function fetchStations(stationsApiRoot) {
  const response = await axios.get(stationsApiRoot);
  return response.data.stations;
}

export async function updateTimeline(timelinesApiRoot, timeline) {
  const response = await axios.put(`${timelinesApiRoot}/${timeline.id}`, {
    id: timeline.id,
    title: timeline.title,
    script: JSON.stringify(timeline.script),
    revision: timeline.revision,
    client_version: timeline.client_version,
  });
  return response.data;
}
