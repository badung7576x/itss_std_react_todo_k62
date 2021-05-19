import React, { useState } from 'react';

/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

/* カスタムフック */
import useFirebaseStorage from '../hooks/firebase';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() { 
  const [items, addItem, updateItem, removeItems] = useFirebaseStorage()
  
  const [tab, setTab] = useState('ALL')
  
  const filteredItems = items.filter( item => {
    if (tab === 'ALL') return true;
    if (tab === 'DOING') return !item.done;
    if (tab === 'DONE') return item.done;
  });
  
  
  const completeTask = (checkedItem) => {
    updateItem(checkedItem);
  }
  
  const addTask = (text) => {
    const newItem = {text: text, done: false}
    addItem(newItem)
  }
  
  const selectTab = value => {
    setTab(value)
  }
  
  return (
    <div className="panel">
      <div className="panel-heading">
        ITSS ToDoアプリ
      </div>
        <Input addNewTask={addTask}/>
        
        <Filter value={tab} changeTab={selectTab} />
        
        {filteredItems.map(item => (
          <TodoItem key={item.id} item={item} checkItem={completeTask} />
        ))}
        
        <div className="panel-block">
          {filteredItems.length} items
        </div>
        
        <div className="panel-block">
        <button className="button is-light is-fullwidth" onClick={removeItems}>
          全てのToDoを削除
        </button>
      </div>
    </div>
  );
}

export default Todo;