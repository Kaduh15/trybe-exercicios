// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

let palavra = 'Arara'


console.log(verificaPalindrome(palavra))


function verificaPalindrome(palavra) {
    let palavraInvertida = palavra.split('').reverse().join('')
    if (palavra.toLowerCase() === palavraInvertida.toLowerCase()) {
        return true
    } else {
        return false
    }
}

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

let array = [2, 3, 6, 7, 10, 1];


console.log(maiorNumero(array))


function maiorNumero(array) {
    let maior = array[0]
    for (let value of array) {
        if (value > maior) {
            maior = value
        }
    }
    return array.indexOf(maior)
}

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

let array2 = [2, 4, 6, 7, 10, 0, -3];


console.log(maiorNumero(array2))


function maiorNumero(array) {
    let menor = array[0]
    for (let value of array) {
        if (value < menor) {
            menor = value
        }
    }
    return array.indexOf(menor)
}