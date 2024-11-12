document.addEventListener("DOMContentLoaded", function() {
    // Seleciona cada input individualmente
    const inputConsumoEletrico = document.getElementById("consumo-eletrico");
    const inputConsumoGas = document.getElementById("consumo-gas");
    const inputConsumoGasolina = document.getElementById("consumo-gasolina");
    const inputConsumoAcool = document.getElementById("consumo-alcool");
    const inputConsumoDiesel = document.getElementById("consumo-diesel");
    const inputConsumoTrecho = document.getElementById("consumo-kms");

    // Seleciona o botão
    const botaoCalcular = document.querySelector(".botao-reduzir");
    const botaoRefazer = document.querySelector(".botao-refazer")

    // Função para capturar os dados dos inputs ao clicar no botão
    botaoCalcular.addEventListener("click", function() {
        // Captura os valores dos inputs e converte em gramas de CO2
        const valorConsumoEletrico = inputConsumoEletrico.value * 475;
        const valorConsumoGas = inputConsumoGas.value * 3000;
        const valorConsumoGasolina = inputConsumoGasolina.value * 2.359;
        const valorConsumoAlcool = inputConsumoAcool.value * 1512;
        const valorConsumoDiesel = inputConsumoDiesel.value * 2.685;
        const valorConsumoTrecho = inputConsumoTrecho.value * 150;
    
        // Soma dos dados nos Ids de consumo 
        const somaTotal = valorConsumoEletrico + valorConsumoGas + valorConsumoGasolina + valorConsumoAlcool + valorConsumoDiesel + valorConsumoTrecho;

        // Chama a função calcularArvores e obtém o número de árvores necessárias
        const numeroDeArvores = calcularArvores(somaTotal);
        const custoPorTonelada = 40; // R$ 40 por tonelada de CO2 (exemplo)
        const custoEmDinheiro = (somaTotal / 1000) * custoPorTonelada;
      
        // Mostra os dados no Id de consumo de CO2
        const elementoConsumoCO2 = document.getElementById("resultado-co2");
        elementoConsumoCO2.innerHTML = `Consumo CO2 (Em Kgs): ${somaTotal.toFixed(1)}KGs`;
        const elementoArvores = document.getElementById("resultado-arvores");
        elementoArvores.innerHTML = `Número de árvores necessárias: ${numeroDeArvores}`;
        const elementoCusto = document.getElementById("resultado-custo");
        elementoCusto.innerHTML = `Custo para compensar CO₂: R$ ${custoEmDinheiro.toFixed(1)}`;        
    });

    // Função para recarregar a página
    botaoRefazer.addEventListener("click", function() {
        location.reload();
        window.location.href = window.location.pathname + "?scrollToTop=true";
    });
});

// Função para calcular o número de árvores
function calcularArvores(somaTotal) {
    const absorcaoPorArvore = 22; // kg de CO2 absorvidos por árvore por ano
    const numeroDeArvores = Math.ceil(somaTotal / absorcaoPorArvore);
    return numeroDeArvores;
}