import Image from "next/image";
import delLogo from "../../public/images/itdel.png";
import mbkmLogo from "../../public/images/Kampus-Merdeka-01.png";
// import users from './api/users'
// import API, { login } from "../configs/axios"
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from 'js-cookie';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = { username, password };
      const response = await axios.post("http://localhost:7000/api/auth/login", data);
      const token = response.data.data.token;
      const refreshToken = response.data.data.refreshToken;
      const user = response.data.data.data;
      console.log(user)
      // Menyimpan token dan refresh token di sisi klien
      Cookies.set('token', token);
      Cookies.set('refreshToken', refreshToken);
    } catch (error) {
      alert("login gagal");
    }
  }


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
                onChange={(event) =>
                  setUsername(event.target.value)}
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
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>
            {/* <div className="flex justify-start mb-3">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                value="remember-me"
                className="mr-1 checked:bg-neutral-05 checked:border-transparent rounded-lg"
              />
              <label
                htmlFor="remember-me"
                className="text-neutral-05 text-sm font-normal"
              >
                Remember Me
              </label>
            </div> */}
            <button className="bg-darkblue-04 text-white font-bold py-2 px-4 rounded border block mx-auto w-full" type="submit">
              Login
            </button>
            {error && <p>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
