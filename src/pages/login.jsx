import Image from "next/image";
import delLogo from "../../public/images/itdel.png";
import mbkmLogo from "../../public/images/Kampus-Merdeka-01.png";
import axios from "axios";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function Login() {
  const router = useRouter();

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const handleChange = (prop) => (event) => {
    setInputs({ ...inputs, [prop]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const credentials = {
      username: inputs.username,
      password: inputs.password,
    };

    try {
      await axios
        .post("http://localhost:7000/api/users/login", credentials)
        .then(async (res) => {
          Cookies.set("accessToken", res.data.data.token, { expires: 5 });
          let role = res.data.data.data.role;
          console.log(role);
          if (role == "admin") {
            router.push("/admin");
          } else if (role == "student") {
            router.push("/mahasiswa");
          }
        });
    } catch (error) {
      alert("login gagal");
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
                onChange={handleChange("username")}
                value={inputs.username}
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
                onChange={handleChange("password")}
                value={inputs.password}
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
