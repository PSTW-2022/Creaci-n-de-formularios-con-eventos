
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

/*Funcion para validar las contrasenas*/
function validarPassword(value){
  var p1 = document.getElementById("inputPassword").value;
  var p2 = document.getElementById("inputPassword2").value;
  /*Para ver que no tenga espacios en blanco*/
  var espacios = false;
  var cont = 0;
  
  while (!espacios && (cont < p1.length)) {
    if (p1.charAt(cont) == " ")
      espacios = true;
    cont++;
  }
     
  if (espacios) {
    alert ("La contraseña no puede contener espacios en blanco");
    
  }
  /*Que contenga algo el input*/
  if (p1.length == 0 || p2.length == 0) {
      alert("Los campos de la password no pueden quedar vacios");
      
    }
  /*Que ambas contrasenas sean iguales*/
    if (p1 != p2) {
      alert("Las passwords deben de coincidir");
      
    } else {
      alert("Todo esta correcto");
      return true; 
    }
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


  /*Funcion para los checkbox*/
  function mostrar() {
    element = document.getElementById("checkboxtodos");
    check = document.getElementById("flexRadioDefault1");
    if (check.checked) {
        element.style.display='block';
    }
    else {
        element.style.display='none';
    }
}
function noMostrar() {
  element = document.getElementById("checkboxtodos");
  check = document.getElementById("flexRadioDefault2");
  if (check.checked) {
      element.style.display='none';
  }
  else {
      element.style.display='block';
  }
}