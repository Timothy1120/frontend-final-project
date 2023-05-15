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
        router.replace("/login");
      } else {
        try {
          const decoded = jwt_decode(token);

          if (decoded.data.data.role !== "admin") {
            router.replace("/unauthorized");
          }
        } catch (error) {
          console.error("Token Error:", error);
          router.replace("/login");
        }
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withProtectedRoute;
