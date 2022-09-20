import React from 'react';
import {NavLink} from "react-router-dom";
import back_Icon from "../Image/back_Icon.svg";

const PageNotFound = () => {
    return (
        <div className="container">
            <div className="relative">
                <div  className="backIcon"><NavLink to={"/"}> <img src={back_Icon} alt=""/> </NavLink></div>
            </div>
            <h2 style={{paddingTop: 7}}>Страница не найдена</h2>
        </div>
    );
};

export default PageNotFound;