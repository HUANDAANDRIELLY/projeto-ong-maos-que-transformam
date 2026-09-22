import { inicializarLocalStorage } from "./storage.js";
import { inicializarFormularios } from "./formularios.js";
import { inicializarNavegacao } from "./navegacao.js";
import { inicializarAcessibilidade } from "./acessibilidade.js";

document.addEventListener("DOMContentLoaded", () => {
    inicializarLocalStorage();
    inicializarNavegacao();
    inicializarFormularios();
    inicializarAcessibilidade();
});