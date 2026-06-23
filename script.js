const mensaje = `No fue casualidad encontrarte...

Desde que llegaste,
todo en mi vida cambió de una forma tan bonita
que aún me cuesta creerlo.

Eres mi tranquilidad en los días difíciles,
mi alegría en los momentos simples
y mi pensamiento favorito cada día.

Mi lugar favorito es estar frente a ti,
mirando tus hermosos ojos
que tienen la magia de calmarme
y hacerme sentir completo.

No eres solo alguien especial para mí…
eres mi hogar,
mi paz
y mi felicidad en forma de persona.

Y si la vida me diera la oportunidad
de elegir de nuevo,
sin pensarlo…
te elegiría a ti, siempre. 💖`;

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
