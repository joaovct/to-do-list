import '@testing-library/jest-dom/extend-expect'
import { render, screen } from "@testing-library/react"
import { createTodo, CustomStoreProvider } from "../../../../../utils/test-utils"
import userEvent from "@testing-library/user-event"

describe('Tests for Todo component', () => {
    const inputLabelText = /editar tarea/i
    const buttonLabelText = /guardar/i
    
    it('Should correctly edit the todo', () => {
        render(<CustomStoreProvider/>)

        const todoTask = "This is a task"
        const todoTaskEdited = "This is a task edited"

        createTodo(todoTask)
        userEvent.type(screen.getAllByLabelText(inputLabelText)[0], `{selectall}{del}${todoTaskEdited}`)
        userEvent.click(screen.getAllByLabelText(buttonLabelText)[0])
        expect(screen.getByText(todoTaskEdited)).toBeInTheDocument()
    })

    it('Should not edit the todo', () => {
        render(<CustomStoreProvider/>)

        const todoTask = "My task 2"
        const todoTaskEdited = " "

        createTodo(todoTask)
        userEvent.type(screen.getAllByLabelText(inputLabelText)[1], `{selectall}{del}${todoTaskEdited}`)
        userEvent.click(screen.getAllByLabelText(buttonLabelText)[1])

        expect(screen.queryByText(todoTaskEdited)).not.toBeInTheDocument()
    })
})