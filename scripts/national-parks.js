"use strict";

// populate table
function populateTable() {
 
  const selectedState = document.getElementById("stateFilter").value;
  const selectedType = document.getElementById("typeFilter").value;

  // tablebody in html
  const tableBody = document.getElementById("parksTable").getElementsByTagName("tbody")[0];
  tableBody.innerHTML = ""; // Clear existing rows

  // state and type function (copied this code structure and added my own definitions)
  const filteredParks = nationalParksArray.filter((park) => {
    const stateMatch = selectedState === "" || park.State === selectedState;
    const typeMatch = selectedType === "" || park.Type === selectedType;
    return stateMatch && typeMatch;
  });

  // table rows for when filtering
  filteredParks.forEach((park) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${park.LocationName}</td>
      <td>${park.Address}</td>
      <td>${park.City}</td>
      <td>${park.State}</td>
      <td>${park.ZipCode}</td>
      <td>${park.Phone}</td>
      <td>${park.Visit ? `<a href="${park.Visit}" target="_blank">Visit Site</a>` : "N/A"}</td>
    `;
    tableBody.appendChild(row);
  });
}

// state dropdown
function populateStateDropdown() {
  const stateFilter = document.getElementById("stateFilter");
  locationsArray.forEach((state) => {
    const option = document.createElement("option");
    option.value = state;
    option.textContent = state;
    stateFilter.appendChild(option);
  });
}

// type dropdown
function populateTypeDropdown() {
  const typeFilter = document.getElementById("typeFilter");
  parkTypesArray.forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    typeFilter.appendChild(option);
  });
}


populateStateDropdown();
populateTypeDropdown();
populateTable();

// even listeners
document.getElementById("stateFilter").addEventListener("change", populateTable);
document.getElementById("typeFilter").addEventListener("change", populateTable);
