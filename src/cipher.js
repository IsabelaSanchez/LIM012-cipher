const cipher = {}

cipher.encode = (offset,string) =>{
    let offset1 = parseInt(offset);
    let longitud=string.length;
    let respuesta='';
    for(let i= 0;i<longitud;i++){
      let codigoAsccii=string.charCodeAt(i);
      if(codigoAsccii === 32){
        respuesta+=" ";
      }
      else{
        let formula=(codigoAsccii-65+offset1)%26+65;
        respuesta+=String.fromCharCode(formula);
      }
    }
  
    return respuesta;
  }
  cipher.decode = (offset,string) =>{
    let desplazamiento=parseInt(offset);
    let longitud2=string.length;
    let solucion='';
    for(let a=0;a<longitud2;a++){
      let cAscii=string.charCodeAt(a);
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