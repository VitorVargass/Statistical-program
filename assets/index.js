function Load() {
    var texto = document.querySelector("#inputbig").value;
    var numerostexto = texto.split(",");
    var numbers = [];
    numerostexto.forEach(x => {
        var num = Number(x);
        if (!isNaN(num)) {
            numbers.push(num);
        }
    });
    Calc();
    Mediana(numbers);
    Variancia(numbers); 
    Desvio();
    CV();
    type();
}

function Calc() {
    var texto = document.querySelector("#inputbig").value;
    var numerostexto = texto.split(",");
    var numbers = [];
    numerostexto.forEach(x => {
        var num = Number(x);
        if (!isNaN(num)) {
            numbers.push(num);
        }
    });

    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    let media = total / numbers.length;
    document.querySelector("#media").value = media;
    return media;
}

function Mediana(numbers) {
    numbers.sort(function (a, b) {
        return a - b;
    });

    var mid = Math.floor(numbers.length / 2);
    var element1 = numbers[mid - 1];
    var element2 = numbers[mid];
    var mediana = (element1 + element2) / 2;
    document.querySelector("#mediana").value = mediana;
    return mediana;
}

function Variancia(numbers) {
    var media = Calc();
    const n = numbers.length;
    let soma = 0; 

    for (let i = 0; i < n ; i++) {
        soma += Math.pow(numbers[i] - media, 2);
    }
    var varianciaAmostral = soma / (n - 1);
    document.querySelector("#variancia").value = varianciaAmostral;
    return varianciaAmostral;
}
function Desvio() {
    var texto = document.querySelector("#inputbig").value;
    var numerostexto = texto.split(",");
    var numbers = [];
    numerostexto.forEach(x => {
        var num = Number(x);
        if (!isNaN(num)) {
            numbers.push(num);
        }
    });

    var varianciaAmostral = Variancia(numbers);
    var desvio = Math.sqrt(varianciaAmostral);
    document.querySelector("#desvio").value = desvio;
    return desvio;
}

function CV() {
    var cv = 0;
     cv = Desvio() / Calc() +"%";
     document.querySelector("#cv").value = cv;
     return cv;
}

function type() {
    let show = "";
    var cv = Desvio() / Calc();
    if (cv >= 0.3) {
        show = "Heterogeneo";
    } 
    if ( cv < 0.3 ) {
        show = "Homogeneo";
    }
document.querySelector("#type").value = show;
}