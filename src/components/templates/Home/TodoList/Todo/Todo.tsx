import { FC } from 'react'
import styled from 'styled-components'
import metrics from '../../../../../styles/metrics'
import colors from '../../../../../styles/colors'
import Input from '../../../../elements/Input/Input'
import Button from '../../../../elements/Button/Button'
import { useState } from 'react'
import { Props } from './types'

const Todo: FC<Props> = ({todo, toggleViewEdit, viewsEdit, index}) => {
    const [done, setDone] = useState(todo.done)
    const [content, setContent] = useState(todo.content)
    const [contentEdit, setContentEdit] = useState(todo.content)

    const toggleDone = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDone(e.target.checked)
    }

    const updateContentEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContentEdit(e.target.value)
    }

    const handleToggleViewEdit = () => {
        toggleViewEdit(index)
    }

    const saveEdit = () => {
        setContent(contentEdit)
        handleToggleViewEdit()
    }

    return(
        <TodoStyled done={done}>
            <fieldset>
                <input type="checkbox" defaultChecked={done} onChange={toggleDone}/>
                <button onClick={handleToggleViewEdit}>{content}</button>
            </fieldset>
            <EditTodo show={viewsEdit[index]}>
                <Input value={contentEdit} onChange={updateContentEdit} type="text"/>
                <Button onClick={saveEdit}>Guardar</Button>
            </EditTodo>
        </TodoStyled>
    )
}

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