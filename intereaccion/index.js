let prueba = document.getElementById("inter");
let foorer = document.getElementById("footer");
let desplegar = document.getElementById("accionDesplegar");
let domDesaparecer = document.querySelector(".layaut-container");



console.log(domDesaparecer)



desplegar.addEventListener("click", accion);

function accion()
{

    if( desplegar.childNodes[5].getAttribute("id") === "remove")
    {
        desplegar.childNodes[5].removeAttribute("id");
        desplegar.childNodes[7].setAttribute("id" ,"remove");
        domDesaparecer.removeAttribute("id");
       
    }
    else
    {
        desplegar.childNodes[7].removeAttribute("id");
        desplegar.childNodes[5].setAttribute("id" ,"remove");
        domDesaparecer.setAttribute("id" ,"remove");
    }
   

}