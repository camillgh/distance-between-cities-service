function on_search_button_click() {
  let cityOne = document.querySelector("#cityOne").value;
  let cityTwo = document.querySelector("#cityTwo").value;
  let errorElement = document.querySelector("#error");

  fetch(`/api/distance?cityOne=${cityOne}&cityTwo=${cityTwo}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Invalid city input");
      }
      return response.json();
    })
    .then((data) => {
      const distance_meters = data.distance;

      let message = document.querySelector("#message");
      message.innerHTML =
        "The distance is " + Number(distance_meters / 1000).toFixed(2) + "km";

      // Clear any previous error messages
      errorElement.textContent = "";
    })
    .catch((error) => {
      errorElement.textContent = error.message;
      let messageElement = document.querySelector("#message");
      messageElement.textContent = ""; // Clear the message element
    });
}
