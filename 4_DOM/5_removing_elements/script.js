const button = document.getElementById("removeElement");
const list = document.querySelector("ul");

button.addEventListener("click", function () {
  if (list.children.length === 0) {
    return alert("All items have already been removed");
  }

  list.removeChild(list.lastElementChild);
});
