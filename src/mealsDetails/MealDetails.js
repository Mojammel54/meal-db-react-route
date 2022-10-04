import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const MealDetails = () => {
    const meald = useLoaderData([])
    console.log(meald)
    const { strMeal, strMealThumb, strArea } = meald.meals[0]
    console.log()

    return (
        <div>
            <Card className='w-25 mt-5 container'>
                <Card.Img className='img-fluid  container' variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Text>
                        Name:{strMeal}
                    </Card.Text>
                    <Card.Text>
                        region:{strArea}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MealDetails;