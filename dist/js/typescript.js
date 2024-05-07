// tipos primitivos em TS
let valor = 3000;
let nome = "";
let foiPago = false;
let qualquer = "";
qualquer = 22;
qualquer = "Qualquer coisa";
// Arrays
const Lista = [];
Lista.push(3, 4, 22, 5);
var TipoTransacao;
(function (TipoTransacao) {
    TipoTransacao["DEPOSITO"] = "Dep\u00F3sito";
    TipoTransacao["TRANSFERENCIA"] = "Transfer\u00EAncia";
    TipoTransacao["PAGAMENTO_BOLETO"] = "Pagamento de Boleto";
})(TipoTransacao || (TipoTransacao = {}));
const novaTransacao = {
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0
};
