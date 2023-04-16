import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./component/Home/home";
import Listing from "./component/Listing/listing";
import Details from "./component/Details/details";
import PlaceOrder from "./component/booking/placeOrder";
import ViewOrder from "./component/booking/viewOrder";
const Routing = () =>{
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home}></Route>
            <Route path="/listing/:mealId" component={Listing}></Route>
            <Route path="/details" component={Details}></Route>
            <Route path="/placeOrder/:restName" component={PlaceOrder}></Route>
            <Route path="/viewBooking" component={ViewOrder}></Route>
        </BrowserRouter>
    )
}
export default Routing;