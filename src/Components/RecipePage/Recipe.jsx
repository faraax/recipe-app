import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../Hooks/useFetch';
import './Recipe.css'

export default function Recipe() {
  var { id } = useParams()
  const { data,
    inPending,
    error } = useFetch(`http://localhost:3000/recipe.json`);
  var id = id - 1

  return (
    <div className='recipe'>
      {error && <p className='error'>{error}</p>}
      {inPending && <p className='loading'>Loading . . . </p>}
      {data && (
        <>
          <h2 className='page-title'>{data.recipes[id].title}</h2>
          <p>Takes : {data.recipes[id].cookingTime} to Cook</p>
          <ul>
            {
              data.recipes[id].ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))
            }
          </ul>
          <p className='method'>{data && data.recipes[id].method}</p>
        </>
      )}
    </div>
  );
}
