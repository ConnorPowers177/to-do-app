import { addDoc, doc, updateDoc, onSnapshot, collection, deleteDoc, orderBy, query } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../firebase'

export type iTask = {
  title: string
  completed: boolean
  created: Date
}

export type iTasks = Record<string, iTask>

type iReturn<T> = [
  iTasks | T | null | [iTasks],
  (id: string, updatedTask: iTask) => void,
  (task: iTask) => void,
  (id: string) => void
];

export function useTasks<T = null>(userId: string, defaultValue: T | null = null): iReturn<T> {
  const [tasks, setTasks] = useState<iTasks | T | null>(defaultValue);
  const taskRef = collection(db, 'Users', userId, 'Tasks')
  const q = query(taskRef, orderBy('created', 'asc'))
  useEffect(
    () => {
      const unsub = onSnapshot(
        q,
        snapshot => {
          setTasks(Object.fromEntries(snapshot.docs.map(d => [d.id, d.data()]) as any))
        });
      return unsub;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const updateTask = function updateTask(id: string, updatedTask: iTask) {
    const taskRef = doc(db, 'Users', userId, 'Tasks', id);
    updateDoc(taskRef, updatedTask);
  }

  const createTask = function newTask(task: iTask) {
    const taskRef = collection(db, 'Users', userId, 'Tasks');
    addDoc(taskRef, task)
  }

  const removeTask = function removeTask(id: string) {
    const taskRef = doc(db, 'Users', userId, 'Tasks', id);
    deleteDoc(taskRef)
  }

  return [tasks, updateTask, createTask, removeTask];
}