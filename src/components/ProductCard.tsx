'use client';

import { useCartStore } from '@/store/cartStore';
import Image from 'next/image';

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
      <h2 className='text-xl font-normal'>{name}</h2>
      <p className='text-gray-700'>${price.toFixed(2)}</p>
      <Image
        src='/box2.png'
        alt={name}
        width={200}
        height={200}
        className='mt-4 w-full'
      />
      <button
        onClick={handleAddToCart}
        className='mt-5 w-full cursor-pointer bg-neutral-950 px-4 py-2 text-white transition-colors duration-500 hover:bg-neutral-600'
      >
        Add to Cart
      </button>
    </div>
  );
};
export default ProductCard;
