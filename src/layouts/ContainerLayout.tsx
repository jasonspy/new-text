import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo.svg"
import { useAppSelector } from "../app/hooks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { clearState } from "../features/verification/verificationSlice";
import UserNav from "../components/Utils/UserNav";
import ProductOne from "../assets/icons/css-hover.svg";
import ProductOneO from "../assets/images/product-one.svg";
import ProductTwo from "../assets/icons/css-fibre-hover.svg";

// import ProductTwo from "../assets/icons/css-switch-hover.svg";
import ProductTwoO from "../assets/images/product-two.svg";
import ProductFour from "../assets/images/product-four.svg";
import ProductFourO from "../assets/icons/css-hysip-hover.svg";
import ProductThreeO from "../assets/icons/css-switch-hover.svg";
import ProductThree from "../assets/images/product-three.svg";
import Ellipse2 from "../assets/images/Ellipse-2.png";
import Ellipse1 from "../assets/images/Ellipse-1.png";
import { ApplePlay, PlayStore } from "../assets/icons";
import { Footer } from "../components/Utils/Footer";
import Marquee from "react-fast-marquee";

import FibreLogo from "../assets/icons/css-fiber-logo.svg"
import FibreLogoWhite from "../assets/icons/css-fiber-logo-white.svg"
import Rings from "../assets/icons/rings.svg"



