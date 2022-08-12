export const get = (key: string) => {
  const value = window.localStorage.getItem(key)
  return value ? JSON.parse(value) : undefined
}

export const set = (key: string, value: any) => {
  window.localStorage.setItem(key, JSON.stringify(value))
}

export const remove = (key: string) => {
  window.localStorage.removeItem(key)
}
