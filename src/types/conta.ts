import { Transacao } from "./Transacao.js"
import { TipoTransacao } from "./TipoTransacao.js"


let saldo: number = 3000

const Conta = {
    getSaldo() {
        return saldo
    },

    getDataAcesso(): Date {
        return new Date()
    },

    registrarTransacao(novaTransacao: Transacao): void {
        if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
            saldo += novaTransacao.valor;

        } else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERÊNCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
            saldo -= novaTransacao.valor;

        } else {
            alert("Tipo de Transação é inválido!");
            return;
        }

    }

}

export default Conta;