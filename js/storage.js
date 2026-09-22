export function inicializarLocalStorage() {
    const cadastrosSalvos = localStorage.getItem("cadastros");

    if (!cadastrosSalvos) {
        localStorage.setItem("cadastros", JSON.stringify([]));
    }
}

export function salvarCadastro(cadastro) {
    const cadastros =
        JSON.parse(localStorage.getItem("cadastros")) || [];

    cadastros.push({
        ...cadastro,
        dataCadastro: new Date().toISOString()
    });

    localStorage.setItem("cadastros", JSON.stringify(cadastros));
}