import styled from "styled-components"
import Button from '../../elements/Button/Button'
import NewToDo from './NewTodo/NewTodo'
import TodoList from './TodoList/TodoList'

function Home(){
    return(
        <>
            <Title>Lista de Tareas</Title>
            <ButtonToggleDone>Mostrar completadas</ButtonToggleDone>
            <NewToDo/>
            <TodoList/>
        </>
    )
}

const ButtonToggleDone = styled(Button)`
    margin: 48px 0 0 0;
`

const Title = styled.h1`
    font-weight: 800;
`

export default Home