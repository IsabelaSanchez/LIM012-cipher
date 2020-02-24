const cipher = {}

cipher.encode = (offset,string) =>{
  
    let offset1 = parseInt(offset);
    let longitud=string.length;
    let respuesta='';
    //if (string==''||string==0||offset==0||offset==''){
      //respuesta= throw new TypeError;
    //}

    for(let i= 0;i<longitud;i++){
      let codigoAsccii=string.charCodeAt(i);
      if(codigoAsccii === 32){
        respuesta+=" ";
      }
      else if(codigoAsccii>=65 && codigoAsccii<=90){
        let formula=(codigoAsccii-65+offset1)%26+65;
        respuesta+=String.fromCharCode(formula);
      }
      else if(codigoAsccii>=97 && codigoAsccii<=122){
        let formula=(codigoAsccii-97+offset1)%26+97;
        respuesta+=String.fromCharCode(formula);
      }
      else{
        respuesta+=String.fromCharCode(codigoAsccii);
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
      if(cAscii === 32){
        solucion+=" ";
      }
      else if(cAscii<=90 && cAscii>=65){
        let formula2=(cAscii-90-desplazamiento)%26+90;
        solucion+=String.fromCharCode(formula2);
      }
      else if(cAscii<=122 && cAscii>=97){
        let formula2=(cAscii-122-desplazamiento)%26+122;
        solucion+=String.fromCharCode(formula2);
      }
      else{
        solucion+=String.fromCharCode(cAscii)
      }
    }
    return solucion;
  }
  export default cipher;