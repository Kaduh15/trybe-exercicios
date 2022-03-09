let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0]
let menorPalavra = array[0]

for (let palavra of array) {
    if (palavra.length > maiorPalavra.length){
        maiorPalavra = palavra
    }
    if (palavra.length < menorPalavra.length){
        menorPalavra = palavra
    }
}

console.log(`A maior palava do arrey foi '${maiorPalavra}' com ${maiorPalavra.length} letras`)
console.log(`A manor palava do arrey foi '${menorPalavra}' com ${menorPalavra.length} letras`)
