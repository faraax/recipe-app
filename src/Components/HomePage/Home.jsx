import React from 'react';
import { useFetch } from '../../Hooks/useFetch';
import Recipe from '../../component/Recipe/Recipe';
import './Home.css'

export default function Home() {
  const { data, inPending, error } = useFetch('http://localhost:3000/recipe.json');
  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {inPending && <p className='loading'>Loading . . . </p>}
      {
        data && <Recipe data={data} />
      }
    </div>
  );
}
