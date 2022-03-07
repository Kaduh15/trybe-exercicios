const num1 = 7
const num2 = 9
const num3 = 1

let maior = num1

if (num2 > maior) {
    maior = num2
} else if (maior > num3){
    maior = num3
}

console.log(`O maior numero entre (${num1}, ${num2}, ${num3}) é o ${maior}`)
