import MainLayout from "@/components/MainLayout";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "@/context/UserContext";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const TextEditor = dynamic(() => import("@/components/TextEditor"), {
    ssr: false,
});

export default function BuatLaporan() {
    const router = useRouter();
    const { user } = useContext(UserContext);

    let { id } = router.query;
    const token = Cookies.get("token");
    const [progress, setProgress] = useState([]);

    // Inisialisasi instance axios dengan konfigurasi dasar
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

        const fetchProgressMingguan = async () => {
            try {
                const response = await axiosInstance.get(`/progress/${id}`);
                setProgress(response.data.data);
                return response.data.data;
            } catch (error) {
                console.log(error);
            } finally {

            }
        };
        fetchProgressMingguan();

    }, [id, token]);

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            // setLoading(true);
            const response = await axiosInstance.put(`/progress/${id}/updateprogress`, {
                progress_mingguan: progress
            });
            console.log(response.data.data);
            id = response.data.data.bimbinganId;
        } catch (error) {
            console.log(error);
        } finally {
            router.push(`/batch/detail/laporan/detail/${id}`);
        }
    }

    return (
        <MainLayout>
            <div className="rounded-sm border border-neutral-02 shadow-md m-6">
                <div className="mx-12 my-14">
                    <form onSubmit={handleSubmit}>
                        <label
                            className="text-lg font-bold text-darkblue-04"
                            htmlFor="laporan-mingguan"
                        >
                            Laporan Mingguan - Week 1
                        </label>
                        <TextEditor
                            value={progress}
                            setValue={setProgress}
                        />
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                id="input-laporan"
                                name="input-laporan"
                                className="px-6 py-[1.125rem] bg-darkblue-04 text-neutral-01 rounded-lg justify-center"
                            >
                                Tambah
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </MainLayout>

    );
}
