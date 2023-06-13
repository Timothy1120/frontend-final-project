import Button from "@/components/Button";
import MainLayout from "@/components/MainLayout";
import { useRouter } from "next/router";
import { AiOutlinePlus } from "react-icons/ai";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import Tooltip from "@/components/Tooltip";
import Spinner from "@/components/Spinner";
import axios from "axios";
import Cookies from "js-cookie";
import Link from "next/link";

export default function Kelulusan() {
    const { user } = useContext(UserContext);
    const router = useRouter();
    let { id } = router.query;
    const token = Cookies.get("token");

    const [dataMahasiswa, setDataMahasiswa] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (router.isReady) {
            const fetchDataMahasiswa = async () => {
                try {
                    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                    const response = await axios.get(
                        `http://localhost:7000/api/mahasiswambkm?is_assign=true`
                    );
                    setTimeout(() => {
                        setDataMahasiswa(response.data.data);
                        setIsLoading(false);
                    }, 300);
                } catch (error) {
                    console.error(error);
                    setIsLoading(false); // Set loading state to false in case of error
                }
            };
            fetchDataMahasiswa();
        }
        console.log(dataMahasiswa);
    }, [router.isReady]);

    const bringToProgress = async (mahasiswambkmid) => {
        try {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            const response = await axios.get(
                `http://localhost:7000/api/bimbingan?mahasiswambkm=${mahasiswambkmid}`
            );
            console.log(response.data.data);
            id = response.data.data[0].id;
        } catch (error) {
            console.error(error);
        } finally {
            router.push(`/batch/detail/laporan/detail/${id}`);
        }
    };

    return (
        <MainLayout>
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 py-2 px-5 min-h-[20rem]">
                <div className="text-lg font-bold text-darkblue-04 mt-9 mb-2">
                    Daftar Mahasiswa MBKM
                    <hr></hr>
                </div>
                {isLoading ? (
                    <Spinner />
                ) : dataMahasiswa.length === 0 ? (
                    <div className="text-2xl font-light text-neutral-03 mt-4 text-center">
                        Belum ada mahasiswa MBKM
                    </div>
                ) : (
                    <table className="w-full border-collapse bg-white text-left text-xs font-normal text-gray-500 ">
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
                                    Nama Mahasiswa
                                </th>
                                <th
                                    scope="col"
                                    className="px-4 py-2 text-sm font-semibold text-neutral-05"
                                >
                                    Prodi
                                </th>
                                <th
                                    scope="col"
                                    className="px-4 py-2 text-sm font-semibold text-neutral-05"
                                >
                                    Jenis MBKM
                                </th>
                                <th
                                    scope="col"
                                    className="px-4 py-2 text-sm font-semibold text-neutral-05"
                                >
                                    Mitra
                                </th>
                                <th
                                    scope="col"
                                    className="px-4 py-2 text-sm font-semibold text-neutral-05"
                                >
                                    Tempat Pelaksanaan
                                </th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-02 border-t border-neutral-02">
                            {dataMahasiswa.map((data, index) => (
                                <tr
                                    className="hover:bg-gray-50 font-normal text-neutral-05 text-sm"
                                    key={data.id}
                                >
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2">{data.nama_mahasiswa}</td>
                                    <td className="px-4 py-2">{data.prodi}</td>
                                    <td className="px-4 py-2">{data.jenis_mbkm}</td>
                                    <td className="px-4 py-2">{data.mitra}</td>
                                    <td className="px-4 py-2 ">{data.tempat_pelaksanaan}</td>
                                    <td className="px-4 py-2">
                                        <Tooltip className={"top-[50px] "} text="Tools">
                                            <div className="flex flex-col divide-y divide-neutral-500 text-center">
                                                <button className="px-4 py-2 hover:bg-gray-200 transition-colors duration-200" onClick={() => bringToProgress(data.id)}>
                                                    Progress Laporan
                                                </button>
                                            </div>
                                        </Tooltip>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </MainLayout>
    );
}
