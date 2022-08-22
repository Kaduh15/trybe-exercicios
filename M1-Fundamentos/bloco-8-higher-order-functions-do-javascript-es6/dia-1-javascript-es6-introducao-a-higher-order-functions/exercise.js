// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .

const hiredPerson = (nome, email) => {nomaCompleto: nome; email: email}

const newEmployees = (função) => {
  const função = função;
  const employees = {
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const countPoints = (elementOne, elementTwo) => {
  if (elementOne === elementTwo) {
    return 1
  } else if (elementOne === 'N.A' || elementTwo === 'N.A') {
    return 0
  } else {
    return -0.5
  }
}

const checkNote = (array1, array2, callback) => {
  if (array1.length !== array2.length) {
    return 'Dados inválidos'
  }
  let point = 0;
  const largerArray = array1.length
  for (let index = 0; index < largerArray; index += 1) {
    point += callback(array1[index], array2[index])
  }

  return point
}

console.log(checkNote(RIGHT_ANSWERS, STUDENT_ANSWERS, countPoints));
