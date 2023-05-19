import React from "react";
import { NextResponse } from "next/server";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const withProtectedRoute = (WrappedComponent) => {
  const Wrapper = (props) => {
    const token = Cookies.get("accessToken");

    React.useEffect(() => {
      if (!token) {
        return NextResponse.redirect("/login");
      } else {
        try {
          const decoded = jwt_decode(token);
          if (decoded.data.role !== "admin") {
            return NextResponse.redirect("/unauthorized");
          }
        } catch (error) {
          console.error("Token Error:", error);
          return NextResponse.redirect("/login");
        }
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withProtectedRoute;
