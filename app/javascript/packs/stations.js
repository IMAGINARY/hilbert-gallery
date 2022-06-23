$('[data-station]').each((i, element) => {
  const stationID = $(element).attr('data-station');
  console.log('Station %s waiting', stationID);
  window.connectMediaChannel(stationID, (data) => {
    const viewer = document.getElementById('viewer');
    viewer.execute(data.action, data.args);
  });
});
