import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { createTodo, CustomStoreProvider } from "../../../../utils/test-utils"

describe('Tests for ToggleDone component', () => {
    it('Should show marked todos', () => {
        render(<CustomStoreProvider renderToggleDone={true}/>)

        const todoTask = "This is a task"
        
        createTodo(todoTask)
        userEvent.click(screen.getAllByLabelText(/tarea checkbox/i)[0])
        userEvent.click(screen.getByLabelText(/cambiar completadas/i))
        userEvent.click(screen.getByLabelText(/cambiar completadas/i))
        expect(screen.queryByText(todoTask)).toBeInTheDocument()
    })

    it('Should not show marked todos', () => {
        render(<CustomStoreProvider renderToggleDone={true}/>)

        const todoTask = "This is a task"
        
        createTodo(todoTask)
        userEvent.click(screen.getAllByLabelText(/tarea checkbox/i)[1])
        userEvent.click(screen.getByLabelText(/cambiar completadas/i))
        expect(screen.queryByText(todoTask)).not.toBeInTheDocument()
    })
})