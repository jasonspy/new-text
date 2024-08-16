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
import AboutImg from "../assets/images/about.svg";
import { InputField } from "../components/Input";
import { Button } from "../components/Button";


const styles = {
    parentContainer: "w-full h-full  overflow-x-hidden md:overflow-x-auto  bg-[#F5F5F7] md:min-h-screen",
    container: "2xl:container 2xl:mx-auto  md:m-0",
    chiefCenter: "md:max-w-5xl xl:max-w-5xl mx-auto",
};
interface layoutprops {
    children: any;
    showAbout?: boolean;
}
const AboutLayout = ({ children, showAbout }: layoutprops) => {
    const dispatch = useDispatch<AppDispatch>();

    const [contact, setContact] = useState(Object)

    const handleFormChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

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

                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#000000E5]" to={'/'}>Home </Link>
                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" target="_blank" to={'/css-fibre'}>CSS Fiber </Link>
                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" target="_blank" to={'/css-mobile/'}>myCSSApp </Link>
                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/coming-soon'}>CSS Mobile </Link>
                        <Link className="flex items-center gap-1 text-[#FF7F00] text-sm font-[400] hover:text-[#000000E5]" to={'/about'}>About </Link>
                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/contact'}>Contact  </Link>
                        <Link className="flex items-center gap-1 text-[#fff] text-xs font-[400] hover:text-[#000] hover:bg-[#FF7F00] bg-black p-3 py-2 rounded-xl" to={'/'}>Self Service  </Link>

                    </div>
                    <div className="md:hidden">
                        <UserNav />
                    </div>
                </div>


                {!showAbout ? <div className="min-h-max py-10 xl:min-h-[80svh] h-full px-4 w-full bg-red flex flex-col items-center justify-center gap-8 relative relative z-10 overflow-y-hidden">

                    <section className="flex flex-col md:flex-row items-start gap-8 w-full  md:max-w-5xl xl:max-w-5xl mx-auto">
                        <div className="flex flex-col gap-5 md:w-[40%]">
                            <img src={AboutImg} alt="" className="w-[100%] h-full object-cover rounded-xl" />

                            <div className="flex flex-col gap-4">
                                <div className="bg-white rounded-2xl p-3 flex items-center justify-center gap-4 py-10 shadow-md">
                                    <div className="text-center bg-[#F5F5F7] p-4 rounded-xl">
                                        <h4 className="text-2xl font-[600]">7+</h4>
                                        <div className="flex items-center justify-center gap-1 mt-2">
                                            <svg className="w-[16px] h-[16px]" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.5 9.5C6.83696 9.5 6.20107 9.23661 5.73223 8.76777C5.26339 8.29893 5 7.66304 5 7C5 6.33696 5.26339 5.70107 5.73223 5.23223C6.20107 4.76339 6.83696 4.5 7.5 4.5C8.16304 4.5 8.79893 4.76339 9.26777 5.23223C9.73661 5.70107 10 6.33696 10 7C10 7.3283 9.93534 7.65339 9.8097 7.95671C9.68406 8.26002 9.49991 8.53562 9.26777 8.76777C9.03562 8.99991 8.76002 9.18406 8.45671 9.3097C8.15339 9.43534 7.8283 9.5 7.5 9.5ZM7.5 0C5.64348 0 3.86301 0.737498 2.55025 2.05025C1.2375 3.36301 0.5 5.14348 0.5 7C0.5 12.25 7.5 20 7.5 20C7.5 20 14.5 12.25 14.5 7C14.5 5.14348 13.7625 3.36301 12.4497 2.05025C11.137 0.737498 9.35652 0 7.5 0Z" fill="#808080" />
                                            </svg>
                                            <span className="text-sm text-[#8F8F8F]">States</span>

                                        </div>
                                    </div>
                                    <div className="text-center bg-[#F5F5F7] p-4 rounded-xl">
                                        <h4 className="text-2xl font-[600]">80%</h4>
                                        <div className="flex items-center justify-center gap-1 mt-2">
                                            <svg className="w-[16px] h-[16px]" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.5 9.65002C11.1685 9.65002 10.8505 9.78172 10.6161 10.0161C10.3817 10.2506 10.25 10.5685 10.25 10.9C10.25 11.2315 10.3817 11.5495 10.6161 11.7839C10.8505 12.0183 11.1685 12.15 11.5 12.15C11.8315 12.15 12.1495 12.0183 12.3839 11.7839C12.6183 11.5495 12.75 11.2315 12.75 10.9C12.75 10.5685 12.6183 10.2506 12.3839 10.0161C12.1495 9.78172 11.8315 9.65002 11.5 9.65002ZM8.75 10.9C8.75 10.1707 9.03973 9.47121 9.55546 8.95548C10.0712 8.43976 10.7707 8.15002 11.5 8.15002C12.2293 8.15002 12.9288 8.43976 13.4445 8.95548C13.9603 9.47121 14.25 10.1707 14.25 10.9C14.25 11.6294 13.9603 12.3288 13.4445 12.8446C12.9288 13.3603 12.2293 13.65 11.5 13.65C10.7707 13.65 10.0712 13.3603 9.55546 12.8446C9.03973 12.3288 8.75 11.6294 8.75 10.9Z" fill="#8F8F8F" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.5 5.64999C10.4617 5.65011 9.44683 5.95809 8.58358 6.53497C7.72034 7.11186 7.04753 7.93175 6.65022 8.89099C6.25291 9.85022 6.14895 10.9057 6.35147 11.924C6.55399 12.9424 7.0539 13.8778 7.788 14.612C7.8596 14.6812 7.9167 14.764 7.95596 14.8555C7.99523 14.947 8.01587 15.0455 8.01669 15.145C8.0175 15.2446 7.99848 15.3434 7.96073 15.4355C7.92297 15.5277 7.86724 15.6114 7.79679 15.6818C7.72634 15.7522 7.64257 15.8078 7.55038 15.8455C7.45819 15.8832 7.35943 15.9021 7.25984 15.9012C7.16026 15.9003 7.06185 15.8795 6.97037 15.8402C6.87889 15.8008 6.79615 15.7437 6.727 15.672C5.78301 14.728 5.14014 13.5252 4.8797 12.2159C4.61925 10.9065 4.75293 9.54931 5.26382 8.31592C5.77472 7.08252 6.63988 6.02832 7.74991 5.28662C8.85994 4.54493 10.165 4.14905 11.5 4.14905C12.835 4.14905 14.1401 4.54493 15.2501 5.28662C16.3601 6.02832 17.2253 7.08252 17.7362 8.31592C18.2471 9.54931 18.3808 10.9065 18.1203 12.2159C17.8599 13.5252 17.217 14.728 16.273 15.672C16.1308 15.8045 15.9428 15.8766 15.7485 15.8732C15.5542 15.8697 15.3688 15.791 15.2314 15.6536C15.094 15.5162 15.0153 15.3308 15.0118 15.1365C15.0084 14.9422 15.0805 14.7542 15.213 14.612C15.9475 13.8778 16.4477 12.9422 16.6504 11.9236C16.8531 10.905 16.7491 9.8492 16.3517 8.88972C15.9542 7.93023 15.2811 7.11019 14.4175 6.53333C13.5539 5.95648 12.5386 5.64972 11.5 5.64999Z" fill="#808080" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11.4996 1.75003C9.68992 1.75004 7.92087 2.28669 6.41617 3.2921C4.91148 4.29752 3.7387 5.72655 3.04617 7.39849C2.35363 9.07042 2.17243 10.9102 2.52548 12.6851C2.87853 14.46 3.74997 16.0904 5.02961 17.37C5.1033 17.4387 5.1624 17.5215 5.2034 17.6135C5.24439 17.7055 5.26643 17.8048 5.26821 17.9055C5.26998 18.0062 5.25146 18.1062 5.21374 18.1996C5.17602 18.293 5.11987 18.3779 5.04865 18.4491C4.97743 18.5203 4.8926 18.5764 4.79921 18.6142C4.70582 18.6519 4.60579 18.6704 4.50509 18.6686C4.40439 18.6668 4.30508 18.6448 4.21308 18.6038C4.12108 18.5628 4.03828 18.5037 3.96961 18.43C2.47999 16.9407 1.46548 15.043 1.05439 12.9771C0.643303 10.9111 0.854095 8.76967 1.66011 6.82353C2.46613 4.87738 3.83116 3.21396 5.58259 2.04364C7.33401 0.873318 9.39316 0.248657 11.4996 0.248657C13.6061 0.248657 15.6652 0.873318 17.4166 2.04364C19.1681 3.21396 20.5331 4.87738 21.3391 6.82353C22.1451 8.76967 22.3559 10.9111 21.9448 12.9771C21.5337 15.043 20.5192 16.9407 19.0296 18.43C18.8874 18.5625 18.6994 18.6346 18.5051 18.6312C18.3108 18.6278 18.1254 18.5491 17.988 18.4117C17.8506 18.2742 17.7719 18.0889 17.7684 17.8946C17.765 17.7003 17.8371 17.5122 17.9696 17.37C19.2493 16.0904 20.1207 14.46 20.4737 12.6851C20.8268 10.9102 20.6456 9.07042 19.9531 7.39849C19.2605 5.72655 18.0878 4.29752 16.5831 3.2921C15.0784 2.28669 13.3093 1.75004 11.4996 1.75003Z" fill="#808080" />
                                            </svg>
                                            <span className="text-sm text-[#8F8F8F]">Coverage</span>

                                        </div>
                                    </div>
                                    <div className="text-center bg-[#F5F5F7] p-4 rounded-xl">
                                        <h4 className="text-2xl font-[600]">12</h4>
                                        <div className="flex items-center justify-center gap-1 mt-2">
                                            <svg className="w-[16px] h-[16px]" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.2515 2.25C13.2515 2.05109 13.1725 1.86032 13.0318 1.71967C12.8912 1.57902 12.7004 1.5 12.5015 1.5C12.3026 1.5 12.1118 1.57902 11.9712 1.71967C11.8305 1.86032 11.7515 2.05109 11.7515 2.25V3H10.25C9.65326 3 9.08097 3.23705 8.65901 3.65901C8.23705 4.08097 8 4.65326 8 5.25V6.006C8.79565 6.006 9.55871 6.32207 10.1213 6.88468C10.6839 7.44729 11 8.21035 11 9.006V21H14V11.256C13.9998 10.3915 14.2983 9.55351 14.845 8.88382C15.3917 8.21414 16.153 7.7539 17 7.581V5.25C17 4.65326 16.7629 4.08097 16.341 3.65901C15.919 3.23705 15.3467 3 14.75 3H13.2515V2.25ZM19.25 21H15.5V11.256C15.5 10.6593 15.7371 10.087 16.159 9.66501C16.581 9.24305 17.1533 9.006 17.75 9.006H19.25V9C19.8467 9 20.419 9.23705 20.841 9.65901C21.2629 10.081 21.5 10.6533 21.5 11.25V18.75C21.5 19.3467 21.2629 19.919 20.841 20.341C20.419 20.7629 19.8467 21 19.25 21ZM7.7645 7.7025C7.93441 7.59235 8.13089 7.53009 8.33323 7.5223C8.53557 7.51452 8.73626 7.56148 8.91413 7.65825C9.092 7.75502 9.24046 7.898 9.34384 8.07211C9.44722 8.24623 9.50169 8.44501 9.5015 8.6475L9.5 20.25C9.5 20.4489 9.42098 20.6397 9.28033 20.7803C9.13968 20.921 8.94891 21 8.75 21H5.75C5.15326 21 4.58097 20.7629 4.15901 20.341C3.73705 19.919 3.5 19.3467 3.5 18.75V11.6895C3.50016 11.3144 3.5941 10.9452 3.7733 10.6157C3.95249 10.2861 4.21123 10.0066 4.526 9.8025L7.7645 7.7025Z" fill="#8F8F8F" />
                                            </svg>
                                            <span className="text-sm text-[#8F8F8F]">Cities</span>

                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-4 h-full md:w-[60%]">
                            <h5 className="text-xs text-[#FF7F00] font-[500]">WHO WE ARE</h5>
                            <h3 className="text-[#000] md:text-2xl font-[600] text-black mt-3">
                                Delivering reliable, affordable, wireless internet so everyone can connect, surf, and smile.
                            </h3>

                            <p className="text-[13px] font-[300] mt-5 md:mt-10">
                                CSS Mobile, a trademark of Connect Surf and Smile Ltd., is a dynamic technology company dedicated to the design, development, and promotion of cutting-edge wireless broadband solutions. As a leader in the industry, Connect Surf and Smile Ltd. is committed to revolutionizing wireless internet services with our innovative and cost-effective technologies.                            </p>
                            <p className="text-[13px] font-[300] mt-5 md:mt-10">
                                Our mission is to address the challenges of high data costs and limited Internet of Things (IoT) integration, ensuring seamless connectivity across our nation. Leveraging traditional Wi-Fi connections, we offer a range of tri-play products including IPTV, Wi-Fi calling (VoIP), AdWi-Fi (Wi-Fi marketing), Learning Management Systems (LMS), Data-hi (Online flash), and various IoT solutions.                            </p>
                            <p className="text-[13px] font-[300] mt-5 md:mt-10 mb-4">
                                Among our esteemed clients are Victor Attah International Airport in Uyo, Monty Suites Hotels in Uyo, Calabar, and Lagos, Ibom Tropicana Mall in Uyo, Silverbird Cinemas in Uyo, GeorgeTown residences, Winners Chapel in Ikot Ebido, and many more.                            </p>

                        </div>

                    </section>
                </div> : <></>}
                <div >{children}</div>
                <Footer />
            </div>
        </div>
    );
};

export default AboutLayout;
