let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let impar = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        impar++
    }
}

if (impar === 1) {
    console.log(`Existe ${impar} número impar`)
} else if (impar > 0) {
    console.log(`Existe ${impar} números impares`)
} else {
    console.log(`Não existe números impares`)
}
