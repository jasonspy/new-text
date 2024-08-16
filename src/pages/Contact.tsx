
import { Link, useNavigate } from "react-router-dom";
import Wifi from "../assets/icons/wifi.svg"
import Shield from "../assets/icons/shield.svg"
import Connect from "../assets/icons/connect.svg"
import Bolt from "../assets/icons/bolt.svg"
import Person from "../assets/images/person.svg"

import ContainerLayout from "../layouts/ContainerLayout";
import { RightArrow } from "../assets/icons";
import { DownloadBanner } from "../components/Utils/DownloadBanner";
import { StaySection } from "../components/Utils/StaySection";
import CssMobileContainerLayout from "../layouts/CssMobileContainer";
import ContactLayout from "../layouts/CobtactLayout";
import { PlansBanner } from "../components/Utils/PlansBanner";


const Contact = () => {

    const navigate = useNavigate()

    return (
        <ContactLayout>
            <section className="bg-[#fff] py-10  md:px-0">

                <div className=" max-w-full  md:max-w-5xl xl:max-w-5xl mx-auto px-4 py-4">
                    <PlansBanner />
                </div>

            </section>
        </ContactLayout>
    );
}

export default Contact

