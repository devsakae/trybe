const uppercase = require('./uppercase')

test('Testa a função Uppercase', (done) => {
  uppercase('rodrigo', (param) => {
    expect(param).toBe('RODRIGO');
    done();
  });
});
