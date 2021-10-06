//cons validar = requiere(./validaciones.js);
const nombre = document.getElementById("in_usuario")
const pass = document.getElementById("in_contrasena")
const form = document.getElementById("form_registro_usuario")

let res_filtro = [];
let registros =[];

function agregarRegistro(){
    let user_valid = valida.validar_nombreUsuario(nombre);
    let contra_valid= valida.validar_contrasena(pass);
    if (user_valid && contra_valid) {
        var usu_nuevo = document.getElementById("in_usuario").value
        var contra_nuevo = document.getElementById("in_contrasena").value
        var reg_nuevo = {usuario: usu_nuevo, contrasena: contra_nuevo};
        registros.push(reg_nuevo);
        console.log(registros)
        document.form_registro_usuario.reset();
        alert("Usuario registrado!")
        filtrarPorContrasena(registros, 10);
    }
console.log();
    
}

function filtrarPorContrasena(arreglo, filtro){

    let res_filtro = array.filter(p => p.contrasena.length <= filtro);
    console.log(res_filtro)
    return res_filtro;
}

