import React from 'react';
import style from "../../Orders.module.css";
import Online_payment_Icon from "../../../Image/Online_Payment_Icon.svg";

const CardsMaket = (props) => {
    return (

            <div className={style.paymentCardSubTitle} onClick={() => {
                if (!props.setToggleDD) {
                    return
                } else {
                    props.setToggleDD(true)
                }
            }}>
                <img src={props.img} alt=""/>
                <div>{props.title}</div>
            </div>

    );
};

export default CardsMaket;