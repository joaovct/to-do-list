import { types, Instance, cast } from 'mobx-state-tree'
import { nanoid } from 'nanoid'
import Todo from './Todo'

const Todos = types
    .model("Todos", {
        list: types.array(Todo)
    })
    .views(self => {
        return {
            get doneTodos(){
                return self.list.filter(todo => todo.done)
            },
            get undoneTodos(){
                return self.list.filter(todo => !todo.done)
            }
        }
    })
    .actions(self => {
        return {
            addTodo(task: string){
                self.list.push({
                    id: nanoid(),
                    task: task,
                    done: false
                })
            },
            editTodo(id: string, {task, done}: {task?: string, done?: boolean}){
                self.list = cast(self.list.map(todo => {
                    if(todo.id === id)
                        todo.task = task || todo.task
                        todo.done = done !== undefined ? done : todo.done
                    return todo
                }))
            }
        }
    })

export const initialState = Todos.create({
    list: []
})

export interface TypeOfInstance extends Instance<typeof Todos>{}

export default Todos