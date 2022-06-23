import axios from 'axios';

function exhibitToPlaylistItem(exhibit, options) {
  return {
    mimetype: exhibit.file_type,
    url: exhibit.file_url,
    fit: 'contain',
    color: 'black',
    transition: {
      type: 'fade',
      options: {
        duration: 1,
        color: 'black',
      },
    },
    animation: {
      type: 'none',
      options: {},
    },
    duration: exhibit.is_video ? 20 : options.duration,
  };
}

export default function buildPlaylist(timelines, options) {
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
    })))
    .then(() => Object.fromEntries(
      Object.entries(timelines).map(([station, timeline]) => [
        station,
        timeline.sequence.map(item => ({
          action: 'show',
          args: exhibitToPlaylistItem(exhibits[item.id], options),
        })),
      ])
    ));
}
