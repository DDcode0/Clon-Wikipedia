let prueba = document.getElementById("inter");
let foorer = document.getElementById("footer");
let desplegar = document.getElementById("accionDesplegar");
let domDesaparecer = document.querySelectorAll(".layaut-container__1");



console.log(domDesaparecer)



desplegar.addEventListener("click", accion);

function accion()
{

    if( desplegar.childNodes[5].getAttribute("id") === "remove")
    {
        desplegar.childNodes[5].removeAttribute("id");
        desplegar.childNodes[7].setAttribute("id" ,"remove");
        for(let i in domDesaparecer)
        {
            domDesaparecer[i].removeAttribute("id");
        }
        
       
    }
    else
    {
        desplegar.childNodes[7].removeAttribute("id");
        desplegar.childNodes[5].setAttribute("id" ,"remove");

        for(let i in domDesaparecer)
        {
            domDesaparecer[i].setAttribute("id" ,"remove");
        }
        
    }
   

}





// let prueba = document.getElementById("inter");
// let foorer = document.getElementById("footer");
// let desplegar = document.getElementById("accionDesplegar");
// let domDesaparecer = document.querySelector(".layaut-container__1");



// console.log(domDesaparecer)



// desplegar.addEventListener("click", accion);

// function accion()
// {

//     if( desplegar.childNodes[5].getAttribute("id") === "remove")
//     {
//         desplegar.childNodes[5].removeAttribute("id");
//         desplegar.childNodes[7].setAttribute("id" ,"remove");
//         domDesaparecer.removeAttribute("id");
       
//     }
//     else
//     {
//         desplegar.childNodes[7].removeAttribute("id");
//         desplegar.childNodes[5].setAttribute("id" ,"remove");
//         domDesaparecer.setAttribute("id" ,"remove");
//     }
   

// }