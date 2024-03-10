import React from "react";

function ToyCard({toy, onHandleLikeClick, onHandleDonate}) {
  const {id, name, image, likes} = toy;

  function handleClick() {
    onHandleDonate(id);
  }
  
  function handleLikeClick() {
    onHandleLikeClick(id, likes);
  }

  return (
    <div className="card">
      <h2>{ name }</h2>
      <img
        src={ image }
        alt={ name }
        className="toy-avatar"
      />
      <p>{ likes } Likes </p>
      <button 
        className="like-btn"
        onClick = { handleLikeClick }
        >
          Like {"<3"}
          </button>
      <button 
        className="del-btn"
        onClick = { handleClick }
        >
          Donate to GoodWill
          </button>
    </div>
  );
}

export default ToyCard;
