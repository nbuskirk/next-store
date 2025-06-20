'use client';
import ProductCard from '@/components/ProductCard';
import SearchBar from '@/components/SearchBar';

export default function StorePage() {
  return (
    <>
      <SearchBar />
      <div className='flex grid min-h-screen flex-col gap-5 bg-neutral-200 p-15 text-neutral-800 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        <ProductCard id='1' name='Pixel Quest' price={29.99} />
        <ProductCard id='2' name='Sample Product 2' price={19.99} />
        <ProductCard id='3' name='Sample Product 3' price={9.99} />
        <ProductCard id='4' name='Sample Product 4' price={29.99} />
        <ProductCard id='5' name='Sample Product 5' price={19.99} />
        <ProductCard id='6' name='Sample Product 6' price={9.99} />
        <ProductCard id='7' name='Sample Product 7' price={29.99} />
        <ProductCard id='8' name='Sample Product 8' price={19.99} />
        <ProductCard id='9' name='Sample Product 9' price={9.99} />
        <ProductCard id='10' name='Sample Product 10' price={9.99} />
      </div>
    </>
  );
}
