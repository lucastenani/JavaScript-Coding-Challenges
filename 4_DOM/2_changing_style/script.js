function changeStyle() {
  const elements = document.querySelectorAll("h1, h2, p, button");

  elements.forEach((e) => {
    e.style.color = "black";
  });
}
