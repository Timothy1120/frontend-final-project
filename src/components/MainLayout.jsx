import Navbar from "./Navbar";
import Sidebar from "./user/koordinator/Sidebar";
import Footer from "./Footer";
import { useContext } from "react";
import { UserContext } from '../context/UserContext';

const MainLayout = ({ children }) => {
  const { handleLogout, user } = useContext(UserContext);
  const userName = user?.user?.username
  return (
    <div>
      <Navbar onLogout={handleLogout} userName={userName} />
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
