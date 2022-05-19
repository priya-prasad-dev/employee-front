import { empActionTypes } from "./emp.type"

const INTIAL_STATE = {
    empList: []
}
export const empReducer = (state=INTIAL_STATE, action) => {
    switch (action.type) {
        case empActionTypes.SHOW_TODOS :
            return {
               ...state,
               empList: action.payload
            }
    
        default:
            return state
    }
}
