const IMAGE_TYPES = ['image/jpeg', 'image/png'];
const VIDEO_TYPES = ['video/mp4'];
const TRANSITION_DURATION = 2000;

export default class MiniViewer {
  constructor($container) {
    this.$element = $('<div></div>')
      .addClass('mini-viewer')
      .appendTo($container);
    this.preloaded = null;
    this.media = null;
  }

  preload(items) {
    this.preloaded = items.map((item) => {
      if (IMAGE_TYPES.includes(item.mimetype)) {
        const img = new Image();
        img.src = item.url;
        return img;
      }
      if (VIDEO_TYPES.includes(item.mimetype)) {
        return $('<video></video>')
          .setAttribute('preload', 'auto')
          .setAttribute('src', item.url);
      }
      return null;
    });
  }

  show(item) {
    const oldMedia = this.media;
    if (IMAGE_TYPES.includes(item.mimetype)) {
      this.media = MiniViewer.createImageElement(item);
    }

    if (VIDEO_TYPES.includes(item.mimetype)) {
      this.media = MiniViewer.createVideoElement(item);
    }

    this.media.appendTo(this.$element);

    setTimeout(() => {
      this.media.addClass('entering');
      if (oldMedia) {
        oldMedia.addClass('exiting');
      }
    }, 0);

    setTimeout(() => {
      if (oldMedia) {
        oldMedia.remove();
      }
    }, TRANSITION_DURATION);
  }

  clear() {
    const oldMedia = this.media;
    if (oldMedia) {
      oldMedia.addClass('exiting');
      setTimeout(() => {
        oldMedia.remove();
      }, TRANSITION_DURATION);
    }
  }

  static createImageElement(item) {
    return $('<div></div>')
      .addClass('media')
      .css({
        backgroundImage: `url(${item.url})`,
      });
  }

  static createVideoElement(item) {
    return $('<video></video>')
      .addClass('media')
      .attr('preload', 'auto')
      .attr('autoplay', 'true')
      .attr('src', item.url);
  }
}
