import React, {useState} from "react";
import style from "../Orders.module.css"
import back_Icon from "./../../Image/back_Icon.svg"


const OrderItem = (props) => {


    return (
        <div className={style.OrderItems}>

            <div className={style.orderItem}>
                <div className={style.titleAndImg}>
                    <div className={style.img}><img src={props.img} alt=""/></div>
                    <div className={style.title}>
                        {props.ItemTitle}
                        <p style={{color: "#7C7F80", fontSize: 14, paddingTop: 5}}>{props.additionallyTitle}</p>
                    </div>
                </div>
                <div className={style.priceAndCount}>
                    <div className={style.count}>
                        <button className={style.addButton} onClick={() => {
                            props.ValueInc(props.id)
                        }}>
                            +
                        </button>
                        {props.count}

                        <button className={style.addButton} onClick={() => {
                            props.ValueDic(props.id)
                        }}>-</button>
                    </div>
                    <div className={style.price}>
                        {props.totalPrice} р
                    </div>
                </div>
            </div>


        </div>
    )
}

export default OrderItem