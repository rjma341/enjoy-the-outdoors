"use strict";
const mountainDrop = document.querySelector("#mountainDrop");
const mountainTitle = document.querySelector("#mountainTitle");
const mountainDescription = document.querySelector("#mountainDescription");
const mountainImage = document.querySelector("#mountainImage");
const mountainElevation = document.querySelector("#mountainElevation")

function loadMountains() {
  for (const mountain of mountainsArray) {
    let option = document.createElement("option");
    option.value = mountain.name;
    option.innerText = mountain.name;
    mountainDrop.appendChild(option);
  }
}
loadMountains();

function displayMountain() {
  let select = mountainDrop.value;
  for (const mountain of mountainsArray) {
    if (mountain.name == mountainDrop.value) {
      mountainTitle.innerText = mountain.name;
      mountainDescription.innerText = mountain.desc
      mountainImage.src = "images/" + mountain.img
      mountainElevation.innerText = "Elevation: " + mountain.elevation
    }
  }
}