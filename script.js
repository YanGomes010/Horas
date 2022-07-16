// Data completa

var Data = new Date();
var dia = Data.getDay();
var diaMes = Data.getDate();
var hora = Data.getHours();
var minuto = Data.getMinutes();
var mes = Data.getMonth();

// Elementos do html

var ElementHora = document.querySelector(".hora");
var TextoDATA = document.querySelector(".h2");
var divImg = document.querySelector(".imagens")

// Função que faz a mudança do tema do body, dependendo da hora da máquina do usuario

function carregar() {
    var BackGround = document.querySelector(".container");
    var img = document.querySelector(".img");

    if (hora >= 0 && hora <= 11) {
        BackGround.style.backgroundColor = "#a1ace4"
        img.src = "dia.jpg";
    } else {
        if (hora >= 12 && hora <= 17) {
            BackGround.style.backgroundColor = "#fff94a"
            img.src = "tarde.jpg";
        } else {
            BackGround.style.backgroundColor = "#2c127b"
            img.src = "noite.jpg";
        }
    }
}


// Transformando a variavel "dia" em string e formatando
switch (dia) {
    case 0:
        dia = "Domigo"
        break;
    case 1:
        dia = "Segunda"
        break;
    case 2:
        dia = "Terça"
        break;
    case 3:
        dia = "Quarta"
        break;
    case 4:
        dia = "Quinta"
        break;
    case 5:
        dia = "Sexta"
        break;
    case 6:
        dia = "Sabado"
        break;
    default:
        dia = console.log("ERROR")
        break;
}

// Transformando a variavel "mes" em string e formatando
switch (mes) {
    case 0:
        mes = "Janeiro"
        break;
    case 1:
        mes = "Fevereiro"
        break;
    case 2:
        mes = "Março"
        break;
    case 3:
        mes = "Abril"
        break;
    case 4:
        mes = "Maio"
        break;
    case 5:
        mes = "Junho"
        break;
    case 6:
        mes = "Julho"
        break;
    case 7:
        mes = "Agosto"
        break;
    case 8:
        mes = "Setembro"
        break;
    case 9:
        mes = "Outubro"
        break;
    case 10:
        mes = "Novembro"
        break;
    case 11:
        mes = "Dezembro"
        break;
    default:
        mes = "ERROR"
        break;
}


// Imprimindo tudo na tela depois de formatado
var ImprimirData = `${dia}, ${diaMes} de  ${mes}`;
TextoDATA.innerText = ImprimirData;
var imprimirHora = `${hora}:${minuto}`;
ElementHora.innerText = imprimirHora;