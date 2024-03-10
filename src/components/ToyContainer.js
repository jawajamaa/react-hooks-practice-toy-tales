import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ baseUrl, toys, setToys }) {

  function onHandleLikeClick(id, likes) {
    console.log(id, likes)
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
      console.log(data);
      console.log(data.likes);
      // setToys()
      const updatedToys = toys.find(toy => {
        if (toy.id === id) {
          return toy.likes === data.likes
        }
        console.log(updatedToys);
      })
      
    })
  }

    // const likedToys = toys.map(toy => {
    //   if (toy.id === id) {
    //     toy.likes + 1
    //   }
    // })

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
