$('[data-station]').each((i, element) => {
  const stationID = $(element).attr('data-station');
  console.log("Station %s waiting", stationID);
  window.connectMediaChannel(stationID, (data) => {
    const img = new Image();
    $(img).on('load', () => {
      const $prevImage = $(element).find('.image');
      $prevImage.addClass('exiting');
      setTimeout(() => {
        $prevImage.remove();
      }, 2000);
      const $newImage = $('<div class="image"></div>')
        .css('background-image', `url("${data}")`)
        .appendTo(element);
      setTimeout(() => {
        $newImage.addClass('entering');
      }, 0);
    });
    $(img).attr('src', data);
  });
});