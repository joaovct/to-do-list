import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import { createTodo, CustomStoreProvider } from '../../../../utils/test-utils'

describe('Tests for NewTodo component', () => {
    it('Should create a new todo', () => {
        render(<CustomStoreProvider/>)

        const todoTask = "This is a task"

        createTodo(todoTask)
        expect(screen.getByText(todoTask)).toBeInTheDocument()
    })
    it('Should not create a new todo', () => {
        render(<CustomStoreProvider/>)

        const todoTask = " "

        createTodo(todoTask)
        expect(screen.queryByText(todoTask)).not.toBeInTheDocument()
    })
})