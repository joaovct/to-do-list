import { types, cast } from 'mobx-state-tree'
import { nanoid } from 'nanoid'
import Todo from './Todo'
import ViewEdit from './ViewEdit'

const Todos = types
    .model({
        list: types.array(Todo),
        viewsEdit: types.array(ViewEdit),
        viewDone: true
    })
    .views(self => ({
        get undoneTodos(){
            return self.list.filter(todo => !todo.done)
        },
        get activeViewEdit(){
            return self.viewsEdit.find(view => view.active)
        }
    }))
    .actions(self => ({
        addTodo(task: string){
            self.list.push({
                id: nanoid(),
                task: task,
                done: false
            })
            
            self.viewsEdit = cast(self.list.map((todo) => {
                const activeView = self.activeViewEdit

                if(activeView && todo.id === activeView.id){
                    return {id: todo.id, active: true}
                }
                return {id: todo.id, active: false}
            }))
        },
        editTodo(id: string, {task, done}: {task?: string , done?: boolean}){
            self.list = cast(self.list.map(todo => {
                if(todo.id === id){
                    todo.task = task || todo.task
                    todo.done = done === true || done === false ? done : todo.done
                }
                return todo
            }))
        },
        toggleViewEdit(id: string){
            self.viewsEdit = cast(self.viewsEdit.map(view => {
                if(view.id === id){
                    return {...view, active: !view.active}
                }
                return {...view, active: false}
            }))
        },
        toggleViewDone(){
            self.viewDone = !self.viewDone
        }
    }))

export default Todos