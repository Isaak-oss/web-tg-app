import React, {memo, useState} from 'react';
import style from "../Orders.module.css"
import {NavLink} from "react-router-dom";
import back_Icon from "../../Image/back_Icon.svg";
import LocationCard from "./ClearanceCard/LocationCard";
import PaymentCard from "./ClearanceCard/PaymentCard";
import TimeCard from "./ClearanceCard/TimeCard";
import {useForm} from "react-hook-form";
import {setFinalOrderInfo} from "../../../Redux/OrderReduser";


const Clearance = memo((props) => {

    const [selectedPayment, setSelectedPayment] = useState("")
    const [selectedLocation, setSelectedLocation] = useState()
    const [selectedTime, setSelectedTime] = useState("Заказ будет доставлен в течении часа")
    const [comment, setComment] = useState("")
    //console.log(selectedPayment)


    let getSelectedPaymentData = (id = 1) => {
        let currentPaymentCard = props.creditCarts.find(e => e.id === id)
        setSelectedPayment(currentPaymentCard)
    }

    let onSubmit = () => {
        props.setFinalOrderInfo({selectedPayment, selectedLocation, selectedTime})
    }



    let [currentLocation, setCurrentLocation] = useState(1)

    return (
        <section className={style.clearance}>
            <div className="container">
                <div className={style.orderTitle}>
                    <NavLink to={"/"}> <img className={"backIcon"} src={back_Icon} alt=""/></NavLink>
                    <div>Оформление заказа</div>
                </div>
                <div className={style.clearanceContent}>
                    <div className={style.clearanceTabs}>

                        {props.location.map(e =>
                            <div onClick={() => setCurrentLocation(e.id)} key={e.id}
                                 className={style.clearanceTab}>{e.addressName}</div>
                        )}
                        <NavLink to={"/location/addLocation"}>
                            <div className={style.clearanceTab}>Добавить новый адрес</div>
                        </NavLink>

                    </div>
                    <div className={style.clearanceCards}>

                            <div>
                                <LocationCard setSelectedLocation={setSelectedLocation} location={props.location} currentLocation={currentLocation}/>
                                <PaymentCard selectedPayment={selectedPayment} getSelectedPaymentData={getSelectedPaymentData} setSelectedPayment={setSelectedPayment} creditCarts={props.creditCarts}/>
                                <TimeCard selectedTime={selectedTime}/>
                                <button className={style.button} onClick={onSubmit}>Заказать</button>
                            </div>
                            <div className={style.clearanceComment}>
                                <textarea placeholder={"Комментарий (если есть)"} value={comment} onChange={(e) => {setComment(e.target.value)}} className={style.CommentInput}></textarea>
                            </div>


                    </div>
                </div>
            </div>
        </section>
    );
});

export default Clearance;