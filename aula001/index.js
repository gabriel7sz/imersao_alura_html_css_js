function convEuro() {
    let cotacao = parseFloat(document.getElementById('inputEntry').value);

    if(isNaN(cotacao) || cotacao <= 0) {
        alert('O valor inserido é inválido, tente novamente.')
        return;
    }

    const EUR = 6.151;
    let conv = cotacao * EUR;
    let stringFormat = conv.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    alert(`O valor informado, convertido a BRL é ${stringFormat}.`)
}

function convLibra() {
    let cotacao = parseFloat(document.getElementById('inputEntry').value);
    if(isNaN(cotacao) || cotacao <= 0) {
        alert('O valor inserido é inválido, tente novamente.');
        return;
    }

    const GBP = 7.358;
    let conv = cotacao * GBP;
    let stringFormat = conv.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    alert(`O valor informado, convertido a BRL é ${stringFormat}.`);
}

function convPesos() {
    let cotacao = parseFloat(document.getElementById('inputEntry').value);
    if(isNaN(cotacao) || cotacao <= 0) {
        alert('O valor inserido é inválido, tente novamente.');
        return;
    }

    const ARS = 0.005317;
    let conv = cotacao * ARS;
    let stgFormat = conv.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    alert(`O valor informado, convertido a BRL é ${stgFormat}.`);
}

function convBitcoin() {
    let cotacao = parseFloat(document.getElementById('inputEntry').value);
    if(isNaN(cotacao) || cotacao <= 0) {
        alert('O valor inserido é inválido, tente novamente.');
        return;
    }

    const BIT = 400000;
    conv = cotacao * BIT;
    let stgFormat = conv.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    alert(`O valor informado, convertido a BRL é ${stgFormat}.`);
}

function convCoroa() {
    let cotacao = parseFloat(document.getElementById('inputEntry').value);
    if(isNaN(cotacao) || cotacao <= 0) {
        alert('O valor inserido é inválido, tente novamente.');
        return;
    }

    const DKK = 0.8258;
    let conv = cotacao * DKK;
    let stgFormat = conv.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    alert(`O valor informado, convertido a BRL é ${stgFormat}.`);
}

function convRublo() {
    let cotacao = parseFloat(document.getElementById('inputEntry').value);
    if(isNaN(cotacao) || cotacao <= 0) {
        alert('O valor inserido é inválido, tente novamente.');
        return;
    }

    const RUB = 0.06737;
    let conv = cotacao * RUB;
    let stgFormat = conv.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
    alert(`O valor informado, convertido a BRL é ${stgFormat}.`);
}
