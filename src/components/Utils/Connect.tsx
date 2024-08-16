import { Link, useNavigate } from "react-router-dom";
import { BackIcon } from "../../assets/icons/index";
import AppStore from "../../assets/icons/app.svg";
import Play from "../../assets/icons/play.svg";

export const ConnectBanner = () => {
    const navigate = useNavigate();



    return (
        <div className="bg-[#fff] py-20">
            <div className="w-full md:max-w-5xl xl:max-w-5xl mx-auto contact-banner h-max py-10 md:min-h-[250px] px-10 flex flex-col  items-center justify-center">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[#fff] font-[600] text-3xl text-center">Contact Us to Get Started</h4>
                        <p className="text-white text-xs md:w-3/3 text-center">send us an email to hello@connectsurfsmile.com</p>
                        <Link to={'/'} className="bg-[#000] text-center w-max mx-auto text-white p-3 px-6 rounded-xl text-sm">Email Us</Link>
                    </div>
                </div>
              
            </div>
        </div>
    );
};
