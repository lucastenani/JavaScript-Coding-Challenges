const searchValue = document.getElementById("search-value");
const searchButton = document.getElementById("search-button");
const gamesList = document.querySelector("ul");
const gamesListArray = Array.from(gamesList.children);

searchButton.addEventListener("click", function () {
  gamesListArray.forEach(function (e) {
    !e.textContent.toLowerCase().includes(searchValue.value.toLowerCase())
      ? gamesList.removeChild(e)
      : "";
  });
});
