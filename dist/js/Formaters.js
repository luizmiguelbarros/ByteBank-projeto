function formatarMoeda(valor) {
    return valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
}
function formatarData(data) {
    return data.toLocaleDateString("pt-br", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
}
