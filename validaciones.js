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

function validar_contrasena(string) {
    const parrafo = document.getElementById("warning2")
    var alfanum = /^[0-9a-zA-Z]+$/;
    let warnings = "";
    let bandera = false;
    parrafo.innerHTML = ""
    if ((string.value.length < 6) || (!string.value.match(alfanum))){
      warnings += 'La contraseña no es válida';
      bandera = true;
    } else {
      return true;
    }
    if (bandera){
      parrafo.innerHTML = warnings
    }
    return false;
  }
  



// module.exports.validar_nombreUsuario=validar_nombreUsuario;
// module.exports.validar_contrasena = validar_contrasena;