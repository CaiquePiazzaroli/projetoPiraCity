let planoDeFundo = document.querySelector(".cabecalho");
let listaImagens = ["1.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];
let linkMenuHamburguer = document.querySelectorAll(".lista__hamburguer__link");
let caixaCheckBox = document.querySelector("#caixa__checkbox");



let numAleatorioAnt = 0;
let numAleatorio = Math.floor(Math.random() * listaImagens.length);
const timer = setInterval(() => {
    planoDeFundo.style.backgroundImage = `url("assets/${listaImagens[numAleatorio]}")`;
    while(numAleatorio === numAleatorioAnt) {
        numAleatorio = Math.floor(Math.random() * listaImagens.length);
    }
    numAleatorioAnt = numAleatorio;
},"5000");


for(var i = 0; i < linkMenuHamburguer.length; i++){
    linkMenuHamburguer[i].addEventListener("click", () => {
        caixaCheckBox.checked = false;
    })
}