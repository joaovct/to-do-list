import { useState } from 'react'
import styled from 'styled-components'
import metrics from '../../../../styles/metrics'
import Todo from './Todo/Todo'
import { ToggleViewEdit } from './types'

function TodoList(){
    const [viewsEdit, setViewsEdit] = useState([false, false, false])

    const toggleViewEdit: ToggleViewEdit = (i) => {
        setViewsEdit(views => views.map((view, j) => i === j ? !view : false))
    }

    return(
        <TodoListStyled>
            <Todo
                todo={{id: "1", content: "Aprender Typescript", done: true}}
                viewsEdit={viewsEdit}
                toggleViewEdit={toggleViewEdit}
                index={0}
            />
            <Todo
                todo={{id: "2", content: "Hacer test", done: false}}
                viewsEdit={viewsEdit}
                toggleViewEdit={toggleViewEdit}
                index={1}
            />
            <Todo
                todo={{id: "3", content: "Enviar test", done: false}}
                viewsEdit={viewsEdit}
                toggleViewEdit={toggleViewEdit}
                index={2}
            />
        </TodoListStyled>
    )
}

const TodoListStyled = styled.main`
    display: flex;
    flex-flow: column nowrap;
    margin: 24px 0 0 0;
    padding: 16px 24px;
    width: 100%;
    max-width: 500px;
    box-shadow: ${metrics.effect.boxShadow};
    border-radius: ${metrics.border.default.radius};
`

export default TodoList