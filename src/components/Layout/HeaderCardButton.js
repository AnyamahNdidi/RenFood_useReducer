import React from 'react'
import style from "./HeaderCarcButton.module.css"
import CartIcon from '../Cart/CartIcon'
import classes from "./HeaderCarcButton.module.css"
import CartContext from "../../store/cart-context"

const HeaderCardButton = (props) => {
    const { items } = React.useContext(CartContext)

    //getting total amount of items added to the cart
    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount

        // console.log(item)
    }, 0)
    console.log(numberOfCartItems)
    
    const [btnIsHighlighted, setBtnIsHighLighted] = React.useState(false)
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ""}`
    
    
    React.useEffect(() => {
        if (items.length === 0 )
        {
            return;
        }
        setBtnIsHighLighted(true)
       const timer = setTimeout(() => {
            setBtnIsHighLighted(false)
        }, 300)

        return () => {
            clearTimeout(timer)
        }
    },[items])

    return (
      
      <button
          onClick={props.onHandleShown}
          className={btnClasses}>
          <span className={classes.icon}>
              <CartIcon/>
          </span>
          <span
              
          >you Cart</span>
          <span className={classes.badge}>
              {numberOfCartItems}
          </span>
      </button>
  )
}

export default HeaderCardButton