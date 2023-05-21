import Navbar from "./Navbar";
import Sidebar from "./user/koordinator/Sidebar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="font-poppins w-full flex flex-col justify-between">
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
