import styled from "styled-components"
import NewToDo from './NewTodo/NewTodo'
import TodoList from './TodoList/TodoList'
import ToggleDone from "./ToggleDone/ToggleDone"

const Home = () => {
    return(
        <>
            <Title>Lista de Tareas</Title>
            <ToggleDone/>
            <NewToDo/>
            <TodoList/>
        </>
    )
}

const Title = styled.h1`
    font-weight: 800;
`

export default Home