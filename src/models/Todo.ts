import { Instance, types } from 'mobx-state-tree'

const Todo = types.model({
    id: types.identifier,
    task: types.string,
    done: types.boolean
})

export interface TypeOfTodo extends Instance<typeof Todo>{}

export default Todo