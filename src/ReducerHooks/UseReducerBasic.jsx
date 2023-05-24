import { useReducer } from "react";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./action";
import { data } from "../data";
import reducer
 from "./reducer";

const defaultState = {
  people: data,
  isLoading: false,
};

const UseReducerBasic = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem =(id)=>
  {
    dispatch({type:REMOVE_ITEM, payload:{id}});

  }
  const clearList =()=>
  {

      dispatch({type:CLEAR_LIST});
    };
    const resetList=()=>
    {
        dispatch({type:RESET_LIST})
    }
  

  return (
    <div>
      {state.people.map((person) => {
        const { name, id } = person;
        return (
          <div key={id}>
            <h1>{name}</h1>
            <button onClick={()=>removeItem(id)}>Remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button onClick={resetList}>reset</button>
      ) : (
        <button onClick={clearList}>Clear</button>
      )}
    </div>
  );
};
export default UseReducerBasic;
