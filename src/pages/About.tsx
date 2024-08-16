
import { Link, useNavigate } from "react-router-dom";
import Wifi from "../assets/icons/wifi.svg"
import Shield from "../assets/icons/shield.svg"
import Connect from "../assets/icons/connect.svg"
import Bolt from "../assets/icons/bolt.svg"
import MemberOne from "../assets/images/pic.png"
import MemberTwo from "../assets/images/pic-2.png"
import MemberThree from "../assets/images/pic-3.png"
import MemberFour from "../assets/images/pic-4.png"
import MemberFive from "../assets/images/pic-5.png"
import AboutLayout from "../layouts/AboutLayout";
import TeamCard from "../components/Utils/TeamCard";
import { StaySection } from "../components/Utils/StaySection";


const About = () => {

    const navigate = useNavigate()

    return (
        <AboutLayout>
            <section className="bg-[#fff] py-10  md:px-0">

                <div className=" max-w-full  md:max-w-5xl xl:max-w-5xl mx-auto px-4 py-4">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-3 py-4 rounded-xl shadow-sm border border-[#0000000a]">
                            <h5 className="text-xs text-[#FF7F00] font-[500]">OUR VISION</h5>

                            <h3 className="text-[#000] md:text-lg font-[600] text-black mt-3">To have 4 million people connected, surfing and smiling on our supreme data.</h3>
                            <p className="text-[13px] font-[300] my-4">
                                Imagine 4 million individuals seamlessly connected, browsing, and enjoying the internet on our exceptional data network. Our supreme data offers not just connectivity, but an experience that brings smiles to faces. Join the community of satisfied users who enjoy reliable, lightning-fast browsing every day.
                            </p>
                        </div>
                        <div className="p-3 py-4 rounded-xl shadow-sm border border-[#0000000a]">
                            <h5 className="text-xs text-[#FF7F00] font-[500]">OUR MISSION</h5>

                            <h3 className="text-[#000] md:text-lg font-[600] text-black mt-3">To become a renowned brand in Nigeria, that provides reliable, affordable, and dependable technology solutions.</h3>
                            <p className="text-[13px] font-[300] my-4">
                                We are on a journey to achieve recognition as a leading brand in Nigeria, we are committed to offering technology solutions that are reliable, affordable, and steadfast. Our focus lies in providing dependable services that cater to the diverse needs of our customers, ensuring a seamless experience with every solution we deliver.                            </p>

                        </div>

                    </div>

                    <div className="my-5">
                        <div className="bg-white rounded-2xl p-3  gap-4 py-5 shadow-sm border border-[#0000000a]">
                            <h5 className="text-xs text-[#FF7F00] font-[500]">OUR MISSION</h5>


                            <div className="flex items-start flex-wrap md:flex-nowrap justify-between gap-3 mt-3">
                                <div className="flex items-center gap-1 bg-[#FFFAEF] p-2 rounded-full px-4">
                                    <svg className="w-4 h-4" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.01697 21.484C2.87085 20.377 1.95667 19.0529 1.32776 17.5889C0.698849 16.1248 0.367815 14.5502 0.353969 12.9568C0.340123 11.3635 0.643743 9.78331 1.24711 8.30855C1.85048 6.83379 2.74152 5.49397 3.86823 4.36726C4.99495 3.24055 6.33477 2.34951 7.80953 1.74614C9.28428 1.14277 10.8644 0.839146 12.4578 0.852992C14.0511 0.866838 15.6258 1.19787 17.0898 1.82678C18.5539 2.45569 19.878 3.36988 20.985 4.516C23.1709 6.77922 24.3804 9.81045 24.3531 12.9568C24.3257 16.1032 23.0637 19.1129 20.8388 21.3378C18.6139 23.5627 15.6042 24.8247 12.4578 24.8521C9.31143 24.8794 6.2802 23.6699 4.01697 21.484ZM19.293 19.792C21.0943 17.9906 22.1063 15.5475 22.1063 13C22.1063 10.4525 21.0943 8.00935 19.293 6.208C17.4916 4.40665 15.0485 3.39466 12.501 3.39466C9.95348 3.39466 7.51032 4.40665 5.70897 6.208C3.90762 8.00935 2.89564 10.4525 2.89564 13C2.89564 15.5475 3.90762 17.9906 5.70897 19.792C7.51032 21.5933 9.95348 22.6053 12.501 22.6053C15.0485 22.6053 17.4916 21.5933 19.293 19.792ZM8.54097 12.148L11.301 14.92L16.461 9.76L18.141 11.464L11.301 18.28L6.86097 13.84L8.54097 12.136V12.148Z" fill="#FF7F00" />
                                    </svg>

                                    <p className="text-xs text-[#000000E5] font-[500]">Reliability, Respect, Customer Focus</p>
                                </div>
                                <div className="flex items-center gap-1 bg-[#FFFAEF] p-2 rounded-full px-4">
                                    <svg className="w-4 h-4" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.01697 21.484C2.87085 20.377 1.95667 19.0529 1.32776 17.5889C0.698849 16.1248 0.367815 14.5502 0.353969 12.9568C0.340123 11.3635 0.643743 9.78331 1.24711 8.30855C1.85048 6.83379 2.74152 5.49397 3.86823 4.36726C4.99495 3.24055 6.33477 2.34951 7.80953 1.74614C9.28428 1.14277 10.8644 0.839146 12.4578 0.852992C14.0511 0.866838 15.6258 1.19787 17.0898 1.82678C18.5539 2.45569 19.878 3.36988 20.985 4.516C23.1709 6.77922 24.3804 9.81045 24.3531 12.9568C24.3257 16.1032 23.0637 19.1129 20.8388 21.3378C18.6139 23.5627 15.6042 24.8247 12.4578 24.8521C9.31143 24.8794 6.2802 23.6699 4.01697 21.484ZM19.293 19.792C21.0943 17.9906 22.1063 15.5475 22.1063 13C22.1063 10.4525 21.0943 8.00935 19.293 6.208C17.4916 4.40665 15.0485 3.39466 12.501 3.39466C9.95348 3.39466 7.51032 4.40665 5.70897 6.208C3.90762 8.00935 2.89564 10.4525 2.89564 13C2.89564 15.5475 3.90762 17.9906 5.70897 19.792C7.51032 21.5933 9.95348 22.6053 12.501 22.6053C15.0485 22.6053 17.4916 21.5933 19.293 19.792ZM8.54097 12.148L11.301 14.92L16.461 9.76L18.141 11.464L11.301 18.28L6.86097 13.84L8.54097 12.136V12.148Z" fill="#FF7F00" />
                                    </svg>

                                    <p className="text-xs text-[#000000E5] font-[500]">Excellence Team Spirit</p>
                                </div>
                                <div className="flex items-center gap-1 bg-[#FFFAEF] p-2 rounded-full px-4">
                                    <svg className="w-4 h-4" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.01697 21.484C2.87085 20.377 1.95667 19.0529 1.32776 17.5889C0.698849 16.1248 0.367815 14.5502 0.353969 12.9568C0.340123 11.3635 0.643743 9.78331 1.24711 8.30855C1.85048 6.83379 2.74152 5.49397 3.86823 4.36726C4.99495 3.24055 6.33477 2.34951 7.80953 1.74614C9.28428 1.14277 10.8644 0.839146 12.4578 0.852992C14.0511 0.866838 15.6258 1.19787 17.0898 1.82678C18.5539 2.45569 19.878 3.36988 20.985 4.516C23.1709 6.77922 24.3804 9.81045 24.3531 12.9568C24.3257 16.1032 23.0637 19.1129 20.8388 21.3378C18.6139 23.5627 15.6042 24.8247 12.4578 24.8521C9.31143 24.8794 6.2802 23.6699 4.01697 21.484ZM19.293 19.792C21.0943 17.9906 22.1063 15.5475 22.1063 13C22.1063 10.4525 21.0943 8.00935 19.293 6.208C17.4916 4.40665 15.0485 3.39466 12.501 3.39466C9.95348 3.39466 7.51032 4.40665 5.70897 6.208C3.90762 8.00935 2.89564 10.4525 2.89564 13C2.89564 15.5475 3.90762 17.9906 5.70897 19.792C7.51032 21.5933 9.95348 22.6053 12.501 22.6053C15.0485 22.6053 17.4916 21.5933 19.293 19.792ZM8.54097 12.148L11.301 14.92L16.461 9.76L18.141 11.464L11.301 18.28L6.86097 13.84L8.54097 12.136V12.148Z" fill="#FF7F00" />
                                    </svg>

                                    <p className="text-xs text-[#000000E5] font-[500]">Innovation, Integrity</p>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="my-5">
                        <div className="bg-white rounded-2xl p-3  gap-4 py-5 shadow-sm border border-[#0000000a]">
                            <h5 className="text-md text-[#FF7F00] font-[500]">OUR LICENCES</h5>


                            <div className="flex flex-col items-start flex-wrap md:flex-nowrap justify-between gap-1 mt-3">
                                <div className="flex items-center gap-1 px-2 rounded-full">
                                    <p className="text-xs text-[#000000E5] font-[500]">Interconnect Exchange Licence (ICEX/001/23)</p>
                                </div>
                                <div className="flex items-center gap-1 px-2 rounded-full">
                                    <p className="text-xs text-[#000000E5] font-[500]">Regional Private Network Links Service Licence (PNL/REG/004/23)</p>
                                </div>
                                <div className="flex items-center gap-1 px-2 rounded-full">
                                    <p className="text-xs text-[#000000E5] font-[500]">International Data Access Licence (IDA/003/23)</p>
                                </div>
                                <div className="flex items-center gap-1 px-2 rounded-full">
                                    <p className="text-xs text-[#000000E5] font-[500]">Regional Private Network Links Service Licence (PNL/REG/003/23)</p>
                                </div>


                            </div>

                        </div>
                    </div>


                </div>

            </section>

            <div className="my-5 bg-[#F5F5F7]">

                <section className=" max-w-full  md:max-w-5xl xl:max-w-5xl mx-auto px-4 py-4">
                    <div className="p--3  gap-4 py-5">
                        <h5 className="text-xs text-[#FF7F00] font-[500]">OUR TEAM</h5>

                        <h3 className="my-3 font-[600] text-2xl">Meet Our Executive Team Members</h3>
                        
                        <div className="flex mb--14 justify-center bg-gray-100">
                            <div className="flex flex-col md:flex-row space-x-8 overflow-x-auto p-4">
                                 <TeamCard
                                    id="c5"
                                    title="Pst. Oladele Bamgboye"
                                    subtitle="Chairman, Board of Directors"
                                    image={MemberFive}
                                />
                                <TeamCard
                                    id="c4"
                                    title="Raphael Odili"
                                    subtitle="GMD/CEO"
                                    image={MemberFour}
                                />
                                <TeamCard
                                    id="c3"
                                    title="Ikenna Okafor"
                                    subtitle="Chief Technology Officer"
                                    image={MemberThree}
                                />
                                <TeamCard
                                    id="c2"
                                    title="Valentina Ayorinde"
                                    subtitle="Chief Operating Officer"
                                    image={MemberTwo}
                                    />
                                    <TeamCard
                                    id="c1"
                                    title="Prince Ebonguko"
                                    subtitle="Chief Product Officer"
                                    image={MemberOne}
                                />
      </div>
    </div>
                        {/* <div className="flex items-start flex-wrap md:flex-nowrap justify-between gap-1 mt-10">
                            <div className="flex flex-col items-start gap-1 ">
                                <img src={MemberOne} alt="" />
                                <p className="text-sm text-[#000000E5] font-[500]">Pst. Oladele Bamgboye</p>
                                <p className="text-xs text-[#000000E5] font-[400]">Chairman, Board of Directors</p>
                            </div>
                            <div className="flex flex-col items-start gap-1 ">
                                <img src={MemberTwo} alt="" />
                                <p className="text-sm text-[#000000E5] font-[500] px-2">Raphael Odili</p>
                                <p className="text-xs text-[#000000E5] font-[400] px-2">GMD/CEO</p>
                            </div>
                            <div className="flex flex-col items-start gap-1 ">
                                <img src={MemberThree} alt="" />
                                <p className="text-sm text-[#000000E5] font-[500] px-2">Ikenna Okafor</p>
                                <p className="text-xs text-[#000000E5] font-[400] px-2">Chief Technology Officer</p>
                            </div>
                        </div>
                        <div className="flex items-start flex-wrap md:flex-nowrap justify-center gap-1 mt-10">
                            <div className="flex flex-col items-start gap-1 ">
                                <img src={MemberFour} alt="" />
                                <p className="text-sm text-[#000000E5] font-[500] px-2">Valentina Ayorinde</p>
                                <p className="text-xs text-[#000000E5] font-[400] px-2">Chief Operating Officer</p>
                            </div>
                            <div className="flex flex-col items-start gap-1 ">
                                <img src={MemberFive} alt="" />
                                <p className="text-sm text-[#000000E5] font-[500] px-2">Prince Ebonguko</p>
                                <p className="text-xs text-[#000000E5] font-[400] px-2">Chief Product Officer</p>
                            </div>

                        </div> */}

                    </div>
                </section>
            </div>
            <StaySection>
            </StaySection>
        </AboutLayout>
    );
}

export default About

