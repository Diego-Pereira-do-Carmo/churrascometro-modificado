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
    resultado.innerHTML += `<h3>Suprimentos</h3>`;
    resultado.innerHTML += `<p>${carvao()} Kg Carvão</p>`;
    resultado.innerHTML += `<p>${descartaveisTT} Descartáveis (un)<br>
    <small> Descartaveis = pratos, talheres, copos</small></p>`;
    resultado.innerHTML += `<button onclick="custar()">Custo (R$)</button>`;
}
// __________________________________________________________________________________________________________________


// função para fazer o calculo do custo
function custar() {
    let adulto = qtAdultos.value;
    let crianca = qtCriancas.value;
    let duracao = qtDuracao.value;
    
    let carneTT = (adulto * carnePP(duracao) + (crianca * carnePP(duracao) / 2)) / 1000;
    let linguicaTT = (adulto * linguicaPP(duracao) + (crianca * linguicaPP(duracao) / 2)) / 1000;
    let frangoTT = (adulto * frangoPP(duracao) + (crianca * frangoPP(duracao) / 2)) / 1000;
    let custoCarne = (carneTT * 20);
    custoCarne = Math.ceil(custoCarne);
    let custoLinguica = linguicaTT * 15;
    custoLinguica = Math.ceil(custoLinguica);
    let custoFrango = frangoTT * 12;
    custoFrango = Math.ceil(custoFrango);


    custo.innerHTML = `<input id="valorCarne" name="ValorCarne" type="number" placeholder="Preço por KG de Carne"></input>`;
    custo.innerHTML += `<input id="valorlinguica" name="valorlinguica" type="number" placeholder="Preço por KG de Linguiça"></input>`;
    custo.innerHTML += `<input id="valorFrango" name="valorFrango" type="number" placeholder="Preço por KG de Frango"></input>`;

    custo.innerHTML += `<input id="valorCerveja" name="valorCerveja" type="number" placeholder="Preço da Lata (355ml)"></input>`;
    custo.innerHTML += `<input id="valorRefrigerante" name="valorRefrigerante" type="number" placeholder="Preço da Garrafa (2L)"></input>`;

    custo.innerHTML += `<input id="valorCarvao" name="valorCarvao" type="number" placeholder="Preço por Kg de carvão"></input>`;
    custo.innerHTML += `<input id="valorDescartaveis" name="valorDescartaveis" type="number" placeholder="Preço dos Descartaveis (UN)"></input>
    <small>O preço incerido nos descartáveis será multiplicado por 3 (prato, copo e talheres)</small>`;
    
  
    custo.innerHTML += `<hr>`;
    custo.innerHTML += `<h3>Custo das Carnes</h3>`;
    custo.innerHTML += `<p>R$ ${custoCarne},00 de Carne</p>`;
    custo.innerHTML += `<p>R$ ${custoLinguica},00 de Linguiça</p>`;
    custo.innerHTML += `<p>R$ ${custoFrango},00 de Frango</p>`;
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

function descartaveisPP(duracao) {
    if (duracao >= 6) {
        return 4
    } else {
        return 3
    }
}

// ____________________________________________________________________________________________________________________

