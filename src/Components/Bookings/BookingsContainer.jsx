import React from 'react';
import Bookings from "./Bookings";
import {connect} from "react-redux";

class BookingsContainer extends React.Component {
    render() {
        return (
            <Bookings order={this.props.order}/>
        );
    }
}

let mapStateToProps = (state) => ({
    order: state.OrderReduser.order
})


export default connect(mapStateToProps, null)(BookingsContainer);