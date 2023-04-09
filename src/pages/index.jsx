import Link from "next/link";

export default function Home(props) {
  console.log(props);
  return (
    <div className="text-center">
      <h1 className="font-poppins">Test Custom Font</h1>
      <Link href="/random">Take me to random page</Link>
    </div>
  );
}

