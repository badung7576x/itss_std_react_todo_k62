import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/

function Input({ addNewTask }) {
  const [task, setTask] = useState('')
  
  const changeInput = input => {
    setTask(input.target.value)
  }
  
  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addNewTask(task)
      setTask('')
    }
  }
  
  return (
    <div className="panel-block">
      <input 
        className="input" 
        type="text" 
        placeholder="Todoを入力してください"
        value={task}
        onChange={changeInput}
        onKeyDown={_handleKeyDown}
        />
    </div>
  );
}

export default Input;
