import React, {memo, useEffect} from 'react';
import style from "../../Orders.module.css"

const LocationCard = memo((props) => {

    let currentClearanceLocation = props.location.find(e => e.id === props.currentLocation)

    useEffect(() => {
        props.setSelectedLocation(currentClearanceLocation)
    }, [props.currentLocation])


    return (
        <div className={style.locationCard}>
            <div className={style.card}>
                <div className={style.locationCardTitle}>
                    {currentClearanceLocation.addressName}
                </div>
                <div className={style.locationCardText}>
                    {currentClearanceLocation.tower} кв./офис {currentClearanceLocation.apartment} этаж {currentClearanceLocation.housefloor}
                    <br/> Для охраны {currentClearanceLocation.security}
                </div>

            </div>
        </div>
    );
});

export default LocationCard;