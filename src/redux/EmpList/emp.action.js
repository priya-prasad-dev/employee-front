import { empActionTypes } from "./emp.type"

export const showEmp = (empList) => ({
    type: empActionTypes.SHOW_EMP,
    payload: empList
})