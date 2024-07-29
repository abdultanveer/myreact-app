import React from "react";

export default function Greet({name,alias}) {
  console.log(name+alias);
  return(
   
    <h1>Welcome to react {name} a.k.a {alias} </h1>
  )
   
  
}
