
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


const CssMobile = () => {

    const navigate = useNavigate()

    return (
        <CssMobileContainerLayout>
            <section className="bg-[#F5F5F7]  md:px-0">
                <StaySection />
            </section>
        </CssMobileContainerLayout>
    );
}

export default CssMobile

