import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function BuatLaporan() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col justify-between">
          <main id="proposal-contents">
            <div className="rounded-sm border border-neutral-02 shadow-md m-6">
              <div className="mx-12 my-14">
                <form>
                  <label
                    className="text-lg font-bold text-darkblue-04"
                    htmlFor="laporan-mingguan"
                  >
                    Laporan Mingguan - Week 1
                  </label>
                  <textarea
                    id="laporan-mingguan"
                    name="laporan-mingguan"
                    className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:ring focus:ring-darkblue-04 focus:ring-opacity-50 mt-4"
                  ></textarea>
                  <div className="flex justify-end">
                    <Button
                      variant="primary"
                      to="/"
                      textSize="text-base"
                      text="Tambah"
                    />
                  </div>
                </form>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
