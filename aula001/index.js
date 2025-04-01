function converter () {
    retorno = 0;
    alert('Você está prestes a converter de R$Reais para uma outra moeda.');
    qualMoeda = prompt("Para qual moeda você deseja converter? Euro - Libra - Pesos");
    qualQuantidadeDeReal = prompt('Quanto a quantia você deseja converter?');

    if (qualMoeda == 'Euro' || qualMoeda == 'euro' || qualMoeda == 'EURO') {
        retorno = 0.16 * qualQuantidadeDeReal;
        alert(`Convertendo a quantia de R$${qualQuantidadeDeReal},00 para Euro, obtem-se: €${retorno} Euros.`);
    } else if (qualMoeda == 'Libra' || qualMoeda == 'libra' || qualMoeda == 'LIBRA') {
        retorno = 0.13 * qualQuantidadeDeReal;
        alert(`Convertendo a quantia de R$${qualQuantidadeDeReal},00 para Libra, obtem-se: £${retorno} Libras.`)
    } else if (qualMoeda == 'Pesos' || qualMoeda == 'PESOS' || qualMoeda == 'pesos') {
        retorno = 189.24 * qualQuantidadeDeReal;
        alert(`Convertendo a quantia de R$${qualQuantidadeDeReal},00 para Pesos Argentinos, obtem-se: $${retorno} Pesos.`)
    } else {
        alert('Parece que por engano, você digitou a moeda para conversão de forma errada. Tente novamente!')
    }
}
