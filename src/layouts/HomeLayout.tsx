import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo.svg"
import { useAppSelector } from "../app/hooks";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { clearState } from "../features/verification/verificationSlice";
import UserNav from "../components/Utils/UserNav";
import ProductOne from "../assets/images/product-one.svg";
import ProductTwo from "../assets/images/product-two.svg";
// import ProductThree from "../assets/images/product-three.svg";
// import ProductFour from "../assets/images/product-four.svg";
import Ellipse2 from "../assets/images/Ellipse-2.png";
import Ellipse1 from "../assets/images/Ellipse-1.png";
import { ApplePlay, PlayStore } from "../assets/icons";
import { Footer } from "../components/Utils/Footer";
import Marquee from "react-fast-marquee";
import ProductTwoO from "../assets/images/product-two.svg";
import ProductFour from "../assets/images/product-four.svg";
import ProductFourO from "../assets/icons/css-hysip-hover.svg";
import ProductThreeO from "../assets/icons/css-switch-hover.svg";
import ProductThree from "../assets/images/product-three.svg";
import ProductOneO from "../assets/images/product-one.svg";



const styles = {
    parentContainer: "w-full h-full  overflow-x-hidden md:overflow-x-auto  bg-[#fff]",
    container: "2xl:container 2xl:mx-auto  md:m-0 css-fibre h-screen overflow-y-hidden",
    chiefCenter: "md:max-w-5xl xl:max-w-5xl mx-auto",
};
interface layoutprops {
    children: any;
}
const HomeLayout = ({ children }: layoutprops) => {
    const dispatch = useDispatch<AppDispatch>();

    const [currentScreen, setCurrentScreen] = useState(1)

    const onRestart = () => {
        dispatch(clearState())
    }


    useEffect(() => {
        // setTimeout(() => {

        //     if (currentScreen <= 2) {
        //         setCurrentScreen(currentScreen + 1)
        //     }
        //     else {
        //         setCurrentScreen(1)
        //     }
        // }, 10000);
    }, [currentScreen])
    return (
        <>

            <div className={styles.parentContainer}>
                <div className={`2xl:container 2xl:mx-auto  md:m-0 ${`home-hero-${currentScreen}`} home-hero transition ease-in-out delay-150 h-[70vh] lg:h-screen overflow-y-hidden`}>
                    <div className="hidden md:flex md:py-2">&nbsp;</div>
                    <div className="shadow-lg flex items-center justify-between max-w-full  md:max-w-5xl xl:max-w-5xl mx-auto px-4 py-4  bg-white  rounded-3xl  relative z-20">

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
                            <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" target="_blank" to={'/css-fibre'}>CSS Fiber </Link>
                            <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" target="_blank" to={'/css-mobile/'}>myCSSApp </Link>
                            <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/coming-soon'}>CSS Mobile </Link>
                            <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/about'}>About </Link>
                            <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/contact'}>Contact  </Link>
                            <Link className="flex items-center gap-1 text-[#fff] text-xs font-[400] hover:text-[#000] hover:bg-[#FF7F00] bg-black p-3 py-2 rounded-xl" to={'/'}>Self Service  </Link>
                        </div>
                        <div className="md:hidden">
                            <UserNav />
                        </div>
                    </div>


                    <div className="min-h-max pt-10 h-full max-h-[85svh] px-4 w-full flex flex-col items-center justify-center gap-8 relative relative z-10 overflow-y-hidden">

                        {currentScreen === 1 && <div className="flex flex-col gap-10">
                            <h3 className="text-[#8F8F8F] text-3xl text-center md:text-4xl font-[700] text-white">Welcome to Connect, Surf and Smile Ltd.</h3>

                            <h3 className="text-[#8F8F8F] md:text-xl font-[500] text-white text-center">Data is Supreme</h3>

                            <a href={'/css-fibre/#packages'} className="bg-[#FF7F00] text-white p-4 rounded-2xl text-sm w-full md:w-1/3 mx-auto text-center">Get Started</a>

                        </div>}
                        {currentScreen === 2 && <div className="flex flex-col gap-10 items-center justify-center">
                            <h3 className="text-[#8F8F8F] md:text-3xl font-[600] text-white">Unlimited Data. Unlimited Speed.</h3>

                            <p className="text-center text-md text-white md:w-2/3">Enjoy swift and unlimited Fixed Broadband Internet Services with Options that are affordable, Reliable and Dependable.</p>

                            <a href={'#packages'} className="bg-[#FF7F00] text-white p-4 rounded-2xl text-sm w-full md:w-1/3 mx-auto text-center">Get Started</a>

                        </div>}
                        {currentScreen === 3 && <div className="flex flex-col gap-10 items-center justify-center">
                            <h3 className="text-[#8F8F8F] md:text-3xl font-[600] text-white">Secure Internet Connection 24/7</h3>

                            <p className="text-center text-md text-white md:w-2/3">Enjoy swift and unlimited Fixed Broadband Internet Services with Options that are affordable, Reliable and Dependable.</p>

                            <a href={'/css-fibre/#packages'} className="bg-[#FF7F00] text-white p-4 rounded-2xl text-sm w-full md:w-1/3 mx-auto text-center">Get Started</a>

                        </div>}
                    </div>

                </div>
            </div>
            <div className="min-h-max py-10 xl:min-h-[80svh] h-full px-4 w-full bg-red flex flex-col items-center justify-center gap-8 relative relative z-10 overflow-y-hidden hidden-scrollbar">

                <section className="flex w-max md:grid grid-cols-2 md:grid-cols-4 gap-2 w-full  md:max-w-5xl xl:max-w-5xl mx-auto items-center justify-center">

                    <Link to={'/css-fibre'} target="_blank" className="group w-[250px] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                        <img src={ProductOne} alt="" className="hidden group-hover:block w-[250px] h-[300px] object-cover" />
                        <img src={ProductOneO} alt="" className="block group-hover:hidden  w-[250px] h-[300px] object-cover" />
                    </Link>
                    <Link to={'/css-mobile'} className="group w-[250px] transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                        <img src={ProductTwo} alt="" className="hidden group-hover:block w-[250px] h-[300px] object-cover scale-[1.12]" />
                        <img src={ProductTwoO} alt="" className="block group-hover:hidden w-[250px] h-[300px] " />
                    </Link>
                    <Link to={'/css-switch'} className="w-[250px] group transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                        <img src={ProductThreeO} alt="" className="hidden group-hover:block w-[250px] h-[300px] object-cover scale-[1.12] " />
                        <img src={ProductThree} alt="" className="block group-hover:hidden  w-[250px] h-[300px] " />
                    </Link>
                    <Link to={'/hy-sip'} className=" w-[250px] group transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
                        <img src={ProductFourO} alt="" className="hidden group-hover:block w-[250px] h-[300px] object-cover scale-[1.12]" />

                        <img src={ProductFour} alt="" className="block group-hover:hidden w-[250px] h-[300px]" />
                    </Link>

                </section>

                <div className="hidden md:block md:mt-20 text-center text-[#8F8F8F] bg-white p-2 rounded-xl px-4 flex flex-wrap items-center justify-center gap-2 items-center w-full md:w-2/3">

                


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
        </>

    );
};

export default HomeLayout;
