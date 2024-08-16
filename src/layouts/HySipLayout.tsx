import { Link } from "react-router-dom";
import Hy from "../assets/icons/Hysip Logo.png"
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
import HySip from "../assets/images/hysip-img.png";
import Ellipse2 from "../assets/images/Ellipse-2.png";
import Ellipse1 from "../assets/images/Ellipse-1.png";
import { ApplePlay, PlayStore } from "../assets/icons";
import { Footer } from "../components/Utils/Footer";
import AboutLayout from "./AboutLayout";
import { InputField } from "../components/Input";
import { Button } from "../components/Button";
import { StaySection } from "../components/Utils/StaySection";
import AppStore from "../assets/icons/app.svg";
import Play from "../assets/icons/play.svg";
import Contact from "../pages/Contact";


const styles = {
    parentContainer: "w-full h-full  overflow-x-hidden md:overflow-x-auto  bg-[#fff] md:min-h-screen",
    container: "2xl:container 2xl:mx-auto  md:m-0",
    chiefCenter: "md:max-w-5xl xl:max-w-5xl mx-auto",
};
interface layoutprops {
    children: any;
}
const HySipLayout = ({ children }: layoutprops) => {
    const dispatch = useDispatch<AppDispatch>();

    const [contact, setContact] = useState(Object)

    const handleFormChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const onRestart = () => {
        dispatch(clearState())
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    return (
        <div className={styles.parentContainer}>
            <div className={styles.container}>
                <div className="shadow-lg flex items-center justify-between max-w-full  md:max-w-5xl xl:max-w-5xl mx-auto px-4 py-4  bg-white  rounded-3xl md:mt-4 relative z-20">
                    <div className="flex md:gap-2 items-center py-2"><Link to="/" className="w-fit">
                        <img
                            className="mr-0 md:mx-auto  w-[80%] "
                            src={Hy}
                            alt="Your Company"
                        />
                    </Link>
                    </div>

                    <div className="hidden md:flex items-center gap-4 w-fit">
                        {/* <Link className="flex items-center gap-1 text-[#fff] text-xs font-[400] hover:text-[#000] hover:bg-[#FF7F00] bg-black p-3 py-2 rounded-xl" to={'/'}>Home </Link> */}
                        <Link className="flex items-center gap-1 text-[#6f6e6ee5] text-sm font-[400] hover:text-[#000000E5]" to={''}>You are currently viewing CSS HySip page, to go back to the main homepage </Link>
                        <Link className="flex items-center gap-1 text-[#fff] text-xs font-[400] hover:text-[#000] hover:bg-[#FF7F00] bg-black p-3 py-2 rounded-xl" to={'/'}>Click here </Link>
                        {/* <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/coming-soon'}>CSS Mobile </Link>
                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" target="_blank" to={'/css-fibre'}>CSS Fiber </Link>
                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/about'}>About </Link>
                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/contact'}>Contact  </Link> */}
                        {/* <Link className="flex items-center gap-1 text-[#fff] text-xs font-[400] hover:text-[#000] hover:bg-[#FF7F00] bg-black p-3 py-2 rounded-xl" to={'/'}>Self Service  </Link> */}

                    </div>
                    <div className="md:hidden">
                        <UserNav />
                    </div>
                </div>


                <div className="min-h-max py-10 xl:min-h-[80svh] h-full px-4 w-full bg-red flex flex-col items-center justify-center gap-8 relative relative z-10 overflow-y-hidden">

                    <section className="grid md:grid-cols-2 md:grid-cols-2 gap-8 w-full  md:max-w-5xl xl:max-w-5xl mx-auto items-center justify-center">
                        <div className="flex flex-col gap-5 ">
                            <h3 className="text-xl md:text-3xl font-[700] text-center md:text-left">International Call Termination</h3>
                            <p className="text-sm text-[#8F8F8F] font-[400] text-center md:text-left">The international call termination service provided by Connect Surf and Smile Ltd coined HySiP allows international telecom operators and carriers to rely on our IDA licence to terminate calls into Nigeria and out to the Rest of the World.</p>
                            <Link className="flex items-center justify-center   gap-1 text-[#fff] text-sm font-[400] hover:text-[#fff] bg-[#FF7F00] hover:bg-[#000] p-3 py-4 rounded-xl w-full md:w-2/3" to={'/'}>Get Started</Link>
                        </div>
                        <img src={HySip} alt="" className="w-[180%] ml-auto " />
                    </section>

                    <section className="pt-15  md:px-14" id="packages">
                        <div className="bg-white rounded-lg  p-14  shadow-md group cursor-pointer">
                             <p className="font-[600] text-xl text-[#FF7F00]">OVERVIEW</p>
                            <p className="text-sm font-[400] text-black mt-2">We offer reliable international voice traffic termination to Nigeria via a global VoIP network connected to all Nigerian telecom operators and most international carriers.</p>
                             <p className="text-sm text-[#8F8F8F] pt-6 font-[400] text-center md:text-left">The international call termination service provided by Connect Surf and Smile Ltd coined HySiP allows international telecom operators and carriers to rely on it to terminate their international voice traffic to Nigeria through our HySiP international gateways and our widespread global network over both VoIP connections. HYSIP is linked to all the telecom operators inside Nigeria and most of the international telecom carriers and operators, which enables it to provide services with high reliability.</p>
                         </div>
                    </section>
                    
                    <section className="pt-15  md:px-14" id="packages">
                        <div className="bg-white rounded-lg  p-14 shadow-md group cursor-pointer">
                             <p className="font-[600] text-xl text-[#FF7F00]">WHY CHOOSE US</p>
                            <p className="text-sm font-[400] text-black mt-2"> A one-stop solution for terminating international calls to all telecom networks within Nigeria and beyond.</p>
                             <p className="text-sm text-[#8F8F8F] pt-6 font-[400] text-center md:text-left">THySiP is one of the most licenced carriers in Nigeria outside the registered MNOs, and therefore it is the best option for terminate international calls into Nigeria, as it is One-Stop-Shop to deliver all international incoming and outgoing calls to all telecommunications networks within Nigeria and the ROW.</p>
                         </div>
                    </section>
                    
                    <img src={Ellipse2} alt="" className="absolute top-[100%] md:top-0 right-0 opacity-[0.7] h-full" style={{ zIndex: '-1' }} />

                </div>
               
                
                 <div className="bg-white rounded-2xl m-auto shadow-md p-4 mb-14  h-full md:w-[90%] min-h-max py-10 xl:min-h-[100svh] px-10 w-full bg-red flex flex-col">
                            <h5 className="text-xs text-[#FF7F00] font-[500]">GET IN TOUCH</h5>
                            <h3 className="text-[#000] md:text-lg font-[600] text-black mt-3">LET'S GET STARTED</h3>

                            <p className="text-sm font-[300] mt-3">
                                Send us a message and we'll respond to you in 24 hours or less.
                            </p>


                            <form className="mt-5">
                                <div className="grid md:grid-cols-2 w-full gap-6">
                                    <div className="mb-6 md:w-[100%]">
                                        <div className="flex items-center justify-between">
                                            <label
                                                htmlFor="surName"
                                                className="block  leading-6 text-la text-xs font-[400] text-[#000000E5]"
                                            >
                                                Surname <span className="text-[#FF3B30]">*</span>
                                            </label>
                                        </div>
                                        <div className="mt-1 relative">
                                            <InputField
                                                id="surName"
                                                name="surName"
                                                type={'text'}
                                                placeholder="James"
                                                value={contact?.surName}
                                                onChange={handleFormChanger}
                                                required={true}
                                                classes={"bg-[#F5F5F7] border-[#F5F5F7]"}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-6 md:w-[100%]">
                                        <div className="flex items-center justify-between">
                                            <label
                                                htmlFor="firstName"
                                                className="block  leading-6 text-xs font-[400] text-[#000000E5]"
                                            >
                                                First Name <span className="text-[#FF3B30]">*</span>
                                            </label>
                                        </div>
                                        <div className="mt-1 relative">
                                            <InputField
                                                id="firstName"
                                                name="firstName"
                                                type={'text'}
                                                placeholder="James"
                                                value={contact?.firstName}
                                                onChange={handleFormChanger}
                                                required={true}
                                                classes={"bg-[#F5F5F7] border-[#F5F5F7]"}
                                            />
                                        </div>
                                    </div>
                                 </div>

                                <div className="grid md:grid-cols-2 w-full gap-6">
                                    <div className="mb-6 md:w-[100%]">
                                        <div className="flex items-center justify-between">
                                            <label
                                                htmlFor="companyName"
                                                className="block  leading-6 text-la text-xs font-[400] text-[#000000E5]"
                                            >
                                                Company Name<span className="text-[#FF3B30]">*</span>
                                            </label>
                                        </div>
                                        <div className="mt-1 relative">
                                            <InputField
                                                id="surName"
                                                name="surName"
                                                type={'text'}
                                                placeholder="James"
                                                value={contact?.CompanyName}
                                                onChange={handleFormChanger}
                                                required={true}
                                                classes={"bg-[#F5F5F7] border-[#F5F5F7]"}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-6 md:w-[100%]">
                                        <div className="flex items-center justify-between">
                                            <label
                                                htmlFor="contact"
                                                className="block  leading-6 text-xs font-[400] text-[#000000E5]"
                                            >
                                                Company Contact Number<span className="text-[#FF3B30]">*</span>
                                            </label>
                                        </div>
                                        <div className="mt-1 relative">
                                            <InputField
                                                id="Contact"
                                                name="contact"
                                                type={'text'}
                                                placeholder="James"
                                                value={contact?.contact}
                                                onChange={handleFormChanger}
                                                required={true}
                                                classes={"bg-[#F5F5F7] border-[#F5F5F7]"}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 w-full gap-6">
                                    <div className="mb-6 md:w-[100%]">
                                        <div className="flex items-center justify-between">
                                            <label
                                                htmlFor="email"
                                                className="block  leading-6 text-la text-xs font-[400] text-[#000000E5]"
                                            >
                                                Email Address<span className="text-[#FF3B30]">*</span>
                                            </label>
                                        </div>
                                        <div className="mt-1 relative">
                                            <InputField
                                                id="email"
                                                name="email"
                                                type={'email'}
                                                placeholder="themainjames1993@email.com"
                                                value={contact?.CompanyName}
                                                onChange={handleFormChanger}
                                                required={true}
                                                classes={"bg-[#F5F5F7] border-[#F5F5F7]"}
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-6 md:w-[100%]">
                                        <div className="flex items-center justify-between">
                                            <label
                                                htmlFor="country"
                                                className="block  leading-6 text-xs font-[400] text-[#000000E5]"
                                            >
                                                Country<span className="text-[#FF3B30]">*</span>
                                            </label>
                                        </div>
                                        <div className="mt-1 relative">
                                            <InputField
                                                id="country"
                                                name="country"
                                                type={'text'}
                                                placeholder="Nigeria"
                                                value={contact?.contact}
                                                onChange={handleFormChanger}
                                                required={true}
                                                classes={"bg-[#F5F5F7] border-[#F5F5F7]"}
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mb-6 md:w-[100%]">
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="email"
                                            className="block  leading-6 text-xs font-[400] text-[#000000E5]"
                                        >
                                            Message
                                        </label>
                                    </div>
                                    <div className="mt-1 relative">
                                        <textarea value={contact?.message} onChange={(e: any) => setContact({ ...contact, message: e.target.value })} placeholder="Enter your Message" className="rounded-[12px] bg-[#F5F5F7] border-[#F5F5F7] text-sm border-none outline-none p-3 w-full h-[155px]"></textarea>

                                    </div>
                                </div>

                                <Button type={'submit'} name="Submit Message" className="bg-[#FF7F00] text-white rounded-[12px] mb-3" />
                            </form>
                        </div>
                
                <div >{children}</div>
            </div>
            <StaySection>
                </StaySection>
            <Footer />
            <img src={Ellipse1} alt="" className="absolute top-0 left-0 opacity-[0.7] z-0" />
        </div>
    );
};

export default HySipLayout;
