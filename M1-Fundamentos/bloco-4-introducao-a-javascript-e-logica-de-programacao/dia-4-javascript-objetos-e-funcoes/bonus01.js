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