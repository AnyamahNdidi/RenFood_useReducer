import React from 'react'
import style from "./mealsummary.module.css"

const MealSummary = () => {
  return (
    <section  className={style.summary}>
          <h2>Best Meal In Town, Deliver to you</h2>
          <p>
              Choose your favorite meal from our brand selection of available meals 
              and enjoy a delecious lunch or dinner at home
          </p>
          <p>
              All our meals are cooked with high-quality ingredients, just-in-time and
              of course by expreince chefs 
          </p>
      </section>
  )
}

export default MealSummary