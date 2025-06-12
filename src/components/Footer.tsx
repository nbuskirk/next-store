import { Titillium_Web } from 'next/font/google';

const titillium = Titillium_Web({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const Footer = () => {
  return (
    <footer className='bg-gray-800 bg-neutral-50 p-15 text-gray-800'>
      <h2 className='mb-[20px] text-sm text-[15px] font-medium tracking-[3px] uppercase'>
        Support
      </h2>
      <ul>
        <li>
          <p
            className={`text-sm ${titillium.className} mb-[12px] text-[17px] text-neutral-500 transition-colors duration-500 hover:text-neutral-950`}
          >
            Shipping
          </p>
        </li>
        <li>
          <p
            className={`text-sm ${titillium.className} mb-[12px] text-[17px] text-zinc-500`}
          >
            Return Policy
          </p>
        </li>
        <li>
          <p
            className={`text-sm ${titillium.className} mb-[12px] text-[17px] text-zinc-500`}
          >
            Warranty
          </p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
