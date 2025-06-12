'use client';
import { useCartStore } from '@/store/cartStore';
import { Minus } from 'lucide-react';
const CartPage = () => {
  const cartItems = useCartStore((state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  return (
    <div className='flex h-[calc(100vh-112.5px)] flex-col items-center justify-center bg-neutral-200 text-neutral-800'>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className='w-full max-w-md space-y-2 rounded bg-white p-4 shadow-lg'>
          {cartItems.map((item) => (
            <li key={item.id} className='flex justify-between border-b p-2'>
              <span>
                {item.name} x {item.quantity}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className='mt-2 cursor-pointer rounded bg-red-500 px-1 py-1 text-white transition-colors hover:bg-red-600'
              >
                <Minus />
              </button>
            </li>
          ))}
          <li className='flex justify-between border-b p-2'>
            <span>
              Total:{' '}
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}{' '}
              USD
            </span>
          </li>
          <button
            onClick={clearCart}
            className='mt-2 w-full cursor-pointer rounded bg-red-500 px-4 py-2 text-white transition-colors hover:bg-red-600'
          >
            Clear Cart
          </button>
        </ul>
      )}
    </div>
  );
};
export default CartPage;
