import axios from 'axios';

function exhibitToPlaylistItem(exhibit, options) {

}

export default function buildPlaylist(timelines, options) {
  console.log('buildPlaylist', timelines, options);
  // Collect all exhibit IDs
  const seqIds = sequence => sequence
    .reduce((ids, item) => Object.assign(ids, { [item.id]: true }), {});
  // const allIDs =
  const allIds = Object.keys(Object.entries(timelines)
    .reduce((ids, [, timeline]) => Object.assign(ids, seqIds(timeline.sequence)), {}));

  const exhibits = {};
  return Promise.all(allIds.map(id => axios.get(`${options.exhibitsApiRoot}/${id}`)
    .then((response) => {
      const exhibit = response.data;
      exhibits[exhibit.id] = exhibit;
      console.log(`Fetched ${exhibit.id}`);
    })))
    .then(() => exhibits);
}
