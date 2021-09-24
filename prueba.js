import * as datos from "./validaciones.js";

var usu = document.forms['formulario']['in_usuario'].value;
var vali = datos.validar_nombreUsuario(usu);
console.log(vali);
var contra = document.forms['formulario']['in_contrasena'].value;
var valid = datos.validar_contrasena(contra);
console.log(valid);