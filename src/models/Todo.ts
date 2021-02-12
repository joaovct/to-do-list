import { types, Instance } from 'mobx-state-tree'

const Todo = types.model({
    id: types.identifier,
    task: types.string,
    done: types.boolean
})

export interface TypeOfInstance extends Instance<typeof Todo>{}

export default Todo