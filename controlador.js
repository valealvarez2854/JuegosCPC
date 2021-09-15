let calcular=document.getElementById("calcular");

calcular.addEventListener("click",verificarRespuesta);

function verificarRespuesta(){
    

    let numero1=document.getElementById("numero1").value;
    let numero2=document.getElementById("numero2").value;
    let resultado=document.getElementById("resultado").value;
    let gift=document.getElementById("gift");

    let calcularResultado= Number(numero1)+Number(numero2);
    
    if(resultado==calcularResultado){

        console.log("ok");
        gift.classList.remove("invisible");
        gift.src="https://giphy.com/embed/3o7abKhOpu0NwenH3O";

    }else{
        console.log("ojo");
        gift.classList.remove("invisible");
        gift.src="https://giphy.com/embed/xU9TT471DTGJq";

    }




}