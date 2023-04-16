import React, {Component} from "react";
import axios from "axios";
const url ="http://3.17.216.66:4000/filter";
class CuisineFilter extends Component{
    handleChange=(event)=>{
        let mealId = this.props.mealId;
        let cuisineId = event.target.value;
        let cuisineUrl = "";
        if(event.target.value===""){
            cuisineUrl = `${url}/${mealId}`;
        }
        else{
            cuisineUrl = `${url}/${mealId}?cuisine=${cuisineId}`
        }
        axios.get(cuisineUrl,{method:"GET"})
        .then((res)=>{this.props.restPerCuisine(res.data)})
    }
    render(){
        return(
            <>
                <center><h3>Cuisine Filter</h3></center>
                <hr></hr>
                <div style={{marginLeft:"15%"}} onChange={this.handleChange}>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="" />All
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="1" />North Indian
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="2" />South Indian
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="3" />Chinese
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="4" />Fast Food
                    </label>
                    <label className="radio">
                        <input type="radio" name="cuisine" value="5" />Street Food
                    </label>
                </div>
            </>
        )
    }
}
export default CuisineFilter;
