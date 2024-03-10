import React, { useState } from "react";

function ToyForm({ baseUrl, onHandleSubmit }) {
  const [formData, setformData] = useState({
    name: "",
    image: ""
  });

  const { name, image } = formData;

  function handleChange(evt) {
    setformData({
      ...formData,
      [evt.target.name]: evt.target.value }
    )
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        "name": name,
        "image": image
      })
    })
      .then(r => r.json())
      .then(data =>onHandleSubmit(data));
      setformData({
        name: "",
        image: ""
      });
  }


  
  return (
    <div className="container">
      <form 
        className="add-toy-form"
        onSubmit = { handleSubmit }
        >
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
          value = { name }
          onChange = { handleChange }
          />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value = { image }
          onChange = { handleChange }
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
