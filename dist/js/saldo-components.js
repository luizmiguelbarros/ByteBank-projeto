// e aqui vai ficar onde a parte de gerenciamento de saldo deve ficar
let saldo = 3000;
const elementoSaldo = document.querySelector(".saldo-valor .valor");
if (elementoSaldo != null) {
    elementoSaldo.textContent = saldo.toString();
}
