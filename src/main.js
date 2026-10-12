import { getContactos } from "./api-service";

let app = document.getElementById("app");

getContactos().then((contactos) => {
    let lista = "";
    contactos.forEach((contacto) => {
        lista += `<li>${contacto.nombre} ${contacto.email}</li>`;
    });
    app.innerHTML = `
    <h1>Contactos</h1>
    <ul>
        ${lista}
    </ul>
    `;
});