import MiniViewer from '../src/mini-viewer';

function showError(text) {
  document.getElementById('errorLog').innerHTML = text;
}

$('[data-station]').each((i, element) => {
  const stationID = $(element).attr('data-station');
  const miniViewer = new MiniViewer($(element));
  try {
    console.log('Station %s waiting', stationID);
    window.connectMediaChannel(stationID, (data) => {
      if (data.action === 'preload') {
        miniViewer.preload(data.args);
      } else if (data.action === 'show') {
        miniViewer.show(data.args);
      } else if (data.action === 'clear') {
        miniViewer.clear();
      }
    });
  } catch (err) {
    showError(err.message);
  }
});
