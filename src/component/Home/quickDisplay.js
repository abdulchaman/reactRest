import React from "react";
import {Link} from "react-router-dom";
const QuickDisplay = (props)=>{
    const renderMeal=({mealType})=>{
        if(mealType){
            return(mealType.map((item)=>{
                return (
                    <>
                        <Link to={`/listing/${item.mealtype_id}`} key={item._id}>
                            <div className="col-lg-4">
                                <div className="meal-type">
                                    <div className="meal-img">
                                        <img src={item.meal_image}></img>
                                    </div>
                                    <h3>{item.mealtype}</h3>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                        </Link>
                    </>
                )
            }))
        }
    }
    return(
        <>
            <h1>Data from quick search</h1>
            {renderMeal(props)}
        </>
    )
}
export default QuickDisplay;