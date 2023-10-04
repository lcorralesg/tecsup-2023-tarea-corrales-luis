var diasHastaNavidad = require('../source/lib/functions').diasHastaNavidad;
var edad = require('../source/lib/functions').edad;
var validarFormulario = require('../source/lib/functions').validarFormulario;

console.log('Días hasta navidad: ' + diasHastaNavidad());
console.log('Edad: ' + edad('2000-10-29'));

const formulario = {
    nombre: 'Juan',
    apellido: 'Perez',
    telefono: '1234567890',
    email: 'j.perez@gmail.com'
};

console.log(validarFormulario(formulario));