import { useState, useEffect } from 'react';

/* 
  【Storageフック】
　・TodoをlocalStorageを使って保存する
　・以下機能をサポートする
　  - localstrageに保存されているすべてのTodoの読み出し機能
　  - Todoをlocalstrageに保存する
　  - localstrageにあるTodoを削除する
*/

const KEY = 'todo';

function useStorage() {
  const [items, setItems] = useState([]);
　
　/* 副作用を使う */
  useEffect(() => {
    const data = localStorage.getItem(KEY);

    if (!data) {
      localStorage.setItem(KEY, JSON.stringify([]));
    } else {
      setItems(JSON.parse(data));
    }
  }, []);

  const putItems = items => {
    localStorage.setItem(KEY, JSON.stringify(items));
    setItems  (items);
  };

  const removeItems = () => {
    localStorage.setItem(KEY, JSON.stringify([]));
    setItems([]);
  };

  return [items, putItems, removeItems];
}

export default useStorage;