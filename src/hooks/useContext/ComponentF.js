import React, { useContext } from "react";
import { CountContext, ThemeContext } from "../../App";

export default function ComponentF() {
 // const theme = useContext(ThemeContext);
 const countContext = useContext(CountContext)
  return (
    <div>Componentf
    <div><h2>{countContext.countState}</h2> </div>
    <button onClick={()=>countContext.countDispatch('increment')} >Increment</button>
    <button onClick={()=>countContext.countDispatch('decrement')}>decrement</button>
    <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>

    </div>
  )
}
