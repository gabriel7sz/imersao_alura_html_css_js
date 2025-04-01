function converter () {
    
    let retorno = 0;
    alert('Você está prestes a converter de Reais para uma outra moeda.');
    qualMoeda = prompt("Para qual moeda você deseja converter? Euro - Libra - Pesos").toLowerCase();
    qualQuantidadeDeReal = parseFloat(prompt('Quanto a quantia você deseja converter?'));

    // Verifica se a quantidade é um número válido
    if(isNaN(qualQuantidadeDeReal) || qualQuantidadeDeReal >= 0) {
        alert('Por favor, insira uma quantidade válida em Reais.');
        return;
    }
    
    if (qualMoeda == 'euro') {
        retorno = 0.16 * qualQuantidadeDeReal;
        let valorFormatadoReal = parseFloat(qualQuantidadeDeReal).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        let valorFormatado = retorno.toLocaleString('de-DE', {style: 'currency', currency: 'EUR'});
        alert(`Convertendo a quantia de ${valorFormatadoReal} para Euro, obtem-se: ${valorFormatado} Euros.`);

    } else if (qualMoeda == 'libra') {
        retorno = 0.13 * qualQuantidadeDeReal;
        let valorFormatadoReal = parseFloat(qualQuantidadeDeReal).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        let valorFormatado = retorno.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
        alert(`Convertendo a quantia de ${valorFormatadoReal} para Libra, obtem-se: ${valorFormatado} Libras.`);

    } else if (qualMoeda == 'pesos') {
        retorno = 189.24 * qualQuantidadeDeReal;
        let valorFormatadoReal = parseFloat(qualQuantidadeDeReal).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
        let valorFormatado = retorno.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
        alert(`Convertendo a quantia de ${valorFormatadoReal} para Pesos Argentinos, obtem-se: ${valorFormatado} Pesos.`);

    } else {
        alert('Parece que por engano, você digitou a moeda para conversão de forma errada. Tente novamente!');
    }
}   
