// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.
// Dica: use parâmetro rest .

function sum(...numbers) {
  return numbers.reduce((accSoma, number) => accSoma + number);
}

console.log(sum(1, 2));
