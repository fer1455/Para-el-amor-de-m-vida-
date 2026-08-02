const frases = [
    "🤍🥺 Te amo musho 🤍🥺",
    "🌎 Sos mi pequeño planeta 🌎",
    "🫶 Mi persona favorita 🥺",
    "🥰 Te amo infinitamente ♾️",
    "♥️💕 Sos el amor de mi vida ♥️💕",
    "🫶🏻 Mi felicidad 🫶🏻",
    "💋 Te elegiría mil veces 💋🤍",
    "🥺🤍 Sos muy especial para mi vida, preciosa 🫶🏻"
];

const fotos = document.querySelectorAll(".foto");
const mensaje = document.getElementById("mensaje");
const musica = document.getElementById("musica");

let musicaIniciada = false;

fotos.forEach((foto, index) => {

    foto.addEventListener("click", () => {

        mensaje.innerHTML = frases[index];

        foto.animate([
            {transform:"scale(1)"},
            {transform:"scale(1.25)"},
            {transform:"scale(1)"}
        ],{
            duration:700
        });

        crearCorazones();

        if(!musicaIniciada){
            musica.play();
            musicaIniciada=true;
        }

    });

});

function crearCorazones(){

    for(let i=0;i<12;i++){

        const corazon=document.createElement("div");

        corazon.innerHTML="💖";

        corazon.style.position="fixed";
        corazon.style.left=Math.random()*window.innerWidth+"px";
        corazon.style.top=window.innerHeight+"px";
        corazon.style.fontSize=(20+Math.random()*20)+"px";
        corazon.style.pointerEvents="none";
        corazon.style.zIndex="9999";
        corazon.style.transition="all 3s linear";

        document.body.appendChild(corazon);

        setTimeout(()=>{

            corazon.style.top="-100px";
            corazon.style.opacity="0";
            corazon.style.transform="rotate(720deg)";

        },100);

        setTimeout(()=>{

            corazon.remove();

        },3200);

    }

}
