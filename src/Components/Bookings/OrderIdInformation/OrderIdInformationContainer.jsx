import React from 'react';
import OrderIdInformation from "./OrderIdInformation";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

class OrderIdInformationContainer extends React.Component {


    render() {
        let currentPage = this.props.router.params.orderId;
        let currentOrder = this.props.order.filter(id => id.orderId === currentPage);

        return (
            <OrderIdInformation currentOrder={currentOrder} orderDeliveryInfo={this.props.orderDeliveryInfo}/>
        );
    }
}

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}

let mapStateToProps = (state) => ({
    order: state.OrderReduser.order,
    orderDeliveryInfo: state.OrderReduser.orderDeliveryInfo
})

export default compose(connect(mapStateToProps, null), withRouter)(OrderIdInformationContainer);