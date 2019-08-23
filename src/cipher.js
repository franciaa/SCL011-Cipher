window.cipher = {
  encode: (text,number) => {

    let result = "";
    for (let index = 0; index < text.length; index++) {
      let codeAscii = text.charCodeAt(index);
      let offset = (codeAscii -65+number)%26+65;
      result += String.fromCharCode(offset);
    
    }
    return result
  },

  decode: (text,number) => {
    let result = "";
    for (let index = 0; index < text.length; index++) {
      let codeAscii = text.charCodeAt(index);
      let offset= (codeAscii -65-number)%26+65;
      result += String.fromCharCode(offset);
    
    }
    return result
  }
};
