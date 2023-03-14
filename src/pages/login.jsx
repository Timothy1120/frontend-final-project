import Image from "next/image";
import delLogo from "../../public/images/itdel.png";
import mbkmLogo from "../../public/images/Kampus-Merdeka-01.png";

export default function Login() {
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
          <form className="font-poppins">
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
              />
            </div>
            <div className="flex justify-start mb-3">
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
            </div>
            <button className="bg-darkblue-04 text-white font-bold py-2 px-4 rounded border block mx-auto w-full">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
