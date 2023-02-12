const autoRojo = document.getElementById("autoRojo")
const autoAzul = document.getElementById("autoAzul")
let pista = document.getElementById("pista")
let star = document.getElementById("volverEmpezar")

let acumuladorAzul = 0
let acumuladorRojo = 0

//keyup: Sirve para actualizar el valor del acumulador cuando el usuario deja de presionar una tecla en particular.

//ROJO_______________________________________________
window.addEventListener("keyup", function(info){
    let tecla = info.key
     if (tecla === "ArrowUp") {
        acumuladorRojo+= 100 
        autoRojo.style.marginLeft = (acumuladorRojo + "px")
    }
    //___________________

    if (autoRojo.clientWidth + acumuladorRojo >= pista.clientWidth) {
        window.alert(`Gano el auto rojo`)
        startOver()
        
    }    
})
//AZUL_______________________________________________
window.addEventListener("keyup", function(info){
    let tecla = info.key

     if (tecla === "ArrowRight") {
        acumuladorAzul+= 100 
        autoAzul.style.marginLeft = (acumuladorAzul + "px")
    }
    //_______________________________
    if (autoAzul.clientWidth + acumuladorAzul >= pista.clientWidth) {
        window.alert(`Gano el auto azul`)
        startOver()
    }

    
    
})

function startOver (){
    window.alert(`Gano el auto azul`)

    let h1 = document.createElement("h1")
    h1.textContent= "Fin de la carrera!!!"
    

    let boton = document.createElement("button")
    boton.setAttribute('onclick', 'location.reload()') //con setAttribute modificamos su contenido del elemento
    boton.textContent= "Volver a empezar!"            // y con location.reload() es para volver a cargar la pagina
    boton.classList.add("boton")
   

    star.append(h1, boton) 
}















//CON EVENTO KEYDOWN__________________________________________________________________________________
//key es el valor
//El evento KeyDown ocurre cuando el usuario presiona una tecla
//el parametro info seria la accion lo que uno hace 
//Cuando una función recibe un parámetro dicho parámetro funciona como si se tratara de una variable disponible para la función inicializada con el valor que se le pasa a la función.


// window.addEventListener("keydown", (e)=>{
// let tecla = e.key
// acumuladorRojo += 100
// if (tecla === "ArrowRight") {
//     autoRojo.style.transform = `translateX(${acumuladorRojo}px)` }

// if (autoRojo.clientWidth + acumuladorRojo >= pista.clientWidth) {
//     alert(`Gano el auto rojo`)
// }
// if (autoAzul.clientWidth + acumuladorAzul >= pista.clientWidth) {
//     alert(`Gano el auto azul`)
// }


// })

// ______________________________________________________________________________________________
// window.addEventListener("keydown", (e)=>{
//     let tecla = e.key
//     acumuladorAzul += 100
//     if (tecla === "ArrowRight") {
//         autoAzul.style.transform = `translateX(${acumuladorAzul}px)` }  

// if (autoRojo.clientWidth + acumuladorRojo >= pista.clientWidth) {
//     alert(`Gano el auto rojo`)
// }
// if (autoAzul.clientWidth + acumuladorAzul >= pista.clientWidth) {
//     alert(`Gano el auto azul`)
// } 
 
// })
//_____________________________________________________________________________________________