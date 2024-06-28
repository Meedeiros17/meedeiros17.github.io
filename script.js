const menuHeader = document.querySelector(".menuHeader");
const barra = document.querySelector('#barra');
const x = document.querySelector('.x');
const referencias = document.querySelector('.referencias')

function exibirMenuHeader() {
    menuHeader.style.display = 'flex';
    barra.style.display = 'none';
    referencias.style.display = 'none';
    x.style.display = 'block';
    menuHeader.classList.add('animaMenuHeader');
    menuHeader.classList.remove('escondeMenuHeader');
}

function escondeMenuHeader() {
    referencias.style.display = 'none';
    x.style.display = 'none';
    menuHeader.classList.remove('animaMenuHeader');
    menuHeader.classList.add('escondeMenuHeader');
    setTimeout(() => {
        menuHeader.style.display = 'none';
        barra.style.display = 'block';
    }, 400);
}


const img = document.getElementById("heroi");

img.addEventListener("mouseover", function () {
    img.classList.add("sobeImg");
});

img.addEventListener("animationend", function () {
    img.classList.remove("sobeImg");
});

const header = document.querySelector('header')

function adjustHeaderScale() {
    if (window.scrollY === 0) {
        header.style.scale = "1";
    } else {
        header.style.scale = "0.8";
    }
}

window.addEventListener('scroll', adjustHeaderScale);

document.addEventListener('DOMContentLoaded', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

function botaoReferencias() {
    // body.style.overflow = "hidden";
    header.style.scale = "0.5";
    referencias.style.display = 'block';
    x.style.display = 'none';
    menuHeader.classList.remove('animaMenuHeader');
    menuHeader.classList.add('escondeMenuHeader');
    setTimeout(() => {
        menuHeader.style.display = 'none';
        barra.style.display = 'block';
    }, 400);
}