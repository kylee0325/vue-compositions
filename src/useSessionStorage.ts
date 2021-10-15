import { useStorage, IStorage } from './useStorage'

export function useSessionStorage<T>(key: string, val: T): IStorage<T> {
  return useStorage(key, val, sessionStorage)
}
