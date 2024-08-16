
import { useEffect } from "react";
import Logo from "../assets/images/onthejob.svg"
import { Link } from 'react-router-dom';
const OnboardLayout = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div className="w-full flex flex-col relative ">
      <div className="sticky top-0 left-0 right-0  auth-nav-bg py-6 md:py-8 px-4  md:px-10 flex items-center justify-between ">
        <Link to="/">
          <img
            className="mx-auto lg:ml-[100px] w-auto "
            src={Logo}
            alt="On The Job"
          />
        </Link>
      </div>
      <main className="lg:px-[100px] flex items-center ">
        <div className="w-full  2xl:px-[150px] md:mt-10 lg:mt-0 ">{children}</div>
      </main>
    </div>
  );
};

export default OnboardLayout
