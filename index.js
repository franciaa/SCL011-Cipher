document.getElementById("button1").addEventListener("click", () => {
    document.getElementById("first-pag");
});

let reedy = document.getElementById("redy");
reedy.addEventListener("click", () => {
    let btnName = document.getElementById("myName").value;

    hello.innerHTML += `<p id="retuName">Hola ${btnName} para continuar sigue bajando y te encontraras con las instrucciones de cifrar,no olvides no compartir nada de informacion al exterior o seras expulsado. </p>`

});

document.getElementById("encode").addEventListener("click", () => {
    let text = document.getElementById("text1").value.toUpperCase();
    console.log(text);
    let number = parseInt(document.getElementById("numberCesar").value);
    console.log(number);

    document.getElementById("text2").innerHTML =cipher.encode(text,number);
  
})


document.getElementById("decode").addEventListener("click", () => {
    let text = document.getElementById("text1").value.toUpperCase();
    let number = parseInt(document.getElementById("numberCesar").value);


    document.getElementById("text2").innerHTML =cipher.decode(text,number);
  
});
const copi=document.getElementById("copy");

copi.addEventListener("click", () => {
let copy=document.getElementById("text2");
let select=document.createRange();
select.selectNodeContents(copy);
window.getSelection().addRange(select);
let res = document.execCommand('copy');
});