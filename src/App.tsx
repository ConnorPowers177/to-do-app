import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import './App.css';
import { Login } from './components/Login';
import { ToDoApp } from './components/ToDoApp';
import { auth } from './utils/firebase';
import { useUser } from './utils/hooks/use-user';

export function App() {
  const [user, setUser, removeUser] = useUser()

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser: any) => {
      if (currentUser) {
        setUser(currentUser)
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] as any)

  const Logout = async () => {
    await signOut(auth)
    removeUser()
  }

  return (
    <div className="App">
        {user ? <ToDoApp /> : <Login />}
        <button className='relative font-BebasNeue bottom-16 mb-16 px-1 py-0.25 border-none text-sm rounded-full text-center text-slate-50 transition ease-in-out delay-150 bg-cyan-400 hover:scale-110 hover:bg-cyan-500 duration-300' onClick={Logout}>Logout</button>
      </div>
  );
}

 

export default App;
