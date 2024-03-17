import { Outlet } from 'react-router-dom';
import Header from '../header/Header';

const Layout = () => {
  return (
    <div className={`flex flex-col max-h-screen over `}>
      <Header />
      <div
        className={`w-full flex relative justify-start min-h-full max-h-[calc(100vh-92px)]`}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
