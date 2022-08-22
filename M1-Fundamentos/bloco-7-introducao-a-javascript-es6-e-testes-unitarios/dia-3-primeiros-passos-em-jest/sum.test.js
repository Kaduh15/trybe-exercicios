const sum = require('./sum');

describe('1 - A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  it('1 - Teste se o retorno de sum(4, 5) é 9', () => {
    expect(9).toEqual(sum(4, 5));
  });
  it('2 - Teste se o retorno de sum(0, 0) é 0', () => {
    expect(0).toEqual(sum(0, 0))
  });
});