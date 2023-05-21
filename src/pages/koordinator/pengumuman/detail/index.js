import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Footer from "@/components/Footer";

export default function DetailPengumuman() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col justify-between">
          <main id="pengumuman-contents">
            <div className="rounded-sm border border-neutral-02 shadow-md mx-6 my-10 px-12 py-14 min-h-full">
              <div className="text-lg font-bold text-darkblue-04 mb-7">
                Judul Pengumuman
              </div>
              <div className="rounded-md border border-neutral-05 px-5 py-4">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
