import React, {Component} from "react";
import axios from "axios";
import "./listing.css";
import ListingDisplay from "./ListingDisplay";
import CuisineFilter from "../filters/cuisineFilter";
import CostFilter from "../filters/costFilter";
const url = "http://3.17.216.66:4000/restaurant?mealtype_id=";
class Listing extends Component{
    constructor(props){
        super(props);
        this.state={
            restData:''
        }
    }
    dataPerFilter=(data)=>{
        this.setState({restData:data})
    }
    render(){
        return(
            <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="filter-box">
                                <center><h3>Filter</h3></center>
                                <CuisineFilter mealId={this.props.match.params.mealId} restPerCuisine={(data)=>this.dataPerFilter(data)}></CuisineFilter>
                                <CostFilter mealId={this.props.match.params.mealId} restPerCost={(data)=>this.dataPerFilter(data)}></CostFilter>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <ListingDisplay restData={this.state.restData}></ListingDisplay>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    componentDidMount(){
        let mealId=this.props.match.params.mealId;
        sessionStorage.setItem('mealId', mealId);
        axios.get(`${url}${mealId}`)
        .then((res)=>{this.setState({restData:res.data})})
    }
}
export default Listing;