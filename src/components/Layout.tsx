import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
      <ThemeToggle />
    </div>
  );
};

export default Layout;