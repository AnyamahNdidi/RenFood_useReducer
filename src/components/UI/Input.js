import React from 'react'
import style from "./input.module.css"

// react ForwardRef allows us to make use of ref thats being pass as parameter

const Input = React.forwardRef((props, ref) => {
  return (
      <div className={style.input}>
          <label htmlFor={props.input.id}>{props.label }</label>
          <input ref={ref} {...props.input} />
      </div>
  )
})

export default Input