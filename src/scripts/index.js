function handleModal() {
    const buttons = document.querySelectorAll(".showMessage");
    const modalController = document.querySelector("#modalController");
  
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", () => {
        modalController.showModal();
      })
    }
    closeModal();
}
  
function closeModal() {
    const button = document.querySelector("#closeModal");
    const modalController = document.querySelector("#modalController");
  
    button.addEventListener("click", () => {
        modalController.close();
    });
  }
  
  handleModal(); 

