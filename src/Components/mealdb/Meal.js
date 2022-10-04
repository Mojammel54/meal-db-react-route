
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleMeal from '../singleMeal/SingleMeal';

const Meal = () => {
    const meal = useLoaderData()
   


    return (
        <div>
            <h1 className='bg-danger'>Total:{meal.meals.length}</h1>

            <div className=''>
                {
                    meal.meals.map(singleMeal => <SingleMeal singleMeal={singleMeal}></SingleMeal>)

                }
            </div>

        </div >
    );
};

export default Meal;