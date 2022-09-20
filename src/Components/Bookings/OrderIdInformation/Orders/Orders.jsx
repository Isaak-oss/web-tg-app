import React from 'react';
import style from "../../Bookings.module.css"


const Orders = ({orders, orderDeliveryInfo}) => {
    let deliveryPrice = orders.order.reduce((acc, element) => (acc += element.deliveryPrice, acc), 0)
    let totalPrice = orders.order.reduce((acc, element) => (acc += element.totalPrice, acc), 0)
    return (
        <div>
            <div className={style.order}>
                {orders.order.map(e =>
                    <div key={e.id} className={style.orderItem}>
                        <div>
                            <div className={style.orderContent}>
                                <div className={style.orderImg}>
                                    <img src={e.img} alt=""/>
                                </div>
                                <div className={style.orderTitle}>
                                    {e.ItemTitle}
                                </div>
                                <div className={style.subTitle}>
                                    {e.count} шт. {!e.additionallyTitle ?
                                    <div className={style.additionalyTitle}></div> : <> • {e.additionallyTitle}</>}
                                </div>
                                <div className={style.orderPrice}>
                                    {e.totalPrice} Р
                                </div>
                            </div>
                        </div>
                    </div>)}
                <div className={style.delivery}>
                    <div className={style.deliveryTitle}>
                        Доставка
                    </div>
                    <div className={style.orderPrice}>
                        {deliveryPrice} Р
                    </div>
                </div>
                <div className={style.totalPrice}>
                    <div className={style.deliveryTitle}>
                        Итого
                    </div>
                    <div className={style.orderPrice}>
                        {totalPrice} Р
                    </div>
                </div>
                <div className={style.orderDeliveryInfo}>
                    {orderDeliveryInfo.map(e => <div>qs</div>)}
                </div>
            </div>
        </div>
    );
};

export default Orders;