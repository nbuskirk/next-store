import Banner from './Banner';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Banner />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
