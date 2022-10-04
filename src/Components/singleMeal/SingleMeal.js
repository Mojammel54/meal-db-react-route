// import React from 'react';

// const SingleMeal = ({ singleMeal }) => {
//     console.log(singleMeal)
//     return (
//         <div>
//             <h1> Name:{singleMeal.strMeal} </h1>
//         </div>
//     );
// };

// export default SingleMeal;

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { NavLink } from 'react-router-dom';
import './SingleMeal.css'
function SingleMeal({ singleMeal }) {

    return (
        <div >
            <CardGroup className='container col-lg-4'>
                <Card>
                    <Card.Img className='img-fluid' variant="top" src={singleMeal.strMealThumb} />
                    <Card.Body >
                        <Card.Title><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to={`/php${singleMeal.idMeal}`}>{singleMeal.strMeal}</NavLink></Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    );
}

export default SingleMeal;