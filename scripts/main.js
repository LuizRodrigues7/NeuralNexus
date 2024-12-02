var caixa1 = document.getElementById('box-1')
var caixa2 = document.getElementById('box-2')
var subt = document.getElementById('middle-subt')

function ShowImages(){
    if (caixa1.style.display = "none"){
        caixa1.style.display = "flex";
        caixa2.style.display = "flex";
        subt.style.display = "grid";
    }
}