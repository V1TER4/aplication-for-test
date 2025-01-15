const faturamentoMensal = require('./dados.json'); // Supondo que os dados estejam em um arquivo JSON

function calcularFaturamento(faturamento) {
    let menor = Number.MAX_VALUE, maior = 0, soma = 0, diasComFaturamento = 0;

    faturamento.forEach(dia => {
        if (dia.valor > 0) {
            if (dia.valor < menor) menor = dia.valor;
            if (dia.valor > maior) maior = dia.valor;
            soma += dia.valor;
            diasComFaturamento++;
        }
    });

    const media = soma / diasComFaturamento;
    const diasAcimaDaMedia = faturamento.filter(dia => dia.valor > media).length;

    return { menor, maior, diasAcimaDaMedia };
}

const resultado = calcularFaturamento(faturamentoMensal);
console.log(`Menor valor: ${resultado.menor}`);
console.log(`Maior valor: ${resultado.maior}`);
console.log(`Dias acima da média: ${resultado.diasAcimaDaMedia}`);
