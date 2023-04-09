import Link from "next/link";
import axios from "../configs/axios"

export default function Home(props) {
  console.log(props);
  return (
    <div className="text-center">
      <h1 className="font-poppins">Test Custom Font</h1>
      <Link href="/random">Take me to random page</Link>
    </div>
  );
}

Home.getInitialProps = async () => {
  try {
    const data = await axios.get(`/users`)
    return data
  } catch (error) {
    return error
  }
}