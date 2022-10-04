import { createBrowserRouter } from "react-router-dom";
import Header from "../Components/Header/Header";
import Meal from "../Components/mealdb/Meal";
import MealDetails from "../mealsDetails/MealDetails";

export const router = createBrowserRouter([

    {
        path: '/',
        element: <Header></Header>,
        children: [


            {
                path: '/meal',
                loader: async () => {
                    return fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
                },
                element: <Meal></Meal>
            },


            {

                path: '/php:name',
                loader: async ({ params }) => {
                    console.log(params)
                  return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.name}`)


                },
                element: <MealDetails></MealDetails>


            }


        ]


    },

    {
        path: '*',
        element: <h1>route not found</h1>
    }




])