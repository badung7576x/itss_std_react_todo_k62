import React, { useState, useEffect } from 'react'

/* スタイルシート */
import './styles/main.css';

/* コンポーネント */
import Todo from './components/Todo';
import Header from "./components/Header";

import { auth } from "./lib/firebase";
import FirebaseService from "./services/firebaseService";

function App() {
  
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState([]);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      setLoading(false)
      let newUser = null
      if (user) {
        newUser = await FirebaseService.storeUser(user);
      }
      setUser(newUser)
    })
  }, [])
  
  return (
    <div className="container is-fluid">
      <header>
        { loading ? (<p> Waiting...</p>) : (<Header user={user}/>) }
      </header >
      <div>
        {user && <Todo />}
      </div>
    </div>
  );
}

export default App;
