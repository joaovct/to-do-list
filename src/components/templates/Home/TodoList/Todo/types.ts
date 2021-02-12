import { TypeOfTodo } from '../../../../../models/Todo'

export interface Props{
    todo: TypeOfTodo
}

export interface UseTodo{
    (props: Props): {
        taskEdited: string,
        handleSetTaskEdited: OnChangeInputElement
        toggleDone: OnChangeInputElement,
        handleToggleViewEdit: () => void
        saveEdit: () => void
    }
}

export interface OnChangeInputElement{
    (e: React.ChangeEvent<HTMLInputElement>): void
}