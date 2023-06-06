import MainLayout from "@/components/MainLayout";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import jwt from 'jsonwebtoken';
import axios from "axios";
import Cookies from "js-cookie";

export default function DetailProposal() {
  const router = useRouter();
  const { id } = router.query;
  const proposalId = id;
  const [dosen, setDosen] = useState([]);
  const [selectedDosenId, setSelectedDosenId] = useState(null);
  const [dataDetailProposal, setDataDetailProposal] = useState([]);
  const [penilai, setPenilai] = useState([]);

  function getUserId(token, secretKey) {
    try {
      const decodedToken = jwt.verify(token, secretKey);
      const userId = decodedToken.sub; // atau `decodedToken.userId`

      return userId;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
  const token = Cookies.get("token");
  const secretKey = 'lulusta2023'
  const userId = getUserId(token, secretKey)
  console.log(userId);


  useEffect(() => {
    if (router.isReady) {

      const fetchDataDetailProposal = async () => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        axios
          .get(`http://localhost:7000/api/proposal/${id}/detail`)
          .then((res) => {
            setDataDetailProposal(res.data.data);
          })
          .catch((err) => {
            console.error(err);
          });
      };

      const fetchListDosen = async () => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        axios
          .get(`http://localhost:7000/api/dosen/${userId}/byauth`)
          .then((res) => {
            setDosen(res.data.data);
            if (res.data.data.length > 0) {
              // check if the data array has at least one item
              setSelectedDosenId(res.data.data[0].id); // set selectedDosenId to the first item's id
            }
          })
          .catch((err) => {
            console.error(err);
          });
      };

      const fetchListPenilai = async () => {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        axios
          .get(`http://localhost:7000/api/proposal/${proposalId}/penilai`)
          .then((res) => {
            setPenilai(res.data.data);
          })
          .catch((err) => {
            console.error(err);
          });
      };

      fetchDataDetailProposal();
      fetchListDosen();
      fetchListPenilai();
    }
  }, [router.isReady]);
  console.log('proposal id: ', proposalId);
  console.log('selected dosen id:', selectedDosenId)
  console.log(penilai)

  function handleDosenPenilaiSubmit(event) {
    event.preventDefault();
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
      .post(`http://localhost:7000/api/proposal/${proposalId}/assigndosenpenilai`, {
        dosenId: selectedDosenId
      })
      .then((res) => {
        router.reload();
        router.push(`${proposalId}`);

      })
      .catch((error) => {
        console.log(error.response.data.message)
      });
  }


  return (
    <MainLayout>
      <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
        <h4 className="text-2xl font-bold mt-8">Detail Proposal</h4>
        <div className="grid grid-cols-2 mt-4">
          <div>
            <div className="text-lg mb-4">
              <p className="font-semibold">Nama</p>
              <p className="font-normal">{dataDetailProposal.nama_mahasiswa}</p>
            </div>
            <div className="text-lg mb-4">
              <p className="font-semibold">Prodi</p>
              <p className="font-normal">{dataDetailProposal.prodi}</p>
            </div>
            <div className="text-lg">
              <p className="font-semibold">Angkatan</p>
              <p className="font-normal">{dataDetailProposal.angkatan}</p>
            </div>
          </div>
          <div>
            <div className="text-lg mb-4">
              <p className="font-semibold">Program</p>
              <p className="font-normal">{dataDetailProposal.jenis_program}</p>
            </div>
            <div className="text-lg mb-4">
              <p className="font-semibold">Status</p>
              {dataDetailProposal.status_approval === "Menunggu" && (
                <p className="font-normal text-warning">Menunggu</p>
              )}
              {dataDetailProposal.status_approval === "Ditolak" && (
                <p className="font-normal text-danger">Ditolak</p>
              )}
              {dataDetailProposal.status_approval === "Disetujui" && (
                <p className="font-normal text-success">Disetujui</p>
              )}
            </div>
            <div className="text-lg mb-4">
              <p className="font-semibold">Rata-rata penilaian</p>
              <p className="font-normal">{dataDetailProposal.averageSkor === null ? 0 : dataDetailProposal.averageSkor}</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-8 mb-4">
          <div>
            <h4 className="text-2xl font-bold">Dosen Penilai</h4>
            <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
              {penilai.map((data, index) => (
                <li key={index} className="flex items-center">
                  {data.nilai !== null ? (<svg class="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>) : (<svg class="w-4 h-4 mr-1.5 text-gray-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path></svg>)}
                  {data.nama_dosen} - {data.nilai === null ? 'Belum ada penilaian' : data.nilai}
                </li>
              ))}
            </ul>
          </div>
          <form onSubmit={handleDosenPenilaiSubmit}>
            <div>
              <label className="block font-medium mb-2">
                Dosen Penilai
              </label>
              <select
                value={selectedDosenId}
                onChange={(e) => setSelectedDosenId(e.target.value)}
                id="dosen"
                name="dosen"
                className="focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50 w-full p-2 border border-gray-400 rounded"
                required
              >
                {dosen.map((d) => (
                  <option key={d.id} value={d.id}>
                    {d.nama}
                  </option>
                ))}
              </select>
              <button type="submit" className="mt-2 px-2 py-[1rem] bg-darkblue-04 text-neutral-01 rounded-lg justify-end">Assign</button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
