import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducer from './reducers'

const store = createStore(
    allReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// //ACTION
// const increment = () =>(
//     {
//         type: 'INCREMENT'
//     }
// )
// const decrement = () =>(
//     {
//         type: 'DECREMENT'
//     }
// )

// //REDUCER
// const counter = (state = 0, action) =>{
//     switch(action.type){
//         case 'INCREMENT':
//             return state + 1;
//         case 'DECREMENT':
//             return state - 1
//     }
// }

// let store = createStore(counter)

// //display in the console
// console.log(store.subscribe(() => console.log("redux increment:", store.getState())))

// //DISPATCH
// store.dispatch(increment())

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
