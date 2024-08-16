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
import ContactImg from "../assets/images/contact-2.png";
import { InputField } from "../components/Input";
import { Button } from "../components/Button";


const styles = {
    parentContainer: "w-full h-full  overflow-x-hidden md:overflow-x-auto  bg-[#F5F5F7] md:min-h-screen",
    container: "2xl:container 2xl:mx-auto  md:m-0",
    chiefCenter: "md:max-w-5xl xl:max-w-5xl mx-auto",
};
interface layoutprops {
    children: any;
}
const ContactLayout = ({ children }: layoutprops) => {
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
                        <Link className="flex items-center gap-1 text-[#000000E5] text-sm font-[400] hover:text-[#FF7F00]" to={'/about'}>About </Link>
                        <Link className="flex items-center gap-1 text-[#FF7F00] text-sm font-[400] hover:text-[#000000E5]" to={'/contact'}>Contact  </Link>
                        <Link className="flex items-center gap-1 text-[#fff] text-xs font-[400] hover:text-[#000] hover:bg-[#FF7F00] bg-black p-3 py-2 rounded-xl" to={'/'}>Self Service  </Link>

                    </div>
                    <div className="md:hidden">
                        <UserNav />
                    </div>
                </div>


                <div className="min-h-max py-10 xl:min-h-[80svh] h-full px-4 w-full bg-red flex flex-col items-center justify-center gap-8 relative relative z-10 overflow-y-hidden">

                    <section className="flex flex-col md:flex-row items-start gap-8 w-full  md:max-w-5xl xl:max-w-5xl mx-auto">
                        <div className="flex flex-col gap-5 md:w-[40%]">
                            <img src={ContactImg} alt="" className="w-[100%] h-[300px] object-cover rounded-xl" />

                            <div className="flex flex-col gap-4">
                                <div className="bg-white rounded-2xl p-3 flex items-start gap-4 py-5 shadow-md">
                                    <svg className="w-12" viewBox="0 0 60 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="59.43" height="56" rx="16" fill="#FFF7EF" />
                                        <path d="M40.8571 38.2857H18.5714C17.1486 38.2857 16 37.1371 16 35.7143V20.2857C16 18.8629 17.1486 17.7143 18.5714 17.7143H40.8571C42.28 17.7143 43.4286 18.8629 43.4286 20.2857V35.7143C43.4286 37.1371 42.28 38.2857 40.8571 38.2857ZM18.5714 19.4286C18.0914 19.4286 17.7143 19.8057 17.7143 20.2857V35.7143C17.7143 36.1943 18.0914 36.5714 18.5714 36.5714H40.8571C41.3371 36.5714 41.7143 36.1943 41.7143 35.7143V20.2857C41.7143 19.8057 41.3371 19.4286 40.8571 19.4286H18.5714Z" fill="#FF7F00" />
                                        <path d="M29.7153 31.36C28.5153 31.36 27.4181 30.88 26.5953 30.0057L17.5953 20.44C17.2696 20.0971 17.2867 19.5486 17.6296 19.2229C17.9724 18.8971 18.521 18.9143 18.8467 19.2571L27.8467 28.8229C28.8238 29.8686 30.6067 29.8686 31.5838 28.8229L40.5838 19.2743C40.9096 18.9314 41.4581 18.9143 41.801 19.24C42.1438 19.5657 42.161 20.1143 41.8353 20.4571L32.8353 30.0229C32.0124 30.8971 30.9153 31.3771 29.7153 31.3771V31.36Z" fill="#FF7F00" />
                                    </svg>

                                    <div className="flex flex-col gap-4">
                                        <div className="flex flex-col gap-1">
                                            <h5 className="text-sm text-[#FF7F00] font-[500]"> Contact email</h5>
                                            <p className="text-sm font-[300] text-[#000000E5]">hello@connectsurfsmile.com</p>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h5 className="text-sm text-[#FF7F00] font-[500]">Preorder/waiting list email</h5>
                                            <p className="text-sm font-[300] text-[#000000E5]">css.business@connectsurfsmile.com </p>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h5 className="text-sm text-[#FF7F00] font-[500]">Dedicated plan email</h5>
                                            <p className="text-sm font-[300] text-[#000000E5]">css.business@connectsurfsmile.com  </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="bg-white rounded-2xl p-3 flex items-center gap-4 py-5 shadow-md">

                                    <svg className="w-12 h-12" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.5" width="64" height="64" rx="16" fill="#FFF7EF" />
                                        <path d="M32 17.8333C35.1826 17.8333 38.2348 19.0976 40.4853 21.3481C42.7357 23.5985 44 26.6507 44 29.8333C44 34.8013 40.2133 40.0067 32.8 45.5667C32.5692 45.7398 32.2885 45.8333 32 45.8333C31.7115 45.8333 31.4308 45.7398 31.2 45.5667C23.7867 40.0067 20 34.8013 20 29.8333C20 26.6507 21.2643 23.5985 23.5147 21.3481C25.7652 19.0976 28.8174 17.8333 32 17.8333ZM32 20.5C29.5246 20.5 27.1507 21.4833 25.4003 23.2337C23.65 24.984 22.6667 27.358 22.6667 29.8333C22.6667 33.4467 25.4907 37.6147 31.264 42.2413L32 42.8227L32.736 42.2413C38.5093 37.6147 41.3333 33.4467 41.3333 29.8333C41.3333 27.358 40.35 24.984 38.5997 23.2337C36.8493 21.4833 34.4754 20.5 32 20.5ZM32 27.1667C32.7072 27.1667 33.3855 27.4476 33.8856 27.9477C34.3857 28.4478 34.6667 29.1261 34.6667 29.8333C34.6667 30.5406 34.3857 31.2189 33.8856 31.719C33.3855 32.219 32.7072 32.5 32 32.5C31.2928 32.5 30.6145 32.219 30.1144 31.719C29.6143 31.2189 29.3333 30.5406 29.3333 29.8333C29.3333 29.1261 29.6143 28.4478 30.1144 27.9477C30.6145 27.4476 31.2928 27.1667 32 27.1667Z" fill="#FF7F00" />
                                    </svg>



                                    <div className="flex flex-col gap-1">
                                        <h5 className="text-sm text-[#FF7F00] font-[500]">Our Address</h5>
                                        <p className="text-sm font-[300] text-[#000000E5]">Enipaul Plaza, Oron Road, Uyo, Akwa Ibom State</p>
                                    </div>

                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="bg-white rounded-2xl p-3 flex items-center gap-4 py-5 shadow-md">

                                    <svg className="w-12 h-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="64" height="64" rx="16" fill="#FFF7EF" />
                                        <path d="M38.1729 34.5213L38.7809 33.9173L37.3689 32.4987L36.7635 33.1027L38.1729 34.5213ZM40.8195 33.664L43.3675 35.0493L44.3209 33.292L41.7742 31.908L40.8195 33.664ZM43.8569 37.8013L41.9636 39.6853L43.3729 41.1027L45.2662 39.22L43.8569 37.8013ZM40.8089 40.2907C38.8756 40.472 33.8755 40.3107 28.4595 34.9267L27.0489 36.344C32.9582 42.22 38.5835 42.508 40.9956 42.2827L40.8089 40.2907ZM28.4595 34.9267C23.2982 29.7933 22.4422 25.4773 22.3355 23.604L20.3382 23.7173C20.4715 26.0747 21.5315 30.8587 27.0489 36.344L28.4595 34.9267ZM30.2929 26.6867L30.6755 26.3053L29.2675 24.888L28.8849 25.268L30.2929 26.6867ZM30.9795 21.4587L29.2995 19.2133L27.6982 20.4133L29.3782 22.6573L30.9795 21.4587ZM23.6449 18.724L21.5515 20.804L22.9622 22.2227L25.0542 20.1427L23.6449 18.724ZM29.5889 25.9773C28.8822 25.268 28.8822 25.268 28.8822 25.2707H28.8795L28.8755 25.276C28.8126 25.3403 28.7559 25.4103 28.7062 25.4853C28.6342 25.592 28.5555 25.732 28.4889 25.9093C28.3265 26.3671 28.2861 26.8592 28.3715 27.3373C28.5502 28.4907 29.3449 30.0147 31.3795 32.0387L32.7902 30.62C30.8849 28.7267 30.4316 27.5747 30.3475 27.0307C30.3075 26.772 30.3489 26.644 30.3609 26.6147C30.3675 26.596 30.3702 26.5947 30.3609 26.6067C30.3491 26.6252 30.3357 26.6426 30.3209 26.6587L30.3075 26.672C30.3032 26.6761 30.2988 26.6802 30.2942 26.684L29.5889 25.9773ZM31.3795 32.0387C33.4156 34.0627 34.9475 34.852 36.1022 35.028C36.6929 35.1187 37.1689 35.0467 37.5302 34.912C37.7323 34.8372 37.9213 34.731 38.0902 34.5973C38.1132 34.5782 38.1354 34.5581 38.1569 34.5373L38.1662 34.5293L38.1702 34.5253L38.1716 34.5227C38.1716 34.5227 38.1729 34.5213 37.4676 33.812C36.7609 33.1027 36.7649 33.1013 36.7649 33.1013L36.7675 33.0987L36.7702 33.096L36.7782 33.0893L36.7915 33.076C36.8076 33.0616 36.8245 33.0483 36.8422 33.036C36.8555 33.0267 36.8515 33.0307 36.8329 33.0387C36.7995 33.0507 36.6689 33.092 36.4062 33.052C35.8542 32.9667 34.6942 32.5133 32.7902 30.62L31.3795 32.0387ZM29.2995 19.212C27.9395 17.3987 25.2675 17.1107 23.6449 18.724L25.0542 20.1427C25.7635 19.4373 27.0222 19.5107 27.6982 20.4133L29.2995 19.212ZM22.3369 23.6053C22.3102 23.144 22.5222 22.6613 22.9622 22.224L21.5502 20.8053C20.8342 21.5173 20.2702 22.5253 20.3382 23.7173L22.3369 23.6053ZM41.9636 39.6853C41.5982 40.0507 41.2036 40.256 40.8102 40.292L40.9956 42.2827C41.9755 42.1907 42.7769 41.6973 43.3742 41.104L41.9636 39.6853ZM30.6755 26.3053C31.9889 25 32.0862 22.9373 30.9809 21.46L29.3795 22.6587C29.9169 23.3773 29.8369 24.32 29.2662 24.8893L30.6755 26.3053ZM43.3689 35.0507C44.4582 35.6427 44.6276 37.0373 43.8582 37.8027L45.2689 39.22C47.0555 37.4427 46.5049 34.4787 44.3222 33.2933L43.3689 35.0507ZM38.7809 33.9187C39.2929 33.4093 40.1169 33.284 40.8209 33.6653L41.7755 31.9093C40.3302 31.1227 38.5382 31.34 37.3702 32.5L38.7809 33.9187Z" fill="#FF7F00" />
                                    </svg>

                                    <div className="flex flex-col gap-1">
                                        <h5 className="text-sm text-[#FF7F00] font-[500]">Chat or Call Us</h5>
                                        <p className="text-sm font-[300] text-[#000000E5]">02085910000</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl shadow-md p-4 h-full md:w-[60%]">
                            <h5 className="text-xs text-[#FF7F00] font-[500]">GET IN TOUCH</h5>
                            <h3 className="text-[#000] md:text-lg font-[600] text-black mt-3">Got Questions or You Just Want to Chat? Reach Out to Us</h3>

                            <p className="text-sm font-[300] mt-3">
                                Need to make enquiry or send feedback? We’re here to help. Send us a message and well respond to you in 24 hours or less.
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
                                <div className="mb-6 md:w-[100%]">
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="email"
                                            className="block  leading-6 text-xs font-[400] text-[#000000E5]"
                                        >
                                            Email Address
                                        </label>
                                    </div>
                                    <div className="mt-1 relative">
                                        <InputField
                                            id="email"
                                            name="email"
                                            type={'text'}
                                            placeholder="themainjames1993@email.com"
                                            value={contact?.email}
                                            onChange={handleFormChanger}
                                            required={true}
                                            classes={"bg-[#F5F5F7] border-[#F5F5F7]"}
                                        />
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

                    </section>
                </div>
                <div >{children}</div>
                <Footer />
            </div>
        </div>
    );
};

export default ContactLayout;
