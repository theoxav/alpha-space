import { Outlet } from 'react-router-dom';
import Header from '@/components/layouts/Header';
import Navbar from '@/components/layouts/navbar/Navbar';
import Footer from '@/components/layouts/Footer';

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;
