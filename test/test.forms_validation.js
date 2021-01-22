//Ver: https://github.com/classicoman2/tests-mochajs-ES6
//Comando: npm test
import assert from 'assert';
import {validarUsuario, validarContrasena, validarMail, validarTelefono} from '../src/js/modules/forms_validation.mjs';
//const { validarUsuario, validarContrasena, validarMail, validarTelefono } = import('./../src/js/modules/forms_validation.mjs');

describe('PRUEBAS DE VALIDACIÓN DE USUARIO:', function () {

  it('Devuelve un usuario correcto', () => {
    assert.strictEqual(validarUsuario('u123456E'), true);
  });

  //TODO tres reglas más

});

describe('PRUEBAS DE VALIDACIÓN DE CONTRASEÑA:', function () {

  it('Devuelve una contraseña correcta', () => {
    assert.strictEqual(validarContrasena('u123456E'), true);
  });

  //TODO CAMBIAR LA SUPERIOR +  tres reglas más

});

describe('PRUEBAS DE VALIDACIÓN DE EMAIL:', function () {

  it('Devuelve un e-mail correcto', () => {
    assert.strictEqual(validarMail('paTa43tA'), true);
  });

  //tres reglas más

});

describe('PRUEBAS DE VALIDACIÓN DE TELÉFONO:', function () {

  it('Devuelve un teléfono correcto', () => {
    assert.strictEqual(validarTelefono('696-012395'), true);
  });

  //tres reglas más

});
