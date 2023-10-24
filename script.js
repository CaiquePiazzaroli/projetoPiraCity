let planoDeFundo = document.querySelector(".cabecalho");
let listaImagens = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"];
let numAleatorioAnt = 0;
let numAleatorio = Math.floor(Math.random() * listaImagens.length);
const timer = setInterval(() => {
    planoDeFundo.style.backgroundImage = `url("assets/${listaImagens[numAleatorio]}")`;
    while(numAleatorio === numAleatorioAnt) {
        numAleatorio = Math.floor(Math.random() * listaImagens.length);
    }
    numAleatorioAnt = numAleatorio;
},"5000");