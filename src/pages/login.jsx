import Image from "next/image";
import delLogo from "../../public/images/itdel.png";
import mbkmLogo from "../../public/images/Kampus-Merdeka-01.png";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import Input from "@/components/Input";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const router = useRouter();
  const { setUser } = useContext(UserContext);

  const axiosInstance = axios.create({
    baseURL: "http://localhost:7000/api",
    timeout: 60000,
  });

  useEffect(() => {
    const fetchUser = async () => {
      const token = Cookies.get("token");
      if (token) {
        try {
          const res = await axiosInstance.get("/current-user", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data.data);
          if (res.data.data.user.role === "admin") {
            router.push("/admin");
          } else {
            router.push("/dashboard");
          }
        } catch (err) {
          console.error(err);
        }
      }
    };
    fetchUser();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = { username, password };
      const response = await axiosInstance.post("/auth/login", data);
      const token = response.data.data.token;
      const refreshToken = response.data.data.refreshToken;

      Cookies.set("token", token);
      Cookies.set("refreshToken", refreshToken);

      const res = await axios.get("http://localhost:7000/api/current-user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data.data);
      if (res.data.data.user.role === "admin") {
        router.push("/admin");
      } else {
        router.push("/dashboard");
      }
    } catch (error) {
      console.log(error.message);
      setErrorMessage("Invalid username or password");
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
              <Input
                label="Username"
                inputFor="username"
                id="username"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className={"mb-2"}
              />
              <Input
                label="Password"
                inputFor="password"
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                inputType={"password"}
              />
            </div>
            {errorMessage && (
              <div className="text-red-500 text-center mb-4">
                {errorMessage}
              </div>
            )}
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
