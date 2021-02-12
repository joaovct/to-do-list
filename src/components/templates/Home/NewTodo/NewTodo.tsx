import styled from 'styled-components'
import Input from '../../../elements/Input/Input'
import Button from '../../../elements/Button/Button'
import { FC, useState } from 'react'
import { observer } from 'mobx-react-lite'
import useStore from '../../../../hooks/useStore'

const NewToDo: FC = observer(() => {
    const store = useStore()
    const [task, setTask] = useState('')

    const saveTodo = () => {
        store.todos.addTodo(task)
    }

    return(
        <NewToDoStyled>
            <Input value={task} onChange={e => setTask(e.target.value)} placeholder="Nueva tarea"/>
            <Button onClick={saveTodo}>Agregar</Button>
        </NewToDoStyled>
    )
})

const NewToDoStyled = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0 0 0;

    ${Input}{
        margin: 0 8px 0 0;
    }
`

export default NewToDo