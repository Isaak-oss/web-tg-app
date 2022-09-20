import React from 'react';
import style from "../Bookings.module.css"
import {NavLink} from "react-router-dom";
import back_Icon from "../../Image/back_Icon.svg";
import StatusBar from "./StatusBar/StatusBar";
import Orders from "./Orders/Orders";

const OrderIdInformation = (props) => {
    return (
        <section className={style.orderIdInformation}>
            <div className="container">
                <div className="relative">
                    <div className="backIcon"><NavLink to={-1}> <img src={back_Icon} alt=""/> </NavLink></div>
                </div>
                <div className={style.title}>{props.currentOrder[0].orderId}</div>
                <StatusBar statusId={1}/>
                <Orders orders={props.currentOrder[0]} orderDeliveryInfo={props.orderDeliveryInfo}/>
            </div>
        </section>
    );
};

export default OrderIdInformation;