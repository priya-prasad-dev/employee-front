import { todoActionTypes } from "./emp.type"

export const showTodo = (todoList) => ({
    type: todoActionTypes.SHOW_TODOS,
    payload: todoList
})