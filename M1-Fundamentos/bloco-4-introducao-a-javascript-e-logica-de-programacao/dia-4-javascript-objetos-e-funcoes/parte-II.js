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

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

let arrayNomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

console.log(`O Maior nome da lista é ${maiorNome(arrayNomes)}`);

function maiorNome(array) {
    let maiorNome = array[0];

    for (let value of array) {
        if (value.length > maiorNome.length) {
            maiorNome = value;
        }
    }
    return maiorNome;
}

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

let array3 = [2, 3, 2, 5, 8, 2, 3];

console.log('Número mais repetido no array foi o',numeroRepetido(array3))

function numeroRepetido(array) {

    let numeros = {}
    let numeroMaisRepitido = 0

    for (let value of array) {

        let cont = 0
        let continua = true

        // verifica se o numero já tem no meu objeto números
        for (let key in numeros) {

            if (key == value) {
                continua = false
            }

        }

        if (continua === true) {

            // conta quantas vezes o numero se repete
            for (let value1 of array) {

                // console.log(`valor 1: ${value1}`)
                // console.log(`valor: ${value}`)

                if (value1 === value) {
                    cont += 1
                }

                // console.log(`cont: ${cont}`)
                // console.log(`--------------------`)
            }
            numeros[value] = cont
        }
    }

    // verifica o maior número no valores do objeto numeros

    for (let key in numeros) {
        if (numeroMaisRepitido === 0) {
            numeroMaisRepitido = key
        } else if (numeros[key] > numeroMaisRepitido) {
            numeroMaisRepitido = key
        }
    }

    return numeroMaisRepitido

}

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

let numero = 5;
let soma = somaAteNumero(numero)

console.log(`A soma de todos os valores ate ${numero} é ${soma}`)

function somaAteNumero(numero) {
    let soma = 0
    for (let i = 0; i <= numero; i += 1){
        soma += i
    }

    return soma
}

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false


console.log(verificaFimPalavra('trybe', 'be'))

function verificaFimPalavra(stringWord, stringEnding) {

    let andStringWord = ''
    
    if (stringEnding.length >= stringWord.length) {
        return 'O stringEnding é igual ou maior que a stringWord'
    }

    // Pega a mesma quantidade de caractere da stringEnding
    for (let i = stringWord.length -1; i !== stringEnding.length; i -= 1){
        andStringWord += stringWord[i]
    }

    andStringWord = andStringWord.split('').reverse().join('')

    if (andStringWord.toLowerCase() === stringEnding.toLowerCase()) {
        return true
    } else {
        return false
    }
}