const styles = {
  parentContainer: "w-full h-full  overflow-x-hidden md:overflow-x-auto  bg-[#fff] md:min-h-screen",
  container: "2xl:container 2xl:mx-auto  md:m-0",
  chiefCenter: "md:max-w-5xl xl:max-w-5xl mx-auto",
};
interface layoutprops {
  children: any;
}
const ContainerLayout = ({ children }: layoutprops) => {
  const dispatch = useDispatch<AppDispatch>();

  const onRestart = () => {
    dispatch(clearState())
  }

  return (
    <div className={styles.parentContainer}>
      <div className={styles.container}>
        <div className="shadow-lg flex items-center justify-between max-w-full  md:max-w-5xl xl:max-w-5xl mx-auto px-4 py-4  bg-white  rounded-3xl md:mt-4 relative z-20">
          <div className="flex md:gap-2 items-center py-2">
            <Link to="/" className="w-fit">
              <img
                className="mr-0 md:mx-auto  w-[80%] "
                src={Logo}
                alt="Your Company"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4 w-fit">
            <Link className="flex items-center gap-1 text-[#FF7F00] text-sm font-[400] hover:text-[#000000E5]" to={'/'}>Home </Link>
            <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/css-mobile'}>CSS Mobile </Link>
            <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" target="_blank" to={'/css-fibre'}>CSS Fiber </Link>
            <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/about'}>About </Link>
            <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/contact'}>Contact  </Link>
            <Link className="flex items-center gap-1 text-[#fff] text-xs font-[400] hover:text-[#000] hover:bg-[#FF7F00] bg-black p-3 py-2 rounded-xl" to={'/'}>Self Service  </Link>
          </div>
          <div className="md:hidden">
            <UserNav />
          </div>
        </div>


        <div className="min-h-max py-10 xl:min-h-[80svh] h-full px-4 w-full bg-red flex flex-col items-center justify-center gap-8 relative relative z-10 overflow-y-hidden hidden-scrollbar">

          <section className="flex w-max md:grid grid-cols-2 md:grid-cols-4 gap-2 w-full  md:max-w-5xl xl:max-w-5xl mx-auto items-center justify-center">
            {/*            
           <div className="bg-[#FFFAEF] hover:bg-[#FF7F00] group relative w-[250px] h-[300px] rounded-2xl flex flex-col items-center justify-center shadow-lg cursor-pointer transition ease-in-out delay-150 duration-700">
            <img src={FibreLogoWhite} alt=""  className="opacity-[0]  group-hover:opacity-[10] group-hover:relative group-hover:top-[-20px] transition ease-in-out delay-150"/>
            <img src={FibreLogo} alt=""  className="block  w-[100px] group-hover:hidden scale-[1.3]  relative top-[-30px] rounded-xl transition ease-in-out delay-20"/>
            <img src={Rings} alt=""  className="absolute bottom-0 w-full"/>
           </div> */}
            <Link to={'/css-fibre'} target="_blank" className="group w-[250px] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
              <img src={ProductOne} alt="" className="hidden group-hover:block w-[250px] h-[300px] object-cover" />
              <img src={ProductOneO} alt="" className="block group-hover:hidden  w-[250px] h-[300px] object-cover" />
            </Link>
            <Link to={'/css-mobile'} className="group w-[250px] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
              <img src={ProductTwo} alt="" className="hidden group-hover:block w-[250px] h-[300px] object-cover scale-[1.12]" />
              <img src={ProductTwoO} alt="" className="block group-hover:hidden w-[250px] h-[300px] " />
            </Link>
            <Link to={'/'} className="w-[250px] group transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
              <img src={ProductThreeO} alt="" className="hidden group-hover:block w-[250px] h-[300px] object-cover scale-[1.12] " />
              <img src={ProductThree} alt="" className="block group-hover:hidden  w-[250px] h-[300px] " />
            </Link>
            <Link to={'/'} className=" w-[250px] group transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
              <img src={ProductFourO} alt="" className="hidden group-hover:block w-[250px] h-[300px] object-cover scale-[1.12]" />

              <img src={ProductFour} alt="" className="block group-hover:hidden w-[250px] h-[300px]" />
            </Link>

          </section>

          <div className="hidden md:block md:mt-20 text-center text-[#8F8F8F] bg-white p-2 rounded-xl px-4 flex flex-wrap items-center justify-center gap-2 items-center w-full md:w-2/3">

            <Marquee direction="left" loop={0} className="flex items-center gap-4">
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <h3 className="text-[#8F8F8F] md:text-2xl font-[600] ">Download our Mobile App Today</h3>
                  <div className="flex items-center gap-2">
                    <Link to={'/'}>
                      <ApplePlay />
                    </Link>
                    <div>|</div>
                    <Link to={'/'}>
                      <PlayStore />
                    </Link>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <h3 className="text-[#8F8F8F] md:text-2xl font-[600] ">Download our Mobile App Today</h3>
                  <div className="flex items-center gap-2">
                    <Link to={'/'}>
                      <ApplePlay />
                    </Link>
                    <div>|</div>
                    <Link to={'/'}>
                      <PlayStore />
                    </Link>
                  </div>
                </div>
              </div>
            </Marquee>


          </div>
          <img src={Ellipse2} alt="" className="absolute top-[100%] md:top-0 right-0 opacity-[0.7] h-full" style={{ zIndex: '-1' }} />

        </div>

        <div className="md:hidden pb-10 md:mt-20 text-center text-[#8F8F8F] bg-white p-2 rounded-xl px-4 flex flex-wrap items-center justify-center gap-2 items-center w-full md:w-1/3">

          <Marquee direction="left" loop={0} className="flex items-center gap-4">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <h3 className="text-[#8F8F8F] md:text-2xl font-[600] ">Download our Mobile App Today</h3>
                <div className="flex items-center gap-2">
                  <Link to={'/'}>
                    <ApplePlay />
                  </Link>
                  <div>|</div>
                  <Link to={'/'}>
                    <PlayStore />
                  </Link>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-[#8F8F8F] md:text-2xl font-[600] ">Download our Mobile App Today</h3>
                <div className="flex items-center gap-2">
                  <Link to={'/'}>
                    <ApplePlay />
                  </Link>
                  <div>|</div>
                  <Link to={'/'}>
                    <PlayStore />
                  </Link>
                </div>
              </div>
            </div>
          </Marquee>


        </div>
        <div >{children}</div>
        <Footer />
      </div>
      <img src={Ellipse1} alt="" className="absolute top-0 left-0 opacity-[0.7] z-0" />
    </div>
  );
};

export default ContainerLayout;
