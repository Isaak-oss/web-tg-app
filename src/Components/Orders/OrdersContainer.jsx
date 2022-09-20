import React from "react";
import Orders from "./Orders";
import {connect} from "react-redux";
import orderReduser, {setFinalOrder} from "../../Redux/OrderReduser";
import {clearCart} from "../../Redux/UserProfileReduser";


class OrdersContainer extends React.Component {
    render() {
        return (
            <Orders cart={this.props.cart} menu={this.props.menu}
                    setFinalOrder={this.props.setFinalOrder} clearCart={this.props.clearCart}
                    order={this.props.order}/>
        )
    }
}

let mapStateToProps = (state) => ({
    cart: state.UserProfileReduser.cart,
    menu: state.MenuReduser.menu,
    order: state.OrderReduser.order
})


export default connect(mapStateToProps, {setFinalOrder, clearCart})(OrdersContainer)