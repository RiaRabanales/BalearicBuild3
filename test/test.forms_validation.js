//Ver: https://github.com/classicoman2/tests-mochajs-ES6
//Comando: npm test
import assert from 'assert';
import {validarUsuario, validarContrasena, validarMail, validarTelefono} from '../src/js/modules/forms_validation.mjs';

describe('PRUEBAS DE VALIDACIÓN DE USUARIO:', function () {

  it('Devuelve un usuario correcto', () => {
    assert.strictEqual(validarUsuario('u123456E'), 'VALIDATED');
    assert.strictEqual(validarUsuario('u336478M'), 'VALIDATED');
  });

  it('No comienza por u', () => {
    assert.strictEqual(validarUsuario('a453628T'), 'ERROR: el patrón de usuario no es válido.');
  });

  it('Exceso de mayúsculas al final', () => {
    assert.strictEqual(validarUsuario('u453628AT'), 'ERROR: el patrón de usuario no es válido.');
  });

  it('Cantidad incorrecta de números', () => {
    assert.strictEqual(validarUsuario('u12453628T'), 'ERROR: el patrón de usuario no es válido.');
    assert.strictEqual(validarUsuario('u33H'), 'ERROR: el patrón de usuario no es válido.');
  });

  it('Es un campo vacío', () => {
    assert.strictEqual(validarUsuario(''), 'ERROR: campo vacío.');
  });
});

describe('PRUEBAS DE VALIDACIÓN DE CONTRASEÑA:', function () {

  it('Devuelve una contraseña correcta', () => {
    assert.strictEqual(validarContrasena('paTa43tA'), 'VALIDATED');
    assert.strictEqual(validarContrasena('67holaYo01'), 'VALIDATED');
  });

  it('Incluye caracteres no admitidos', () => {
    assert.strictEqual(validarContrasena('$hoC0lat€'), 'ERROR: el patrón de contraseña no es válido.');
  });

  it('No tiene ninguna letra mayúscula', () => {
    assert.strictEqual(validarContrasena('azuquita22'), 'ERROR: el patrón de contraseña no es válido.');
  });

  it('Es un campo vacío', () => {
    assert.strictEqual(validarContrasena(''), 'ERROR: campo vacío.');
  });

});

describe('PRUEBAS DE VALIDACIÓN DE EMAIL:', function () {

  it('Devuelve un e-mail correcto', () => {
    assert.strictEqual(validarMail('patata@yupi.net'), 'VALIDATED');
  });

  it('No incluye @ o .', () => {
    assert.strictEqual(validarMail('patatagmail.com'), 'ERROR: formato de e-mail incorrecto.');
    assert.strictEqual(validarMail('patata@gmail,com'), 'ERROR: formato de e-mail incorrecto.');
  });

  it('Incluye demasiados @ o .', () => {
    assert.strictEqual(validarMail('maria@patata@gmail.com'), 'ERROR: formato de e-mail incorrecto.');
    assert.strictEqual(validarMail('maria.patata@gmail.com'), 'ERROR: formato de e-mail incorrecto.');
  });

  it('Incluye caracteres no válidos', () => {
    assert.strictEqual(validarMail('r$hdsia@hds€.com'), 'ERROR: formato de e-mail incorrecto.');
  });

  it('El dominio no tiene sólo letras minúsculas', () => {
    assert.strictEqual(validarMail('patatA@pATATA.es'), 'ERROR: formato de e-mail incorrecto.');
    assert.strictEqual(validarMail('patatA@gm4il.com'), 'ERROR: formato de e-mail incorrecto.');
  });

  it('La extensión es diferente de .es, .net o .com', () => {
    assert.strictEqual(validarMail('maria@mail.eu'), 'ERROR: formato de e-mail incorrecto.');
  });

  /* Posible test que en ese caso no necesito comprobar:
  it('Es un campo vacío', () => {
    assert.strictEqual(validarMail(''), 'ERROR: campo vacío.');
  });
  */

});

describe('PRUEBAS DE VALIDACIÓN DE TELÉFONO:', function () {

  it('Devuelve un teléfono correcto', () => {
    assert.strictEqual(validarTelefono('696-012395'), 'VALIDATED');
  });

  it('No sigue el formato establecido', () => {
    assert.strictEqual(validarTelefono('22-57-4443332'), 'ERROR: formato de teléfono incorrecto.');
    assert.strictEqual(validarTelefono('849473'), 'ERROR: formato de teléfono incorrecto.');
  });

  it('Tiene el formato correcto pero no comienza por 6 o 9', () => {
    assert.strictEqual(validarTelefono('444-333222'), 'ERROR: el teléfono debe comenzar por 6 o 9.');
  });

  /* Posible test que en ese caso no necesito comprobar:
  it('Es un campo vacío', () => {
    assert.strictEqual(validarTelefono(''), 'ERROR: campo vacío.');
  });
  */

});
