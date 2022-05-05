document.getElementById("checkboxtodos").style.display='none';
document.getElementById("enviar").style.display='none';


function validarPatron(){
    let mensaje=document.getElementById("mensajePatron");
    let contra1=document.getElementById("contrasenia1").value;
    let contra2=document.getElementById("contrasenia2");
    if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(contra1)){
        mensaje.innerHTML="Contraseña válida";
        mensaje.style.color="green";
        contra2.disabled=false;
       } else {
        contra2.disabled=true;
        mensaje.innerHTML="Contraseña inválida";
        mensaje.style.color="red";

       }
}

function validarIgualdad(){
    let contra1=document.getElementById("contrasenia1").value;
    let contra2=document.getElementById("contrasenia2").value;
    if (contra1 !== contra2){
        document.getElementById("contrasenia2").style.borderColor = "red";
    }else{
        document.getElementById("contrasenia2").style.borderColor = "green";
    }
}

function mostrar(){
    document.getElementById("checkboxtodos").style.display = '';
}

function noMostrar(){
    document.getElementById("checkboxtodos").style.display = 'none';
}

function validarEmail(){
    let correo=document.getElementById("correo").value;
    let mensaje=document.getElementById("mensajeError");
    if (/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(correo)){
        mensaje.innerHTML="Correo válido";
        mensaje.style.color= "green";
        document.getElementById("enviar").style.display='';
       } else {
        document.getElementById("enviar").style.display='none';
        mensaje.innerHTML="INGRESE CORREO VÁLIDO";
        mensaje.style.color= "red";
       }
}

function trabajo(){
    let empresa=document.getElementById("empresa").value;
    alert("¿Es "+empresa.toUpperCase()+ " la empresa actual en la que labora?");
}