import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../utils/firebase'
import { CreateUserErrorText, LoginErrorText } from './ErrorText'


export function Login() {
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPassword, setRegisterPassword] = useState('')
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [createUserError, setCreateUserError] = useState('')
    const [loginError, setLoginError] = useState('')

    const register = async (e: any) => {
        e.preventDefault()
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user)
        } catch (error: any) {
            console.log(error)
            if (error.message.includes('auth/invalid-email')) {
                setCreateUserError('Invalid Email...')
                return
            }
            if (error.message.includes('auth/email-already-in-use')) {
                setCreateUserError('Looks like you already have an account!')
                return
            }
            if (error.message.includes('auth/invalid-password')) {
                setCreateUserError('Invalid password.')
                return
            }
            if (error.message.includes('auth/weak-password')) {
                setCreateUserError('Password must be at least six characters.')
                return
            }

            else setCreateUserError('Something went wrong... ')
        }
    }

    const login = async (e: any) => {
        e.preventDefault()
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user)
        } catch (error: any) {
            console.log(error)
            console.log(error.message)
            console.log(error.code)
            if (error.message.includes('auth/invalid-email')) {
                setLoginError('Your email address isn\'t associated with an account yet. You can create one above this message!')
                return
            }
            if (error.message.includes('auth/wrong-password')) {
                setLoginError('Wrong Password...')
                return
            }
            else setLoginError('Something went wrong...')
        }
    }

    return (
        <div className='absolute flex flex-col break-before-column inline-flex align-middle top-48 left-0 right-0' >
            <form className='mt-4' onSubmit={() => { }}>
                <CreateUserErrorText error={createUserError} />
                <input id='create-user-email' className='create-user ml-2 mr-2 h-10 w-63 outline-none border bg-slate-50 border-slate-50 dark:bg-stone-800 shadow dark:border-stone-800 transition duration-500 hover:border-cyan-500 dark:hover:border-violet-600 focus:border focus:border-cyan-500 dark:focus:border-violet-600 dark:text-white focus:placeholder:text-transparent' placeholder='Email...' onChange={(event) => { setRegisterEmail(event.target.value) }} />
                <input id='create-user-password' className='h-10 w-63 outline-none border bg-slate-50 border-slate-50 dark:bg-stone-800 shadow dark:border-stone-800 transition duration-500 hover:border-cyan-500 dark:hover:border-violet-600 focus:border focus:border-cyan-500 dark:focus:border-violet-600 dark:text-white focus:placeholder:text-transparent' type='password' placeholder='Password...' onChange={(event) => { setRegisterPassword(event.target.value) }} />

                <div>
                    <button id='create-user-button' type='submit' className='ml-2 font-BebasNeue px-1 py-0.25 text-sm rounded-full text-center text-slate-50 transition ease-in-out delay-150 bg-cyan-400 hover:scale-110 hover:bg-cyan-500 duration-300 dark:bg-violet-400 dark:hover:bg-violet-600' onClick={register}>Create User</button>
                </div>
            </form>
            <form className='mt-10' onSubmit={() => { }}>
                <LoginErrorText error={loginError} />
                <input id='login-email' className='login ml-2 mr-2 h-10 w-63 outline-none border bg-slate-50 border-slate-50 dark:bg-stone-800 shadow dark:border-stone-800 transition duration-500 hover:border-cyan-500 dark:hover:border-violet-600 focus:border focus:border-cyan-500 dark:focus:border-violet-600 dark:text-white focus:placeholder:text-transparent' placeholder='Email...' onChange={(event) => { setLoginEmail(event.target.value) }} />
                <input id='login-password' className='h-10 w-63 outline-none border bg-slate-50 border-slate-50 dark:bg-stone-800 shadow dark:border-stone-800 transition duration-500 hover:border-cyan-500 dark:hover:border-violet-600 focus:border focus:border-cyan-500 dark:focus:border-violet-600 dark:text-white focus:placeholder:text-transparent' type='password' placeholder='Password...' onChange={(event) => { setLoginPassword(event.target.value) }} />

                <div>
                    <button id='login-button' type='submit' className='ml-2 mb-10 font-BebasNeue px-1 py-0.25 text-sm rounded-full text-center text-slate-50 transition ease-in-out delay-150 bg-cyan-400 hover:scale-110 hover:bg-cyan-500 duration-300 dark:bg-violet-400 dark:hover:bg-violet-600' onClick={login}>Login</button>
                </div>
            </form>
        </div>
    )
}