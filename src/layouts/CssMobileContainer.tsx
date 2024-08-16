import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo.svg"
import { useAppSelector } from "../app/hooks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { clearState } from "../features/verification/verificationSlice";
import UserNav from "../components/Utils/UserNav";
import ProductOne from "../assets/images/product-one.svg";
import ProductTwo from "../assets/images/product-two.svg";
import ProductThree from "../assets/images/product-three.svg";
import ProductFour from "../assets/images/product-four.svg";
import HeroImg from "../assets/images/mobile-hero.png";
import Ellipse2 from "../assets/images/Ellipse-2.png";
import Ellipse1 from "../assets/images/Ellipse-1.png";
import { ApplePlay, PlayStore } from "../assets/icons";
import { Footer } from "../components/Utils/Footer";
import AppStore from "../assets/icons/app.svg";
import Play from "../assets/icons/play.svg";


const styles = {
    parentContainer: "w-full h-full  overflow-x-hidden md:overflow-x-auto  bg-[#fff] md:min-h-screen",
    container: "2xl:container 2xl:mx-auto  md:m-0",
    chiefCenter: "md:max-w-5xl xl:max-w-5xl mx-auto",
};
interface layoutprops {
    children: any;
}
const CssMobileContainerLayout = ({ children }: layoutprops) => {
    const dispatch = useDispatch<AppDispatch>();

    const onRestart = () => {
        dispatch(clearState())
    }

    return (
        <div className={styles.parentContainer}>
            <div className={styles.container}>
                <div className="shadow-lg flex items-center justify-between max-w-full  md:max-w-5xl xl:max-w-5xl mx-auto px-4 py-4  bg-white  rounded-3xl md:mt-4 relative z-20">
                    <div className="flex md:gap-2 items-center py-2"><Link to="/" className="w-fit">
                        <img
                            className="mr-0 md:mx-auto  w-[80%] "
                            src={Logo}
                            alt="Your Company"
                        />
                    </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-4 w-fit">
                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/'}>Home </Link>
                        <Link className="flex items-center gap-1 text-[#FF7F00] text-sm font-[400] hover:text-[#000000E5]" to={'/css-mobile'}>myCSSApp </Link>
                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/coming-soon'}>CSS Mobile </Link>
                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" target="_blank" to={'/css-fibre'}>CSS Fiber </Link>
                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/about'}>About </Link>
                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/contact'}>Contact  </Link>
                        <Link className="flex items-center gap-1 text-[#fff] text-xs font-[400] hover:text-[#000] hover:bg-[#FF7F00] bg-black p-3 py-2 rounded-xl" to={'/'}>Self Service  </Link>

                    </div>
                    <div className="md:hidden">
                        <UserNav />
                    </div>
                </div>


                <div className="min-h-max py-10 xl:min-h-[80svh] h-full px-4 w-full bg-red flex flex-col items-center justify-center gap-8 relative relative z-10 overflow-y-hidden">

                    <section className="grid md:grid-cols-2 md:grid-cols-2 gap-8 w-full  md:max-w-5xl xl:max-w-5xl mx-auto items-center justify-center">
                        <div className="flex flex-col gap-5">
                            <h3 className="text-xl md:text-3xl font-[700] text-center md:text-left">Connect, Surf, and Smile on the Go</h3>
                            <img src={HeroImg} alt="" className="w-[180%] ml-auto md:hidden" />
                            <p className="text-sm text-[#8F8F8F] font-[400] text-center md:text-left">Download the CSS Mobile App to enjoy swift and unlimited Fixed Broadband Internet  Services on the go.</p>
                            <Link className="flex items-center justify-center   gap-1 text-[#fff] text-sm font-[400] hover:text-[#fff] bg-[#FF7F00] hover:bg-[#000] p-3 py-4 rounded-xl w-full md:w-2/3" to={'/'}>Download Now</Link>

                            <div className="mt-3 flex items-center justify-center md:justify-start gap-2">
                                <Link to={'/'}>
                                    <img src={AppStore} alt="" className="w-24 md:w-40" />
                                </Link>
                                <Link to={'/'}>
                                    <img src={Play} alt="" className="w-24 md:w-40" />
                                </Link>
                            </div>
                        </div>

                        <img src={HeroImg} alt="" className="w-[180%] ml-auto hidden md:block" />

                    </section>
                    <img src={Ellipse2} alt="" className="absolute top-[100%] md:top-0 right-0 opacity-[0.7] h-full" style={{ zIndex: '-1' }} />

                </div>
                <div >{children}</div>
                <Footer />
            </div>
            <img src={Ellipse1} alt="" className="absolute top-0 left-0 opacity-[0.7] z-0" />
        </div>
    );
};

export default CssMobileContainerLayout;
