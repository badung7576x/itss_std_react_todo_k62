import firebaseInit from '../lib/firebase'
import firebase from "firebase";

export const db = firebaseInit.firestore()

export default class FirebaseService {
  
  static async getAllDocumentsOfCollection(collection) {
    let results = []
    const snapshot = await db.collection(collection).get()
    
    snapshot.forEach(doc => {
      results.push({...doc.data(), id: doc.id})
    });
    return results
  }
  
  static async addDocumentToCollection(collection, data) {
    return db.collection(collection).add(data)
  }
  
  static async updateDocumentToCollection(collection, document, data) {
    return db.collection(collection).doc(document).update(data)
  }

  static async deleteDocument(collection, document) {
    return db.collection(collection).doc(document).delete()
  }
}
