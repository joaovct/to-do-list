import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import useStore from '../../../../hooks/useStore'
import metrics from '../../../../styles/metrics'
import Todo from './Todo/Todo'
import { ToggleViewEdit, ViewEdit } from './types'

const TodoList = observer(() => {
    const { todos } = useStore()
    const [viewsEdit, setViewsEdit] = useState<ViewEdit[]>([])

    useEffect(() => {
        console.log(todos.list)

        setViewsEdit(currentArray => {
            let newArray: ViewEdit[] = []

            for(let i = 0; i < todos.list.length; i++){
                let item = currentArray[i] || {id: todos.list[i].id, active: false}
                newArray.push(item)
            }

            return newArray
        })

    },[todos])

    const toggleViewEdit: ToggleViewEdit = (id) => {
        setViewsEdit(views => views.map(view => {
            if(view.id === id)
                return {...view, active: !view.active}
            return {...view, active: false}
        }))
    }

    return(
        <TodoListStyled>
            {
                todos.list.map(todo => (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        viewsEdit={viewsEdit}
                        toggleViewEdit={toggleViewEdit}
                    />
                ))
            }
        </TodoListStyled>
    )
})

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