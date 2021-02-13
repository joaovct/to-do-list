import { FC } from 'react'
import styled from 'styled-components'
import metrics from '../../../../../styles/metrics'
import colors from '../../../../../styles/colors'
import Input from '../../../../elements/Input/Input'
import Button from '../../../../elements/Button/Button'
import { Props } from './types'
import useStore from '../../../../../hooks/useStore'
import { observer } from 'mobx-react-lite'
import useTodo from './useTodo'

const Todo: FC<Props> = observer(({todo}) => {
    const store = useStore()
    const {toggleDone, taskEdited, handleSetTaskEdited, handleToggleViewEdit, saveEdit} = useTodo({todo})
    const isEditing = (store.todos.activeViewEdit?.id || '') === todo.id

    return(
        <TodoStyled done={todo.done}>
            <fieldset>
                <input aria-label="tarea checkbox" type="checkbox" defaultChecked={todo.done} onChange={toggleDone}/>
                <button onClick={handleToggleViewEdit}>{todo.task}</button>
            </fieldset>
            <EditTodo show={isEditing}>
                <Input
                    value={taskEdited}
                    onChange={handleSetTaskEdited}
                    type="text"
                    aria-label="editar tarea"
                />
                <Button aria-label="guardar" onClick={saveEdit}>Guardar</Button>
            </EditTodo>
        </TodoStyled>
    )
})

const EditTodo = styled.div<{show: boolean}>`
    width: 100%;
    display: ${({show}) => show ? 'flex' : 'none'};
    padding: 0 0 0 calc(${metrics.font.text.size} + 4px);
    margin: 8px 0 0 0;

    ${Input}{
        flex: 2;
        margin: 0 8px 0 0;
    }
    ${Button}{
        flex: 1;
    }

    @media(max-width: 400px){
        flex-flow: column nowrap;

        ${Input},${Button}{
            flex: inherit;
            width: 100%;
        }
        ${Button}{
            margin: 8px 0 0 0;
        }
    }
`

const TodoStyled = styled.div<{done: boolean}>`
    width: 100%;
    
    &:nth-child(n+2){
        margin: 16px 0 0 0;
    }

    fieldset{
        display: flex;
        flex-flow: row wrap;
        align-items: center;

        input[type="checkbox"]{
            height: ${metrics.font.text.size};
            width: ${metrics.font.text.size};
            margin: 0 4px 0 0;
        }

        button{
            font-size: ${metrics.font.text.size};
            font-weight: ${metrics.font.text.weight};
            cursor: text;
            position: relative;

            &:before{
                --height: 2px;
                content: '';
                display: block;
                position: absolute;
                top: calc(50% - (var(--height) / 2));
                height: var(--height);
                width: 0;
                background: ${colors.font.button};
                transition: width .25s;
            }
        }

        ${({done}) => {
            if(done){ 
                return`
                    filter: grayscale(100%);

                    button:before{
                        width: 100%;
                    }
                `
            }
        }} 
    }
 `

export default Todo