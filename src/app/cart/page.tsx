'use client';

import { useEffect, useState } from 'react';
import ProductCard from '../_components/productCard';
import { getCart, updateCartItem } from '../_lib/cartActions';
import { getGuestId } from '../_lib/guestId';
import { Product } from '../types';

const Cart: React.FC = () => {
  const [guestId, setGuestId] = useState<string | null>(null);
  const [cart, setCart] = useState<Product[]>([]);
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  useEffect(() => {
    const id = getGuestId();
    setGuestId(id);

    getCart(id).then((cartData) => {
      if (cartData) {
        console.log('Cart Data:', cartData);

        const newQuantities: Record<string, number> = {};
        cartData.forEach((product) => {
          if (product.id) {
            newQuantities[product.id] = (newQuantities[product.id] || 0) + 1;
          }
        });
        setQuantities(newQuantities);

        const uniqueProducts = cartData.filter(
          (prod, i, self) => i === self.findIndex((p) => p.id === prod.id)
        );
        setCart(uniqueProducts);
        console.log('Cart:', uniqueProducts);
      }
    });

    console.log('Guest id:', id);
  }, []);

  // const updateQuantity = (productId: string, quantity: number) => {
  //   if (!guestId) return;
  //   updateCartItem(guestId, productId, quantity);
  // };

  return (
    <div className='text-white min-h-screen'>
      <ul className='flex flex-wrap items-center justify-center mt-6'>
        {cart?.map((product) => (
          <li
            key={product.id}
            className='p-6'
          >
            <ProductCard
              product={product}
              role='cart'
              quantity={quantities[product.id as string] || 0}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
