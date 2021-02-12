import { observer } from "mobx-react-lite"
import styled from "styled-components"
import useStore from "../../../../hooks/useStore"
import button from '../../../elements/Button/Button'

const ToggleDone = observer(() => {
    const { todos } = useStore()

    return(
        <Button onClick={todos.toggleViewDone}>
            {
                todos.viewDone ? "Mostrar completadas" : "Ocultar completadas"
            }
        </Button>
    )
})

const Button = styled(button)`
    margin: 48px 0 0 0;
`

export default ToggleDone