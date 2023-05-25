import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function TambahBatch() {
  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <div className="flex flex-row">
        <Sidebar></Sidebar>
        <div className="w-full flex flex-col justify-between">
          <main id="tambah-batch-contents">
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
              <div className="text-lg font-bold mb-14">Batch MBKM</div>
              <form>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="gelombang-program"
                      className="block font-medium mb-2"
                    >
                      Gelombang Program
                    </label>
                    <input
                      type="text"
                      id="gelombang-program"
                      name="gelombang-program"
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="tahun-ajaran"
                      className="block font-medium mb-2"
                    >
                      Tahun Ajaran
                    </label>
                    <input
                      type="text"
                      id="tahun-ajaran"
                      name="tahun-ajaran"
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="semester"
                      className="block font-medium mb-2"
                    >
                      Semester
                    </label>
                    <input
                      type="text"
                      id="semester"
                      name="semester"
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="ipk-minimum"
                      className="block font-medium mb-2"
                    >
                      IPK Minimum
                    </label>
                    <input
                      type="text"
                      id="ipk-minimum"
                      name="ipk-minimum"
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-10">
                  <Button
                    id="submit-batch"
                    name="submit-batch"
                    text="Buka"
                    to="/batch/create/new"
                    variant="primary"
                  />
                </div>
              </form>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
