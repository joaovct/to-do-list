import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'
import StoreProvider from '../providers/StoreProvider'
import { initialState } from '../models/Store'
import { FC } from 'react'
import { CustomStoreProviderProps } from './types'
import ToggleDone from '../components/templates/Home/ToggleDone/ToggleDone'
import NewTodo from '../components/templates/Home/NewTodo/NewTodo'
import TodoList from '../components/templates/Home/TodoList/TodoList'

export const createTodo = (todoText: string) => {
    userEvent.type(screen.getByPlaceholderText(/nueva tarea/i), todoText)
    userEvent.click(screen.getByLabelText(/nueva tarea/i))
}

export const CustomStoreProvider: FC<CustomStoreProviderProps> = ({children, renderToggleDone = false, renderNewTodo = true, renderTodoList = true}) => {
    return(
        <StoreProvider value={initialState}>
            { children }
            {
                renderToggleDone ? <ToggleDone/> : <></>
            }
            {
                renderNewTodo ? <NewTodo/> : <></>
            }
            {
                renderTodoList ? <TodoList/> : <></>
            }
        </StoreProvider>
    )
}

export const customRender = () => {

}