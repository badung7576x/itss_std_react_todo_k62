import { useState, useEffect } from 'react';
import FirebaseService from "../services/firebaseService";


function useFirebaseStorage() {
  const [items, setItems] = useState([])
　
　/* 副作用を使う */
  useEffect(() => {
    getItems()
    console.log(items)
  }, [items])
  
  const getItems = async () => {
      const data = await FirebaseService.getAllDocumentsOfCollection('todos')
      setItems(data)
  }

  const addItem = async item => {
    const newItem = {text: item.text, done: item.done} 
    await FirebaseService.addDocumentToCollection('todos', newItem)
    setItems([...items, newItem])
  };
  
  const updateItem = async checkedItem => {
    const changeData = { done: !checkedItem.done }
    await FirebaseService.updateDocumentToCollection('todos', checkedItem.id, changeData)
    
    const updatedItems = items.map(item => {
      if (item.id === checkedItem.id) {
        item = {...item, changeData}
      }
      return item
    })
    setItems(updatedItems)
  }

  const removeItems = () => {
    items.map(item => {
      FirebaseService.deleteDocument('todos', item.id)
    })
    setItems([])
  };

  return [items, addItem, updateItem, removeItems]
}

export default useFirebaseStorage;