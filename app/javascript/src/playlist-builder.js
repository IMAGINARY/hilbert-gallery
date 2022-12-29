import axios from 'axios';

function exhibitToPlaylistItem(exhibit, options) {
  return {
    mimetype: exhibit.file_type,
    url: exhibit.file_url,
    fit: 'contain',
    color: 'black',
    transition: {
      type: 'cross-fade',
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

export default function buildPlaylist(timeline, options) {
  // Collect all exhibit IDs
  const seqIds = sequence => sequence
    .reduce((ids, item) => Object.assign(ids, { [item.id]: true }), {});

  const allIds = Object.keys(Object.values(timeline.script.sequences)
    .reduce((ids, seq) => Object.assign(ids, seqIds(seq.sequence)), {}));

  const exhibits = {};
  return Promise.all(allIds.map(id => axios.get(`${options.exhibitsApiRoot}/${id}`)
    .then((response) => {
      const exhibit = response.data;
      exhibits[exhibit.id] = exhibit;
    })))
    .then(() => Object.fromEntries(
      Object.entries(timeline.script.sequences).map(([station, statSeq]) => [
        station,
        statSeq.sequence.map(item => ({
          action: 'show',
          args: exhibitToPlaylistItem(exhibits[item.id], options),
        })),
      ])
    ));
}
