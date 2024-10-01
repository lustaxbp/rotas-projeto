/**
* Classe que gerencia os pedidos.
*/
/* Atributos */
/* Identificador do pedido */
export class Pedido {
    private idPedido: number = 0;
    private idCarro: number = 0;
    private idCliente: number = 0;
    /* data do pedido feito pelo cliente */
    private dataPedido: number;
    /* valor do pedido */
    private valorPedido: number;

    /**
     * Construtor da classe PedidoVendas
     * 
     * @param dataPedido data do pedido efetuado
     * @param valorPedido valor do pedido feito pelo cliente
     */
    constructor(

        idCarro: number,
        idCliente: number,
        dataPedido: number,
        valorPedido: number,
    ) {
        this.dataPedido = dataPedido;
        this.valorPedido = valorPedido;

    }


    /* Métodos get e set */
    /**
     * Recupera o identificador do pedido
     * @returns o identificador do pedido
     */
    public getIdPedido(): number {
        return this.idPedido;
    }

    /**
     * Atribui um valor ao identificador do pedido
     * @param idPedido novo identificado do pedido
     */
    public setIdPedido(idPedido: number): void {
        this.idPedido = idPedido;
    }

    /**
     * Retorna a data do pedido efetuado pelo cliente.
     *
     * @returns {number} data do pedido.
     */
    public getDataPedido(): number {
        return this.dataPedido;
    }

    /**
     * Define a data do pedido do cliente.
     * 
     * @param dataPedido - A data do pedido do cliente a ser definida.
     */
    public setDataPedido(dataPedido: number): void {
        this.dataPedido = dataPedido;
    }

    /**
     * Retorna o valor do pedido do cliente.
     *
     * @returns {number} O valor do pedido do cliente.
     */
    public getValorPedido(): number {
        return this.valorPedido;
    }

    /**
     * Define o valor do pedido.
     *
     * @param valorPedido - O valor do pedido do cliente.
     */
    public setValorPedido(valorPedido: number): void {
        this.valorPedido = valorPedido;
    }



}