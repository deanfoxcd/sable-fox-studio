import { getCart } from '../_lib/cartActions';

const Cart: React.FC = function () {
  const cart = getCart();

  console.log(cart);

  return (
    <div>
      <h1 className='min-h-screen'>CART</h1>
    </div>
  );
};

export default Cart;
