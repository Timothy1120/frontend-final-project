import Image from "next/image";
import delLogo from "../../public/images/itdel.png";
import mbkmLogo from "../../public/images/Kampus-Merdeka-01.png";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import jwt from "jsonwebtoken";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    console.log(token);
    try {
      if (token) {
        const decodedToken = jwt.verify(token, "lulusta2023");
        const data = decodedToken;
        console.log(data);
        if (roles.includes("admin")) {
          router.push("/admin");
        } else {
          router.push("/dashboard");
        }
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = { username, password };
      const response = await axios.post(
        "http://localhost:7000/api/auth/login",
        data
      );
      const token = response.data.data.token;
      const refreshToken = response.data.data.refreshToken;
      const userRoles = response.data.data.data.roles;
      const lowerRoles = userRoles.map((item) => item.toLowerCase());

      console.log(lowerRoles);
      // Menyimpan token dan refresh token di sisi klien
      Cookies.set("token", token);
      Cookies.set("refreshToken", refreshToken);

      //Mengarahkan ke dashboard berdasarkan role
      if (lowerRoles.includes("admin")) {
        router.push("admin");
      } else if (lowerRoles.includes("mahasiswa")) {
        router.push("/mahasiswa");
      }
    } catch (error) {
      alert("gagal login");
    }
  };

  return (
    <div>
      <div className="flex h-screen items-center justify-center">
        <div className="p-10 w-[360px] rounded-md shadow-neutral-03 shadow-sm">
          <div className="flex justify-between mb-8">
            <div>
              <Image src={delLogo} alt="logo IT Del" width={71} height={76} />
            </div>
            <div>
              <Image src={mbkmLogo} alt="logo MBKM" width={151} height={78} />
            </div>
          </div>
          <form className="font-poppins" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="text-neutral-05 text-base font-bold"
              >
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="block rounded-md border border-neutral-02 focus:outline-none focus:border-darkblue-02 py-2 px-4 my-2 shadow-sm w-full"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="text-neutral-05 text-base font-bold"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="block rounded-md border border-neutral-02 focus:outline-none focus:border-darkblue-02 py-2 px-4 my-2 shadow-sm w-full"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button
              className="bg-darkblue-04 text-white font-bold py-2 px-4 rounded border block mx-auto w-full"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
