import React from 'react';
import "./TongCong.css";
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "./StateProvider";
import { NhanTongGioHang } from './reducer';
function TongCong() {
  const[{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Tổng cộng :  ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={NhanTongGioHang(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
    )
}

export default TongCong
