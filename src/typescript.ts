
// tipos primitivos em TS
let valor: number = 3000;
let nome: string = "";
let foiPago: boolean = false;
let qualquer: any = "";
qualquer = 22;
qualquer = "Qualquer coisa";

// Arrays

const Lista: number[] = []

Lista.push(3, 4, 22, 5)

//Tipos personalizados TYPE, por isso o nome TYPEscript. Pela declaração de "typos" de variáveis 

type Transacao = {
    tipoTransacao: TipoTransacao;
    data: Date;
    valor: number

}


enum TipoTransacao {
    DEPOSITO = "Depósito",
    TRANSFERENCIA = "Transferência",
    PAGAMENTO_BOLETO = "Pagamento de Boleto"
}

const novaTransacao: Transacao = {
    tipoTransacao: TipoTransacao.PAGAMENTO_BOLETO,
    data: new Date(),
    valor: 0


}

