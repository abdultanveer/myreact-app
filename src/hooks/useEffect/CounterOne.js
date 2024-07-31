import React, { useEffect, useState } from "react";

function CounterOne() {
  const [count, setCount] = useState(0);
//   useEffect(
//     () => {  // this call back will be executed after each rendering is done
//         document.title = `you clicked ${count} times`
//     } 
)
  return (
    <div>
      {" "}
      <div>
        <button onClick={() => setCount(count + 1)}>
          clicked {count} times
        </button>
      </div>
    </div>
  );
}

export default CounterOne;
