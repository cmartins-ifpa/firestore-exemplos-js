import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';    
import { getFirestore, writeBatch, collection, getDocs, doc, setDoc, onSnapshot, addDoc } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';
import { firebaseConfig } from './init-firebase.js';    

export async function  createUpdateDocument2Id  (db, collectionName, document, id_)
{
  // neste ex, salva o documento com sub-colecao "shifts"    
  // await addDoc(collection(db, collectionName, id_, "shifts"), document);

  // neste exemplo, salva ou atualiza o documento pela chave "id_"
  await setDoc(doc(db, collectionName, id_), document); 
  
  console.log("SALVOU ID = ", id_);    
};

export const createDocument = async (db, collectionName, document) => {
  // neste exemplo cria um DOC com Id gerado automaticamente
  const colRef = collection(db, collectionName);
  return addDoc(colRef, document);
}
export var app = initializeApp(firebaseConfig);
export var db = getFirestore(app);// 
   