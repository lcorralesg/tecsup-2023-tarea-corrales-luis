function diasHastaNavidad() {
    var navidad = new Date(2023, 12, 25);
    var hoy = new Date();
    var diferencia = navidad.getTime() - hoy.getTime();
    var dias = Math.round(diferencia / (1000 * 60 * 60 * 24));
    return dias;
}
function edad(fechaNacimiento) {
    var hoy = new Date();
    var nacimiento = new Date(fechaNacimiento);
    var diferencia = hoy.getTime() - nacimiento.getTime();
    var edad = Math.trunc(diferencia / (1000 * 60 * 60 * 24 * 365));
    return edad;
}
function validarFormulario(formulario) {
    var errores = [];
    if (formulario.nombre === '' || formulario.nombre === undefined) {
        errores.push('El nombre es obligatorio');
    }
    if (formulario.apellido === '' || formulario.apellido === undefined) {
        errores.push('El apellido es obligatorio');
    }
    if (formulario.telefono !== undefined) {
        if (formulario.telefono.length !== 10) {
            errores.push('El telefono debe tener 10 digitos');
        }
        if (isNaN(formulario.telefono)) {
            errores.push('El telefono debe ser numerico');
        }
    }
    if (formulario.email !== undefined) {
        if (!formulario.email.includes('@')) {
            errores.push('El email debe contener un @');
        }
    }
    if (errores.length === 0) {
        return true;
    }
    return errores;
}

module.exports = {
    diasHastaNavidad: diasHastaNavidad,
    edad: edad,
    validarFormulario: validarFormulario
};