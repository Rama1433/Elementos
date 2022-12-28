console.log("Prueba");

const $ = (element) => document.querySelector(element);
const $$ = (elements) => document.querySelectorAll(elements);

const main = $("main");
const h2 = $("h2");
const a = $("a");
const p = $$("p");


const nombre = prompt("Ingrese su nombre");



if (nombre == "") {
    h2.innerHTML = "Invitado";
} else {
    h2.innerHTML = `Hola, ${nombre}`;
}


h2.style.textTransform = "uppercase";

a.style.color = "#E51B3E";

const fondo = confirm("¿Desea colocar un fondo de pantalla?");
if (fondo == true) {
    document.body.classList.add("fondo");
}





p.forEach((p, i) => {
    if ((i+1) % 2 === 0) {
        p.classList.add("destacadoPar");
    } else {
        p.classList.add("destacadoImpar");
    }
});




main.style.display = "block";
