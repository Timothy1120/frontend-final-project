import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/user/koordinator/Sidebar";

export default function Eligible() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col justify-between">
          <main id="eligible-contents">
            <div className="m-5 px-5 py-5">
              <div className="text-lg font-bold text-darkblue-04 mt-9 mb-14">
                Daftar Mahasiswa Eligible
              </div>
              <table className="w-full border-collapse bg-white text-left text-xs font-normal text-gray-500 max-w-3xl">
                <thead className="bg-gray-50 text-base">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-2 font-semibold text-neutral-05"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 font-semibold text-neutral-05"
                    >
                      NIM
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 font-semibold text-neutral-05"
                    >
                      Nama Mahasiswa
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 font-semibold text-neutral-05"
                    >
                      Kelas
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 font-semibold text-neutral-05"
                    >
                      Indeks Prestasi Kumulatif
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-02 border-t border-neutral-02 text-base">
                  <tr className="hover:bg-gray-50 font-normal text-neutral-05">
                    <td className="px-4 py-4 ">1.</td>
                    <td className="px-4 py-4">11S19016</td>
                    <td className="px-4 py-4">Timothy Sipahutar</td>
                    <td className="px-4 py-4">13IF2</td>
                    <td className="px-4 py-4">3.5</td>
                  </tr>
                  <tr className="hover:bg-gray-50 font-normal text-neutral-05">
                    <td className="px-4 py-4 ">2.</td>
                    <td className="px-4 py-4">11S19016</td>
                    <td className="px-4 py-4">Timothy Sipahutar</td>
                    <td className="px-4 py-4">13IF2</td>
                    <td className="px-4 py-4">3.5</td>
                  </tr>
                  <tr className="hover:bg-gray-50 font-normal text-neutral-05">
                    <td className="px-4 py-4 ">3.</td>
                    <td className="px-4 py-4">11S19016</td>
                    <td className="px-4 py-4">Timothy Sipahutar</td>
                    <td className="px-4 py-4">13IF2</td>
                    <td className="px-4 py-4">3.5</td>
                  </tr>
                  <tr className="hover:bg-gray-50 font-normal text-neutral-05">
                    <td className="px-4 py-4 ">4.</td>
                    <td className="px-4 py-4">11S19016</td>
                    <td className="px-4 py-4">Timothy Sipahutar</td>
                    <td className="px-4 py-4">13IF2</td>
                    <td className="px-4 py-4">3.5</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
