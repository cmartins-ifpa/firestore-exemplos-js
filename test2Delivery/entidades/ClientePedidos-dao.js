// esse modulo trata do padrão para acesso aos documentos
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import { getFirestore, writeBatch, collection, getDocs, doc, getDoc, 
     setDoc, onSnapshot, addDoc, deleteDoc, query,
     orderBy, limit, where} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';

import { db, createUpdateDocument2Id, createDocument } from "../funcoes-firebase.js";

import {NOME_COLECAO} from "./Cliente-dao.js";
import {Pedido} from "./Pedido.js";

export default class ClientePedidoDAO {
    objPedido;
    NOME_COLECAO_PEDIDOS; //= ClienteDAO.NOME_COLECAO +"/";

    constructor(_cpf){
        this.NOME_COLECAO_PEDIDOS = NOME_COLECAO +"/"+_cpf+"/pedidos";
        console.log("COLECAO =", this.NOME_COLECAO_PEDIDOS);
    }

    createObjPedido(_cpf, _nome){
      this.objPedido = new Pedido();
      this.objPedido.cliente_id = _cpf;
      this.objPedido.nome_cliente = _nome;
      this.objPedido.datapedido = new Date();
      this.objPedido.datatualizacao = new Date();
      this.objPedido.valortot = 0.0;
      this.objPedido.sv=1;
      this.objPedido.itens=[];
         
      return this.objPedido;
    }
        
    getObjCliente() {
        return this.objPedido;
    }


    async add(itens){        
        // simula o cadastro de itens
        itens.forEach(item => {
            this.objPedido.addItem(item);    
        });
        
        let _docData = Object.assign({}, this.objPedido);
        console.log("Add => ", _docData);
        // cria um Doc com ID gerado automaticamente
        const cRef = collection(db, this.NOME_COLECAO_PEDIDOS);
        addDoc(cRef, _docData);        
    }



    update (_id){
        _docData = this.objPedido;
        console.log("Update", _docData);
        const cRef = doc(db, this.NOME_COLECAO_PEDIDOS, _id);
        setDoc(cRef, _docData, { merge: true });  
    }

    delete(_id){        
        deleteDoc(doc(db,  this.NOME_COLECAO_PEDIDOS, _id)).then(() => {
            console.log(_id, "deleted");
        });
    }

    async findAll(){
       const colRef = collection(db, this.NOME_COLECAO_PEDIDOS);
       const docsSnap = await getDocs(colRef);
        if (docsSnap.empty) {
            console.log('Nenhum documento localizado.');
            return null;
        }
        // monta a resposta em um array com todos os "docs"
        let respListPedidos = [];
        docsSnap.forEach(doc => {
            //console.log(doc.id, '=>', doc.data());
            respListPedidos.push( doc.data() );
        });      
        return (respListPedidos); 
       
    }


    async findById(_id) {  
        _id = (_id+"").trim();     
        const docRef = doc(db, this.NOME_COLECAO_PEDIDOS, _id);
        const docSnap = await getDoc(docRef);
        let docResp;
        if (docSnap.exists()) {
            console.log("Documento:", docSnap.data());
            docResp = docSnap.data();
        } else {
            // doc.data() will be undefined in this case
            console.log("Nenhum documento ! ID = <" + _id+">");
            docResp=null;
        }
        
        return docResp;
    }   
    
    
    async findByFieldWhere(_fieldName, _operator, _value) {
        console.log(_fieldName, _operator, _value);

        const q = query(collection(db, this.NOME_COLECAO_PEDIDOS),
                    where(_fieldName, _operator, _value)
                   // ,  limit(3)
                    );

        let docs = [];  // docs de Clientes
        const snap = await getDocs(q);
        console.log("SNAP" , snap);

        snap.forEach( (doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            docs.push( doc.data());
          });
          
        return docs;         
    }

}