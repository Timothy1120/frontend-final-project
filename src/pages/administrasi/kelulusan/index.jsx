import MainLayout from "@/components/MainLayout";
import Button from "@/components/Button";

export default function Kelulusan() {
  return (
    <MainLayout>
      <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
        <div className="text-2xl font-bold mt-8">
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
    </MainLayout>
  );
}
