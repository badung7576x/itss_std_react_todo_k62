import firebaseInit from '../lib/firebase'

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
  
  static async storeUser(user) {
    const { uid } = user
    const userDocs = await db.collection("users").doc(uid).get();
    if (!userDocs.exists) {
      await db.collection("users").doc(uid).set({ name: user.displayName });
      return { name: user.displayName, id: uid }
    } else {
      return { ...userDocs.data(), id: uid}
    }
  }
}