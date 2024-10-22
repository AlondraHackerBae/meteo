function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let searchBarElement = document.querySelector("#search-form");
searchBarElement.addEventListener("submit", handleSearchSubmit);
