import counterReducer from './counter'
import LoggedReducer from './isLogged'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counterReducer,
    LoggedReducer
})

export default allReducers


