import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const Banner = () => {
  return (
    <div className='banner w-full bg-slate-950 py-3 shadow-md'>
      <div className='h-full items-center justify-between text-center'>
        <div
          className={`px-4 text-sm font-medium tracking-[3px] text-stone-100 uppercase ${rubik.className}`}
        >
          New Products | Banner Test | Dynamic Region
        </div>
      </div>
    </div>
  );
};
export default Banner;
