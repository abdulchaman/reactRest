import React, {Component} from "react";
import axios from "axios";
import QuickDisplay from "./quickDisplay";
import "./quickSearch.css";
const url= "http://3.17.216.66:4000/quicksearch";
class QuickSearch extends Component{
    constructor(){
        super();
        this.state={
            mealData:''
        }
    }
    render(){
        return(
            <>
                <QuickDisplay mealType={this.state.mealData}></QuickDisplay>
            </>
        )
    }
    componentDidMount(){
        axios.get(`${url}`)
        .then((res)=>{this.setState({mealData:res.data})})
    }
}
export default QuickSearch;