document.getElementById("insert-task").addEventListener("click", function () {
  const newTask = document.getElementById("new-task").value;
  const listTasks = document.getElementById("list-tasks");
  const li = document.createElement("li");

  li.textContent = newTask;
  listTasks.appendChild(li);
});
