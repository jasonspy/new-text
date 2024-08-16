
import { Link, useNavigate } from "react-router-dom";
import Wifi from "../../assets/icons/wifi.svg"
import Shield from "../../assets/icons/shield.svg"
import Connect from "../../assets/icons/connect.svg"
import Person from "../../assets/images/person.svg"
import Bolt from "../../assets/images/bolt.png"

import ContainerLayout from "../../layouts/ContainerLayout";
import { RightArrow } from "../../assets/icons";
import { DownloadBanner } from "../../components/Utils/DownloadBanner";
import { StaySection } from "../../components/Utils/StaySection";
import HomeLayout from "../../layouts/HomeLayout";


const GetStarted = () => {

    const navigate = useNavigate()

    return (
        <HomeLayout>
            <section className="pt-10 bg-[#F5F5F7]  md:px-0">
                <div className="w-full md:max-w-5xl xl:max-w-5xl mx-auto px-4">
                    <h4 className="text-black font-[600]">Why Choose Us?</h4>

                    <div className="mt-5 grid md:grid-cols-2 gap-4">
                        <div className="bg-[#FF7F00] rounded-xl cursor-pointer group flex flex-col gap-4 items-center justify-center p-4 py-10 relative h-[220px] overflow-hidden">
                            <svg className="w-[250px] h-[200px] absolute -left-20  group-hover:scale-[1.1] ease-out duration-10  group-hover:rotate-180 group-hover:-left-28" viewBox="0 0 220 274" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.3">
                                    <path d="M64.0341 215.523C83.26 213.241 101.154 204.541 114.824 190.83C129.069 176.585 137.304 158.602 139.518 140.04M-22.6751 89.2753C-39.9788 121.927 -34.8819 163.336 -7.38784 190.83C-0.468508 197.749 7.33147 203.248 15.6526 207.328M13.2695 53.3307C45.9216 36.027 87.3298 41.1239 114.824 68.6179C121.743 75.5373 127.243 83.3373 131.322 91.6584" stroke="white" strokeWidth="20.3333" />
                                    <path d="M157.954 97.3732C162.777 102.197 165.258 108.473 165.394 114.792C165.523 120.695 163.594 126.458 159.936 131.093C156.279 135.727 151.122 138.944 145.351 140.191C139.58 141.438 133.555 140.637 128.311 137.925C123.066 135.214 118.929 130.761 116.61 125.332C114.291 119.903 113.934 113.835 115.601 108.171C117.268 102.508 120.855 97.6008 125.746 94.2934C130.636 90.9861 136.526 89.4845 142.403 90.0465C148.28 90.6085 153.778 93.199 157.954 97.3732ZM57.3088 198.018C62.1326 202.842 64.6128 209.118 64.7494 215.437C64.8785 221.339 62.9487 227.103 59.2913 231.738C55.6339 236.372 50.4771 239.589 44.7063 240.836C38.9354 242.083 32.9105 241.282 27.666 238.57C22.4214 235.859 18.2844 231.406 15.9652 225.977C13.646 220.547 13.2893 214.48 14.9563 208.816C16.6233 203.152 20.2101 198.246 25.1008 194.938C29.9914 191.631 35.881 190.129 41.7582 190.691C47.6353 191.253 53.1336 193.844 57.3088 198.018ZM10.5809 50.6453C15.4046 55.469 17.8848 61.745 18.0214 68.064C18.1505 73.9666 16.2207 79.73 12.5633 84.3648C8.90595 88.9995 3.74916 92.2164 -2.0217 93.4633C-7.79255 94.7101 -13.8174 93.909 -19.062 91.1975C-24.3065 88.486 -28.4435 84.0334 -30.7628 78.604C-33.082 73.1745 -33.4387 67.1071 -31.7717 61.4433C-30.1047 55.7796 -26.5179 50.8728 -21.6272 47.5655C-16.7365 44.2581 -10.847 42.7566 -4.96983 43.3185C0.907363 43.8805 6.40559 46.471 10.5809 50.6453Z" stroke="white" strokeWidth="20.3333" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </svg>

                            <div className="text-white md:w-2/3 ml-auto group-hover:scale-[1.1] ease-out duration-10">
                                <h4 className="text-lg font-[600]">Reliable connection</h4>
                                <p className="text-xs text-left font-[300] text-white">Stay connected with our <br /> Supreme Data Access</p>

                            </div>
                        </div>
                        <div className="bg-[#FF7F00] rounded-xl cursor-pointer group flex flex-col gap-4 items-center justify-center p-4 py-10 relative h-[220px] overflow-hidden overflow-x-hidden">


                            <img src={Bolt} alt="" className="w-[220px] h-[250px] absolute -left-10  group-hover:scale-[1.1] ease-out duration-10  group-hover:rotate-[20deg] group-hover:-left-8" />


                            <div className="text-white md:w-2/3 ml-auto group-hover:scale-[1.2] ease-out duration-10">
                                <h4 className="text-lg font-[600]">Superfast Downloads</h4>
                                <p className="text-xs text-left font-[300] text-white">Stay secured even as your surf <br /> the web with our secured <br /> Internet connection</p>

                            </div>
                        </div>
                        <div className="bg-[#FF7F00] rounded-xl cursor-pointer group flex flex-col gap-4 items-center justify-center p-4 py-10 relative h-[220px] overflow-hidden overflow-x-hidden">

                            <svg className="w-[200px] h-[100px] absolute -left-10 top-10  group-hover:scale-[1.1] ease-out duration-10  group-hover:rotate-45 group-hover:-left-12 group-hover:-w-[100px] group-hover:-h-[100px]" viewBox="0 0 112 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.6076 121.078L22.6077 121.078C27.2011 109.452 34.1924 98.9408 43.5885 89.5447C52.9845 80.1487 63.495 73.1671 75.1212 68.5929C86.5964 64.0904 98.4667 61.8234 110.735 61.791L110.735 75.501C100.303 75.5625 90.1629 77.5513 80.3176 81.4657C70.3068 85.4459 61.3238 91.4156 53.37 99.3694C45.4163 107.323 39.4466 116.306 35.4664 126.317C31.5523 136.161 29.5636 146.3 29.5017 156.731L15.7066 156.651C15.7672 144.411 18.0672 132.554 22.6076 121.078ZM52.5182 11.844L52.5184 11.8439C71.5016 4.41364 90.9085 0.697047 110.742 0.691687L110.735 14.3945C92.3954 14.4567 74.5891 17.9435 57.3192 24.8534C39.8848 31.8291 24.1902 42.2918 10.2366 56.2357L10.2365 56.2359C-3.70749 70.1799 -14.1679 85.8722 -21.1388 103.312C-28.0438 120.586 -31.533 138.395 -31.6045 156.734L-45.3148 156.734C-45.3095 136.901 -41.5954 117.491 -34.1698 98.5034C-26.682 79.3825 -15.1477 62.0283 0.440618 46.44C16.0289 30.8517 33.3878 19.3223 52.5182 11.844ZM106.733 152.733C103.729 155.738 100.169 157.23 96.0304 157.23C91.8915 157.23 88.3322 155.738 85.3274 152.733C82.3176 149.723 80.8226 146.161 80.8226 142.023C80.8226 137.884 82.3154 134.324 85.3202 131.32C88.325 128.315 91.8843 126.822 96.0232 126.822C100.162 126.822 103.724 128.317 106.733 131.327C109.738 134.332 111.231 137.891 111.231 142.03C111.231 146.169 109.738 149.728 106.733 152.733Z"
                                    fill="#feb266" stroke="#feb266" />
                            </svg>

                            <div className="text-white md:w-2/3 ml-auto group-hover:scale-[1.2] ease-out duration-10">
                                <h4 className="text-lg font-[600]">Fixed Broadband</h4>
                                <p className="text-xs text-left font-[300] text-white">Enjoy our broadband <br /> services for your Home <br /> and Office use</p>

                            </div>
                        </div>
                        <div className="bg-[#FF7F00] rounded-xl cursor-pointer group flex flex-col gap-4 items-center justify-center p-4 py-10 relative h-[220px] overflow-hidden overflow-x-hidden">


                            <svg className="w-[200px] h-[150px] absolute -left-20 top-2  group-hover:scale-[1.1] ease-out duration-10  group-hover:rotate-45 group-hover:-left-12 group-hover:-w-[100px] group-hover:-h-[100px]" viewBox="0 0 211 211" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M180.813 181.056L180.967 180.966L181.056 180.813C191.036 163.574 193.807 141.015 190.204 118.897C186.599 96.7748 176.607 75.0192 160.965 59.3772L125.595 24.0077L125.289 23.7017L124.885 23.8566L52.1335 51.7496L51.856 51.856L51.7496 52.1334L23.8566 124.885L23.7017 125.289L24.0077 125.595L59.3772 160.965C75.0192 176.607 96.7749 186.599 118.897 190.204C141.015 193.807 163.574 191.036 180.813 181.056ZM172.818 44.3606C212.479 84.0212 222.131 148.512 194.371 194.371C148.512 222.131 84.0212 212.479 44.3606 172.818L1.53343 129.991L37.2161 37.2161L129.991 1.53341L172.818 44.3606Z"
                                    fill="#feb266" stroke="#feb266" strokeWidth="1.33333" />
                            </svg>


                            <div className="text-white md:w-2/3 ml-auto group-hover:scale-[1.2] ease-out duration-10">
                                <h4 className="text-lg font-[600]">Protect your devices</h4>
                                <p className="text-xs text-left font-[300] text-white">Enjoy Speed up to 40mbps on our <br /> home and Office plans</p>

                            </div>
                        </div>

                    </div>
                    <h4 className="text-black font-[600] mt-14">What our Customers are Saying</h4>

                    <div className="mt-5 grid md:grid-cols-3 gap-4">
                        <div className="bg-white rounded-lg flex flex-col gap-4 items-start justify-start p-4">
                            <img src={Person} alt="" className="w-16 h-16" />
                            <div className="flex items-center justify-between w-full">
                                <h4 className="text-sm font-[500]">James Blake</h4>
                                <div className="flex gap-2 items-center">
                                    <button type="button" className="size-5 inline-flex justify-center items-center text-2xl rounded-full text-[#FF7F00] disabled:opacity-50 disabled:pointer-events-none">
                                        <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                    </button>
                                    <span className="font-[500] text-sm">4.5</span>
                                </div>
                            </div>
                            <p className="text-sm text-left font-[300]">CSS {`Mobile's`} internet service for mobile devices is top-notch! Fast speeds, reliable connectivity, and seamless browsing make it the perfect choice for staying connected on the go.</p>
                            <Link to={'/'} className="text-sm text-[#FF7F00] flex items-center gap-1">
                                <span>See More</span>
                                <RightArrow />
                            </Link>
                        </div>
                        <div className="bg-white rounded-lg flex flex-col gap-4 items-start justify-start p-4">
                            <img src={Person} alt="" className="w-16 h-16" />
                            <div className="flex items-center justify-between w-full">
                                <h4 className="text-sm font-[500]">Jo-Jean Imoh-Ita</h4>
                                <div className="flex gap-2 items-center">
                                    <button type="button" className="size-5 inline-flex justify-center items-center text-2xl rounded-full text-[#FF7F00] disabled:opacity-50 disabled:pointer-events-none">
                                        <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                    </button>
                                    <span className="font-[500] text-sm">4.5</span>
                                </div>
                            </div>
                            <p className="text-sm text-left font-[300]">“Very impressed with their services especially as my business is virtually delivered and needs me to be online most of the day. The staff are efficient, cordial and respond speedily”</p>
                            <Link to={'/'} className="text-sm text-[#FF7F00] flex items-center gap-1">
                                <span>See More</span>
                                <RightArrow />
                            </Link>
                        </div>
                        <div className="bg-white rounded-lg flex flex-col gap-4 items-start justify-start p-4">
                            <img src={Person} alt="" className="w-16 h-16" />
                            <div className="flex items-center justify-between w-full">
                                <h4 className="text-sm font-[500]">Promise Njoku</h4>
                                <div className="flex gap-2 items-center">
                                    <button type="button" className="size-5 inline-flex justify-center items-center text-2xl rounded-full text-[#FF7F00] disabled:opacity-50 disabled:pointer-events-none">
                                        <svg className="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                                        </svg>
                                    </button>
                                    <span className="font-[500] text-sm">4.5</span>
                                </div>
                            </div>
                            <p className="text-sm text-left font-[300]">“Good customer service and prompt maintenance team dispatched anytime you have concern. Internet speed is good, and I recommend them.”</p>
                            <Link to={'/'} className="text-sm text-[#FF7F00] flex items-center gap-1">
                                <span>See More</span>
                                <RightArrow />
                            </Link>
                        </div>

                    </div>

                    <div className="bg-white rounded-lg grid grid-cols-3 items-center justify-center gap-4 items-start justify-start p-4 mt-10 py-5">

                        <div className="text-center">
                            <h4 className="text-2xl font-[600]">7+</h4>
                            <div className="flex items-center justify-center gap-1 mt-4">
                                <svg className="w-[16px] h-[16px]" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.5 9.5C6.83696 9.5 6.20107 9.23661 5.73223 8.76777C5.26339 8.29893 5 7.66304 5 7C5 6.33696 5.26339 5.70107 5.73223 5.23223C6.20107 4.76339 6.83696 4.5 7.5 4.5C8.16304 4.5 8.79893 4.76339 9.26777 5.23223C9.73661 5.70107 10 6.33696 10 7C10 7.3283 9.93534 7.65339 9.8097 7.95671C9.68406 8.26002 9.49991 8.53562 9.26777 8.76777C9.03562 8.99991 8.76002 9.18406 8.45671 9.3097C8.15339 9.43534 7.8283 9.5 7.5 9.5ZM7.5 0C5.64348 0 3.86301 0.737498 2.55025 2.05025C1.2375 3.36301 0.5 5.14348 0.5 7C0.5 12.25 7.5 20 7.5 20C7.5 20 14.5 12.25 14.5 7C14.5 5.14348 13.7625 3.36301 12.4497 2.05025C11.137 0.737498 9.35652 0 7.5 0Z" fill="#808080" />
                                </svg>
                                <span className="text-sm text-[#8F8F8F]">States</span>

                            </div>
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl font-[600]">80%</h4>
                            <div className="flex items-center justify-center gap-1 mt-4">
                                <svg className="w-[16px] h-[16px]" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.5 9.65002C11.1685 9.65002 10.8505 9.78172 10.6161 10.0161C10.3817 10.2506 10.25 10.5685 10.25 10.9C10.25 11.2315 10.3817 11.5495 10.6161 11.7839C10.8505 12.0183 11.1685 12.15 11.5 12.15C11.8315 12.15 12.1495 12.0183 12.3839 11.7839C12.6183 11.5495 12.75 11.2315 12.75 10.9C12.75 10.5685 12.6183 10.2506 12.3839 10.0161C12.1495 9.78172 11.8315 9.65002 11.5 9.65002ZM8.75 10.9C8.75 10.1707 9.03973 9.47121 9.55546 8.95548C10.0712 8.43976 10.7707 8.15002 11.5 8.15002C12.2293 8.15002 12.9288 8.43976 13.4445 8.95548C13.9603 9.47121 14.25 10.1707 14.25 10.9C14.25 11.6294 13.9603 12.3288 13.4445 12.8446C12.9288 13.3603 12.2293 13.65 11.5 13.65C10.7707 13.65 10.0712 13.3603 9.55546 12.8446C9.03973 12.3288 8.75 11.6294 8.75 10.9Z" fill="#8F8F8F" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.5 5.64999C10.4617 5.65011 9.44683 5.95809 8.58358 6.53497C7.72034 7.11186 7.04753 7.93175 6.65022 8.89099C6.25291 9.85022 6.14895 10.9057 6.35147 11.924C6.55399 12.9424 7.0539 13.8778 7.788 14.612C7.8596 14.6812 7.9167 14.764 7.95596 14.8555C7.99523 14.947 8.01587 15.0455 8.01669 15.145C8.0175 15.2446 7.99848 15.3434 7.96073 15.4355C7.92297 15.5277 7.86724 15.6114 7.79679 15.6818C7.72634 15.7522 7.64257 15.8078 7.55038 15.8455C7.45819 15.8832 7.35943 15.9021 7.25984 15.9012C7.16026 15.9003 7.06185 15.8795 6.97037 15.8402C6.87889 15.8008 6.79615 15.7437 6.727 15.672C5.78301 14.728 5.14014 13.5252 4.8797 12.2159C4.61925 10.9065 4.75293 9.54931 5.26382 8.31592C5.77472 7.08252 6.63988 6.02832 7.74991 5.28662C8.85994 4.54493 10.165 4.14905 11.5 4.14905C12.835 4.14905 14.1401 4.54493 15.2501 5.28662C16.3601 6.02832 17.2253 7.08252 17.7362 8.31592C18.2471 9.54931 18.3808 10.9065 18.1203 12.2159C17.8599 13.5252 17.217 14.728 16.273 15.672C16.1308 15.8045 15.9428 15.8766 15.7485 15.8732C15.5542 15.8697 15.3688 15.791 15.2314 15.6536C15.094 15.5162 15.0153 15.3308 15.0118 15.1365C15.0084 14.9422 15.0805 14.7542 15.213 14.612C15.9475 13.8778 16.4477 12.9422 16.6504 11.9236C16.8531 10.905 16.7491 9.8492 16.3517 8.88972C15.9542 7.93023 15.2811 7.11019 14.4175 6.53333C13.5539 5.95648 12.5386 5.64972 11.5 5.64999Z" fill="#808080" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.4996 1.75003C9.68992 1.75004 7.92087 2.28669 6.41617 3.2921C4.91148 4.29752 3.7387 5.72655 3.04617 7.39849C2.35363 9.07042 2.17243 10.9102 2.52548 12.6851C2.87853 14.46 3.74997 16.0904 5.02961 17.37C5.1033 17.4387 5.1624 17.5215 5.2034 17.6135C5.24439 17.7055 5.26643 17.8048 5.26821 17.9055C5.26998 18.0062 5.25146 18.1062 5.21374 18.1996C5.17602 18.293 5.11987 18.3779 5.04865 18.4491C4.97743 18.5203 4.8926 18.5764 4.79921 18.6142C4.70582 18.6519 4.60579 18.6704 4.50509 18.6686C4.40439 18.6668 4.30508 18.6448 4.21308 18.6038C4.12108 18.5628 4.03828 18.5037 3.96961 18.43C2.47999 16.9407 1.46548 15.043 1.05439 12.9771C0.643303 10.9111 0.854095 8.76967 1.66011 6.82353C2.46613 4.87738 3.83116 3.21396 5.58259 2.04364C7.33401 0.873318 9.39316 0.248657 11.4996 0.248657C13.6061 0.248657 15.6652 0.873318 17.4166 2.04364C19.1681 3.21396 20.5331 4.87738 21.3391 6.82353C22.1451 8.76967 22.3559 10.9111 21.9448 12.9771C21.5337 15.043 20.5192 16.9407 19.0296 18.43C18.8874 18.5625 18.6994 18.6346 18.5051 18.6312C18.3108 18.6278 18.1254 18.5491 17.988 18.4117C17.8506 18.2742 17.7719 18.0889 17.7684 17.8946C17.765 17.7003 17.8371 17.5122 17.9696 17.37C19.2493 16.0904 20.1207 14.46 20.4737 12.6851C20.8268 10.9102 20.6456 9.07042 19.9531 7.39849C19.2605 5.72655 18.0878 4.29752 16.5831 3.2921C15.0784 2.28669 13.3093 1.75004 11.4996 1.75003Z" fill="#808080" />
                                </svg>

                                <span className="text-sm text-[#8F8F8F]">Coverage</span>

                            </div>
                        </div>
                        <div className="text-center">
                            <h4 className="text-2xl font-[600]">12</h4>
                            <div className="flex items-center justify-center gap-1 mt-4">
                                <svg className="w-[16px] h-[16px]" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.2515 2.25C13.2515 2.05109 13.1725 1.86032 13.0318 1.71967C12.8912 1.57902 12.7004 1.5 12.5015 1.5C12.3026 1.5 12.1118 1.57902 11.9712 1.71967C11.8305 1.86032 11.7515 2.05109 11.7515 2.25V3H10.25C9.65326 3 9.08097 3.23705 8.65901 3.65901C8.23705 4.08097 8 4.65326 8 5.25V6.006C8.79565 6.006 9.55871 6.32207 10.1213 6.88468C10.6839 7.44729 11 8.21035 11 9.006V21H14V11.256C13.9998 10.3915 14.2983 9.55351 14.845 8.88382C15.3917 8.21414 16.153 7.7539 17 7.581V5.25C17 4.65326 16.7629 4.08097 16.341 3.65901C15.919 3.23705 15.3467 3 14.75 3H13.2515V2.25ZM19.25 21H15.5V11.256C15.5 10.6593 15.7371 10.087 16.159 9.66501C16.581 9.24305 17.1533 9.006 17.75 9.006H19.25V9C19.8467 9 20.419 9.23705 20.841 9.65901C21.2629 10.081 21.5 10.6533 21.5 11.25V18.75C21.5 19.3467 21.2629 19.919 20.841 20.341C20.419 20.7629 19.8467 21 19.25 21ZM7.7645 7.7025C7.93441 7.59235 8.13089 7.53009 8.33323 7.5223C8.53557 7.51452 8.73626 7.56148 8.91413 7.65825C9.092 7.75502 9.24046 7.898 9.34384 8.07211C9.44722 8.24623 9.50169 8.44501 9.5015 8.6475L9.5 20.25C9.5 20.4489 9.42098 20.6397 9.28033 20.7803C9.13968 20.921 8.94891 21 8.75 21H5.75C5.15326 21 4.58097 20.7629 4.15901 20.341C3.73705 19.919 3.5 19.3467 3.5 18.75V11.6895C3.50016 11.3144 3.5941 10.9452 3.7733 10.6157C3.95249 10.2861 4.21123 10.0066 4.526 9.8025L7.7645 7.7025Z" fill="#8F8F8F" />
                                </svg>

                                <span className="text-sm text-[#8F8F8F]">Cities</span>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:max-w-5xl xl:max-w-5xl mx-auto px-4">
                    <h4 className="text-black font-[600] mt-20">Frequently Asked Questions</h4>
                </div>

                <div className="bg-white">
                    <div className="w-full md:max-w-5xl xl:max-w-5xl mx-auto">

                        <div className="mt-5 grid  gap-0 bg-white">
                            <div className="bg-white rounded-lg flex flex-col gap-4 items-start justify-start p-4 py-2">
                                <details>
                                    <summary className="py-2 outline-none cursor-pointer text-md">How do I get onboard/connected?</summary>
                                    <div className="px-4 pb-4 text-sm">
                                        <p>Kindly fill out our KYC form, upon verification of KYC, make payment and you will be scheduled for installation.

                                        </p>
                                    </div>
                                </details>
                            </div>

                            <div className="bg-white rounded-lg flex flex-col gap-4 items-start justify-start p-4 py-2">
                                <details>
                                    <summary className="py-2 outline-none cursor-pointer text-md">How long does the installation process take?</summary>
                                    <div className="px-4 pb-4 text-sm">
                                        <p>Installation takes between 1 - 3 hours.
                                        </p>
                                    </div>
                                </details>
                            </div>

                            <div className="bg-white rounded-lg flex flex-col gap-4 items-start justify-start p-4 py-2">
                                <details>
                                    <summary className="py-2 outline-none cursor-pointer text-md">Does your internet work with electricity?</summary>
                                    <div className="px-4 pb-4 text-sm">
                                        <p>Yes</p>
                                    </div>
                                </details>
                            </div>

                            <div className="bg-white rounded-lg flex flex-col gap-4 items-start justify-start p-4 py-2">
                                <details>
                                    <summary className="py-2 outline-none cursor-pointer text-md">Is it mobile?</summary>
                                    <div className="px-4 pb-4 text-sm">
                                        <p>No, it is a fixed broadband service.</p>
                                    </div>
                                </details>
                            </div>
                            <div className="bg-white rounded-lg flex flex-col gap-4 items-start justify-start p-4 py-2">
                                <details>
                                    <summary className="py-2 outline-none cursor-pointer text-md">Where is your coverage location?</summary>
                                    <div className="px-4 pb-4 text-sm">
                                        <p>We currently cover Uyo Metropolitan city.</p>
                                    </div>
                                </details>
                            </div>
                            <div className="bg-white rounded-lg flex flex-col gap-4 items-start justify-start p-4 py-2">
                                <details>
                                    <summary className="py-2 outline-none cursor-pointer text-md">Can it be affected by weather?</summary>
                                    <div className="px-4 pb-4 text-sm">
                                        <p>Fiber cannot be affected by weather. </p>
                                    </div>
                                </details>
                            </div>
                            <div className="bg-white rounded-lg flex flex-col gap-4 items-start justify-start p-4 py-2">
                                <details>
                                    <summary className="py-2 outline-none cursor-pointer text-md">What is FUP as indicated in your plans?</summary>
                                    <div className="px-4 pb-4 text-sm">
                                        <p>It means that you are not limited by usage as Fair Usage Policy do not apply. </p>
                                    </div>
                                </details>
                            </div>


                        </div>
                    </div>
                </div>

                <div className="mt-10 px-4">
                    <DownloadBanner />
                </div>
                <StaySection />
            </section>
        </HomeLayout>
    );
}

export default GetStarted

