import axios from "axios";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

function withAdminAuth(WrappedComponent) {
  return function AdminAuthComponent(props) {
    const router = useRouter();

    useEffect(() => {
      const fetchProtectedData = async () => {
        const token = Cookies.get("token");
        try {
          const options = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          };
          let response;
          if (method === "get") {
            response = await axios.get(endpoint, options);
          } else if (method === "post") {
            response = await axios.post(endpoint, props.data, options);
          }
          // ... Lanjutkan dengan logika lainnya
        } catch (error) {
          console.log(error);
        }
      };
      fetchProtectedData();
    }, []);

    return <WrappedComponent {...props} />;
  };
}
export default withAdminAuth;
