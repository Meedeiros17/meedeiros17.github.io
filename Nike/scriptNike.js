
// Código feito pelo Chat GPT que o possui a finalidade de exibir o menu suspenso assim que o usuário passar o mouse por cima do .dropdown.

document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
        const dropdownMenu = dropdown.querySelector(".dropdown-menu");

        if (dropdownMenu) {
            dropdown.addEventListener("mouseenter", () => {
                dropdownMenu.classList.add("show");
            });

            dropdown.addEventListener("mouseleave", () => {
                dropdownMenu.classList.remove("show");
            });
        }
    });
});



//

const barraDePesquisa = document.getElementById("barraDePesquisa");

function mostraBarraDePesquisa() {
    barraDePesquisa.style.display = "block";
    document.body.style.width = "100vw";
}

function escondeBarraDePesquisa() {
    barraDePesquisa.style.display = "none";
}

const botaoDescer = document.querySelector('#botaoDescer')
const botaoSubir = document.querySelector('#botaoSubir')

botaoDescer.addEventListener('click', () => {
    window.scroll({ top: window.innerHeight, behavior: "smooth" })
})

botaoSubir.addEventListener('click', () => {
    window.scroll({ top: 0, behavior: "smooth" })
})

// Código feito pelo Chat GPT que possui a finalidade de que quando a página for carregada ela volta ao topo suavemente.

window.onload = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// 

const tenis = document.querySelector('.tenis');
const tenisImg1 = document.querySelector('#tenisImg1')
const tenisImg2 = document.querySelector('#tenisImg2')
const tenisImg3 = document.querySelector('#tenisImg3')
const tenisImg4 = document.querySelector('#tenisImg4')


function cor1() {
    tenis.classList.remove('azul', 'roxo', 'vermelho');
    tenis.classList.add('verde');
    tenisImg1.style.display = ('block');

    tenis.classList.add('tenisEscurece')
    setTimeout(function () { tenis.classList.remove('tenisEscurece'); }, 1000)

    tenisImg1.classList.remove('entradaTenisImg')
    tenisImg1.classList.remove('saidaTenisImg')
    tenisImg2.classList.remove('entradaTenisImg')
    tenisImg2.classList.remove('saidaTenisImg')
    tenisImg3.classList.remove('entradaTenisImg')
    tenisImg3.classList.remove('saidaTenisImg')
    tenisImg4.classList.remove('entradaTenisImg')
    tenisImg4.classList.remove('saidaTenisImg')

    tenisImg1.classList.add('entradaTenisImg')
    tenisImg2.classList.add('saidaTenisImg')
    tenisImg3.classList.add('saidaTenisImg')
    tenisImg4.classList.add('saidaTenisImg')
    setTimeout(function () { tenisImg2.style.display = ('none'); }, 900);
    setTimeout(function () { tenisImg3.style.display = ('none'); }, 900);
    setTimeout(function () { tenisImg4.style.display = ('none'); }, 900);
}

function cor2() {
    tenis.classList.remove('verde', 'roxo', 'vermelho');
    tenis.classList.add('azul');
    tenisImg2.style.display = ('block');

    tenis.classList.add('tenisEscurece')
    tenisImg1.classList.remove('entradaTenisImg')
    tenisImg1.classList.remove('saidaTenisImg')
    tenisImg2.classList.remove('entradaTenisImg')
    tenisImg2.classList.remove('saidaTenisImg')
    tenisImg3.classList.remove('entradaTenisImg')
    tenisImg3.classList.remove('saidaTenisImg')
    tenisImg4.classList.remove('entradaTenisImg')
    tenisImg4.classList.remove('saidaTenisImg')

    tenisImg2.classList.add('entradaTenisImg')
    setTimeout(function () { tenis.classList.remove('tenisEscurece'); }, 1000)

    tenisImg1.classList.add('saidaTenisImg')
    tenisImg3.classList.add('saidaTenisImg')
    tenisImg4.classList.add('saidaTenisImg')
    setTimeout(function () { tenisImg1.style.display = ('none'); }, 900);
    setTimeout(function () { tenisImg3.style.display = ('none'); }, 900);
    setTimeout(function () { tenisImg4.style.display = ('none'); }, 900);
}

function cor3() {
    tenis.classList.remove('verde', 'azul', 'vermelho');
    tenis.classList.add('roxo');
    tenisImg3.style.display = ('block');

    tenis.classList.add('tenisEscurece')
    tenisImg1.classList.remove('entradaTenisImg')
    tenisImg1.classList.remove('saidaTenisImg')
    tenisImg2.classList.remove('entradaTenisImg')
    tenisImg2.classList.remove('saidaTenisImg')
    tenisImg3.classList.remove('entradaTenisImg')
    tenisImg3.classList.remove('saidaTenisImg')
    tenisImg4.classList.remove('entradaTenisImg')
    tenisImg4.classList.remove('saidaTenisImg')

    tenisImg3.classList.add('entradaTenisImg')
    setTimeout(function () { tenis.classList.remove('tenisEscurece'); }, 1000)

    tenisImg2.classList.add('saidaTenisImg')
    tenisImg1.classList.add('saidaTenisImg')
    tenisImg4.classList.add('saidaTenisImg')
    setTimeout(function () { tenisImg1.style.display = ('none'); }, 900);
    setTimeout(function () { tenisImg2.style.display = ('none'); }, 900);
    setTimeout(function () { tenisImg4.style.display = ('none'); }, 900);
}

function cor4() {
    tenis.classList.remove('verde', 'azul', 'roxo');
    tenis.classList.add('vermelho');
    tenisImg4.style.display = ('block');

    tenisImg1.classList.remove('entradaTenisImg')
    tenisImg1.classList.remove('saidaTenisImg')
    tenisImg2.classList.remove('entradaTenisImg')
    tenisImg2.classList.remove('saidaTenisImg')
    tenisImg3.classList.remove('entradaTenisImg')
    tenisImg3.classList.remove('saidaTenisImg')
    tenisImg4.classList.remove('entradaTenisImg')
    tenisImg4.classList.remove('saidaTenisImg')

    tenis.classList.add('tenisEscurece')
    setTimeout(function () { tenis.classList.remove('tenisEscurece'); }, 1000)

    tenisImg4.classList.add('entradaTenisImg')
    tenisImg2.classList.add('saidaTenisImg')
    tenisImg3.classList.add('saidaTenisImg')
    tenisImg1.classList.add('saidaTenisImg')
    setTimeout(function () { tenisImg2.style.display = ('none'); }, 900);
    setTimeout(function () { tenisImg3.style.display = ('none'); }, 900);
    setTimeout(function () { tenisImg1.style.display = ('none'); }, 900);
}


// Código feito pelo Chat GPT para que todas as vezes que o usuário mudar o zoom da tela, ela seja redirecionada para o topo, fazendo com que a página não fique cortada.

(function () {
    let lastZoomLevel = detectZoomLevel();

    window.addEventListener('resize', function () {
        const currentZoomLevel = detectZoomLevel();
        if (currentZoomLevel !== lastZoomLevel) {
            lastZoomLevel = currentZoomLevel;
            handleZoomChange();
        }
    });

    function detectZoomLevel() {
        return Math.round(window.devicePixelRatio * 100);
    }

    function handleZoomChange() {
        console.log('Zoom level changed');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
})();

// 