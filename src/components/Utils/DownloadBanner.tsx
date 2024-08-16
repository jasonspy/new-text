import { Link, useNavigate } from "react-router-dom";
import { BackIcon } from "../../assets/icons/index";
import AppStore from "../../assets/icons/app.svg";
import Play from "../../assets/icons/play.svg";

export const DownloadBanner = () => {
    const navigate = useNavigate();



    return (
        <div className="bg-[#F5F5F7] py-10">
            <div className="w-full md:max-w-5xl xl:max-w-5xl mx-auto bg-download h-max py-10 md:min-h-[200px] px-10 flex flex-col md:flex-row items-center">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                        <h4 className="text-[#FF7F00] font-[600] text-xl text-center md:text-left">Download The CSS Mobile App</h4>
                        <p className="text-white text-xs md:w-2/3 text-center md:text-left">Check out how we are powering internet connection through cutting-edge fibre optics connectivity</p>
                        <div className="mt-3 flex items-center justify-center md:justify-start gap-2">
                            <Link to={'/'}>
                                <img src={AppStore} alt="" />
                            </Link>
                            <Link to={'/'}>
                                <img src={Play} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="text-right mt-10 md:mt-0 w-max md:ml-auto">
                    <Link to={'/'} className="bg-[#FF7F00] text-white p-3 px-6 rounded-xl text-sm">Download Now</Link>
                </div>
            </div>
        </div>
    );
};
