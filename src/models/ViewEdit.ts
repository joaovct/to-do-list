import { Instance, types } from 'mobx-state-tree'

const ViewEdit = types.model({
    id: types.identifier,
    active: types.boolean
})

export interface TypeOfViewEdit extends Instance<typeof ViewEdit>{}

export default ViewEdit