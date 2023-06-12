import MainLayout from "@/components/MainLayout";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "@/context/UserContext";
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";
import 'moment/locale/id';
moment.locale('id');

export default function Laporan() {
    const router = useRouter();
    const { user } = useContext(UserContext);
    const { id } = router.query;
    const token = Cookies.get("token");

    // State
    const [bimbingan, setBimbingan] = useState([]);
    const [detailMahasiswa, setDetailMahasiswa] = useState([]);
    const [progressMingguan, setProgressMingguan] = useState([]);

    const axiosInstance = axios.create({
        baseURL: 'http://localhost:7000/api',
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });

    useEffect(() => {
        if (!id) {
            return;
        }
        const fetchBimbingan = async () => {
            try {
                const response = await axiosInstance.get(`/bimbingan/${id}/allprogress`);
                setBimbingan(response.data.data);
                return response.data.data;
            } catch (error) {
                console.log(error);
            } finally {
            }
        };

        const fetchDetailMahasiswa = async (id) => {
            try {
                const response = await axiosInstance.get(`/mahasiswambkm/${id}`);
                setDetailMahasiswa(response.data.data);
                return response.data.data;
            } catch (error) {
                console.log(error);
            } finally {
            }
        };
        fetchBimbingan().then((bimbingan) => {
            if (bimbingan) {
                fetchDetailMahasiswa(bimbingan.mahasiswa_mbkm_id);
                setProgressMingguan(bimbingan.progressMingguan);
            }
        });
    }, [id, token]);

    if (moment.utc("2023-06-12T17:00:00Z").isSame(moment.utc("2023-06-12"), 'day')) {
        console.log("Tanggal tersebut adalah tanggal yang sama");
    } else {
        console.log("Tanggal tersebut bukan tanggal yang sama");
    }
    console.log("Bimbingan", progressMingguan);
    console.log("Detail Mahasiswa", detailMahasiswa);

    return (
        <MainLayout>
            <div className="flex mx-12 my-14 space-x-4">
                <div className="w-2/6 rounded-md border border-neutral-02 shadow-md px-6 py-5">
                    <div>
                        <div className="text-base mb-4">
                            <p className="font-bold">Nama</p>
                            <p className="font-normal">{detailMahasiswa.nama_mahasiswa}</p>
                        </div>
                        <div className="text-base mb-4">
                            <p className="font-bold">Program</p>
                            <p className="font-normal">{detailMahasiswa.nama_kegiatan}</p>
                        </div>
                        <div className="text-base mb-4">
                            <p className="font-bold">Mitra</p>
                            <p className="font-normal">{detailMahasiswa.mitra}</p>
                        </div>
                        <div className="text-base mb-4">
                            <p className="font-bold">Tanggal Mulai</p>
                            <p className="font-normal">{moment.utc(detailMahasiswa.tanggal_mulai).format('DD MMMM YYYY')}</p>
                        </div>
                        <div className="text-base">
                            <p className="font-bold">Tanggal Berakhir</p>
                            <p className="font-normal">{moment.utc(detailMahasiswa.tanggal_berakhir).format('DD MMMM YYYY')}</p>
                        </div>
                    </div>
                </div>
                <div className="w-4/6 rounded-md border border-neutral-02 shadow-md px-6 py-5 font-normal">
                    <div className="mb-6">
                        <h6 className="text-darkblue-04 font-bold">Laporan Akhir</h6>
                        <span className="text-neutral-02">
                            Belum ada laporan akhir diupload
                        </span>
                    </div>
                    <div>
                        <h6 className="text-darkblue-04 font-bold">
                            Laporan Mingguan
                        </h6>
                        {progressMingguan.map((data, index) => (
                            <>
                                <div>
                                    {data.is_submitted === false && (
                                        <span className="text-xs text-gray-500">Belum ada laporan dikumpulkan</span>
                                    )}
                                </div>

                                <div className={`rounded-md border border-neutral-02 shadow-md px-6 py-5 mb-3 ${moment.utc().startOf('day').isBefore(moment.utc(data.startWeek).startOf('day')) ? 'bg-neutral-02' : ''}`}>
                                    <div className="flex justify-between">
                                        <span className="inline-flex items-center">
                                            <span >Minggu - {index + 1}  : <span className="">{moment.utc(data.startWeek).format('DD MMMM YYYY')} - {moment.utc(data.endWeek).format('DD MMMM YYYY')}</span> </span>
                                        </span>
                                        {data.is_submitted === true && (
                                            <Button
                                                variant="primary"
                                                text="Detail"
                                                to={`detail-progres/${data.id}`}
                                                textSize="text-sm"
                                                size="small"

                                            />
                                        )}
                                        {data.is_submitted === false && user?.user?.role === "mahasiswa" && (
                                            <Button
                                                variant="primary"
                                                text="Input Laporan"
                                                to={`input-progres/${data.id}`}
                                                textSize="text-sm"
                                                disabled={moment.utc().startOf('day').isBefore(moment.utc(data.startWeek).startOf('day')) ? true : false}
                                            />
                                        )}
                                    </div>
                                </div >
                            </>
                        ))}

                    </div>
                </div>
            </div>
        </MainLayout >
    );
}
