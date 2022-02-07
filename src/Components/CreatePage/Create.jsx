import React, { useState, useRef } from 'react';
import './Create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIng, setNewIng] = useState('')
  const [ing, setIng] = useState([])
  const ingredientInput = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title, method, cookingTime, ing);
  }
  const handleAdd = (e) => {
    e.preventDefault();
    const ingredient = newIng.trim()
    if (ingredient && !ing.includes(ingredient)) {
      setIng(preIng => [...preIng, newIng])
    }
    setNewIng('')
    ingredientInput.current.focus()
  }


  return (
    <div className='create'>
      <h2 className='page-title'>Add a New recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input type="text" onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input ref={ingredientInput} type='text' onChange={(e) => setNewIng(e.target.value)}
              value={newIng}
            />
            <button className='btn' onClick={handleAdd}>Add</button>
          </div>
        </label>
        <p>Current ingredients :{ing.map(data => <em key={data}>{data}, </em>)}</p>
        <label>
          <span>Recipe Method:</span>
          <textarea onChange={(e) => setMethod(e.target.value)}
            value={method}
            required />
        </label>
        <label>
          <span>Recipe Time:</span>
          <input type="number" onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required />
        </label>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}