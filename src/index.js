import cipher from './cipher.js';


const botonCifrado = document.getElementById("btnCifrar")

botonCifrado.addEventListener("click",() =>{
  let valorMensaje= document.getElementById("textMensaje").value;
  let valorNumero=document.getElementById("inputNumero").value;
  let mensajeCifrado=cipher.encode(valorNumero,valorMensaje);
  console.log(mensajeCifrado);

  document.getElementById("respuestaEscrita").innerHTML="En un lenguaje secreto, "+valorMensaje+" significa "+mensajeCifrado
});




const botonDescifrar=document.getElementById("btnDescifrar");

botonDescifrar.addEventListener("click",()=>{
  let valorMensaje2=document.getElementById("textMensaje2").value;
  let valorNumero2=document.getElementById("inputNumero2").value;
  let mensajeDescifrado=cipher.decode(valorNumero2,valorMensaje2);
  console.log(mensajeDescifrado)
  document.getElementById("respuestaEscrita2").innerHTML="Descifrado "+ valorMensaje2+", significa: "+ mensajeDescifrado

});


function aparecerPagCifrado(){
  document.getElementById("primeraPag").classList.add("ocultar")
  document.getElementById("cifradoPag").classList.remove("ocultar")
}

const botonMostrarPC= document.getElementById("botonPagC");
botonMostrarPC.addEventListener("click", aparecerPagCifrado);

function desaparecerPagCifrado(){
  document.getElementById("primeraPag").classList.remove("ocultar")
  document.getElementById("cifradoPag").classList.add("ocultar")
}
const botonVolver1= document.getElementById("btnVolver");
botonVolver1.addEventListener("click", desaparecerPagCifrado);

function aparecerPagDescifrado(){
  document.getElementById("primeraPag").classList.add("ocultar")
  document.getElementById("descifradoPag").classList.remove("ocultar")
}
const botonMostrarPD= document.getElementById("botonPagD");
botonMostrarPD.addEventListener("click", aparecerPagDescifrado);

function desaparecerPagDescifrado(){
  document.getElementById("primeraPag").classList.remove("ocultar")
  document.getElementById("descifradoPag").classList.add("ocultar")
}
const botonVolver2= document.getElementById("btnVolver2");
botonVolver2.addEventListener("click",desaparecerPagDescifrado);

