import React, {Component} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./details.css";
import MenuDisplay from "./menuDisplay";
const url=" http://3.17.216.66:4000/details";
const mUrl=" http://3.17.216.66:4000/menu";
class Details extends Component{
    constructor(props){
        super(props);
        this.state={
            details:"",
            menuDetails:'',
            mealId:sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):1,
            userItem:''
        }
    }
    addToCart=(data)=>{
        this.setState({userItem:data})
    }
    proceed=()=>{
        sessionStorage.setItem('menu',this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }
    render(){
        let details = this.state.details;
        return(
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="rest-det-img">
                                <img src={details.restaurant_thumb}></img>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="rest-det-con">
                                <h1>{details.restaurant_name}</h1>
                                <h2>{details.rating_text}</h2>
                                <h3>Rs. {details.cost}</h3>
                                <h4>Address: {details.address}</h4>
                                <h5>Phone: {details.contact_number}</h5>
                            </div>
                            <Link to={`/listing/${this.state.mealId}`} className="btn btn-danger">Back</Link>&nbsp;
                            <button className="btn btn-success" onClick={this.proceed}>Proceed</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <center><h3>Menu</h3></center>
                        </div>
                    </div>
                    <MenuDisplay 
                    menuData={this.state.menuDetails}
                    finalOrder={(data)=>this.addToCart(data)}
                    >

                    </MenuDisplay>
                </div>
            </>
        )
    }
    async componentDidMount(){
        let restId=this.props.location.search.split("=")[1];
        let restResp= await axios.get(`${url}/${restId}`);
        let menuResp = await axios.get(`${mUrl}/${restId}`);
        this.setState({details:restResp.data[0], menuDetails:menuResp.data})
    }
}
export default Details;