import React, { useReducer } from 'react'

interface propState {
    count : number
}

interface propAction {
    type: 'Increment' | 'Decrement';
}

const CountReducer = () => {
    const initialState = {count : 0};

    const reducer = (state : propState, action : propAction) => {
        switch (action.type) {
            case "Increment":
                return {count : state.count + 1
                }
                case "Decrement":
                return {count : state.count - 1
                }
        
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        {state.count}
      <button onClick={()=> dispatch({type:"Increment"})}>Increment</button>
       <button onClick={()=> dispatch({type:"Decrement"})}>Decrement</button>
    </div>
  )
}

export default CountReducer
