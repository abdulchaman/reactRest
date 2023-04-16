import React from "react";
const Display=(props)=>{
    const renderOrder=({orderData})=>{
        if(orderData){
            return orderData.map((item)=>{
                return(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.rest_name}</td>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>{item.address}</td>
                        <td>{item.cost}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                )
            })
        }
    }
    return(
        <>
            <div className="container">
                <center><h3>Orders</h3></center>
                <table className="table">
                    <thead>
                        <tr>
                            <th>OrderId</th>
                            <th>RName</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Cost</th>
                            <th>ODate</th>
                            <th>Status</th>
                            <th>BankDetails</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderOrder(props)}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default Display;