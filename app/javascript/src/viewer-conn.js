import axios from 'axios';

function show(stationId, exhibit, userOptions = {}) {
  const defaultOptions = {
    fit: 'contain',
  };

  const csrfToken = $("[name='csrf-token']").attr('content');
  const options = Object.assign({}, defaultOptions, userOptions);

  axios.patch(`/stations/${stationId}/update`, {
    message: {
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
    },
  }, {
    headers: {
      'X-CSRF-Token': csrfToken,
      'Content-Type': 'application/json',
    },
  });
}

export default {
  show,
};
