import { useState } from 'react';

export function useUserId(): [userId: string|null, setUserId: (newUserId: string) => void] {
  const [userId, setUserId] = useState(window.localStorage.getItem('userId'))
  const wrappedSetUserId = (newUserId: string) => {
    window.localStorage.setItem('userId', newUserId);
    setUserId(newUserId); 
  }
  return [userId, wrappedSetUserId]
}