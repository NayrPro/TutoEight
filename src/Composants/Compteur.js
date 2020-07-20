import React, {useReducer} from 'react'

const initialState = 0

function reducer(state, action) {
    switch (action) {
        case 'INCR':
            return state + 1;
        case 'DECR':
            return state - 1;
        case 'RESET':
            return initialState;        
        default:
            return state;
    }
}

function Compteur() {
    
    const [count, dispatch] = useReducer(reducer, initialState) 
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{dispatch('INCR')}}>Incremente</button>
            <button onClick={()=>{dispatch('DECR')}}>Decremente</button>
            <button onClick={()=>{dispatch('RESET')}}>Reset</button>
        </div>
    )
}

export default Compteur
