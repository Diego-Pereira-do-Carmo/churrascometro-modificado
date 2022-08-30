let qtAdultos = document.getElementById("adulto");
let qtCriancas = document.getElementById("crianca");
let qtDuracao = document.getElementById("duracao");
let duracao = qtDuracao.value;
let resultado = document.getElementById("resultado");


function calcular() {
    let adulto = qtAdultos.value;
    let crianca = qtCriancas.value;
    let duracao = qtDuracao.value;

    let carneTT = (adulto * carnePP(duracao) + (crianca * carnePP(duracao) / 2))/1000;
    // carneTT = Math.ceil(carneTT);
    let cervejaTT = (adulto * cervejaPP(duracao))/355;
    cervejaTT = Math.ceil(cervejaTT);
    let bebidaTT = (adulto * bebidaPP(duracao) + (crianca * bebidaPP(duracao) / 2))/2000;
    bebidaTT = Math.ceil(bebidaTT); 

    resultado.innerHTML = `<hr>`;
    resultado.innerHTML += `<h3>Carnes</h3>`;
    resultado.innerHTML += `<p>${carneTT} kg de Carne</p>`;
    resultado.innerHTML += `<hr>`;
    resultado.innerHTML += `<h3>Bebidas</h3>`;
    resultado.innerHTML += `<p>${cervejaTT} Latas de Cerveja (355 ml)</p>`;
    resultado.innerHTML += `<p>${bebidaTT} garrafas de Refrigerante (2L)</p>`;
    custo.innerHTML = `<button onclick="custar()">Calcular o custo(R$)</button>`;
}


function custar(){
    console.log("valor em reais");
}



function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    } else {
        return 400
    }
}


function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function bebidaPP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}



