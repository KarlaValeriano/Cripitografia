function check(){
    if(document.getElementById("codetipo").value==="cesar"){
        document.getElementById("decodificar").style.display="none"
        document.getElementById("codificar").style.display="inline"
    } else {document.getElementById("decodificar").style.display="inline" 
         document.getElementById("codificar").style.display="none"
}
}

function code(){
num=document.getElementById("number").value
var minusCulas = document.getElementById("texto").value.toLowerCase();
var alfabeto = 'abcdefghijklmnoprstuvwxyz'.split('')
var cesar = '';

for (var i=0; i<minusCulas.length; i++){
    var cifra =minusCulas[i];
    if (cifra === ' '){
        cesar += minusCulas[i]; 
        continue;
    }
    var minusculasindex = alfabeto.indexOf(cifra);
    var cesaRindex = minusculasindex + parseInt(num);
    if (cesaRindex > 25) cesaRindex = cesaRindex -26;
    if (cesaRindex < 0) cesaRindex = cesaRindex + 26;
    if (minusCulas[i] === minusCulas[i].toUpperCase()){
        cesar  += alfabeto[cesaRindex].toUpperCase();
        
    
    } else cesar += alfabeto [cesaRindex];
} document.getElementById("texto").value=cesar}

const inpt = document.querySelector("#inpt");
const btn = document.querySelector("#btn");
const btn2 = document.querySelector("#btn2");

const sub = document.querySelector("#subtitle");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  sub.innerHTML = btoa(inpt.value);
});

btn2.addEventListener("click", (e) => {
  e.preventDefault();

  sub.innerHTML = atob(inpt.value);
});