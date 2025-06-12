'use client';
import { Rubik } from 'next/font/google';
import { LogOut, ShoppingCart, UserRound } from 'lucide-react';
import Link from 'next/link';
import { logout } from '@/actions/logout';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useCartStore } from '@/store/cartStore';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const Navbar = () => {
  const pathname = usePathname();
  const cartItems = useCartStore((state) => state.items);

  return (
    <nav
      className={`${rubik.className} sticky top-0 mx-auto flex justify-between border-b-1 border-solid border-gray-300 bg-neutral-50 text-[15px] font-medium tracking-[3px] uppercase`}
    >
      <div className='container mx-auto flex items-center px-10'>
        <Link
          href='/store'
          className={clsx(
            'mx-5 border-b-2 border-neutral-50 py-7 text-gray-800 hover:border-b-2 hover:border-gray-800',
            {
              'border-zinc-800': pathname === '/store',
            }
          )}
        >
          Store
        </Link>
        {/* <Link
          href='/news'
          className={clsx(
            'mx-5 border-b-2 border-neutral-50 py-7 text-gray-800 hover:border-b-2 hover:border-gray-800',
            {
              'border-zinc-800': pathname === '/news',
            }
          )}
        >
          News
        </Link>
        <Link
          href='/status'
          className={clsx(
            'mx-5 border-b-2 border-neutral-50 py-7 text-gray-800 hover:border-b-2 hover:border-gray-800',
            {
              'border-zinc-800': pathname === '/status',
            }
          )}
        >
          Status
        </Link> */}
      </div>
      <div className='flex items-center px-10'>
        <Link href='/account' className='px-5'>
          <UserRound className='text-gray-800' />
        </Link>
        <Link href='/cart' className='px-5'>
          <span className='inline-flex items-center text-sm text-gray-600'>
            <ShoppingCart className='text-gray-800' />
            <span className='ml-1 text-gray-800'>
              {cartItems.length > 0 ? cartItems.length : ''}
            </span>
          </span>
        </Link>
        <Link href='/login' onClick={logout} className='px-5'>
          <LogOut className='text-gray-800' />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
