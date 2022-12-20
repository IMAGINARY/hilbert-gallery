function showError(text) {
  document.getElementById('errorLog').innerHTML = text;
}

$('hilbert-gallery-viewer').each((i, element) => {
  const stationID = $(element).attr('data-station');
  const viewer = element;
  try {
    console.log('Station %s waiting', stationID);
    window.connectMediaChannel(stationID, (data) => {
      const { action, args } = data;
      console.log('Station %s received %s', stationID, action, args);
      viewer.execute(action, args);
    });
  } catch (err) {
    showError(err.message);
  }
});
