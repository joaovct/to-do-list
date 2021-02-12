import { createContext } from 'react'
import { TypeOfStore } from '../models/Store'

export const StoreContext = createContext<TypeOfStore>({} as TypeOfStore)

const Provider = StoreContext.Provider
export default Provider