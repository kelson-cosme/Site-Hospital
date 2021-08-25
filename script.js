let tamanhoTela = fotos.clientWidth;
console.log(tamanhoTela)

let mover = document.querySelector(".mudar")
let galeria = document.getElementById("galeria");
let a = 0;

function proximo(){

    
console.log(a)
    if(a <= -1000){
        a = -1000
    } else {
        a = a - 150;
        mover.style.transform = "translateX("+a+"px)"
        galeria.classList.add("mudar")
    }

}   

function anterior(){

    if(a >= 0){
        a =  a * 0;
        console.log(a)
    } else {
        a = a + 150;
        mover.style.transform = "translateX("+a+"px)"
        console.log(a)
    }
}

