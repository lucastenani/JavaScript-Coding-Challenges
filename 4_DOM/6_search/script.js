const searchButton = document.getElementById("search-button");
const gamesList = document.querySelector("ul");
const gamesListArray = Array.from(gamesList.children);

searchButton.addEventListener("click", function () {
  const searchValue = document
    .querySelector("#search-value")
    .value.toLowerCase();

  gamesListArray.forEach(function (e) {
    !e.textContent.toLowerCase().includes(searchValue)
      ? gamesList.removeChild(e)
      : "";
  });
});
