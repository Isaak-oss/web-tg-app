import React from 'react';
import {useForm} from "react-hook-form";
import {NavLink, useNavigate} from "react-router-dom";
import style from "../Location.module.css"
import back_Icon from "../../../../Image/back_Icon.svg";

const AddLocationAddress = (props) => {

    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        props.addNewLocationAdderess(data);
        navigate(-1)
    };

    return (
        <section className={style.addLocation}>
            <div className="container">
                <div className="relative">
                    <div className="backIcon"><NavLink to={"/location"}> <img src={back_Icon} alt=""/> </NavLink></div>
                </div>
                <div className={style.title}>Введите адресс</div>
                <div className={style.cardContent}>
                    <div className={style.inputGroup}>
                        <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                            <p className={style.subtitle}>Название адреса</p>
                            <input className={style.inputForm}
                                   {...register("newAddressName", {
                                       required: "Это поле должно быть заполнено",
                                   })}/>
                            <div className={style.error}>{errors.newAddressName?.message}</div>
                            <p className={style.subtitle}>Ваша башня</p>
                            <input className={style.inputForm}
                                   {...register("newTower", {
                                       required: "Это поле должно быть заполнено",
                                   })}
                            />
                            <div className={style.error}>{errors.newTower?.message}</div>

                            <div className={style.row}>
                                <div>
                                    <p className={style.subtitle}>Вход</p>
                                    <input className={style.inputForm}
                                           {...register("newEntry", {
                                               required: "Это поле должно быть заполнено",
                                           })}/>
                                    <div className={style.error}>{errors.newEntry?.message}</div>
                                </div>
                                <p style={{width: 75}}></p>
                                <div>
                                    <p className={style.subtitle}>Этаж</p>
                                    <input className={style.inputForm}
                                           {...register("newHousefloor", {
                                               required: "Это поле должно быть заполнено",
                                           })}/>
                                    <div className={style.error}>{errors.newHousefloor?.message}</div>
                                </div>
                                <p style={{width: 75}}></p>
                                <div>
                                    <p className={style.subtitle}>Квартира, офис</p>
                                    <input className={style.inputForm}
                                           {...register("newApartment", {
                                               required: "Это поле должно быть заполнено",
                                           })}/>
                                    <div className={style.error}>{errors.newApartment?.message}</div>
                                </div>
                                <p style={{width: 75}}></p>
                                <div>
                                    <p className={style.subtitle}>Для охраны</p>
                                    <input className={style.inputForm}
                                           {...register("newSecurity", {
                                               required: "Это поле должно быть заполнено",
                                           })}/>
                                    <div className={style.error}>{errors.newSecurity?.message}</div>
                                </div>
                            </div>
                            <p className={style.subtitle}>Комментарий (если есть)</p>
                            <textarea className={style.inputForm} style={{minHeight: 200}}
                                      {...register("newComment", {required: false})}
                            />
                            <div className={style.buttons}>
                            <button className={style.button} type="submit"> Сохранить</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddLocationAddress;