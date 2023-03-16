import Sidebar from "./Sidebar";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Layout() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col">
        <Sidebar></Sidebar>
        <main></main>
      </div>
      <Footer></Footer>
    </div>
  );
}
