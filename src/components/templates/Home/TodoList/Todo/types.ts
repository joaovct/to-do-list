import { ToggleViewEdit } from "../types";

export interface Props{
    todo: {
        id: string
        content: string
        done: boolean
    }
    toggleViewEdit: ToggleViewEdit
    viewsEdit: boolean[]
    index: number
}
