import React from 'react'
import classes from "./availablemeal.module.css"
import Card from '../UI/Card';
import MealItems from './MealsItems/MealItems';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeal = () => {
  const mealsLsit = DUMMY_MEALS.map(meal => <MealItems id={meal.id} key={meal.id } name={meal.name} description={meal.description } price={meal.price} />)
  return (
    <section className={classes.meals}>
      <Card>
          <ul>
               {mealsLsit}
          </ul>
      </Card>
      </section>
  )
}

export default AvailableMeal