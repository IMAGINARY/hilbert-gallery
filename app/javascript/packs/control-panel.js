let $selectedStation = null;

$('.station-stage .station').on('click', (ev) => {
  ev.preventDefault();

  if ($selectedStation) {
    $selectedStation.removeClass('selected');
  }
  $selectedStation = $(ev.target);
  $selectedStation.addClass('selected');
});

$('.image-library img').on('click', (ev) => {
  ev.preventDefault();

  if ($selectedStation) {
    const url = $(ev.target).attr('data-image');
    const stationID = $selectedStation.attr('data-station');
    const csrfToken = $("[name='csrf-token']").attr('content');

    fetch(`/stations/${stationID}/update`, {
      method: 'PATCH',
      body: JSON.stringify({
        message: url
      }),
      headers: {
        "X-CSRF-Token": csrfToken,
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then((result) => {
        console.log('Success:', result);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
});