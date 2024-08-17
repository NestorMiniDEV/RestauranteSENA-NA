"use strict"

let $element = document.querySelectorAll(".element");

$element.forEach((element, i) =>    {
    $element[i].addEventListener("click", e =>  {
         document.querySelector(".subcont1").style.display = "none";
        document.querySelector(".subcont2").style.display = "none";
        document.querySelector(".subcont3").style.display = "none";
        document.querySelector(".subcont4").style.display = "none";
        document.querySelector(".subcont5").style.display = "none";       
        if(e.target.matches(".inicio")){
            document.querySelector(".subcont1").style.display = "inline";
        } else if(e.target.matches(".menu")){
            document.querySelector(".subcont2").style.display = "inline";
        } else if(e.target.matches(".mesas")){
            document.querySelector(".subcont3").style.display = "inline";
        } else if(e.target.matches(".nosotros")){
            document.querySelector(".subcont4").style.display = "inline";
        } else if(e.target.matches(".novedades")){
            document.querySelector(".subcont5").style.display = "inline";
        }
    })
})

let $carta = document.getElementById("carta");
let $corriente = document.getElementById("corriente");
let $especial = document.getElementById("especial");
let $bebida = document.getElementById("bebida");
let $catalogo = document.getElementById("catalogo");

$carta.addEventListener("click", e => {
    document.querySelector(".subcont1").style.display = "none";
    document.querySelector(".subcont2").style.display = "inline";
});

$corriente.addEventListener("click", e => {
    document.querySelector(".subcont1").style.display = "none";
    document.querySelector(".subcont2").style.display = "inline";
});

$especial.addEventListener("click", e => {
    document.querySelector(".subcont1").style.display = "none";
    document.querySelector(".subcont2").style.display = "inline";
});

$bebida.addEventListener("click", e => {
    document.querySelector(".subcont1").style.display = "none";
    document.querySelector(".subcont2").style.display = "inline";
});

$catalogo.addEventListener("click", e => {
    document.querySelector(".subcont1").style.display = "none";
    document.querySelector(".subcont2").style.display = "inline";
});

/*let $alimento = document.querySelectorAll(".alimento");

$alimento.forEach((element,i) => {
    $alimento[i].addEventListener("click", e =>{
        document.querySelector(".subcont1").style.display = "none";
        if(e.target.matches(".especial")){
            document.querySelector(".subcont2").style.display = "inline";
        }  else if(e.target.matches("#carta")){
            document.querySelector(".subcont2").style.display = "inline";
        }  else if(e.target.matches(".corriente")){
            document.querySelector(".subcont2").style.display = "inline";
        }  else if(e.target.matches(".bebida")){
            document.querySelector(".subcont2").style.display = "inline";
        }
    })
})*/
