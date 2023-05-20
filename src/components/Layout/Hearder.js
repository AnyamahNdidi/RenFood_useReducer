import React from 'react'
import style from "./header.module.css"
import img from "../assets/meals.jpg"
import HeaderCardButton from './HeaderCardButton'


const Hearder = (props) => {

   
  return (
      <>
          <header className={style.header}>
              <h1>edMeals</h1>
              <HeaderCardButton onHandleShown={props.onHandleShown} />   
          </header>
       { /*using tthe style['main-image] cause the class has a dash sysmbols*/}
          <div className={style['main-image']}>
             <img src={img} alt="a table full of delecious meal" />
          </div>
      </>
  )
}

export default Hearder