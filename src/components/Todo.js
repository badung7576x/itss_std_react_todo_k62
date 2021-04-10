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
import useStorage from '../hooks/storage';

/* ライブラリ */
import {getKey} from "../lib/util";

function Todo() { 
  const [items, putItems, removeItems] = useStorage()
  
  const [tab, setTab] = useState('ALL')
  
  const filteredItems = items.filter( item => {
    if (tab === 'ALL') return true;
    if (tab === 'DOING') return !item.done;
    if (tab === 'DONE') return item.done;
  });
  
  
  const completeTask = (checkedItem) => {
    const newItems = items.map(item => {
      if (item.key == checkedItem.key) {
        item.done = !item.done;
      }
      return item;
    });
    
    putItems(newItems);
  }
  
  const addTask = (text) => {
    const newItems = [...items, {key: getKey(), text: text, done: false}]
    putItems(newItems)
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
          <TodoItem key={item.key} item={item} checkItem={completeTask} />
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