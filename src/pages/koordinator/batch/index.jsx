import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function BukaBatch() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col justify-between">
          <main id="buka-batch-contents">
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
              <div className="flex justify-end">
                <Button
                  variant="primary"
                  id="button-buka-batch"
                  name="button-buka-batch"
                  text="Buka Batch"
                  to="/batch/create"
                />
              </div>
              <div className="text-lg font-bold mt-9 mb-14">Riwayat Batch</div>
              <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 max-w-4xl">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      Batch
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      Jumlah Peserta
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      Rentang Waktu Pelaksanaan
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
                      100 peserta
                    </td>
                    <td className="px-4 py-2 font-normal text-neutral-05">
                      16 Februari 2021 - 6 Juni 2021
                    </td>
                    <td className="px-4 py-2 flex justify-end">
                      <Button
                        variant="primary"
                        text="Lihat Detail"
                        to="/batch/1/detail"
                      />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 font-normal text-neutral-05">2</td>
                    <td className="px-4 py-2 font-normal text-neutral-05">
                      100 peserta
                    </td>
                    <td className="px-4 py-2 font-normal text-neutral-05">
                      30 Agustus 2022 - 1 Januari 2023
                    </td>
                    <td className="px-4 py-2 flex justify-end">
                      <Button
                        variant="primary"
                        text="Lihat Detail"
                        to="/batch/2/detail"
                      />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 font-normal text-neutral-05">3</td>
                    <td className="px-4 py-2 font-normal text-neutral-05">
                      100 peserta
                    </td>
                    <td className="px-4 py-2 font-normal text-neutral-05">
                      16 Februari 2023 - 6 Juni 2023
                    </td>
                    <td className="px-4 py-2 flex justify-end">
                      <Button
                        variant="primary"
                        text="Lihat Detail"
                        to="/batch/3/detail"
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
