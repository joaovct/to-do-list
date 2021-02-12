export type ToggleViewEdit = (id: string) => void

export interface ViewEdit {
    id: string
    active: boolean
}