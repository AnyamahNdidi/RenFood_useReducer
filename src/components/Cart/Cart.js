import React from 'react'
import style from "./Cart.module.css"
import Model from '../UI/Model'
import CardItems from "./CartItem"
import CartContext from '../../store/cart-context'
const Cart = (props) => {

    const { items, totalAmount,addItems,removeItem } = React.useContext(CartContext)

    const usertotalAmount = `₦${totalAmount.toFixed(2)}`
    const hasItem = items.length > 0

    const cartItmeRemoval = (id) => {
        removeItem(id)
    }

    const cartIteamAddHandler = (item) => {
        addItems({...item, amount:1})
    }

    const cartItems = (<ul className={style[`cart-items`]}>{items.map((item) => (
        <CardItems key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItmeRemoval.bind(null, item.id)}
            onAdd={cartIteamAddHandler.bind(null, item)}
        />
    ))}
    </ul>
    )
  return (
      <Model onClose={props.onHandleShown }>
         { cartItems }
          <div className={style.total}>
              <span>Total Amount</span>
              <span>{totalAmount}</span>
          </div>
          <div className={style.actions}>
              <button onClick={props.onHandleShown} className={style["button--alt"]}>close</button>
              {hasItem && <button className={style.button}>Order</button> }
              
          </div>
      </Model>
  )
}

export default Cart