function inverterString(str) {
    let novaString = '';

    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }

    return novaString;
}

let stringInicial = "Lucas";
let stringInversa = inverterString(stringInicial);
console.log(stringInversa);
