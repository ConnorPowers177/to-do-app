import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import './App.css';
import { Login } from './components/Login';
import { ToDoApp } from './components/ToDoApp';
import { auth } from './utils/firebase';
import { useDarkMode } from './utils/hooks/use-dark-mode';
import { useUser } from './utils/hooks/use-user';

function PageTitle({ title }: { title: string }) {
  return <h1 className='relative w-32 ml-auto mr-auto top-20 left-0 right-0 text-center text-3xl tracking-widest select-none font-Rampart dark:text-slate-50'>{title}</h1>
}

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

  const [colorTheme, setTheme] = useDarkMode()

  return (
    <div className='App no-scrollbar z-auto bg-cover bg-center overflow-y-auto h-full items-center bg-[url("/images/Sky.jpg")] bg-no-repeat dark:bg-[url("/images/Night.jpg")] transition-all duration-500'>
      <div className='absolute z-auto no-scrollbar h-full overflow-hidden bottom-0 left-0 right-0 top-48 bg-slate-50 items-center dark:bg-stone-900 transition-all duration-500'> </div>
      <div className='h-100 relative'>
        <PageTitle title='TODO' />
        <span className='absolute top-30 right-0 left-0 ml-auto mr-auto'>
          <button onClick={() => setTheme(colorTheme)} className={colorTheme === 'light' ? 'fa-solid fa-sun text-slate-50' : 'fa-solid fa-moon'}></button>
        </span>
        {user ? <ToDoApp /> : <Login />}
        <button className='relative font-BebasNeue bottom-16 mb-16 px-1 py-0.25 border-none text-sm rounded-full text-center text-slate-50 transition ease-in-out delay-150 bg-cyan-400 hover:scale-110 hover:bg-cyan-500 duration-300 dark:bg-violet-400 dark:hover:bg-violet-600' onClick={Logout}>Logout</button>
      </div>
    </div>
  );
}


export default App;
