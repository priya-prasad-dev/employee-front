import { Grid, List } from "@mui/material"
import TodoItem from "../TodoItem/TodoItem"
import axios from 'axios'
import { useEffect } from "react"
import {connect} from 'react-redux'
import {showEmp} from '../../redux/todoList/todo.action'
const DisplayEmp = ({showTodo,getTodoList}) => {
    useEffect(() => {
      axios.get('http://localhost:8080/show-emp')
      .then(response => showTodo(response.data))
    })
    return(
        <>
            <Grid container>
                <List >
                    {
                        getTodoList.map(
                            todo => <TodoItem 
                                        key={todo.id}
                                        todo={todo}
                                    />
                        )
                    }
                </List>
            </Grid>
        </>
    )
}
const mapDispatchToProps = dispatch => ({
    showEmp: todoList => dispatch(showTodo(todoList)) 
})
const mapStateToProps = state => ({
    getEmpList: state.todo.empList
})
export default  connect(mapStateToProps,mapDispatchToProps)(DisplayTodo)