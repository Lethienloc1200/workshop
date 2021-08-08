import React from "react";
import "./Checkout.css";
import TongCong from "./TongCong";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {

  const[{basket, user}, dispatch] = useStateValue();


  return (
    <div className="checkout">
      <div className="row">
        <div className="col-md-9 mt-3">

          <img
            className="tuan__tuan"
            src="https://www.nowads.com.vn/wp-content/uploads/2019/01/banner.jpg"
          ></img>
          <div>
            <h2 className="btn btn-primary mx-3 my-3" ><b>Hế lô</b>, {user?.email}</h2>
            <h2 className="GioHang"> Giỏ hàng của bạn</h2>

        {
          basket.map(item=>(
            <CheckoutProduct
            id={item.id}
            title ={item.title}
            image ={item.image}
            price={item.price}
            rating={item.rating}
            />
          ))
        }
          </div>
        </div>
        <div className="col-md-3 mt-3">
          <TongCong/>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
