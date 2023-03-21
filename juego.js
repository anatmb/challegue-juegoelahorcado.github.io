palabra = JSON.parse( sessionStorage.getItem('listaPalabras'));
let palabrita;
let palabraserradas = [];
let palabrasacertadas = [];
let cant_errores = 0;
let cant_aciertos = 0;
let verificar = 0;
let check = false;
let parrafo1 = id('letras_erradas');

console.log(palabra);
palabrita = palabra[Math.floor(Math.random() * palabra.length)];
guionesPalabra(palabrita);
const btn = id('ajugar');
const imagen = id('imagenjuego');
btn.addEventListener('click', palabraSecreta);

function id(str) {
    return document.getElementById(str);
}

function obtener_random(num_min, num_max) {
    const amplitud_valores = num_max - num_min;
    const valor_al_azar = Math.floor(Math.random() * amplitud_valores) + num_min;
    return valor_al_azar;
}

function palabraSecreta(event) {
    imagen.src = 'img/img0.png';
    cant_errores = 0;
    cant_aciertos = 0;
    const parrafo = id('palabra-a-adivinar');
    parrafo.innerHTML = ' ';
    parrafo1.innerHTML = ' ';
    palabraserradas = [];
    palabrasacertadas = [];
    const valor_al_azar = obtener_random(0, palabra.length);
    palabrita = palabra[valor_al_azar];
    document.addEventListener("keydown", teclaPresionada)
    guionesPalabra(palabrita);
}

function guionesPalabra(palabrita) {
    const parrafo = document.getElementById('palabra-a-adivinar');
    const cant_letras = palabrita.length;
    for (i = 0; i < cant_letras; i++) {
        const span = document.createElement('span');
        parrafo.appendChild(span);
    }

}

document.addEventListener("keydown", teclaPresionada)
function teclaPresionada(event) {
    const letra = event.key;
    const spans = document.querySelectorAll(' #palabra-a-adivinar span ');
    let acerto = false;
    console.log("entro");
    let verificar = 0;
    let verificar1 = 0;

    var abecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'ñ', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    if (abecedario.includes(letra)) {
        for (i = 0; i < palabrasacertadas.length; i++) {
            if (letra == palabrasacertadas[i]) {
                verificar1++;
                acerto = true;
                break;
            }
        }
        if (verificar1 == 0) {
            for (i = 0; i < palabrita.length; i++) {
                if (palabrita[i] == letra) {
                    spans[i].innerHTML = letra;
                    cant_aciertos++;
                    acerto = true;
                }
            }
            if (acerto == true) { palabrasacertadas.push(letra); }
        }
        if (acerto == false) {
            for (i = 0; i < 7; i++) {
                const span = document.createElement('span');
                parrafo1.appendChild(span);
            }
            const errada = document.querySelectorAll('#letras_erradas span');
            for (i = 0; i < palabraserradas.length; i++) {
                if (letra == palabraserradas[i]) {
                    verificar++;
                    break;
                }
            }
            if (verificar == 0) {
                errada[cant_errores].innerHTML = letra;
                palabraserradas[cant_errores] = letra;
                cant_errores++;
                const source = `img/img${cant_errores}.png`;
                const imagen = id('imagenjuego');
                imagen.src = source;

            }
        }
        if (cant_errores == 7) {
            finjuego();
        }

        if (cant_aciertos == palabrita.length) {
            console.log("imagen ganadora");
            const source = `img/img.png`;
            const imagen = id('imagenjuego');
            imagen.src = source;
            finjuego();
        }
    }
    else {
        alert("presinar una letra de la A a la Z");
    }
}

function finjuego() {

    if (cant_errores == 7) {
        document.removeEventListener("keydown", teclaPresionada);
    }
    else {
        document.removeEventListener("keydown", teclaPresionada);
    }

}

function verificarpalabraacertada(letra) {
    console.log("llamo a la funcion");
    for (i = 0; i < palabrasacertadas.length; i++) {
        if (palabrasacertadas[i] == letra) {
            check = true;
            break;
        }
    }
    return check;
}
    







