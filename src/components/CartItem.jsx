import { useState } from 'react';

function CartItem({ productName, price }){
const [quantity, setQuantity] = useState(1);
      const totalPrice = price * quantity;

        // دالة الزيادة
  const increase = () => {
    setQuantity(quantity + 1);
  };
  //دالة الانقاص
  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
return (
    <div className="cart-item">
      <h3>{productName}</h3>
      <p>السعر: {price} دولار</p>

      <div className="quantity-controls">
        <button onClick={decrease}>-</button>
        <span>{quantity}</span>
        <button onClick={increase}>+</button>
      </div>

      <p>الإجمالي: {totalPrice} دولار</p>
    </div>
  );
}
export default CartItem;
