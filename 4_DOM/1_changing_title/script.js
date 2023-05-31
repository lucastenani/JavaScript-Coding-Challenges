function changeTitle() {
  const newTitle = document.getElementById("new-title").value;

  if (newTitle === "") {
    return alert("Title cannot be empty.");
  }

  document.getElementById("title-to-change").textContent = newTitle;
}
