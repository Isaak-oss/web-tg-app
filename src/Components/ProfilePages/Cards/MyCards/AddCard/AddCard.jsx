import React, {useState} from "react";
import style from "../MyCard.module.css"
import {NavLink, useNavigate,} from "react-router-dom";
import back_Icon from "../../../../Image/back_Icon.svg";
import {useForm} from "react-hook-form";


const AddCard = (props) => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        props.addNewCard(data);
        navigate(-1)
    };

    let normalizeCardNumber = (value) => {
        return value.replace(/\s/g, "").match(/.{1,4}/g)?.join(" ").substr(0, 19) || ""
    }

    let normalizeCardData = (value) => {
        return value.replace(/\s/g, "").match(/.{1,2}/g)?.join(" ").substr(0, 5) || ""
    }

    return (
        <section className={style.card}>
            <div className="container">
                <div className="relative">
                    <div className="backIcon"><NavLink to={"/cards"}> <img src={back_Icon} alt=""/> </NavLink></div>
                </div>
                <div className={style.title}>Добавление карты</div>
                <div className={style.cardContent}>
                    <form onSubmit={handleSubmit(onSubmit)}>


                        <div className={style.inputGroup}>
                            <div>
                                <p className={style.subtitle}>Номер карты</p>
                                <input className={style.inputFormLong}
                                       {...register("cardNumber", {
                                           required: "Это поле должно быть заполнено",
                                           minLength: {message: "Минимум 16 символов"}
                                       })}
                                        placeholder={"0000 0000 0000 0000"}
                                       type={"tel"}
                                       onChange={(event) => {
                                           const {value} = event.target
                                           event.target.value = normalizeCardNumber(value)
                                       }}
                                />
                                <div className={style.error}>{errors.cardNumber?.message}</div>
                            </div>
                            <div>
                                <p className={style.subtitle}>Действительна до</p>
                                <input className={style.inputFormShort}
                                       {...register("cardDate", {
                                           required: "Это поле должно быть заполнено",
                                           minLength: {value: 4, message: "Минимум 4 символов"}
                                       })}
                                       onChange={(event) => {
                                           const {value} = event.target
                                           event.target.value = normalizeCardData(value)
                                       }}
                                />
                                <div className={style.error}>{errors.cardDate?.message}</div>
                            </div>
                        </div>
                        <div className={style.inputGroup}>
                            <div>
                                <p className={style.subtitle}>Имя держателя карты</p>
                                <input className={style.inputFormLong}
                                       {...register("userCardName", {required: "Это поле должно быть заполнено"})}/>
                                <div className={style.error}>{errors.userCardName?.message}</div>
                            </div>
                            <div>
                                <p className={style.subtitle}>CVC2/CVV2</p>
                                <input className={style.inputFormShort} maxLength={3}
                                       type="password" {...register("cardCVC",
                                    {
                                        required: "Это поле должно быть заполнено",
                                        minLength: {value: 3, message: "Минимум 3 символов"}
                                    })} />
                                {errors.cardCVC && <div className={style.error}>Это поле должно быть заполнено</div>}
                            </div>
                        </div>

                        <button className={style.button} type="submit">
                            Добавить
                        </button>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddCard