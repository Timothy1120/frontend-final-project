import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function CreatePengumuman() {
  return (
    <>
      <div className="font-poppins">
        <Navbar></Navbar>
        <div className="flex flex-row">
          <Sidebar></Sidebar>
          <div className="w-full flex flex-col justify-between">
            <main id="form-create-pengumuman">
              <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
                <p className="text-2xl font-bold">Edit Pengumuman</p>
                <form className="mt-4">
                  <div className="mb-3">
                    <label className="text-base">Judul Pengumuman</label>
                    <input
                      id="title"
                      name="title"
                      type="text"
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="text-base">Kategori</label>
                    <input
                      id="category"
                      name="category"
                      type="text"
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="text-base">Isi Pengumuman</label>
                    <textarea
                      id="category"
                      name="category"
                      type=""
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <Button
                      variant="primary"
                      id="submit-pengumuman"
                      name="submit-pengumuman"
                      text="Edit"
                      to="/pengumuman/create/add"
                    />
                  </div>
                </form>
              </div>
            </main>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  );
}
