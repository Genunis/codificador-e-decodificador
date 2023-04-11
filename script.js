var input =  document.querySelector('#codi');
var botaoCriptografar = document.getElementById('criptografar');
var botaoDescriptografar = document.getElementById('descriptografar');
var botaoCopiar = document.getElementById('copiar');
var exibindo = document.getElementById('exibir');
var criptografado = document.getElementById("criptografado");
var texto = document.getElementById('texto');

function bcriptar(){ 
    var inputexto = input.value.toLowerCase();
    let textoEncriptado = inputexto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");
    if (inputexto==""){
        exibindo.hidden=false;
        criptografado.hidden=true;
    }else{
        exibindo.hidden=true;
        criptografado.hidden=false; 
        texto.innerHTML=textoEncriptado;
    }
    

};
function bdescriptar(){ 
    var inputexto = input.value.toLowerCase();
    let textoEncriptado = inputexto
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");
    if (inputexto==""){
        exibindo.hidden=false;
        criptografado.hidden=true;
    }else{
        exibindo.hidden=true;
        criptografado.hidden=false; 
        texto.innerHTML=textoEncriptado;
    }
    

};
function copiar(){  
    navigator.clipboard.writeText(texto.innerHTML);
}

botaoDescriptografar.addEventListener('click',bdescriptar);
botaoCriptografar.addEventListener('click', bcriptar);
botaoCopiar.addEventListener("click", copiar);
