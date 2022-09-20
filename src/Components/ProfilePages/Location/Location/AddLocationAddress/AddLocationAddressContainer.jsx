import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import AddLocationAddress from "./AddLocationAddress";
import {addNewLocationAdderess} from "../../../../../Redux/UserProfileReduser";


class AddLocationAddressContainer extends React.Component {

    render() {
        return (
            <AddLocationAddress addNewLocationAdderess={this.props.addNewLocationAdderess}/>
        )
    }
}



export default compose( connect(null, {addNewLocationAdderess}))(AddLocationAddressContainer)