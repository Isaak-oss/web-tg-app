import React, {memo, useEffect, useState} from "react";
import style from "./ModalWindow.module.css"
import Spicy_Icon from "../../../Image/Spicy_Icon.png";
import Activated_Icon from "../../../Image/additionally_activate_Icon.svg"
import Diactivated_Icon from "../../../Image/additionally_diactivate_icon.svg"
import whiteClose_Icon from "../../../Image/closeWhite_Icon.svg"

import Additionally from "./Additionally";
import {setOrder} from "../../../../Redux/UserProfileReduser";
import {NavLink} from "react-router-dom";

const ModalWindowForOrder = memo(({
                                 isVisible = false, img, onClose,
                                 isSpicy, bgcolor, ItemTitle,
                                 ItemWeight, setOrder, id,
                                 ItemPrice, ItemText, count, add, Remove
                             }) => {

    let [NewPrice, setNewPrice] = useState(ItemPrice)
    let [ordered, setOrdered] = useState(false)
    let [additionallyTitle, setAdditionallyTitle] = useState()

    useEffect(() => {
        if (NewPrice != ItemPrice) {
            setNewPrice(ItemPrice * count)
        }
    }, [isVisible])


    let submitOrder = () => {
        setOrder({ItemTitle, ItemText, totalPrice: NewPrice, count, img, id, ItemPrice, additionallyTitle})
    }
    let ValueInc = (e, additionalePrice, additionallyTitle) => {
        if (e) {
            if (e.target.checked) {
                setNewPrice(NewPrice + additionalePrice)
                setAdditionallyTitle(additionallyTitle)
            } else {
                setNewPrice(NewPrice - additionalePrice)
                setAdditionallyTitle(null)
            }
        } else {
            setNewPrice(ItemPrice + NewPrice)
        }
    }
    let ValueDic = () => {
        if (count > 1) {
            setNewPrice(NewPrice - ItemPrice)
        }
    }

    let ordereded = () => {
        setOrdered(true)
    }

    const keydownHandler = ({key}) => {
        switch (key) {
            case 'Escape':
                onClose();
                break;
            default:
        }
    };

    React.useEffect(() => {
        document.addEventListener('keydown', keydownHandler);
        return () => document.removeEventListener('keydown', keydownHandler);
    });

    return !isVisible ? null : (
        <div className={style.modal} onClick={onClose}>
            <div className={style.modaldialog} onClick={e => e.stopPropagation()}>
                <div className={style.modalheader} style={{backgroundColor: bgcolor}}>
                    <div className={style.modaltitle}><img src={img} alt=""/></div>
                    <span className={style.modalclose} onClick={onClose}>
                        <img src={whiteClose_Icon} alt=""/>

                    </span>
                    {
                        isSpicy
                            ?
                            <div className={style.MenuSpicyIcon}><img src={Spicy_Icon} alt=""/></div>
                            :
                            null
                    }
                </div>
                <div className={style.modalbody}>
                    <div className={style.modalcontent}>
                        <div className={style.ItemInformationTitle}>{ItemTitle}</div>
                        <div className={style.ItemInformationWeightAndPrice}>{ItemWeight} - {ItemPrice}Р</div>
                        <div className={style.ItemInformationTetx}>{ItemText}</div>
                        <div className={style.additionally}>
                            <p className={style.additionallyTitle}>Дополнительно</p>
                            <div className={style.additionallyItem}>
                                <Additionally title={"Побольше лука"} additionallyPrice={20} additionallyTitle={"Побольше лука"} ValueInc={ValueInc}
                                              id={1}/>
                                <Additionally title={"По домашнему"} additionallyPrice={0} additionallyTitle={"По домашнему"} ValueInc={ValueInc} id={2}/>
                                <Additionally title={"Грибов побольше"} additionallyPrice={300} additionallyTitle={"Грибов побольше"} ValueInc={ValueInc}
                                              id={3}/>
                            </div>
                        </div>
                        <div className={style.buttons}>
                            <div className={style.Count}>
                                <button className={style.MenuButton} onClick={() => {
                                    ValueInc();
                                    add()
                                }}>+
                                </button>
                                <div className={style.ItemCount}>{count}</div>
                                <button className={style.MenuButton} onClick={() => {
                                    ValueDic();
                                    Remove()
                                }}>-
                                </button>
                            </div>
                            {!ordered ?
                                <div className={style.AddOrderButton} onClick={() => {
                                    submitOrder(); ordereded();
                                }}>Добавить {NewPrice}Р</div>
                                :
                                <div className={style.inCard}> <NavLink to={"/cart"}> В корзине</NavLink></div>
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
});

export default ModalWindowForOrder