import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] h-screen">
      <Header></Header>

      
        <main className=" md:w-[75%] mx-auto overflow-auto flex justify-center px-4 scrollbar-hide">
          <Outlet></Outlet>
        </main>

      <Footer></Footer>
    </div>
  );
}

export default AppLayout;
