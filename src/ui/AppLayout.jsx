import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

function AppLayout() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] ">
      <Header></Header>

      <main className="w-[90%] mx-auto scrollbar-hide overflow-hidden">
        <Outlet></Outlet>
      </main>

      <Footer></Footer>
    </div>
  );
}

export default AppLayout;
