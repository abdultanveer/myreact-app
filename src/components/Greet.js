import React from "react";

export default function Greet(props) {
  const {name,alias} = props
  return(
   
    <h1>Welcome to react {name} a.k.a {alias} </h1>
  )
   
  
}
