import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import * as localStorage from '../local-storage'


let registry: any[] = [];

//replace registry hack with Redux

export function useUser<ForceUser = false>(whoAmI?: string): [user: ForceUser extends false ? (null | iUser) : iUser, setUser: (newUser: User) => void, removeUser: any] {
  const [user, setUser] = useState(localStorage.get('user'))
  useEffect(() => {
    registry.push(setUser)
    return () => { registry = registry.filter(x => x !== setUser) }
  }, [])



  const wrappedSetUser = (fbUser: User) => {
    const newUser: iUser = {
      uid: fbUser.uid,
      email: fbUser.email,
      emailVerified: fbUser.emailVerified,
      isAnonymous: fbUser.isAnonymous,
    }
    localStorage.set('user', newUser)
    registry.forEach(x => x(newUser))
  }

  const removeUser = () => {
    localStorage.remove('user')
    registry.forEach(x => x(null))
  }

  return [user, wrappedSetUser, removeUser]
}

interface iUser {
  uid: string
  email: string | null
  emailVerified: boolean
  isAnonymous: boolean,
}