const accordions = document.getElementById("accordions");
let accordionOpened = null;

function openAccordion(event) {
  if (accordionOpened) {
    accordionOpened.classList.remove("opened");
  }
  accordionOpened = event.target.nextElementSibling;
  accordionOpened.classList.add("opened");
}

accordions.addEventListener("click", openAccordion);
