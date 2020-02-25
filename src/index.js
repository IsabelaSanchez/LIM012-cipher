import cipher from './cipher.js';


const botonCifrado = document.getElementById("btnCifrar")

botonCifrado.addEventListener("click",() =>{
  let valorMensaje= document.getElementById("textMensaje").value;
  let valorNumero=document.getElementById("inputNumero").value;
  let mensajeCifrado=cipher.encode(valorNumero,valorMensaje);
  document.getElementById("infoDeMensaje1").innerHTML="Copia este mensaje en la plataforma de la escuela:";
  document.getElementById("respuestaEscrita").innerHTML="FriendMe: "+mensajeCifrado+"/ Nivel de Seguridad: "+ valorNumero
  document.getElementById("infoDeMensaje1").classList.remove("ocultar");
  document.getElementById("respuestaEscrita").classList.remove("ocultar");
});




const botonDescifrar=document.getElementById("btnDescifrar");

botonDescifrar.addEventListener("click",()=>{
  let valorMensaje2=document.getElementById("textMensaje2").value;
  let valorNumero2=document.getElementById("inputNumero2").value;
  let mensajeDescifrado=cipher.decode(valorNumero2,valorMensaje2);
  document.getElementById("infoDeMensaje2").innerHTML="El mensaje descifrado:";
  document.getElementById("respuestaEscrita2").innerHTML="FriendMe: "+ mensajeDescifrado +"/ Nivel de Seguridad: "+ valorNumero2
  document.getElementById("infoDeMensaje2").classList.remove("ocultar");
  document.getElementById("respuestaEscrita2").classList.remove("ocultar");

});

const botonMostrarPC= document.getElementById("botonPagC");
botonMostrarPC.addEventListener("click",()=>{
  document.getElementById("primeraPag").classList.add("ocultar")
  document.getElementById("cifradoPag").classList.remove("ocultar")
});

const botonVolver1= document.getElementById("btnVolver");
botonVolver1.addEventListener("click",()=>{
document.getElementById("primeraPag").classList.remove("ocultar")
  document.getElementById("cifradoPag").classList.add("ocultar")
  document.getElementById("infoDeMensaje1").classList.add("ocultar");
  document.getElementById("respuestaEscrita").classList.add("ocultar");
  document.getElementById("textMensaje").value="";
  document.getElementById("inputNumero").value="";
});

const botonMostrarPD= document.getElementById("botonPagD");
botonMostrarPD.addEventListener("click",()=>{
  document.getElementById("primeraPag").classList.add("ocultar")
  document.getElementById("descifradoPag").classList.remove("ocultar")
})
const botonVolver2=document.getElementById("btnVolver2");
botonVolver2.addEventListener("click",()=>{
  document.getElementById("primeraPag").classList.remove("ocultar")
  document.getElementById("descifradoPag").classList.add("ocultar")
  document.getElementById("infoDeMensaje2").classList.add("ocultar");
  document.getElementById("respuestaEscrita2").classList.add("ocultar");
  document.getElementById("textMensaje2").value="";
  document.getElementById("inputNumero2").value="";
});

