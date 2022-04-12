const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((as, nomeAtual) => {
    const nomeSplitado = nomeAtual.toLowerCase().split('');
    
    nomeSplitado.forEach(letra => {
      if (letra === 'a') {
        as += 1
      }
    });

    return as
  }, 0)
}

console.log(containsA());
