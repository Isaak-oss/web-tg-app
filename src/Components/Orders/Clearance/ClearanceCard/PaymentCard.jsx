import React, {useState} from 'react';
import style from "../../Orders.module.css"
import Card_Icon from "../../../Image/UserCategory_Cards_Icon.svg"
import White_Deposit_Icon from "../../../Image/UserCategory_Deposit_White_Icon.svg"
import Online_payment_Icon from "../../../Image/Online_Payment_Icon.svg"
import ATM_Icon from "../../../Image/ATM_Icon.svg"
import Wallet_Icon from "../../../Image/Wallet_Icon.svg"
import CardsMaket from "./CardsMaket";


const PaymentCard = (props) => {


    let [toggleDD, setToggleDD] = useState(true)

    return (
        <div className={style.paymentCard}>
            <div className={style.card} onClick={() => setToggleDD(!toggleDD)}>
                <div className={style.paymentCardContent}>
                    <img src={Card_Icon} alt=""/>
                    <div className={style.paymentCardTitle}>
                        Оплата
                    </div>
                    <div
                        className={style.paymentCardText}>{
                        !props.selectedPayment
                            ? props.selectedPayment
                            : !props.selectedPayment.lastNumber ? props.selectedPayment : "**** " + props.selectedPayment.lastNumber}</div>
                </div>
            </div>
            {!toggleDD &&
                <div className={style.DDcontentItems}>
                    <div onClick={(e) => {
                        props.setSelectedPayment(e.target.textContent)
                    }}><CardsMaket img={White_Deposit_Icon} title={"Депозиты"}/></div>

                    {props.creditCarts.map(card => <div key={card.id} onClick={() => {
                        props.getSelectedPaymentData(card.id)
                    }}><CardsMaket setToggleDD={setToggleDD} img={card.paymentSystemWhite}
                                   title={`**** ${card.lastNumber}`}/></div>)}

                    <div onClick={(e) => {
                        props.setSelectedPayment(e.target.textContent)
                    }}><CardsMaket setToggleDD={setToggleDD} img={Online_payment_Icon} title={"Оплата онлайн"}/></div>
                    <div onClick={(e) => {
                        props.setSelectedPayment(e.target.textContent)
                    }}><CardsMaket setToggleDD={setToggleDD} img={ATM_Icon} title={"Картой курьеру"}/></div>
                    <div onClick={(e) => {
                        props.setSelectedPayment(e.target.textContent)
                    }}><CardsMaket setToggleDD={setToggleDD} img={Wallet_Icon} title={"Наличные"}/></div>
                </div>
            }
        </div>
    );
};

export default PaymentCard;