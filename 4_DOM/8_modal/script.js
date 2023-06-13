const openModal = document.getElementById("open-modal");
const closeModal = document.getElementById("close-modal");
const modal = document.getElementById("modal");

openModal.addEventListener("click", () => {
  modal.classList.add("open");
});
closeModal.addEventListener("click", () => {
  modal.classList.remove("open");
});
