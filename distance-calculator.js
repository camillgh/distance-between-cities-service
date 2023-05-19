
function findDistance() {
    let cityOne = document.querySelector("#cityOne");
    let cityTwo = document.querySelector("#cityTwo");

    let distance = 14;

    displayDistance(distance);

}

function displayDistance(distance) {

    let message = document.querySelector("#message");
    message.innerHTML = "The distance is " + distance;    
}