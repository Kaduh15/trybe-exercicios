let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0

for (let i = 0; i < numbers.length; i++) {
    resultado += numbers[i]
}

let mediaAritimetica = resultado / numbers.length
console.log(mediaAritimetica)

if (mediaAritimetica > 20) {
    console.log('valor maior que 20')
} else {
    console.log('valor maior ou igual a 20')
}
