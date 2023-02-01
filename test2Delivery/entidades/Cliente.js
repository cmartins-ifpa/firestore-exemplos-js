export class Cliente {
    cpf;
    nome;
    sexo;
    telefones;
    sv = 1;

    constructor(){};
    
    setInstanceDoc(doc) {
        console.log("DADOS = ", doc.data());
        var c = doc.data();
        this.cpf = c.cpf;
        this.nome = c.nome;
        this.sexo = c.sexo;
        this.telefones = c.telefones; // array de telefones
    }
    getInstanceDoc(){
        return this;
    }    
}
