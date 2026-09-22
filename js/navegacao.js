export let conteudoInicial = "";

export function inicializarNavegacao() {
    const conteudo = document.querySelector("[data-conteudo]");

    if (!conteudo) return;

    conteudoInicial = conteudo.innerHTML;

    document.addEventListener("click", (evento) => {
        const link = evento.target.closest("[data-rota]");

        if (!link) return;

        evento.preventDefault();

        navegarPara(link.dataset.rota);
    });

    window.addEventListener("popstate", () => {
        const rota =
            location.hash.replace("#", "") || "inicio";

        navegarPara(rota, false);
    });

    const rotaInicial =
        location.hash.replace("#", "") || "inicio";

    navegarPara(rotaInicial, false);
}

export function navegarPara(
    rota,
    atualizarHistorico = true
) {
    const conteudo =
        document.querySelector("[data-conteudo]");

    if (!conteudo) return;

    if (rota === "inicio") {
        conteudo.innerHTML = conteudoInicial;
    } else {
        const template =
            document.querySelector(
                `[data-template="${rota}"]`
            );

        if (!template) {
            console.error(
                `Template não encontrado para a rota: ${rota}`
            );

            return;
        }

        conteudo.innerHTML = "";

        const novoConteudo =
            template.content.cloneNode(true);

        conteudo.appendChild(novoConteudo);
    }

    if (atualizarHistorico) {
        if (rota === "inicio") {
            history.pushState(
                { rota: "inicio" },
                "",
                window.location.pathname
            );
        } else {
            history.pushState(
                { rota: rota },
                "",
                `#${rota}`
            );
        }
    }

    atualizarNavegacaoAtiva(rota);
}

function atualizarNavegacaoAtiva(rotaAtual) {
    const links =
        document.querySelectorAll("[data-rota]");

    links.forEach((link) => {
        const ativo =
            link.dataset.rota === rotaAtual;

        link.classList.toggle("ativo", ativo);

        if (ativo) {
            link.setAttribute(
                "aria-current",
                "page"
            );
        } else {
            link.removeAttribute("aria-current");
        }
    });
}