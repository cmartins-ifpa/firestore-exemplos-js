export class Pedido {
    cliente_id;
    nome_cliente;
    datapedido;
    datatualizacao;
    valortot;
    sv;
    itens;

    constructor(){};
    
    setInstanceDoc(doc) {
        console.log("DADOS = ", doc.data());
        var c = doc.data();
        this.cliente_id = c.cpf;
        this.nome_cliente = c.nome;
        this.itens = c.itens; // array de itens (produtos)

    }
    getInstanceDoc(){
        return this;
    }   
    
    addItem(_item){
       let itemDoc; 
       if (_item.sv == 1){
          itemDoc = {
            "item_id": _item.item_id,
            "nome_item": _item.nome_item,
            "qtd": _item.qtd,
            "valortot": _item.valortot,
            "sv": 1
            }
       } else 
        if (_item.sv == 2){
            itemDoc = {
                "item_id": _item.item_id,
                "nome_item": _item.nome_item,
                "qtd": _item.qtd,
                "valortot": _item.valortot,  
              "pizzas": _item.pizzas,
              "borda": _item.borda,
              "sv": 2
              }
         } ;
       
        this.itens.push(itemDoc);   
        console.log("item Pos PUSH => ", itemDoc);     
    }
}
