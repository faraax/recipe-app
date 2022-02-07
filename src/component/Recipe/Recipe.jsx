import React from 'react';
import { Link } from 'react-router-dom';
import './Recipe.css';


export default function Recipe({ data }) {
    return <div className='recipe-list'>
        {
            data.recipes.map((recipe, index) => (
                <div key={index} className='card'>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make.</p>
                    <div>
                        {
                            recipe.method.substring(0, 100)
                        } ...
                    </div>
                    <Link to={`/recipe/${recipe.id}`}>Cook This</Link>
                </div>
            ))
        }
    </div>;
}
