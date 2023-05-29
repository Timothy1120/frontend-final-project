import Button from "@/components/Button";
import MainLayout from "@/components/MainLayout";
import Tooltip from "@/components/Tooltip";
import Link from "next/link";

export default function Transkrip() {
  return (
    <MainLayout>
      <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
        <div className="flex justify-end">
          <Button
            variant="primary"
            id="button-pengajuan"
            name="button-pengajuan"
            text="Ajukan Transkrip"
            to="tambah"
          />
        </div>
        <div className="text-lg text-darkblue-04 font-bold mt-9 mb-6">
          Daftar Pengajuan Proposal
        </div>
        <table className="w-full border-collapse bg-white text-left  font-normal text-gray-500">
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
                Status Proposal
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-sm font-semibold text-neutral-05"
              >
                Status Transkrip
              </th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-02 border-t border-neutral-02">
            <tr className="hover:bg-gray-50 font-normal text-neutral-05 text-sm">
              <td className="px-4 py-2">1.</td>
              <td className="px-4 py-2">
                <div className="font-medium ">11S19016</div>
              </td>
              <td className="px-4 py-2">Timothy Sipahutar</td>
              <td className="px-4 py-2">2019</td>
              <td className="px-4 py-2 text-success">Disetujui</td>
              <td className="px-4 py-2 text-success">Diterbitkan</td>
              <td className="px-4 py-2">
                <Tooltip text={"Tools"} className={"top-10"}>
                  <div className="flex flex-col divide-y divide-neutral-500 text-center">
                    <Link href={"/"} className="px-4 py-2">
                      Unduh
                    </Link>
                    <Link href={"sptjm/detail"} className="px-4 py-2">
                      Detail
                    </Link>
                  </div>
                </Tooltip>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 font-normal text-neutral-05 text-sm">
              <td className="px-4 py-2 ">2.</td>
              <td className="px-4 py-2">
                <div className="font-medium ">11S19016</div>
              </td>
              <td className="px-4 py-2">Timothy Sipahutar</td>
              <td className="px-4 py-2">2019</td>
              <td className="px-4 py-2 text-success">Disetujui</td>
              <td className="px-4 py-2 text-warning">Belum Diterbitkan</td>
              <td className="px-4 py-2">
                <Tooltip text={"Tools"} className={"top-10"}>
                  <div className="flex flex-col divide-y divide-neutral-500 text-center">
                    <Link href={"/"} className="px-4 py-2">
                      Unduh
                    </Link>
                    <Link href={"sptjm/detail"} className="px-4 py-2">
                      Detail
                    </Link>
                  </div>
                </Tooltip>
              </td>
            </tr>
            <tr className="hover:bg-gray-50 font-normal text-neutral-05 text-sm">
              <td className="px-4 py-2 ">3.</td>
              <td className="px-4 py-2">
                <div className="font-medium ">11S19016</div>
              </td>
              <td className="px-4 py-2">Timothy Sipahutar</td>
              <td className="px-4 py-2">2019</td>
              <td className="px-4 py-2 text-warning">Belum Disetujui</td>
              <td className="px-4 py-2 text-warning">Belum Diterbitkan</td>
              <td className="px-4 py-2">
                <Tooltip text={"Tools"} className={"top-10"}>
                  <div className="flex flex-col divide-y divide-neutral-500 text-center">
                    <Link href={"/"} className="px-4 py-2">
                      Unduh
                    </Link>
                    <Link href={"sptjm/detail"} className="px-4 py-2">
                      Detail
                    </Link>
                  </div>
                </Tooltip>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}
