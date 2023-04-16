import React, {Component} from "react";
import axios from "axios";
const url ="http://3.17.216.66:4000/filter";
class CostFilter extends Component{
    handleChange=(event)=>{
        let mealId = this.props.mealId;
        let cost = event.target.value.split("-");
        let hcost=cost[1];
        let lcost=cost[0];
        let costUrl = "";
        if(event.target.value===""){
            costUrl = `${url}/${mealId}`;
        }
        else{
            costUrl = `${url}/${mealId}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl,{method:"GET"})
        .then((res)=>{this.props.restPerCost(res.data)})
    }
    render(){
        return(
            <>
                <center><h3>Cost Filter</h3></center>
                <hr></hr>
                <div style={{marginLeft:"15%"}} onChange={this.handleChange}>
                    <label className="radio">
                        <input type="radio" name="cost" value="" />All
                    </label>
                    <label className="radio">
                        <input type="radio" name="cost" value="100-300" />100-300
                    </label>
                    <label className="radio">
                        <input type="radio" name="cost" value="301-600" />301-600
                    </label>
                    <label className="radio">
                        <input type="radio" name="cost" value="601-1000" />601-1000
                    </label>
                </div>
            </>
        )
    }
}
export default CostFilter;
