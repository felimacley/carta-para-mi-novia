const mensaje = `No sé exactamente en qué momento pasó,
pero desde que estás en mi vida todo se siente distinto.

Hay días normales,
pero contigo cualquier cosa se vuelve especial.

Me gusta estar contigo,
sin hacer nada,
solo hablar o quedarnos tranquilos.

Y sí…
mi lugar favorito es cuando estoy frente a ti,
mirándote,
perdiéndome en tus ojos,
porque ahí es donde más en paz me siento.

No es que todo sea perfecto,
pero contigo todo vale la pena.

Y la verdad,
no necesito algo grande para ser feliz,
solo estar contigo. 💖`;

let i = 0;

function abrirCarta() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("carta").classList.remove("hidden");

    document.getElementById("musica").play();

    escribirTexto();
    corazones();
}

function escribirTexto() {
    if (i < mensaje.length) {
        document.getElementById("texto").innerHTML += mensaje.charAt(i);
        i++;
        setTimeout(escribirTexto, 40);
    }
}

function corazones() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-10px";
        heart.style.fontSize = "20px";

        document.body.appendChild(heart);

        let pos = 0;
        let anim = setInterval(() => {
            pos++;
            heart.style.top = pos + "vh";

            if (pos > 100) {
                clearInterval(anim);
                heart.remove();
            }
        }, 20);

    }, 300);
}
