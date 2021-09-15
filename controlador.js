let calcular=document.getElementById("calcular");
let siguiente=document.getElementById("siguiente");

calcular.addEventListener("click",verificarRespuesta);
siguiente.addEventListener("click",cambiarDatos);

function verificarRespuesta(){
    

    let numero1=document.getElementById("numero1").value;
    let numero2=document.getElementById("numero2").value;
    let resultado=document.getElementById("resultado").value;
    let gift=document.getElementById("gift");
    

    let calcularResultado= Number(numero1)+Number(numero2);
    
   

    
    
    if(resultado==calcularResultado){

        
        gift.classList.remove("invisible");
        gift.src="https://giphy.com/embed/3oEjHV0z8S7WM4MwnK";

    }else{
        
        gift.classList.remove("invisible");
        gift.src="https://giphy.com/embed/11NQsJmv6mJzag";

    }

    

}

function cambiarDatos(){
    gift.classList.remove("visible");
    numero1.value=getRandomInt(1,10);
    numero2.value=getRandomInt(1,10);
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      
     
}

