import React from "react"
import s from "./Item.module.css"
export const Item = ({small, handlerModal, large}:{small?:string, handlerModal: (large?: string) => void, large?: string}) => {
    return <li className={s.galleryItem}>
  <img className={s.image} src={small} alt="pictur" onClick={()=> handlerModal(large)}/>
</li>
}