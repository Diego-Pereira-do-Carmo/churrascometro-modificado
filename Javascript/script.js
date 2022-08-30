// selecionando os imputs e a div resultado
let qtAdultos = document.getElementById("adulto");
let qtCriancas = document.getElementById("crianca");
let qtDuracao = document.getElementById("duracao");
let duracao = qtDuracao.value;
let resultado = document.getElementById("resultado");
// ________________________________________________________________________________________________________


// função para fazer os calculos da quantidade de carnes, bebidas, acompanhamentos e suprimentos
function calcular() {
    // selecionando o valor dos imputs
    let adulto = qtAdultos.value;
    let crianca = qtCriancas.value;
    let duracao = qtDuracao.value;
    // ________________________________________________________________________________________________________

    // fazendo a soma e a conversão dos mantimentos
    //                                Tipos de carnes
    let carneTT = (adulto * carnePP(duracao) + (crianca * carnePP(duracao) / 2)) / 1000;
    let linguicaTT = (adulto * linguicaPP(duracao) + (crianca * linguicaPP(duracao) / 2)) / 1000;
    let frangoTT = (adulto * frangoPP(duracao) + (crianca * frangoPP(duracao) / 2)) / 1000;

    //                                bebidas
    let cervejaTT = (adulto * cervejaPP(duracao)) / 355;
    cervejaTT = Math.ceil(cervejaTT);
    let bebidaTT = (adulto * bebidaPP(duracao) + (crianca * bebidaPP(duracao) / 2)) / 2000;
    bebidaTT = Math.ceil(bebidaTT);

    //                                Acompanhamentos
    // pao de alho e queijo coalho receberam a mesma proporção
    let paoEqueijoTT = (adulto * paoEqueijoPP(duracao) + (crianca * paoEqueijoPP(duracao) / 2));
    paoEqueijoTT = Math.ceil(paoEqueijoTT);
    let farofaTT = (adulto * farofaPP(duracao) + (crianca * farofaPP(duracao) / 2));
    farofaTT = Math.ceil(farofaTT);

    //                                suprimentos
    let descartaveisTT = (adulto * descartaveisPP(duracao) + (crianca * descartaveisPP(duracao)));
   
    // A proporção do carvão é calculada levando em consideração a quantidade de carne 
    function carvao() {
        return 1.5 * (carneTT + linguicaTT + frangoTT)
    }


    // adicionando os mantimentos na div "resultado" e colocando o botão para fazer o culculo do custo
    resultado.innerHTML = `<hr>`;
    resultado.innerHTML += `<h3>Carnes</h3>`;
    resultado.innerHTML += `<p>${carneTT} kg de Carne</p>`;
    resultado.innerHTML += `<p>${linguicaTT} kg de Linguiça</p>`;
    resultado.innerHTML += `<p>${frangoTT} kg de Frango</p>`;
    resultado.innerHTML += `<hr>`;
    resultado.innerHTML += `<h3>Bebidas</h3>`;
    resultado.innerHTML += `<p>${cervejaTT} Latas de Cerveja (355 ml)</p>`;
    resultado.innerHTML += `<p>${bebidaTT}  Refrigerante (2L)</p>`;
    resultado.innerHTML += `<hr>`;
    resultado.innerHTML += `<h3>Acompanhamentos</h3>`;
    resultado.innerHTML += `<p>${paoEqueijoTT} Pães de Alho (un)</p>`;
    // O mesmo parametro foi usado no pao de alho e no queijo coalho, pois as proporções são iguais
    resultado.innerHTML += `<p>${paoEqueijoTT} Queijo Coalho (un)</p>`;
    resultado.innerHTML += `<p>${farofaTT} Farofa (g)</p>`;
    resultado.innerHTML += `<hr>`;
    resultado.innerHTML += `<h3>Suprimentos</h3>`;
    resultado.innerHTML += `<p>${carvao()} Kg Carvão</p>`;
    resultado.innerHTML += `<p>${descartaveisTT} Descartáveis (un)<br>
    <small> Descartaveis = pratos, talheres, copos e guardanapos</p>`;
    custo.innerHTML = `<button onclick="custar()">Calcular o custo(R$)</button>`;
}
// __________________________________________________________________________________________________________________


// função para fazer o calculo do custo
function custar() {
    console.log("valor em reais");
}
//____________________________________________________________________________________________________________________


// conjunto de funções para determinar a quantidade de mantimentos por pessoas levando
//  em consideração a duração do churrasco
function carnePP(duracao) {
    if (duracao >= 6) {
        return 270
    } else {
        return 200
    }
}

function linguicaPP(duracao) {
    if (duracao >= 6) {
        return 240
    } else {
        return 180
    }
}

function frangoPP(duracao) {
    if (duracao >= 6) {
        return 200
    } else {
        return 120
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

// No caso do pão de alho e do queijo coalho as proporções por pessoas são iguais, então usarei a mesma função
// para os dois
function paoEqueijoPP(duracao) {
    if (duracao >= 6) {
        return 2
    } else {
        return 1
    }
}


function farofaPP(duracao) {
    if (duracao >= 6) {
        return 80
    } else {
        return 40
    }
}

function descartaveisPP(duracao) {
    if (duracao >= 6) {
        return 4
    } else {
        return 3
    }
}

// ____________________________________________________________________________________________________________________

