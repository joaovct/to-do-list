import { useState } from "react"
import useStore from "../../../../../hooks/useStore"
import { UseTodo, OnChangeInputElement } from './types'

const useTodo: UseTodo = ({todo}) => {
    const store = useStore()
    const [taskEdited, setTaskEdited] = useState(todo.task)

    const handleSetTaskEdited: OnChangeInputElement = (e) => {
        setTaskEdited(e.target.value)
    }

    const toggleDone: OnChangeInputElement = (e) => {
        store.todos.editTodo(todo.id, {done: e.target.checked})
    }

    const handleToggleViewEdit = () => {
        store.todos.toggleViewEdit(todo.id)
    }

    const saveEdit = () => {
        store.todos.editTodo(todo.id, {task: taskEdited})
        handleToggleViewEdit()
    }

    return{
        taskEdited,
        handleSetTaskEdited,
        toggleDone,
        handleToggleViewEdit,
        saveEdit
    }
}

export default useTodo