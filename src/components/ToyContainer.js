import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, setToys }) {

  console.log(toys); 

  return (
    <div id="toy-collection">
      {toys.map(toy => (
        <ToyCard 
        toy = {toy}
        />
      ))}</div>
  );
}

export default ToyContainer;
