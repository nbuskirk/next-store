'use client';
import { Gamepad } from 'lucide-react';
import Link from 'next/link';
// import { logout } from '@/actions/logout';
// import { usePathname } from 'next/navigation';
// import { useCartStore } from '@/store/cartStore';
import styles from './navbar.module.css';

interface MenuLink {
  name: string;
  href: string;
  action?: () => void;
}
const primaryMenuLinks: MenuLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Store', href: '/store' },
];

// const secondaryMenuLinks: MenuLink[] = [
//   { name: 'Account', href: '/account' },
//   { name: 'Cart', href: '/cart' },
//   { name: 'Logout', href: '/login', action: logout },
// ];

const Navbar = () => {
  // const pathname = usePathname();
  // const cartItems = useCartStore((state) => state.items);

  return (
    <nav className='sticky top-0 flex justify-between bg-white'>
      <ul className='flex w-full flex-col px-15 sm:flex-row sm:items-center sm:space-x-8'>
        <Gamepad className='hidden text-neutral-800 sm:block' strokeWidth={2} />
        {primaryMenuLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className={`relative flex py-6 text-sm font-medium tracking-[3px] text-neutral-800 uppercase ${styles.navLink}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      {/* <ul className='flex items-center space-x-8 px-15'>
        {secondaryMenuLinks.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              onClick={link.action}
              className='flex py-6 text-neutral-800'
            >
              {link.name === 'Cart' && cartItems.length > 0 ? (
                <>
                  <ShoppingCart />
                </>
              ) : link.name === 'Logout' ? (
                <LogOut />
              ) : (
                <UserRound />
              )}
            </Link>
          </li>
        ))}
      </ul> */}
    </nav>
  );
};

export default Navbar;
