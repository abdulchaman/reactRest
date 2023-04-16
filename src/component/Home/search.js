import React, {Component} from "react";
import axios from "axios";
const lUrl= "http://3.17.216.66:4000/location";
const rUrl = " http://3.17.216.66:4000/restaurant?stateId="
class Search extends Component{
    constructor(){
        super();
        this.state={
            location:'',
            restData:''
        }
    }
    renderLocation=(data)=>{
        if(data){
            return (data.map((item)=>{
                return(
                        <option key={item._id} value={item.state_id}>{item.state}</option>
                )
            })
            )
        }
    }
    handleLocation=(event)=>{
        let stateId = event.target.value;
        axios.get(`${rUrl}${stateId}`)
        .then((res)=>{this.setState({restData:res.data})})
    }
    renderRestaurant=(data)=>{
        if(data){
            return(data.map((item)=>{
                return(
                    <option key={item._id} value={item.restaurant_id}>{item.restaurant_name}</option>
                )
            }))
        }
    }
    render(){
        return(
            <>
              <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <select onChange={this.handleLocation}>
                            <option>Select Location</option>
                            {this.renderLocation(this.state.location)}
                        </select>
                    </div>
                    <div className="col-lg-6">
                        <select>
                            <option>Select Restaurant</option>
                            {this.renderRestaurant(this.state.restData)}
                        </select>
                    </div>
                </div>
              </div>
            </>
        )
    }
    componentDidMount(){
        axios.get(`${lUrl}`)
        .then((res)=>{this.setState({location:res.data})})
    }

}
export default Search;