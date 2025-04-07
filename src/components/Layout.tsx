import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />

      <main className="p-10 bg-teal-50 dark:bg-gray-800">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
