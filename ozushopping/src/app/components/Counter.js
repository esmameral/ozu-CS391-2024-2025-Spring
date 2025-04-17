import { useReducer } from "react";
function reducer(state, action) {
    switch (action.type) {
      case 'increment':
        return {count: state.count + 1};
      case 'decrement':
        return {count: state.count - 1};
      default:
        throw new Error();
    }
  } 

  
export default function Counter(){
    const initialState = { count: 1 }
    const [state, dispatch] = useReducer(reducer, initialState);
    function handleIncrement() {
        dispatch({ type: "increment" });
      }
    function handleDecrement() {
        dispatch({ type: "decrement" });
      }
      return (
        <div >
          <h5>Count:{state.count}</h5>
          <button onClick={handleIncrement}>Increment</button>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      );
    
}