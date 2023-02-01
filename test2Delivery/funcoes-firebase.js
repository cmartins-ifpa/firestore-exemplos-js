import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';    
import { getFirestore, writeBatch, collection, getDocs, doc, setDoc, onSnapshot, addDoc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
import { firebaseConfig } from './init-firebase.js';    

// ---- Funções genéricas para uso do Firestore ----- //
export async function  createUpdateDocument2Id  (db, collectionName, document, id_)
{
  // neste ex, salva o documento com sub-colecao "subcollections"    
  // await addDoc(collection(db, collectionName, id_, "subcollections"), document);

  // neste exemplo, salva ou atualiza o documento pela chave "id_"
  await setDoc(doc(db, collectionName, id_), document); 
  
  console.log("SALVOU ID = ", id_);    
};
// ---- Funções genéricas para uso do Firestore ----- //
export const createDocument = async (db, collectionName, document) => {
  // neste exemplo cria um DOC com Id gerado automaticamente
  const colRef = collection(db, collectionName);
  return addDoc(colRef, document);
}

// ---- Exportação das "variáveis" globais 'app' e 'db' ----- //
export var app = initializeApp(firebaseConfig);
export var db = getFirestore(app);// 
   