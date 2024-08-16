import { useEffect } from "react";
import Logo from "../assets/images/onthejob.svg";
import { Link } from "react-router-dom";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="relative w-full min-h-[100svh] max-h-[100svh]">
      <div className="sticky  bg-white top-0 left-0 right-0  py-4 md:py-4 px-4  md:px-0 flex items-center justify-between z-50 ">
        <Link to="/">
          <img
            className="mr-auto md:mx-auto lg:ml-[80px] w-[70%] "
            src={Logo}
            alt="Your Company"
          />
        </Link>
      </div>

      <div className="z-20">{children}</div>
    </div>
  );
};

export default AuthLayout;
