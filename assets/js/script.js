window.addEventListener('load', function(){
let frase= "  Único, Inexplicável, Inesquecível !!";
let eFrase = document.querySelector('#frase');

let i = 0;


function digitar(){
    if (i < frase.length){
        eFrase.innerHTML += frase.charAt(i);
        i++;
        setTimeout(digitar, 150);
    }
}

digitar();

});

let zap = document.getElementById('zap');

