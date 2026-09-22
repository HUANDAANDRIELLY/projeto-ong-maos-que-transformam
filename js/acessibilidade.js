export function inicializarAcessibilidade() {
    const botao = document.querySelector("[data-alto-contraste]");

    if (!botao) return;

    const contrasteAtivo =
        localStorage.getItem("altoContraste") === "true";

    aplicarContraste(contrasteAtivo);

    botao.addEventListener("click", () => {
        const ativo =
            !document.body.classList.contains("alto-contraste");

        aplicarContraste(ativo);

        localStorage.setItem(
            "altoContraste",
            ativo
        );
    });
}

function aplicarContraste(ativo) {
    const botao =
        document.querySelector("[data-alto-contraste]");

    document.body.classList.toggle(
        "alto-contraste",
        ativo
    );

    if (botao) {
        botao.setAttribute(
            "aria-pressed",
            ativo
        );

        botao.textContent = ativo
            ? "Contraste normal"
            : "Alto contraste";
    }
}