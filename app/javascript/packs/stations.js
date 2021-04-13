$('[data-station]').each((i, element) => {
  const stationID = $(element).attr('data-station');
  console.log("Station %s waiting", stationID);
  window.connectMediaChannel(stationID, (data) => {
    $(element).html(data);
  });
});