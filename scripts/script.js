const botaoMenu = document.querySelector(".menuAbrir");
const menuNav = document.querySelector(".menuMobile");
const cabecalho = document.querySelector(".cabecalho");

botaoMenu.addEventListener('click', () => {
    menuNav.classList.toggle("ativo");
    cabecalho.classList.toggle("menuAberto");
});
