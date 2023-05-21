/**
 * Handles the search button click event.
 *
 *  - Retrieves the input values for city one and city two.
 *  - Performs an API request to find the lat. and long. coordinates of the cities
 *  - Calculates the distance between the cities using the haversine-distance library.
 *  - Displays the calculated distance in kilometers.
 *  - Displays an error message upon invalid inputs.
 */

function onSearchButtonClick() {
  const cityOne = document.querySelector("#cityOne").value;
  const cityTwo = document.querySelector("#cityTwo").value;
  const errorElement = document.querySelector("#error");

  fetch(`/api/distance?cityOne=${cityOne}&cityTwo=${cityTwo}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Invalid city input");
      }
      return response.json();
    })
    .then((data) => {
      const distanceMeters = data.distance;

      const message = document.querySelector("#message");
      message.innerHTML = `The distance is ${Number(
        distanceMeters / 1000
      ).toFixed(2)}km`;

      errorElement.textContent = ""; // Clear any previous error messages
    })
    .catch((error) => {
      errorElement.textContent = error.message;
      const messageElement = document.querySelector("#message");
      messageElement.textContent = ""; // Clear the message element
    });
}
