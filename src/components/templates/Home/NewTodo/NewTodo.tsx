import styled from 'styled-components'
import Input from '../../../elements/Input/Input'
import Button from '../../../elements/Button/Button'

function NewToDo(){
    return(
        <NewToDoStyled>
            <Input placeholder="Nueva tarea"/>
            <Button>Agregar</Button>
        </NewToDoStyled>
    )
}

const NewToDoStyled = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0 0 0;

    ${Input}{
        margin: 0 8px 0 0;
    }
`

export default NewToDo