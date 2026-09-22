import { salvarCadastro } from "./storage.js";
import { mostrarAlerta } from "./interface.js";

export function inicializarFormularios() {
    document.addEventListener("submit", (evento) => {
        const formulario = evento.target.closest("form");

        if (!formulario) return;

        evento.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();

            mostrarAlerta(
                "Por favor, preencha corretamente todos os campos obrigatórios.",
                "erro"
            );

            return;
        }

        const dados = new FormData(formulario);
        const cadastro = {};

        dados.forEach((valor, campo) => {
            cadastro[campo] = valor;
        });

        salvarCadastro(cadastro);

        mostrarAlerta(
            "Cadastro enviado com sucesso!",
            "sucesso"
        );

        formulario.reset();
    });
}