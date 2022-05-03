
function verde (){
    document.getElementById("inputPassword").style.borderColor = "green";
}
function rojo (){
    document.getElementById("inputPassword").style.borderColor = "red";
}
function verde2 (){
    document.getElementById("inputPassword2").style.borderColor = "green";
}
function rojo2 (){
    document.getElementById("inputPassword2").style.borderColor = "red";
}

/*Funcion para validar email*/
var boton =  document.getElementById("boton1");
boton.style.display = "none";

function validarEmail (value){
	re=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,2})$/
	if(!re.exec(value)){
        /*boton.style.display = "none";*/
        alert('email no valido');
	}
	else
        /*boton.style.display = "block";*/
         alert('email valido');
	}