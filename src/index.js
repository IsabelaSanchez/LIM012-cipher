import cipher from './cipher.js';
console.log(cipher);

document.getElementById("cifradoPag").style.display="none";
document.getElementById("descifradoPag").style.display="none";

const botonCifrado = document.getElementById("btnCifrar")

botonCifrado.addEventListener("click",() =>{
  let valorMensaje= document.getElementById("textMensaje").value;
  let valorNumero=document.getElementById("inputNumero").value;
  console.log(valorMensaje);
  console.log(valorNumero);
  let mensajeCifrado=cipher.cifrado(valorMensaje,valorNumero);
  console.log(mensajeCifrado);

  document.getElementById("respuestaEscrita").innerHTML="En un lenguaje secreto, "+valorMensaje+" significa "+mensajeCifrado
});




const botonDescifrar=document.getElementById("btnDescifrar");

botonDescifrar.addEventListener("click",()=>{
  let valorMensaje2=document.getElementById("textMensaje2").value;
  let valorNumero2=document.getElementById("inputNumero2").value;
  let mensajeDescifrado=cipher.descifrado(valorMensaje2,valorNumero2);
  console.log(mensajeDescifrado)
  document.getElementById("respuestaEscrita2").innerHTML="Descifrado "+ valorMensaje2+", significa: "+ mensajeDescifrado

});


function aparecerPagCifrado(){
  document.getElementById("primeraPag").style.display = "none";
  document.getElementById("cifradoPag").style.display ="block";
}

const botonMostrarPC= document.getElementById("btn2P").addEventListener("click", aparecerPagCifrado);

function desaparecerPagCifrado(){
  document.getElementById("primeraPag").style.display="block";
  document.getElementById("cifradoPag").style.display ="none";
}

const botonVolver1= document.getElementById("btnVolver").addEventListener("click", desaparecerPagCifrado)

function aparecerPagDescifrado(){
  document.getElementById("primeraPag").style.display="none";
  document.getElementById("descifradoPag").style.display ="block";
}

const botonMostrarPD= document.getElementById("btn3P").addEventListener("click", aparecerPagDescifrado)

function desaparecerPagDescifrado(){
  document.getElementById("primeraPag").style.display="block";
  document.getElementById("descifradoPag").style.display ="none";
}

const botonVolver2= document.getElementById("btnVolver2").addEventListener("click",desaparecerPagDescifrado)