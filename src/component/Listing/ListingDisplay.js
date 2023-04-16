import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Link } from "react-router-dom";
const ListingDisplay =(props)=>{
    const renderRest=({restData})=>{
        const getMealBtn=(btncolor)=>{
            switch(btncolor){
                case "Breakfast":
                    return "label-primary";
                    break;
                case "Lunch":
                    return "label-success";
                    break;
                case "Dinner":
                    return "label-danger";
                    break;
                default:
                    return "label-default";
            }
        }
        const getCuisineBtn=(btncolor)=>{
            switch(btncolor){
                case "Fast Food":
                    return "label-primary";
                    break;
                case "Street Food":
                    return "label-success";
                    break;
                case "Chinese":
                    return "label-danger";
                    break;
                default:
                    return "label-default";
            }
        }
        if(restData){
            if(restData.length>0){
                return (
                    restData.map((item)=>{
                        return(
                            <>
                                <div className="main-rest-con" key={item.restaurant_id}>
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="ls-rst-img">
                                                <img src={item.restaurant_thumb}></img>
                                            </div>
                                        </div>
                                        <div className="col-lg-7">
                                            <div className="ls-rst-cont">
                                                <Link to={`/details?restId=${item.restaurant_id}`}><h2>{item.restaurant_name}</h2></Link>
                                                <h3>Rating {item.rating_text}</h3>
                                                <h4>Average rating {item.average_rating}</h4>
                                                <h5>Cost Rs. {item.cost}</h5>
                                                <h6>Address: {item.address}</h6>
                                                <div className="meal-type">
                                                    {
                                                        item.mealTypes.map((type)=>{
                                                            return(
                                                                <>
                                                                    <label className={`btn ${getMealBtn(type.mealtype_name)}`} key={type.mealtype_id}>{type.mealtype_name}</label>&nbsp;
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className="cusin-type">
                                                    {
                                                        item.cuisines.map((type)=>{
                                                            return(
                                                                <>
                                                                    <label className={`btn ${getCuisineBtn(type.cuisine_name)}`} key={type.cuisine_id}>{type.cuisine_name}</label>&nbsp;
                                                                </>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                )
            }
            else{
                return(
                    <h3>No Data As Per Filter</h3>
                )
            }
        }
        else{
            return(
                <h3>Loading...</h3>
            )
        }
    }
return(
    <>
        {renderRest(props)}
    </>
)
}
export default ListingDisplay;