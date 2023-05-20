import React from 'react'
import style from "./mealItemform.module.css"
import Input from '../../UI/Input'

const MealItemsForm = (props) => {
    const amountInputRef = React.useRef()
    const [amountIsValid, setAmountIsValid] = React.useState(true)
    const submitHandler = (e) => {
        e.preventDefault()
        const enteredAmount = amountInputRef.current.value
        //converting the value from use ref to number
        const enterAmountNumber = +enteredAmount

        if ( enteredAmount.trim().length === 0 || enteredAmount < 1 || enteredAmount > 5)
        {
            setAmountIsValid(false)
            return
        }

        props.addToCartHandler(enterAmountNumber)


    }


  return (
      <form className={style.form} onSubmit={submitHandler}>
          <Input
              ref={amountInputRef}
              label="Amount"
              input={{
                  
                  // its optional is just for the input to have a different id
                  id: 'amount' + props.id,
                  type: 'number',
                  min: 1,
                  max: 5,
                  step: "1",
                  defaultValue:"1"
             }}
          />
          {!amountIsValid && <p>please enter a valid amount (1 -5)</p>}
          <button> + add</button>
      </form>
  )
}

export default MealItemsForm