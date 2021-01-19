const assert = require('assert')
const { validarUsuario } = require('../src/js/modules/forms_validation')

describe('PRUEBAS DE VALIDACIÓN DE USUARIO:', function () {

  it('Devuelve un usuario correcto', () => {
    assert.strictEqual(validarUsuario('u123456E'), true);
  });

});
