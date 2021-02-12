import { createContext } from 'react'
import { TypeOfInstance as TypeOfStore } from '../models/Store'

export const StoreContext = createContext<TypeOfStore>({} as TypeOfStore)

const StoreProvider = StoreContext.Provider
export default StoreProvider