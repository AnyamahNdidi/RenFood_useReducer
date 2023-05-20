import React from 'react'
import style from "./model.module.css"
import ReactDom from "react-dom"


const Backdrop = (props) => {
    return <div className={style.backdrop} onClick={props.onClose}/>
}

const ModelOverLays = (props) => {
    return <div className={style.modal}>
        <div className={style.content}>{props.children }</div>
    </div>
}

const Model = (props) => {
  return (
      <>
          {ReactDom.createPortal(<Backdrop onClose={props.onClose } />, document.getElementById("overlays"))}
          {ReactDom.createPortal(<ModelOverLays>{props.children }</ModelOverLays>, document.getElementById("overlays"))}
      </>
  )
}

export default Model