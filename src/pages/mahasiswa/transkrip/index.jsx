import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Button from "@/components/Button";

export default function Transkrip() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col justify-between">
          <main id="transkrip-contents">
            <div className="m-5 px-5 py-5">
              <div className="flex justify-end">
                <Button
                  variant="primary"
                  id="button-pengajuan"
                  name="button-pengajuan"
                  text="Ajukan Transkrip"
                  to="tambah"
                />
              </div>
              <div className="text-lg font-bold text-darkblue-04 mt-9 mb-14">
                Daftar Pengajuan Transkrip
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
                      Angkatan
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm ffont-semibold text-neutral-05"
                    >
                      Status Proposal
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm ffont-semibold text-neutral-05"
                    >
                      Status Transkrip
                    </th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-02 border-t border-neutral-02">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 font-normal text-neutral-05">
                      1.
                    </td>
                    <td className="px-4 py-2">
                      <div className="font-medium text-gray-700">11S19016</div>
                    </td>
                    <td className="px-4 py-2">Timothy Sipahutar</td>
                    <td className="px-4 py-2">2019</td>
                    <td className="px-4 py-2 text-success">Disetujui</td>
                    <td className="px-4 py-2 text-success">Diterbitkan</td>
                    <td className="px-4 py-2">
                      <Button variant="primary" text="Unduh" to="unduh" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 font-normal text-neutral-05">
                      2.
                    </td>
                    <td className="px-4 py-2">
                      <div className="font-medium text-gray-700">11S19016</div>
                    </td>
                    <td className="px-4 py-2">Timothy Sipahutar</td>
                    <td className="px-4 py-2">2019</td>
                    <td className="px-4 py-2 text-success">Disetujui</td>
                    <td className="px-4 py-2 text-warning">
                      Belum Diterbitkan
                    </td>
                    <td className="px-4 py-2">
                      <Button variant="primary" text="Unduh" to="unduh" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 font-normal text-neutral-05">
                      3.
                    </td>
                    <td className="px-4 py-2">
                      <div className="font-medium text-gray-700">11S19016</div>
                    </td>
                    <td className="px-4 py-2">Timothy Sipahutar</td>
                    <td className="px-4 py-2">2019</td>
                    <td className="px-4 py-2 text-warning">Belum Disetujui</td>
                    <td className="px-4 py-2 text-warning">
                      Belum Diterbitkan
                    </td>
                    <td className="px-4 py-2">
                      <Button variant="primary" text="Unduh" to="unduh" />
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
