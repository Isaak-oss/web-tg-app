import React from 'react';
import style from "./Bookings.module.css"
import {NavLink, useNavigate} from "react-router-dom";
import back_Icon from "../Image/back_Icon.svg";

const Bookings = (props) => {
    return (
        <section className={style.bookings}>
            <div className="container">
                <div className="relative">
                    <div className="backIcon"><NavLink to={-1}> <img src={back_Icon} alt=""/> </NavLink></div>
                </div>
                <div className={style.title}>Мои заказы</div>
                {props.order.map(e => <div key={e.id} className={style.orders}>
                    <NavLink to={`/bookings/${e.orderId}`}>
                        <div className={style.bookingCard}>
                            <div className={style.Date}>
                                <div className={style.DateTitle}>
                                    8 апреля 2054
                                </div>
                                <div className={style.DateSubTitle}>
                                    {e.orderId} на {e.order[0].totalPrice}
                                </div>
                            </div>
                        </div>
                    </NavLink>
                </div>)}
            </div>
        </section>
    );
};

export default Bookings;