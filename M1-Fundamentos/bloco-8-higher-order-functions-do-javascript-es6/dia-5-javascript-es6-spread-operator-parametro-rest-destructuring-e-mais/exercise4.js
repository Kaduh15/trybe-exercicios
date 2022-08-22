// 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
// Dica: use object destructuring .

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

function filterPeople(people) {
  return people.reduce((accPerson, pessoa) => {
    const {bornIn} = pessoa;
    console.log(accPerson);
    console.log(pessoa);
    if (bornIn >= 1901 && bornIn <= 2000) {
      accPerson.push(pessoa)
    }
    return accPerson
  }, [])
}

console.log(filterPeople(people));
