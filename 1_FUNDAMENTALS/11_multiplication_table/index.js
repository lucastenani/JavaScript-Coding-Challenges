function showMultiplicationTable() {
  const tableNumber = parseInt(document.getElementById("tableNumber").value);
  const tableList = document.querySelector("#tableList ul");

  if (isNaN(tableNumber)) return alert("Enter a valid number");

  tableList.innerHTML = "";

  for (let i = 0; i <= 10; i++) {
    const multResult = tableNumber * i;
    const tableText = `${tableNumber} x ${i} = ${multResult}`;
    const li = document.createElement("li");

    li.textContent = tableText;
    tableList.appendChild(li);
  }
}
