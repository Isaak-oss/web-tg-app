import React from 'react';
import style from "../../Bookings.module.css"
import framed from "../../../Image/framed_Icon.svg"
import whiteFramed from "../../../Image/whiteFramed_Icon.svg"
import cooking from "../../../Image/cooking_Icon.svg"
import whiteCooking from "../../../Image/whiteCooking_Icon.svg"
import inDelivery from "../../../Image/inDelevery_Icon.svg"
import whiteInDelivery from "../../../Image/whiteInDelevery_Icon.svg"
import success from "../../../Image/success_Icon.svg"


const StatusBar = ({statusId}) => {
    return (
        <div className={style.statusBar}>
            <div className="relative">
                <div className={style.statusBarContent}>

                    {statusId === 4 ? <div className={style.success}>Доставлено</div> : statusId === 5 ?
                        <div className={style.success}>Отменен</div> :
                        <>
                            <div className={style.line}></div>
                            <div className={style.statusBarStatus}>
                                <div className={style.statusGroup}>
                                    {statusId === 1 ? <img className={style.currentStatus} src={whiteFramed} alt=""/> :
                                        <img className={style.status} src={framed} alt=""/>}
                                    <p>Оформлен</p>
                                </div>
                                <div className={style.statusGroup}>
                                    {statusId === 2 ? <img className={style.currentStatus} src={whiteCooking} alt=""/> :
                                        <img className={style.status} src={cooking} alt=""/>}
                                    <p>Готовиться</p>
                                </div>
                                <div className={style.statusGroup}>
                                    {statusId === 3 ?
                                        <img className={style.currentStatus} src={whiteInDelivery} alt=""/> :
                                        <img className={style.status} src={inDelivery} alt=""/>}
                                    <p>В доставке</p>
                                </div>
                                <div className={style.statusGroup}>
                                    <img className={style.status} src={success} alt=""/>
                                    <p>Готово</p>
                                </div>
                            </div>
                        </>
                    }

                </div>
            </div>
        </div>
    );
};

export default StatusBar;