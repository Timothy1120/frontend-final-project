
import MainLayout from "@/components/MainLayout";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "@/context/UserContext";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import moment from "moment";
import 'moment/locale/id';
moment.locale('id');


function HtmlContent({ content }) {
    return (
        <div dangerouslySetInnerHTML={{ __html: content }} />
    );
}

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
    console.log("Cekk:", progress);

    return (
        <MainLayout>
            <div className="rounded-sm border border-neutral-02 shadow-md mx-6 my-10 px-12 py-14 min-h-full">
                <div className="text-lg font-bold text-darkblue-04 mb-1">
                    Laporan Mingguan
                </div>
                <p className="text-xs mb-7">{moment.utc(progress.startWeek).format('DD MMMM YYYY')} - {moment.utc(progress.endWeek).format('DD MMMM YYYY')}</p>
                <div className="rounded-md border border-neutral-05 px-5 py-4">

                    <HtmlContent content={progress.progress_laporan} />
                </div>
            </div>
        </MainLayout>

    );
}
