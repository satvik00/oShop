import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal.js";
import { useStateValue} from "./StateProvider";

function Checkout( ) {
  const [{basket}, dispatch] = useStateValue();
    return (
      
          <div className="checkout">
              <div className="checkout_left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout_ad" />
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                </div>

                {basket.map(item => (
                  <CheckoutProduct 
                    id={item.id}
                    title={item.title}
                    image= {item.image}
                    price = {item.price}
                    rating = {item.rating}
                  />
                ))}
              </div>

              <div className="checkout_right">
                <Subtotal />
              </div>
          </div>
     
    );
  }
  
  export default Checkout;