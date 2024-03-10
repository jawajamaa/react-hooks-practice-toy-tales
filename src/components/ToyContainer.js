import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ baseUrl, toys, setToys }) {

  function onHandleLikeClick(id, likes) {
    fetch(baseUrl+`${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "likes": likes + 1,
      })
    })
    .then(r => r.json())
    .then(data =>{
      const updatedToys = toys.filter(toy => {
        return toy.id !== id
      }).toSpliced((id-1),0,data)
      setToys(updatedToys);
    })
  }

  function onHandleDonate(id) {
    fetch(baseUrl+`${id}`,{
      method: "DELETE",
    })
      .then(r => r.json())
      .then(setToys(toys.filter(toy =>{
        return toy.id !== id
      })))
  }

  return (
    <div id="toy-collection">
      {toys.map(toy => (
        <ToyCard
          key = {toy.id} 
          toy = {toy}
          onHandleLikeClick = { onHandleLikeClick }
          onHandleDonate = {onHandleDonate}
        />
      ))}</div>
  );
}

export default ToyContainer;
