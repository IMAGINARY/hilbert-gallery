import consumer from './consumer';

window.connectMediaChannel = function (stationID, callback) {
  consumer.subscriptions.create({
    channel: 'MediaChannel',
    category_id: stationID,
  }, {
    connected() {
      // Called when the subscription is ready for use on the server
      console.log('Subscription connected');
    },

    disconnected() {
      // Called when the subscription has been terminated by the server
      console.log('Subscription disonnected');
    },

    received(data) {
      // Called when there's incoming data on the websocket for this channel
      console.log('Subscription received');
      console.trace(data);
      callback(data);
    },

    update() {
      console.log('Subscription update called');
      return this.perform('update');
    },
  });
};
