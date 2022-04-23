import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { ToDoApp } from './components/ToDoApp';
import { useUserId } from './utils/hooks/use-user-id';

export function App() {
  const [userId, setUserId] = useUserId()

  return (
    <div className="App">
      <Header/>
      {userId ? <ToDoApp/> : <Login onUserLogin={setUserId} /> }
    </div>
  );
}

 

export default App;
