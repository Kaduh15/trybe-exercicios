const sum = require('./sum');

describe('1 - A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  it('1 - Teste se o retorno de sum(4, 5) é 9', () => {
    expect(9).toEqual(sum(4, 5));
  })
});