

var figura =document.getElementById("figura");

function circulo(){
    figura.classList.toggle("circulo");
}
function rectangulo(){
    figura.classList.toggle("rectangulo");
}
function rombo(){
    figura.classList.toggle("rombo");
}
function imagen(){
    figura.classList.toggle("imagen");
}
function gif(){
    figura.classList.toggle("gif");
}
function triangulo(){
    figura.classList.toggle("triangulo");
}
function hoja(){
    figura.classList.toggle("hoja");
}
function pacman(){
    figura.classList.toggle("pacman");
}
function luna(){
    figura.classList.toggle("luna");
}
function huevo(){
    figura.classList.toggle("huevo");
}
function trapecio(){
    figura.classList.toggle("trapecio");
}
function movetop(){
    figura.classList.toggle("moveTop");
}
function moveleft(){
    figura.classList.toggle("moveleft");
}
function movebotton(){
    figura.classList.toggle("movebotton");
}
function moveright(){
    figura.classList.toggle("moveright");
}

function panelSuperior(){
    const panelSuperior = document.querySelector(".panel-superior");
    panelSuperior.classList.toggle("active")
}

function panelLateral(){
    const panel = document.querySelector(".panel-lateral");
    panel.classList.toggle("active");
}

function propuesta(){
    figura.classList.toggle("propuesta");
}
function cambiarcolor(){
    var section = document.getElementById("section");
    section.classList.toggle("cambiarcolor");
}
function imagenfondo(){
    var body = document.getElementById("body");
    body.classList.toggle("imagenfondo");
}