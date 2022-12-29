import EventEmitter from 'events';

export default class ThrottledSaver {
  constructor(saveCallback, options) {
    this.saveCallback = saveCallback;
    this.pendingSave = null;
    this.options = Object.assign({}, {
      minDelay: 10000,
      maxDelay: 30000,
    }, options);

    this.events = new EventEmitter();
    this.beforeUnloadHandler = this.handleBeforeUnload.bind(this);
    this.minDelayTimer = null;
    this.maxDelayTimer = null;
  }

  save(data) {
    this.activateNavigationProtection();
    if (this.minDelayTimer !== null) {
      clearTimeout(this.minDelayTimer);
    }
    console.log('Min timer reset');
    this.minDelayTimer = setTimeout(this.saveNow.bind(this), this.options.minDelay);
    if (this.maxDelayTimer === null) {
      console.log('Max timer reset');
      this.maxDelayTimer = setTimeout(this.saveNow.bind(this), this.options.maxDelay);
    }

    this.pendingSave = () => new Promise((resolve) => {
      console.log('Actual save started');
      this.events.emit('saveStart');
      this.saveCallback(data).then(() => {
        this.disableNavigationProtection();
        this.pendingSave = null;
        this.events.emit('saveEnd');
        console.log('Actual save ended');
        resolve();
      });
    });
  }

  saveNow(data = null) {
    if (this.minDelayTimer !== null) {
      clearTimeout(this.minDelayTimer);
      this.minDelayTimer = null;
    }
    if (this.maxDelayTimer !== null) {
      clearTimeout(this.maxDelayTimer);
      this.maxDelayTimer = null;
    }
    if (data !== null) {
      this.save(data);
    }
    if (this.pendingSave === null) {
      return Promise.resolve();
    }
    return this.pendingSave();
  }

  activateNavigationProtection() {
    console.log('Nav disabled');
    window.addEventListener('beforeunload', this.beforeUnloadHandler);
  }

  disableNavigationProtection() {
    console.log('Nav enabled');
    window.removeEventListener('beforeunload', this.beforeUnloadHandler);
  }

  handleBeforeUnload(ev) {
    ev.preventDefault();
    this.saveNow();
    // eslint-disable-next-line no-param-reassign
    ev.returnValue = 'There are unsaved elements in this page. Are you sure you want to leave?';
    return ev.returnValue;
  }
}
