import { Link, useNavigate } from "react-router-dom";
import { BackIcon, Facebook, Insta, LinkedIn, Twitter } from "../../assets/icons/index";
import AppStore from "../../assets/icons/app.svg";
import Play from "../../assets/icons/footer-logo.svg";

export const Footer = () => {
    const navigate = useNavigate();



    return (
        <div className="bg-[#2F170A] py-10 px-4">
            <div className="w-full md:max-w-5xl xl:max-w-5xl mx-auto h-max py-10 flex flex-col gap-8 grid-cols-2 md:grid grid-cols-5">
                <div className="flex  flex-col items-start w-max md:mx-auto">
                    <h4 className="text-[#fff] font-[600] text-sm">Quicklinks</h4>

                    <div className="flex flex-col mt-8 gap-2 ml-2 md:ml-0">
                        <Link to={'/'} className="text-sm text-white font-[200]">Campus Area Network</Link>
                        <Link to={'/'} className="text-sm text-white font-[200]">CSS KYC</Link>
                        <Link to={'/css-fibre'} className="text-sm text-white font-[200]">CSS Fibre</Link>
                        <Link to={''} className="text-sm text-white font-[200]">Newsletter</Link>
                    </div>
                </div>

                <div className="flex  flex-col items-start w-max md:mx-auto">
                    <h4 className="text-[#fff] font-[600] text-sm">Company</h4>

                    <div className="flex flex-col mt-8 gap-3 ml-2 md:ml-0">
                        <Link to={'/'} className="text-sm text-white font-[200]">Packages</Link>
                        <Link to={'/'} className="text-sm text-white font-[200]">Business Plans</Link>
                    </div>
                </div>

                <div className="flex  flex-col items-start w-max md:mx-auto">
                    <h4 className="text-[#fff] font-[600] text-sm">Services</h4>

                    <div className="flex flex-col mt-8 gap-3 ml-2 md:ml-0">
                        <Link to={'/css-fibre'} className="text-sm text-white font-[200]">CSS Fiber</Link>
                        <Link to={'/css-mobile'} className="text-sm text-white font-[200]">CSS Mobile</Link>
                        {/* <Link to={'/coming-soon'} className="text-sm text-white font-[200]">CSS Mobile</Link> */}
                        <Link to={'/'} className="text-sm text-white font-[200]">HySip</Link>
                        <Link to={'/'} className="text-sm text-white font-[200]">CSS Connect</Link>
                    </div>
                </div>
                <div className="flex  flex-col items-start w-max md:mx-auto">
                    <h4 className="text-[#fff] font-[600] text-sm">Support</h4>

                    <div className="flex flex-col mt-8 gap-3 ml-2 md:ml-0">
                        <Link to={'/contact'} className="text-sm text-white font-[200]">Contact Us</Link>
                        <Link to={'/'} className="text-sm text-white font-[200]">FAQ</Link>
                        <Link to={'/privacy-policy'} className="text-sm text-white font-[200]">Privacy Policy</Link>
                        <Link to={'/contact'} className="text-sm text-white font-[200]">Help Center</Link>
                    </div>
                </div>
                <div className="flex  flex-col items-start w-max md:mx-auto">
                    <h4 className="text-[#fff] font-[600] text-sm">About</h4>

                    <div className="flex flex-col mt-8 gap-3 ml-2 md:ml-0">
                        <Link to={'/'} className="text-sm text-white font-[200]">Company </Link>
                        <Link to={'/'} className="text-sm text-white font-[200]">Careers</Link>
                        <Link to={'/'} className="text-sm text-white font-[200]">Legal</Link>
                        <Link to={'/'} className="text-sm text-white font-[200]">Help</Link>
                    </div>
                </div>



            </div>
            <div className="mt-10 mb-5 flex flex-col  gap-5 items-center justify-center">
                <Link to={'/'}> <img src={Play} alt="" className="w-40" /></Link>
                <p className="text-xs text-white">© 2024 Connect, Surf and Smile Ltd. All rights reserved. </p>

                <div className="flex items-center justify-center gap-4">
                    <Link to={'/'}>
                        <Facebook />
                    </Link>
                    <Link to={'/'}>
                        <Twitter />
                    </Link>
                    <Link to={'/'}>
                        <Insta />
                    </Link>
                    <Link to={'/'}>
                        <LinkedIn />
                    </Link>
                </div>
            </div>
        </div>
    );
};
