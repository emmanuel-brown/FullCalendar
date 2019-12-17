import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {counterReducer} from './reducers/counter'
import {loggedReducer} from './reducers/isLogged'

export default createStore(
    combineReducers({
        counterReducer,
        loggedReducer
    }), 
    composeWithDevTools(
        applyMiddleware(thunk)
    ),
)