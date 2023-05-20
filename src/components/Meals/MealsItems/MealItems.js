import React from 'react'
// import style from "./mealsitem.module.css"
import style from "./mealsitem.module.css"
import MealItemsForm from './MealItemsForm'
import CartContext from "../../../store/cart-context"

const MealItems = (props) => {
    const price = `₦ ${props.price.toFixed(2)}`

    const {addItems} = React.useContext(CartContext)
    
    const addToCartHandler = (amount) => {
        addItems({
            id: props.id,
            name: props.name,
            amount: amount,
            price:props.price
        })
    }
  return (
      <li className={style.meal}>
          <div>
              <h3>{props.name}</h3>
              <div className={style.description}>
                  {props.description}
              </div>
              <div className={style.price}>
                
              </div>
          </div>
          <div className={style.price}>
              {price}
          </div>
          <div>
              <MealItemsForm id={props.id} addToCartHandler={addToCartHandler } _  />
          </div>
      </li>
  )
}

export default MealItems