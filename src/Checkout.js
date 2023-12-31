import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal';
import Checkoutproduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
function Checkout() {

    const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://wp.disruptiveadvertising.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png"
          alt=""></img>
        <h3>Hello</h3>
        <h2 className="checkout_title">Your shopping Basket</h2>
        {basket.map((item) => (
          <Checkoutproduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </div>
      <div className="checkout__right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default Checkout