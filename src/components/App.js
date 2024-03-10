import React, { useEffect, useState } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([]);

  const baseUrl = "http://localhost:3001/toys/";

  useEffect(()=>{
    fetch(baseUrl)
      .then(r => r.json())
      .then(setToys)
  }, [])

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function onHandleSubmit(data) {
    setToys([
      ...toys, data])
  }

  return (
    <>
      <Header />
      {showForm ? 
        <ToyForm
        baseUrl = { baseUrl } 
        onHandleSubmit = { onHandleSubmit }
        /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer 
        baseUrl = { baseUrl }
        toys = { toys }
        setToys = { setToys }
      />
    </>
  );
}

export default App;
