import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/Sidebar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Proposal() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col justify-between">
          <main id="proposal-contents">
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
              <div className="flex space-x-8">
                <Button
                  variant="primary"
                  id="terbitkan-proposal"
                  name="terbitkan-proposal"
                  text="Terbitkan Proposal"
                  to="/"
                  textSize="text-sm"
                />
                <Button
                  variant="primary"
                  id="tambah-dokumen"
                  name="tambah-dokumen"
                  text="Tambah Dokumen"
                  to="upload-dokumen"
                  textSize="text-sm"
                />
                <Button
                  variant="primary"
                  id="mahasiswa-eligible"
                  name="mahasiswa-eligible"
                  text="Mahasiswa Eligible"
                  to="/"
                  textSize="text-sm"
                />
                <Button
                  variant="primary"
                  id="penerimaan-mitra"
                  name="penerimaan-mitra"
                  text="Lulus Penerimaan Mitra"
                  to="proposal/kelulusan"
                  textSize="text-sm"
                />
              </div>
              <div className="text-base text-darkblue-04 font-bold mt-9 mb-6">
                Daftar Pengajuan Proposal
              </div>
              <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 max-w-4xl">
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
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-02 border-t border-neutral-02">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 font-normal text-neutral-05">1</td>
                    <td className="px-4 py-2 font-normal text-neutral-05">
                      11S19016
                    </td>
                    <td className="px-4 py-2 font-normal text-neutral-05">
                      Timothy Sipahutar
                    </td>
                    <td className="px-4 py-2 font-normal text-neutral-05">
                      2019
                    </td>
                    <td className="px-4 py-2 font-normal text-success">
                      Disetujui
                    </td>
                    <td className="px-4 py-2 flex justify-end">
                      <Button
                        variant="primary"
                        text="Tools"
                        to="/"
                        textSize="text-sm"
                      />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 font-normal text-neutral-05">3</td>
                    <td className="px-4 py-2 font-normal text-neutral-05">
                      11S19016
                    </td>
                    <td className="px-4 py-2 font-normal text-neutral-05">
                      Timothy Sipahutar
                    </td>
                    <td className="px-4 py-2 font-normal text-neutral-05">
                      2019
                    </td>
                    <td className="px-4 py-2 font-normal text-danger">
                      Ditolak
                    </td>
                    <td className="px-4 py-2 flex justify-end">
                      <Button
                        variant="primary"
                        text="Tools"
                        to="/"
                        textSize="text-sm"
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
