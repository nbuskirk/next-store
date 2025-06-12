const Footer = () => (
  <footer className='bg-gray-800 bg-neutral-50 py-4 text-gray-800'>
    <div className='container mx-auto text-center'>
      <ul>
        <li className='mx-2 inline'>
          <a
            href='/privacy-policy'
            className='text-gray-400 hover:text-gray-200'
          >
            Store
          </a>
        </li>
        <li className='mx-2 inline'>
          <a
            href='/terms-of-service'
            className='text-gray-400 hover:text-gray-200'
          >
            News
          </a>
        </li>
        <li className='mx-2 inline'>
          <a href='/contact' className='text-gray-400 hover:text-gray-200'>
            Status
          </a>
        </li>
      </ul>
    </div>
  </footer>
);
export default Footer;
