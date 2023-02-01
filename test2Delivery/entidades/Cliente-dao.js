// esse modulo trata do padrão para acesso aos documentos
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {
    getFirestore, writeBatch, collection, getDocs, doc, getDoc,
    setDoc, onSnapshot, addDoc, deleteDoc, query,
    orderBy, limit, where
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';

import { db, createUpdateDocument2Id, createDocument } from "../funcoes-firebase.js";

import { Cliente } from "./Cliente.js";

export const NOME_COLECAO = "clientes";    // collection(db, "clientes");

export default class ClienteDAO {
    objCliente;

    createObjCliente(_cpf, _nome, _sexo, _telefones) {
        this.objCliente = new Cliente();
        this.objCliente.cpf = _cpf;
        this.objCliente.nome = _nome;
        this.objCliente.sexo = _sexo;
        this.objCliente.telefones = _telefones;
        this.objCliente.sv = 1;
        return this.objCliente;
    }

    getObjCliente() {
        return this.objCliente;
    }

    async add(_id) {
        _id = (_id + "").trim();
        
        if (this.objCliente.nome.trim().length == 0) { 
            // trata o erro e lança a exception 
            throw "Nome do cliente é obrigatório";
        } else {
            let _docData = Object.assign({}, this.objCliente);
            if (_id == null) {
                // cria um Doc com ID gerado automaticamente
                const cRef = collection(db, NOME_COLECAO);
                addDoc(cRef, _docData);
            } else {
                // codigo para criar ou atualizar um Doc a partir do ID
                // outra forma -> const docRef = doc(db, NOME_COLECAO, _id );
                await setDoc(doc(db, NOME_COLECAO, _id), _docData);
            }
        }
    }

    update(_id) {
        _docData = this.objCliente;
        const cRef = doc(db, NOME_COLECAO, _id);
        setDoc(cRef, _docData, { merge: true });
    }

    delete(_id) {
        // apaga a coleçao, mas deveria testar a existencia de subcoleçoes (e apaga-las)
        deleteDoc(doc(db, NOME_COLECAO, _id)).then(() => {
            console.log(_id, "deleted");
        });
    }

    async findAll() {
        const colRef = collection(db, NOME_COLECAO);
        const docsSnap = await getDocs(colRef);
        if (docsSnap.empty) {
            console.log('Nenhum documento localizado.');
            return null;
        }
        // monta a resposta em um array com todos os "docs"
        let respListClientes = [];
        docsSnap.forEach(doc => {           
            respListClientes.push(doc.data());
        });
        return (respListClientes);
    }


    async findById(_id) {
        _id = (_id + "").trim();
        const docRef = doc(db, NOME_COLECAO, _id);
        const docSnap = await getDoc(docRef);
        let docResp;
        if (docSnap.exists()) {
            console.log("Documento:", docSnap.data());
            docResp = docSnap.data();
        } else {
            console.log("Nenhum documento ! ID = <" + _id + ">");
            docResp = null;
        }

        return docResp;
    }


    async findByFieldWhere(_fieldName, _operator, _value) {
        //  console.log(_fieldName, _operator, _value);
        const q = query(collection(db, NOME_COLECAO),
            where(_fieldName, _operator, _value)
            // ,  limit(3)
        );

        let docs = [];  // docs de Clientes
        const snap = await getDocs(q);

        snap.forEach((doc) => {
            docs.push(doc.data());
        });

        return docs;
    }
}