import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

function AppLayout() {
  return (
    <div className="layout grid grid-rows-[auto_1fr_auto] h-screen">
      <Header></Header>

      <div className="overflow-auto">
        <main className="max-w-3xl mx-auto">
          <Outlet></Outlet>
        </main>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default AppLayout;
