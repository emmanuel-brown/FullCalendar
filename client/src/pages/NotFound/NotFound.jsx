import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../actions'

function NotFound(){
    const counter = useSelector(state => state.counterReducer)
    const dispatch = useDispatch()
    
    return(
        <>
            <h1>Page was not Found</h1>
            <h1>Counter: { counter }</h1>
            <button onClick={ () => dispatch(increment()) }>add</button>
            <button onClick={ () => dispatch(decrement()) }>subtract</button>
        </>
    )
}



export default NotFound