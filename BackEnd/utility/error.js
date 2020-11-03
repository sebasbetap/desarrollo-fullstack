// Función crear error nuevo para gestión de errores
function err(message, code) {
    let e = new Error(message);

    if (code) {
        e.statusCode = code;
    }

    return e;

}

module.exports = err;