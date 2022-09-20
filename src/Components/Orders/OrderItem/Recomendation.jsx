import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import style from "./../Orders.module.css"
import ModalWindowForOrder from "../../Common/ModalWindow/ModalWindowForOrder/ModalWindow";
import {NavLink} from "react-router-dom";

const Recommendation = (props) => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrow: false
    }
    return (
        <div className={style.recommendation}>
            <h2>Рекомендуем: </h2>

            <div>
                <Slider {...settings}>
                    {props.menu.map(e => <div key={e.id} className={style.recommendationItems}>
                        <NavLink to={"/"}>
                            <div className={style.recommendationItem}>
                                <div style={{backgroundColor: e.bgcolor, borderRadius: 5,}}>
                                    <img className={style.recommendationItemImg} src={e.ItemOfMenuImg} alt=""/>
                                </div>
                                <div>
                                    <div className={style.recommendationItemTitle}>{e.ItemTitle}</div>
                                    <div className={style.recommendationItemPrice}>{e.ItemPrice} Р</div>
                                </div>
                            </div>
                        </NavLink>
                    </div>)}
                </Slider>

            </div>

        </div>
    );
};

export default Recommendation;