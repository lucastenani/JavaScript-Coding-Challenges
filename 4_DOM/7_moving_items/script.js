const gamesList = document.querySelector("ul");
let selectedItem = null;

function moveItem(direction) {
  if (!selectedItem) {
    return alert("Please select a game");
  }

  const gamesListArray = Array.from(gamesList.children);
  const index = gamesListArray.indexOf(selectedItem);

  if (direction === "go_up" && index > 0) {
    gamesList.insertBefore(selectedItem, gamesListArray[index - 1]);
  } else if (direction === "go_down" && index < gamesListArray.length - 1) {
    gamesList.insertBefore(selectedItem.nextElementSibling, selectedItem);
  }
}

function selectItem(event) {
  if (event.target.classList.contains("selected")) {
    selectedItem.classList.remove("selected");
    return (selectedItem = null);
  }

  if (selectedItem) {
    selectedItem.classList.remove("selected");
  }

  event.target.classList.add("selected");
  selectedItem = event.target;
}

gamesList.addEventListener("click", selectItem);
