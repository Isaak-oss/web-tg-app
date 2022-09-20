import React from "react";
import {withSuspence} from "../HOC/withSuspence/withSuspence";
import OfferContainer from "../Offer/OfferContainer";
import {Route, Routes} from "react-router-dom";

import ModalContentSetCodeContainer
    from "../Common/ModalWindow/ModalWindowForRegistration/ModalWindowSetCode/ModalContentSetCodeContainer";
import ModalContentSetPhoneContainer
    from "../Common/ModalWindow/ModalWindowForRegistration/ModalContentSetPhone/ModalContentSetPhoneContainer";
import DepositsContainer from "../ProfilePages/Deposits/DepositsContainer";
import MyCardContainer from "../ProfilePages/Cards/MyCards/MyCardContainer";
import CardContainer from "../ProfilePages/Cards/MyCards/Mycard/CardContainer";
import LocationContainer from "../ProfilePages/Location/Location/LocationContainer";
import LocationAdressContainer from "../ProfilePages/Location/Location/LocationAdress/LocationAdressContainer";
import AddCardContainer from "../ProfilePages/Cards/MyCards/AddCard/AddCardContainer";
import OrdersContainer from "../Orders/OrdersContainer";
import InformationContainer from "../ProfilePages/Information/InformationContainer";
import PageNotFound from "../pageNotFound/pageNotFound";
import AddLocationAddressContainer
    from "../ProfilePages/Location/Location/AddLocationAddress/AddLocationAddressContainer";
import ClearanceContainer from "../Orders/Clearance/ClearanceContainer";
import BookingsContainer from "../Bookings/BookingsContainer";
import OrderIdInformation from "../Bookings/OrderIdInformation/OrderIdInformation";
import OrderIdInformationContainer from "../Bookings/OrderIdInformation/OrderIdInformationContainer";
const TermsOfUseContainer = React.lazy(() => import("../Terms/TermsOfUse/TermsOfUseContainer"));
const PrivacyPolicyContainer = React.lazy(() => import("../Terms/PrivacyPolicy/PrivacyPolicyContainer"));


export const Routing = (props) => {

    return (
            <Routes>
                <Route path="/termsOfUse/*" element={withSuspence(TermsOfUseContainer)}/>}
                <Route path="/privacyPolicy/*" element={withSuspence(PrivacyPolicyContainer)}/>}
                <Route path="/" element={<OfferContainer /> }/>
                <Route path="/setCode" element={<OfferContainer /> }/>
                <Route path="/deposits" element={<DepositsContainer /> }/>
                <Route path="/cards" element={<MyCardContainer /> }/>
                <Route path="/cards/:cardId/" element={<CardContainer /> }/>
                <Route path="/cards/addCard/" element={<AddCardContainer /> }/>
                <Route path="/location" element={<LocationContainer /> }/>
                <Route path="/location/addLocation" element={<AddLocationAddressContainer /> }/>
                <Route path="/location/:locationId/" element={<LocationAdressContainer /> }/>
                <Route path="/cart" element={<OrdersContainer /> }/>
                <Route path="/profile" element={<InformationContainer /> }/>
                <Route path="/bookings" element={<BookingsContainer /> }/>
                <Route path="/bookings/:orderId/" element={<OrderIdInformationContainer /> }/>
                <Route path="/clearance" element={<ClearanceContainer /> }/>


                <Route path="*" element={<PageNotFound /> }/>
            </Routes>
    )
}

export const RoutingRegistration = () => {
    return(
        <Routes>
            <Route path="/*" element={<ModalContentSetPhoneContainer />} />
            <Route path="/setCode/*" element={<ModalContentSetCodeContainer />} />
        </Routes>
    )
}
