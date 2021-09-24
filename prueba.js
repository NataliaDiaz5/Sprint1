import {validar_nombreUsuario} from "./validaciones.js";

var usu= document.forms['formulario']['in_usuario'].value;
var vali= validar.validar_nombreUsuario(usu);
console.log(vali);

var usu= document.forms['formulario']['in_contrasena'].value;
var vali= validar.validar_contrasena(usu);
console.log(vali);