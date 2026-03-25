import { Outlet } from 'react-router';
import { Header } from './header';
import { Footer } from './footer';
import { ScrollToTop } from './scroll-to-top';

export function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}