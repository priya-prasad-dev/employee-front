import {combineReducers} from 'redux'
import { empReducer } from './empList/emp.reducer'

export const rootReducer = combineReducers({
    emp: empReducer
})