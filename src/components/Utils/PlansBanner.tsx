import { Link, useNavigate } from "react-router-dom";
import { BackIcon } from "../../assets/icons/index";
import AppStore from "../../assets/icons/app.svg";
import Play from "../../assets/icons/play.svg";

export const PlansBanner = () => {
    const navigate = useNavigate();



    return (
        <div className="py-10 rounded-2xl">
            <div className="w-full bg-stay h-max py-10 md:min-h-[250px] px-5 md:px-10 flex flex-col  items-center justify-center gap-8 rounded-2xl" >
                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h4 className="text-[#fff] font-[600] text-xl mb-4 text-center">Need Reliable and Unlimted Internet Service for your Business?.</h4>
                        <Link to={'/'} className="bg-white text-[#FF7F00] p-3 px-6 rounded-xl text-sm font-[500]">
                            Explore our Business Plans
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};
