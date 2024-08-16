import { Link, useNavigate } from "react-router-dom";
import { BackIcon } from "../../assets/icons/index";
import AppStore from "../../assets/icons/app.svg";
import Play from "../../assets/icons/play.svg";

export const StaySection = () => {
    const navigate = useNavigate();



    return (
        <div className="bg-[#F5F5F7] pt-0">
            <div className="w-full bg-stay h-max py-10 md:min-h-[300px] px-5 md:px-10 flex flex-col  items-center justify-center gap-8">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h4 className="text-[#fff] font-[600] text-2xl">Stay in touch with us.</h4>
                        <p className="text-white text-md md:w-2/3 mx-auto text-center">Stay in the loop, get regular updates on whats new, promotions and incredible offers straight to your inbox</p>
                        <div className="mt-3 flex items-center gap-2">
                            <Link to={'/'}>
                                <img src={AppStore} alt="" />
                            </Link>
                            <Link to={'/'}>
                                <img src={Play} alt="" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="xl:w-1/4">
                    <div className="flex rounded-lg shadow-sm bg-white p-2">
                        <input placeholder="Email Address" type="text" id="hs-trailing-button-add-on-multiple-add-ons" name="hs-trailing-button-add-on-multiple-add-ons" className="py-3 px-4 block w-full  rounded-s-md text-sm outline-none border-none bg-white" />
                        <button type="button" className="-ms-px py-3 px-4 inline-flex justify-center items-center gap-2 rounded-lg font-medium  shadow-sm align-middle  transition-all text-sm bg-[#6A441F] text-white">
                            Receive Updates
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};
