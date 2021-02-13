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
        <>
            <NewToDoStyled>
                <Input
                    value={task}
                    onChange={e => setTask(e.target.value)}
                    placeholder="Nueva tarea"
                />
                <Button aria-label="nueva tarea" onClick={saveTodo}>Agregar</Button>
            </NewToDoStyled>
        </>
    )
})

const NewToDoStyled = styled.div`
    display: flex;
    flex-flow: row nowrap;
    margin: 24px 0 0 0;

    ${Input}{
        margin: 0 8px 0 0;
    }

    @media(max-width: 500px){
        width: 100%;

        ${Input}, ${Button}{
            min-width: inherit;
            width: 100%;
        }
        ${Input}{
            flex: 2;
        }
        ${Button}{
            flex: 1;
        }
    }

    @media(max-width: 400px){
        flex-flow: column nowrap;

        ${Input},${Button}{
            flex: inherit;
            margin: 0;
        }

        ${Button}{
            margin: 8px 0 0 0;
        }
    }
`

export default NewToDo