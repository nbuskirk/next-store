const SearchBar = () => {
  return (
    <div className='sticky top-[136px] flex w-full border-t-1 border-b-1 border-solid border-gray-300 bg-neutral-200 px-15 text-[12px] font-normal tracking-[3px] uppercase sm:top-[68px]'>
      <input
        type='text'
        placeholder='SEARCH...'
        className='transition-color w-full border-b-1 border-neutral-200 py-4 text-neutral-400 uppercase placeholder-neutral-400 duration-500 focus:outline-none'
      />
    </div>
  );
};
export default SearchBar;
