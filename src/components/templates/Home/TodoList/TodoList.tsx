import { observer } from 'mobx-react-lite'
import styled from 'styled-components'
import useStore from '../../../../hooks/useStore'
import metrics from '../../../../styles/metrics'
import Todo from './Todo/Todo'

const TodoList = observer(() => {
    const { todos } = useStore()
    const list = todos.viewDone ? todos.list : todos.undoneTodos

    return(
        <TodoListStyled isEmpty={list.length === 0}>
            {
                list.map(todo => (
                    <Todo key={todo.id} todo={todo}/>
                ))
            }
        </TodoListStyled>
    )
})

const TodoListStyled = styled.main<{isEmpty: boolean}>`
    display: flex;
    flex-flow: column nowrap;
    opacity: ${({isEmpty}) => isEmpty ? "0" : "1"};
    pointer-events: ${({isEmpty}) => isEmpty ? "none" : "initial"};
    transition: opacity .25s;
    margin: 24px 0 0 0;
    padding: 16px 24px;
    width: 100%;
    max-width: 500px;
    box-shadow: ${metrics.effect.boxShadow};
    border-radius: ${metrics.border.default.radius};

`

export default TodoList