function showDisplayPattern() {
  const limitNumber = parseInt(document.getElementById("limitNumber").value);
  const tableList = document.querySelector("#tableList ul");

  if (isNaN(limitNumber) || limitNumber < 0) {
    return alert("Enter a valid number");
  }
  tableList.innerHTML = "";

  for (let i = 1; i <= limitNumber; i++) {
    const li = document.createElement("li");
    let asterisk = "*";

    for (let e = 2; e <= i; e++) {
      asterisk += "*";
    }

    li.textContent = asterisk;
    tableList.appendChild(li);
  }
}
