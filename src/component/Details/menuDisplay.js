import React,{Component} from "react";
class MenuDisplay extends Component{
     orderId=[];
     placeOrder=(id)=>{
        this.orderId.push(id);
        this.props.finalOrder(this.orderId);
     }
     removeOrder=(id)=>{
        if(this.orderId.indexOf(id)>-1){
            this.orderId.splice(this.orderId.indexOf(id),1);
        }
        this.props.finalOrder(this.orderId)
     }
     renderCart=(orders)=>{
        if(orders){
            return(orders.map((item,index)=>{
                return (
                    <><b key={index}>{item}</b>&nbsp;</>
                )
            }))
        }
     }
     renderMenu=({menuData})=>{
        if(menuData){
            return (menuData.map((item)=>{
                return(
                    <>
                        <div key={item._id} style={{marginBottom:"20px"}}>
                            <span>{item.menu_id}</span>&nbsp;
                            <img src={item.menu_image} style={{width:"150px",height:"150px"}}></img>&nbsp;
                            <span>{item.menu_name}</span>&nbsp;
                            <span>Rs {item.menu_price}</span>&nbsp;
                            <button className="btn btn-primary" onClick={()=>this.placeOrder(item.menu_id)}>+</button>&nbsp;
                            <button className="btn btn-danger" onClick={()=>this.removeOrder(item.menu_id)}>-</button>
                        </div>
                    </>
                )
            }))
        }
    }
    render(){
        return(
            <>
                <div className="row">
                    <div className="col-lg-12">
                        <h3>Menu Items {this.renderCart(this.orderId)} Added</h3>
                    </div>
                </div>
                {this.renderMenu(this.props)}
            </>
        )
    }
}
export default MenuDisplay;