export function mostrarAlerta(mensagem, tipo) {
    const conteudo = document.querySelector("[data-conteudo]");

    if (!conteudo) return;

    const alertaAnterior = conteudo.querySelector(".alerta");

    if (alertaAnterior) {
        alertaAnterior.remove();
    }

    const alerta = document.createElement("div");

    alerta.classList.add("alerta");

    if (tipo === "sucesso") {
        alerta.classList.add("alerta-sucesso");
    }

    if (tipo === "erro") {
        alerta.classList.add("alerta-erro");
    }

    alerta.setAttribute("role", "alert");
    alerta.textContent = mensagem;

    conteudo.prepend(alerta);
}

export function mostrarToast(mensagem) {
    const toastAnterior = document.querySelector(".toast-dinamico");

    if (toastAnterior) {
        toastAnterior.remove();
    }

    const toast = document.createElement("div");

    toast.classList.add("toast", "toast-dinamico");
    toast.setAttribute("role", "status");
    toast.textContent = mensagem;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("mostrar");
    }, 50);

    setTimeout(() => {
        toast.classList.remove("mostrar");

        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}