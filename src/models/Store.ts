import { types, Instance } from 'mobx-state-tree'
import Todos from './Todos'

const Store = types.model({
    todos: Todos
})

export const initialState = Store.create({
    todos: {
        list: []
    }
})

export interface TypeOfInstance extends Instance<typeof Store>{}

export default Store