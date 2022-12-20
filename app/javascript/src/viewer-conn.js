import axios from 'axios';

function send(stationId, message) {
  const csrfToken = $("[name='csrf-token']").attr('content');

  console.log('sending', message);
  return axios.patch(`/stations/${stationId}/update`, {
    message,
  }, {
    headers: {
      'X-CSRF-Token': csrfToken,
      'Content-Type': 'application/json',
    },
  });
}

function clear(stationId) {
  console.log(`Clearing station ${stationId}`);
  send(stationId, {
    action: 'clear',
    args: {
      transition: { type: 'fade' },
    },
  });
}

function show(stationId, exhibit, userOptions = {}) {
  const defaultOptions = {
    fit: 'contain',
  };

  const options = Object.assign({}, defaultOptions, userOptions);

  send(stationId, {
    action: 'show',
    args: {
      mimetype: exhibit.file_type,
      url: exhibit.file_url,
      fit: options.fit,
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
    },
  });
}

function preload(stationId, playlist) {
  console.log('Preloading', playlist);
  send(stationId, {
    action: 'preload',
    args: playlist.map(item => ({
      mimetype: item.args.mimetype,
      url: item.args.url,
    })),
  });
}

export default {
  send,
  clear,
  preload,
  show,
};
