import { Link } from "react-router-dom";
import Logo from "../assets/icons/css-fiber-logo.svg"
import { useAppSelector } from "../app/hooks";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../app/store";
import { clearState } from "../features/verification/verificationSlice";
import UserNav from "../components/Utils/UserNav";
import ProductOne from "../assets/images/product-one.svg";
import ProductTwo from "../assets/images/product-two.svg";
import ProductThree from "../assets/images/product-three.svg";
import ProductFour from "../assets/images/product-four.svg";
import Ellipse2 from "../assets/images/Ellipse-2.png";
import Ellipse1 from "../assets/images/Ellipse-1.png";
import { ApplePlay, PlayStore } from "../assets/icons";
import { Footer } from "../components/Utils/Footer";


const styles = {
    parentContainer: "w-full h-full  overflow-x-hidden md:overflow-x-auto  bg-[#fff] md:min-h-screen",
    container: "2xl:container 2xl:mx-auto  md:m-0 css-fibre h-screen",
    chiefCenter: "md:max-w-5xl xl:max-w-5xl mx-auto",
};
interface layoutprops {
    children: any;
}
const CssFibreContainerLayout = ({ children }: layoutprops) => {
    const dispatch = useDispatch<AppDispatch>();

    const [currentScreen, setCurrentScreen] = useState(1)

    const onRestart = () => {
        dispatch(clearState())
    }

    const myButton = useRef<HTMLButtonElement | any>()

    const scrollFunction = () => {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            myButton?.current?.classList.remove("hidden");
        } else {
            myButton?.current?.classList.add("hidden");
        }
    };
    const backToTop = () => {
        window.scrollTo(0, 0);
    };




    useEffect(() => {
        setTimeout(() => {

            if (currentScreen <= 2) {
                setCurrentScreen(currentScreen + 1)
            }
            else {
                setCurrentScreen(1)
            }
        }, 10000);
    }, [currentScreen])


    useEffect(() => {
        if (myButton && myButton.current) {
            myButton?.current?.addEventListener("click", backToTop);

            window.addEventListener("scroll", scrollFunction);
        }
    }, [])
    return (
        <div className={styles.parentContainer}>
            <div className={`2xl:container 2xl:mx-auto  md:m-0 ${`css-fibre-hero-${currentScreen}`} css-fibre-hero transition ease-in-out delay-150 h-screen`}>
                <div className="py-2">&nbsp;</div>
                <div className="shadow-lg flex items-center justify-between max-w-full  md:max-w-5xl xl:max-w-5xl mx-auto px-4 py-4  bg-white  rounded-3xl  relative z-20">

                    <div className="flex md:gap-2 items-center py-2"><Link to="/css-fibre" className="w-fit">
                        <img
                            className="mr-0 md:mx-auto  w-[100%] "
                            src={Logo}
                            alt="Your Company"
                        />
                    </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-4 w-fit">
                        <Link className="flex items-center gap-1 text-[#FF7F00] text-sm font-[400] hover:text-[#000000E5]" to={'/'}>Home </Link>
                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/css-mobile'}>myCSSApp </Link>
                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/css-mobile'}>CSS Mobile </Link>
                        {/* <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#000000E5]" to={'/'}>CSS Connect </Link> */}
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
                        <h3 className="text-[#8F8F8F] md:text-3xl font-[600] text-white">High Speed Internet at your Fingertips</h3>

                        <a href={'#packages'} className="bg-[#FF7F00] text-white p-4 rounded-2xl text-sm w-full md:w-1/3 mx-auto text-center">Get Started</a>

                    </div>}
                    {currentScreen === 2 && <div className="flex flex-col gap-10 items-center justify-center">
                        <h3 className="text-[#8F8F8F] md:text-3xl font-[600] text-white">Unlimited Data. Unlimited Speed.</h3>

                        <p className="text-center text-md text-white md:w-2/3">Enjoy swift and unlimited Fixed Broadband Internet Services with Options that are affordable, Reliable and Dependable.</p>

                        <a href={'#packages'} className="bg-[#FF7F00] text-white p-4 rounded-2xl text-sm w-full md:w-1/3 mx-auto text-center">Get Started</a>

                    </div>}
                    {currentScreen === 3 && <div className="flex flex-col gap-10 items-center justify-center">
                        <h3 className="text-[#8F8F8F] md:text-3xl font-[600] text-white">Secure Internet Connection 24/7</h3>

                        <p className="text-center text-md text-white md:w-2/3">Enjoy swift and unlimited Fixed Broadband Internet Services with Options that are affordable, Reliable and Dependable.</p>

                        <a href={'#packages'} className="bg-[#FF7F00] text-white p-4 rounded-2xl text-sm w-full md:w-1/3 mx-auto text-center">Get Started</a>

                    </div>}
                </div>
                
            </div>
            <div >{children}</div>
                <Footer />
        </div >
    );
};

export default CssFibreContainerLayout;
