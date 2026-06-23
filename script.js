const mensaje = `No fue casualidad encontrarte...

Desde que llegaste,
todo se volvió más bonito.

Eres mi paz, mi lugar favorito 💖`;

let i = 0;

function abrirCarta() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("carta").classList.remove("hidden");

    document.getElementById("musica").play();

    escribirTexto();
}

function escribirTexto() {
    if (i < mensaje.length) {
        document.getElementById("texto").innerHTML += mensaje.charAt(i);
        i++;
        setTimeout(escribirTexto, 50);
    }
}
