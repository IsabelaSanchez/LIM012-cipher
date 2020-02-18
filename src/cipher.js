const cipher = {}

cipher.cifrado = (men,num) =>{
    let offset = parseInt(num);
    let longitud=men.length;
    let respuesta='';
    for(let i= 0;i<longitud;i++){
      let codigoAsccii=men.charCodeAt(i);
      if(codigoAsccii === 32){
        respuesta+=" ";
      }
      else{
        let formula=(codigoAsccii-65+offset)%26+65;
        respuesta+=String.fromCharCode(formula);
      }
    }
  
    return respuesta;
  }
  cipher.descifrado = (mensaje,numero) =>{
    let desplazamiento=parseInt(numero);
    let longitud2=mensaje.length;
    let solucion='';
    for(let a=0;a<longitud2;a++){
      let cAscii=mensaje.charCodeAt(a);
      if(cAscii===32){
        solucion+='';
      }
      else{
        let formula2=(cAscii-90-desplazamiento)%26+90;
        solucion+=String.fromCharCode(formula2);
      }
    }
    return solucion;
  }
  export default cipher;