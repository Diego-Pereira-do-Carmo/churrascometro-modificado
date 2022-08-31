// selecionando os imputs e a div quantidade
let qtAdultos = document.getElementById("adulto");
let qtCriancas = document.getElementById("crianca");
let qtDuracao = document.getElementById("duracao");
let duracao = qtDuracao.value;
let quantidade = document.getElementById("quantidade");
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


    // adicionando os mantimentos na div "quantidade" e colocando o botão para fazer o culculo do custo
    quantidade.innerHTML = `<hr>`;
    quantidade.innerHTML += `<h3>Carnes</h3>`;
    quantidade.innerHTML += `<p>${carneTT} kg de Carne</p>`;
    quantidade.innerHTML += `<p>${linguicaTT} kg de Linguiça</p>`;
    quantidade.innerHTML += `<p>${frangoTT} kg de Frango</p>`;
    quantidade.innerHTML += `<hr>`;
    quantidade.innerHTML += `<h3>Bebidas</h3>`;
    quantidade.innerHTML += `<p>${cervejaTT} Latas de Cerveja (355 ml)</p>`;
    quantidade.innerHTML += `<p>${bebidaTT}  Refrigerante (2L)</p>`;

    quantidade.innerHTML += `<hr>`;
    quantidade.innerHTML += `<h3>Suprimentos</h3>`;
    quantidade.innerHTML += `<p>${carvao()} Kg Carvão</p>`;
    quantidade.innerHTML += `<p>${descartaveisTT} Descartáveis (un)<br>
    <small> Descartaveis = pratos, talheres, copos</small></p>`;
    quantidade.innerHTML += `<button onclick="custar()">Custo (R$)</button>`;
}
// __________________________________________________________________________________________________________________


// função para fazer o calculo do custo
function custar() {
  
    // criando os inputs de custo

    //                                                        Tipos de Carnes
    custo.innerHTML = `<input id="valorCarne" name="ValorCarne" type="number" placeholder="Preço por KG de Carne" value=""></input>`;
    custo.innerHTML += `<input id="valorLinguica" name="valorLinguica" type="number" placeholder="Preço por KG de Linguiça"></input>`;
    custo.innerHTML += `<input id="valorFrango" name="valorFrango" type="number" placeholder="Preço por KG de Frango"></input>`;

    //                                                        Bebidas
    custo.innerHTML += `<input id="valorCerveja" name="valorCerveja" type="number" placeholder="Preço da Lata de Cerveja(355ml)"></input>`;
    custo.innerHTML += `<input id="valorRefrigerante" name="valorRefrigerante" type="number" placeholder="Preço da Garrafa (2L)"></input>`;

    //                                                        Suprimentos
    custo.innerHTML += `<input id="valorCarvao" name="valorCarvao" type="number" placeholder="Preço por Kg de carvão"></input>`;
    custo.innerHTML += `<input id="valorDescartaveis" name="valorDescartaveis" type="number" placeholder="Preço dos Descartaveis (UN)"></input>`;
    custo.innerHTML += `<button onclick="calculoTT()">Calcular (R$)</button>`;

}
//____________________________________________________________________________________________________________________

// adicionando os custos do churrasco na div resultado
function calculoTT() {
      // selecionando o valor dos inputs
      let adulto = qtAdultos.value;
      let crianca = qtCriancas.value;
      let duracao = qtDuracao.value;
  
      // fazendo a soma e a conversão dos mantimentos
      //                                Tipos de Carnes
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

    // selecionando os valores dos inputs de custo
    let valorCarne = document.getElementById("valorCarne").value;
    let valorLinguica = document.getElementById("valorLinguica").value;
    let valorFrango = document.getElementById("valorFrango").value;
    let valorCerveja = document.getElementById("valorCerveja").value;
    let valorRefrigerante = document.getElementById("valorRefrigerante").value;
    let valorCarvao = document.getElementById("valorCarvao").value;
    let valorDescartaveis = document.getElementById("valorDescartaveis").value;

    // calculando o custo total do churrasco
    let custoCarne = (carneTT * valorCarne);
    custoCarne = Math.ceil(custoCarne);
    let custoLinguica = linguicaTT * valorLinguica;
    custoLinguica = Math.ceil(custoLinguica);

    let custoFrango = frangoTT * valorFrango;
    custoFrango = Math.ceil(custoFrango);

    let custoCerveja = cervejaTT * valorCerveja;
    custoCerveja = Math.ceil(custoCerveja);

    let custoRefrigerante = bebidaTT * valorRefrigerante;
    custoRefrigerante = Math.ceil(custoRefrigerante);

    let custoCarvao = carvao() * valorCarvao;
    custoCarvao = Math.ceil(custoCarvao);

    let custoDescartaveis = descartaveisTT * valorDescartaveis;
    custoDescartaveis = Math.ceil(custoDescartaveis);

    let custoTT = custoCarne + custoLinguica + custoFrango + custoCerveja + custoRefrigerante + custoCarvao + (custoDescartaveis);
    custoTT = Math.ceil(custoTT);


    resultado.innerHTML = `<hr>`;
    resultado.innerHTML += `<h3>Custo das Carnes</h3>`;
    resultado.innerHTML += `<p>R$ ${custoCarne},00 de Carne</p>`;
    resultado.innerHTML += `<p>R$ ${custoLinguica},00 de Linguiça</p>`;
    resultado.innerHTML += `<p>R$ ${custoFrango},00 de Frango</p>`;
    resultado.innerHTML += `<hr>`;
    resultado.innerHTML += `<h3>Custo das Bebidas</h3>`;
    resultado.innerHTML += `<p>R$ ${custoCerveja},00 de Cerveja</p>`;
    resultado.innerHTML += `<p>R$ ${custoRefrigerante},00 de Refrigerante</p>`;
    resultado.innerHTML += `<hr>`;
    resultado.innerHTML += `<h3>Custo dos Suprimentos</h3>`;
    resultado.innerHTML += `<p>R$ ${custoCarvao},00 de Carvão</p>`;
    resultado.innerHTML += `<p>R$ ${custoDescartaveis},00 dos Descartáveis</p>`;
    resultado.innerHTML += `<hr>`;
    resultado.innerHTML += `<h3>Custo Total</h3>`;
    resultado.innerHTML += `<p>R$ ${custoTT},00 do Churrasco</p>`;
    resultado.innerHTML += `<button onclick="location.reload()">Nova Cotação</button>`;
}

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

