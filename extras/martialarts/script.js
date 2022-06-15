const linkElement = document.querySelector(".link");

linkElement.addEventListener("click", (e) => {
    linkElement.classList.replace("link", "selecionado");
});