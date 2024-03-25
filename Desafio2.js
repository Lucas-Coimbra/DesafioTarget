function verificaFibonacci(numero) {
    let anterior = 0;
    let atual = 1;
    let proximo = 0;

    if (numero === 0 || numero === 1) {
        console.log("O número informado pertence à sequência de Fibonacci.");
        return;
    }

    while (proximo <= numero) {
        proximo = anterior + atual;
        if (proximo === numero) {
            console.log("O número informado pertence à sequência de Fibonacci.");
            return;
        }
        anterior = atual;
        atual = proximo;
    }

    console.log("O número informado NÃO pertence à sequência de Fibonacci.");
}

verificaFibonacci(24);