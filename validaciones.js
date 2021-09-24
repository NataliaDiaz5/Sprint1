export function validar_nombreUsuario(string) {
    const ptr = new RegExp('^[A-Z0-9Ñ]+$', 'i');
    if (string.length < 3 || string.length > 9) {
        return false;
    } else if (!ptr.test(string)) {
        return false;
    } else {
        return true;
    }
}

export function validar_contrasena(string) {
    const ptr = new RegExp('^[A-Z0-9Ñ]+$', 'i');
    if (string.length < 6) {
        return false;
    } else if (!ptr.test(string)) {
        return false;
    } else {
        return true;
    }
}