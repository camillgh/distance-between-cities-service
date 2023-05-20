function fetchData(cityName) {
  fetch(`/api/city?name=${cityName}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

function on_search_button_click() {
  let cityOne = document.querySelector("#cityOne").value;
  let cityTwo = document.querySelector("#cityTwo").value;

  fetch(`/api/distance?cityOne=${cityOne}&cityTwo=${cityTwo}`)
    .then((response) => response.json())
    .then((data) => {
      const distance_meters = data.distance;

      let message = document.querySelector("#message");
      message.innerHTML =
        "The distance is " + Number(distance_meters / 1000).toFixed(2) + "km";
    })
    .catch((error) => {
      console.error(error);
    });
}
