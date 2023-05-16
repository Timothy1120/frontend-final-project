import React from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const withProtectedRoute = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();
    const token = Cookies.get("accessToken");

    React.useEffect(() => {
      if (!token) {
        router.push("/login");
      } else {
        try {
          const decoded = jwt_decode(token);

          if (decoded.data.role !== "admin") {
            router.push("/unauthorized");
          }
        } catch (error) {
          console.error("Token Error:", error);
          router.push("/login");
        }
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withProtectedRoute;
