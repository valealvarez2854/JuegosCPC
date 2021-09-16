let contador=0;

let calcular=document.getElementById("calcular");
let siguiente=document.getElementById("siguiente");
let puntuacion=document.getElementById("puntuacion");


calcular.addEventListener("click",verificarRespuesta);
siguiente.addEventListener("click",cambiarDatos);
puntuacion.addEventListener("click",mostrarPuntuacion);

function verificarRespuesta(){
    

    let numero1=document.getElementById("numero1").value;
    let numero2=document.getElementById("numero2").value;
    let resultado=document.getElementById("resultado").value;
    let gift=document.getElementById("gift");
    
    

    let calcularResultado= Number(numero1)+Number(numero2);
    
   

    
    
    if(resultado==calcularResultado){

        contador++;
         console.log(contador);
        gift.classList.remove("invisible");
        gift.classList.add("visible");
        gift.src="https://giphy.com/embed/3oEjHV0z8S7WM4MwnK";
        setTimeout(function(){
        gift.src="https://giphy.com/embed/3oEjHV0z8S7WM4MwnK";
        gift.classList.remove("visible");
        gift.classList.add("invisible");
        },5000)

    }else{
        gift.classList.remove("invisible");
        gift.classList.add("visible");
        gift.src="https://giphy.com/embed/11NQsJmv6mJzag";
        setTimeout(function(){
        gift.src="https://giphy.com/embed/11NQsJmv6mJzag";
        gift.classList.remove("visible");
        gift.classList.add("invisible");
        },5000)



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

function mostrarPuntuacion(){
    let trofeo=document.getElementById("trofeo");
    trofeo.classList.remove("invisible");
    trofeo.classList.add("visible");
    let titulo1=document.getElementById("buenas");
    titulo1.textContent=contador;
    let titulo2=document.getElementById("malas");
 

    setTimeout(function(){
        trofeo.classList.remove("visible");
    trofeo.classList.add("invisible");
    titulo1.textContent="";
    titulo2.textContent="";
 
    },9000)
}

