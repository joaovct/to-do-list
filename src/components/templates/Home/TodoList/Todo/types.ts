import { TypeOfInstance as TypeOfTodo } from '../../../../../models/Todo'
import { ToggleViewEdit, ViewEdit } from '../types';

export interface Props{
    todo: TypeOfTodo
    viewsEdit: ViewEdit[]
    toggleViewEdit: ToggleViewEdit
}
