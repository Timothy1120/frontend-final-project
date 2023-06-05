import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/user/Sidebar";
import Button from "@/components/Button";

export default function Kelulusan() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col justify-between">
          <main id="kelulusan-contents">
            <div className="m-5 px-5 py-5">
              <div className="text-lg font-bold text-darkblue-04 mt-9 mb-14">
                Daftar Lulus Penerimaan Mitra
              </div>
              <table className="w-full border-collapse bg-white text-left text-xs font-normal text-gray-500 max-w-4xl">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      NIM
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      Nama Mahasiswa
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      Program
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      Mitra
                    </th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-02 border-t border-neutral-02">
                  <tr className="hover:bg-gray-50 font-normal text-neutral-05 text-sm">
                    <td className="px-4 py-2">1.</td>
                    <td className="px-4 py-2">11S19016</td>
                    <td className="px-4 py-2">Timothy Sipahutar</td>
                    <td className="px-4 py-2">Magang</td>
                    <td className="px-4 py-2 ">PT. Ruang Belajar</td>
                    <td className="px-4 py-2">
                      <Button
                        variant="primary"
                        text="Tools"
                        to="kelulusan/detail"
                        textSize={"text-sm"}
                      />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 font-normal text-neutral-05 text-sm">
                    <td className="px-4 py-2">2.</td>
                    <td className="px-4 py-2">11S19016</td>
                    <td className="px-4 py-2">Timothy Sipahutar</td>
                    <td className="px-4 py-2">Studi Independen</td>
                    <td className="px-4 py-2 ">PT. LENTERA BANGSA BENDERANG</td>
                    <td className="px-4 py-2">
                      <Button
                        variant="primary"
                        text="Tools"
                        to="kelulusan/detail"
                        textSize={"text-sm"}
                      />
                    </td>
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
