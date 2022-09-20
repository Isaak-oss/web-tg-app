import React, {useState} from 'react';
import style from "../../Orders.module.css";
import Card_Icon from "../../../Image/UserCategory_Cards_Icon.svg";
import White_Deposit_Icon from "../../../Image/UserCategory_Deposit_White_Icon.svg";
import Online_payment_Icon from "../../../Image/Online_Payment_Icon.svg";
import ATM_Icon from "../../../Image/ATM_Icon.svg";
import Wallet_Icon from "../../../Image/Wallet_Icon.svg";

const TimeCard = (props) => {

    return (
        <div className={style.timeCard}>
            <div className={style.card}>
                <div className={style.paymentCardContent}>
                    <img src={Card_Icon} alt=""/>
                    <div className={style.paymentCardTitle}>
                        {props.selectedTime}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimeCard;