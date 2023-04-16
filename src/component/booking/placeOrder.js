import React, {Component} from "react";
import "./placeOrder.css";
const url="http://3.17.216.66:4000/menuItem";
const placeOrder="http://localhost:9870/order";
class PlaceOrder extends Component{
    constructor(props){
        super(props);
        this.state={
            id:Math.floor(Math.random()*100000),
            rest_name:this.props.match.params.restName,
            name:'Nikita',
            phone:'8908173475',
            email:'nikki@gmail.com',
            address:'YTS 33/10',
            menuItem:'',
            cost:''
        }
    }
    renderMenuItem=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <>
                        <div className="ordr-itm-con" key={item._id}>
                            <div className="ordr-itm-img">
                                <img src={item.menu_image}></img>
                                <h5>{item.menu_name}</h5>
                                <h4>Rs. {item.menu_price}</h4>
                            </div>
                        </div>
                    </>
                )
            })
        }
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    checkOut=()=>{
        let obj = this.state;
        obj.menuItem=sessionStorage.getItem('menu');
        fetch(placeOrder,
            {
                method:"POST",
                headers:{
                    "accept":"application/json",
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(obj)
            })
            .then(this.props.history.push(`/viewBooking`))
    }
    render(){
        return(
            <>
                <div className="container">
                    <div className="row">
                        <form>
                            <div className="row">
                                <div className="panel panel-primary">
                                    <div className="panel-heading">
                                        <h3>Your order from {this.state.rest_name} restaurant</h3>
                                    </div>
                                    <div className="panel-body">
                                        <input type="hidden" name="id" value={this.state.id}></input>
                                        <input type="hidden" name="rest_name" value={this.state.rest_name}></input>
                                        <input type="hidden" name="cost" value={this.state.cost}></input>
                                        <div className="form-group col-lg-6">
                                            <label>Name</label>
                                            <input className="form-control" name="name" value={this.state.name} onChange={this.handleChange}></input>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <label>Phone</label>
                                            <input className="form-control" name="phone" value={this.state.phone} onChange={this.handleChange}></input>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <label>Email</label>
                                            <input className="form-control" name="email" value={this.state.email} onChange={this.handleChange}></input>
                                        </div>
                                        <div className="form-group col-lg-6">
                                            <label>Address</label>
                                            <input className="form-control" name="address" value={this.state.address} onChange={this.handleChange}></input>
                                        </div>
                                       
                                    </div>
                                </div>
                            </div>
                            {this.renderMenuItem(this.state.menuItem)}
                            <div className="row">
                                <div className="col-lg-12">
                                    <h3>Total Price Rs. {this.state.cost}</h3>
                                </div>
                            </div>
                            <button className="btn btn-success" onClick={this.checkOut}>Checkout</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
    componentDidMount(){
        let menuItem=sessionStorage.getItem('menu');
        let orderId=[];
        menuItem.split(",").map((item)=>{
            orderId.push(parseInt(item));
            return "ok";
        });
        fetch(`${url}`, {
            method:"POST",
            headers:{
                "accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(orderId)
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)
            let totalPrice=0;
            data.map((item)=>{
                totalPrice=totalPrice+ Number(item.menu_price);
                return "ok";
            })
            this.setState({menuItem:data, cost:totalPrice})
        })
    }
}
export default PlaceOrder;