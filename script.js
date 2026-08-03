// ==========================
// FRASES PARA LAS FOTOS
// ==========================

const frases = [
"Te amo musho🤍🥺",
"Sos mi pequeño planeta🌎",
"🫶 Mi persona favorita🥺",
"🥰 Te amo infinitamente♾️",
"Sos el amor de mi vida♥️💕",
"Mi felicidad🫶🏻",
"Te elegiría mil veces💋🤍",
"Sos muy especial para mi vida preciosa🥺🤍🫶🏻"
];

const fotos = document.querySelectorAll(".foto");
const mensaje = document.getElementById("mensaje");

fotos.forEach((foto, index) => {

    foto.addEventListener("click", () => {

        mensaje.innerHTML = frases[index];

        foto.animate([
            {transform:"scale(1)"},
            {transform:"scale(1.2)"},
            {transform:"scale(1)"}
        ],{
            duration:400
        });

    });

});

// ==========================
// CARTA ROMÁNTICA
// ==========================

const heart = document.querySelector(".heart");

heart.addEventListener("click", () => {

    alert(
`💌 Para el amor de mi vida 💌

Gracias por hacer mi vida más bonita.

Cada momento con vos es un recuerdo que quiero guardar para siempre.

Te amo muchísimo mi amor. 🤍🥺

Sos mi pequeño universo. 🌎❤️`
);

});

// ==========================
// ESTRELLAS
// ==========================

for(let i=0;i<120;i++){

    const star=document.createElement("div");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDuration=(1+Math.random()*3)+"s";

    document.getElementById("stars").appendChild(star);

}

// ==========================
// CORAZONES FLOTANDO
// ==========================

const floating=document.getElementById("floating-hearts");

setInterval(()=>{

    const h=document.createElement("div");

    h.className="floating-heart";

    h.innerHTML="🤍";

    h.style.left=Math.random()*100+"vw";

    h.style.fontSize=(15+Math.random()*20)+"px";

    floating.appendChild(h);

    setTimeout(()=>{

        h.remove();

    },8000);

},500);

// ==========================
// MÚSICA
// ==========================

const musica=document.getElementById("musica");

document.body.addEventListener("click",()=>{

    musica.play();

},{once:true});
