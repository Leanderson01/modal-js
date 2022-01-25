// Evento de mostrar o modal quando apertar o botão
const button = document.querySelector("button");
const modalWrapper = document.querySelector(".modal-wrapper");

button.addEventListener("click", () => {
  modalWrapper.classList.toggle("invisible");
})
// terminei o evento de escutar o botão e mostrar o modal

// Evento de escutar a tecla e fechar o modal
const body = document.querySelector("body");

body.onkeyup = (e) => {
  if (e.code === "Escape"){
    modalWrapper.classList.toggle("invisible");
  }
}
// terminei o evento de escutar a tecla e tirar o modal