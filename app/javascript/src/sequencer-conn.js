import EventEmitter from 'events';
import axios from 'axios';

export default class SequencerConn {
  constructor() {
    this.isPlaying = undefined;
    this.events = new EventEmitter();
  }

  static async get(url) {
    const csrfToken = $("[name='csrf-token']").attr('content');

    return axios.get(url, {}, {
      headers: {
        'X-CSRF-Token': csrfToken,
        'Content-Type': 'application/json',
      },
    });
  }

  static async post(url, data = null) {
    const csrfToken = $("[name='csrf-token']").attr('content');

    return axios.post(url, data, {
      headers: {
        'X-CSRF-Token': csrfToken,
        'Content-Type': 'application/json',
      },
    });
  }

  readResponse(response) {
    const { data } = response;
    if (data.isPlaying !== this.isPlaying) {
      this.isPlaying = data.isPlaying;
      if (this.isPlaying) {
        this.events.emit('start');
      } else {
        this.events.emit('stop');
      }
    }

    return response;
  }

  async status() {
    return this.readResponse(await SequencerConn.get('/api/v1/sequencer/status'));
  }

  async stop() {
    return this.readResponse(await SequencerConn.post('/api/v1/sequencer/stop'));
  }

  async start(timelineId) {
    return this.readResponse(await SequencerConn.post(`/api/v1/sequencer/start/${timelineId}`));
  }

  async display(stationId, exhibit) {
    const message = {
      action: 'show',
      args: {
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
      },
    };

    return this.readResponse(await SequencerConn.post(`/api/v1/sequencer/display/${stationId}/update`, JSON.stringify(message)));
  }
}
