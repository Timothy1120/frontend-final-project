import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home(props) {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, []);

  return null;
}
