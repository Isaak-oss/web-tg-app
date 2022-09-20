import React from 'react';
import style from "../Orders.module.css"
import {NavLink} from "react-router-dom";
import back_Icon from "../../Image/back_Icon.svg";
import {connect} from "react-redux";
import Clearance from "./Clearance";
import {setFinalOrderInfo} from "../../../Redux/OrderReduser";


class ClearanceContainer extends React.Component {
    render() {
        return (
            <Clearance location={this.props.location} creditCarts={this.props.creditCarts}
                       setFinalOrderInfo={this.props.setFinalOrderInfo}/>
        );
    }
}

let mapStateToProps = (state) => ({
    location: state.UserProfileReduser.location,
    creditCarts: state.UserProfileReduser.creditCarts
})

export default connect(mapStateToProps, {setFinalOrderInfo})(ClearanceContainer);