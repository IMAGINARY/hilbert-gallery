$('form[data-form="send-message"]').on('submit', (ev) => {
  const $form = $(ev.target);
  const csrfToken = document.querySelector("[name='csrf-token']").content;
  const stationID = $form.find('[name="stationID"]').val();
  const message = $form.find('[name="message"]').val();

  fetch(`/stations/${stationID}/update`, {
    method: 'PATCH',
    body: JSON.stringify({
      message
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

  ev.preventDefault();
  return false;
});