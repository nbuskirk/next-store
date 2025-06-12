'use client';

import { useCartStore } from '@/store/cartStore';

const ProductCard = ({
  id,
  name,
  price,
}: {
  id: string;
  name: string;
  price: number;
}) => {
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart({ id, name, price });
  };

  return (
    <div className='rounded bg-white p-4 shadow transition-shadow hover:shadow-lg'>
      <h2 className='text-xl font-semibold'>{name}</h2>
      <p className='text-gray-700'>${price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        className='mt-2 w-full cursor-pointer rounded bg-blue-500 px-4 py-2 text-white transition-colors hover:bg-blue-600'
      >
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;
