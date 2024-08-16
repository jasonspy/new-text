import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { Button } from "../../../components/Button";

import AuthLayout from "../../../layouts/AuthLayout";
import MentorImage from "../../../assets/images/onboarding/mentor.png";
import MenteeImage from "../../../assets/images/onboarding/mentee.png";
import BusinessImage from "../../../assets/images/onboarding/business.png";


const Register = () => {
  const navigate = useNavigate();
  const authUser = useAppSelector((state) => state.auth);
  const [signUpAs, setSignUpAs] = useState('');



  useEffect(() => {
    if (authUser.activeUser) {
      toast.success("Welcome onboard!");
      navigate("/");
    }
  }, [authUser.activeUser]);

  const imageToDisplay = () => {
    if (!signUpAs || signUpAs === 'mentor') {
      return MentorImage
    } else if(signUpAs === 'mentee'){
      return MenteeImage
    }
    else {
      return BusinessImage
    }
  }


  return (
    <AuthLayout>
      <section className="min-h-screen lg:max-h-[100svh] overflow-y-scroll justify-between flex flex-col  lg:flex-row bg-[#82828908]">
        <div className="w-full lg:w-1/2">
          <div className="contents bg-[#82828908]">
            <div className="flex h-full flex-1 flex-col justify-center  px-6 py-3 md:py-12 lg:px-8 mb-4 bg-[#82828908] pb-20 md:pb-12">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm md:max-w-md md:w-full  md:mx-auto lg:mr-auto  lg:ml-[80px] mt-5 md:mt-0">
                <h2 className=" text-2xl font-medium leading-9 tracking-tight text-gray pt-0 lg:pt-0 text-center">
                  Who are you signing up as?
                </h2>

                <p className="text-secondary-300 font-normal text-sm mt-1 text-center">
                  Choose your preferred way of signing up...
                </p>
              </div>

              <div className="mt-[24px] sm:mx-auto sm:w-full sm:max-w-md">
                <form className="">
                  <ul className="w-full gap-8 flex flex-col my-10">
                    <li>
                      <input type="radio" id="hmentor" name="signUpAs" value="mentor" className="hidden peer" required onChange={(e: any) => setSignUpAs(e.target.value)} />
                      <label htmlFor="hmentor" className="inline-flex items-center justify-between w-full p-5 px-3 text-[#828282] bg-transparent border border-[#D9D9D9] rounded-lg cursor-pointer  peer-checked:border-primary  peer-checked:bg-[#0B87490D] hover:bg-[#0B87490D] hover:border-primary">
                        <div className="flex items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="29" viewBox="0 0 48 39" fill="none">
                            <g clipPath="url(#clip0_69_101)">
                              <path d="M15.6001 26.7C15.4209 26.7 15.2416 26.7263 15.0706 26.7818C14.0986 27.0975 13.0764 27.3 12.0001 27.3C10.9239 27.3 9.90162 27.0975 8.92887 26.7818C8.75787 26.7263 8.57937 26.7 8.40012 26.7C3.74562 26.7 -0.0246288 30.486 0.000121161 35.1465C0.0106212 37.116 1.62987 38.7 3.60012 38.7H20.4001C22.3704 38.7 23.9896 37.116 24.0001 35.1465C24.0249 30.486 20.2546 26.7 15.6001 26.7ZM12.0001 24.3C15.9766 24.3 19.2001 21.0765 19.2001 17.1C19.2001 13.1235 15.9766 9.9 12.0001 9.9C8.02362 9.9 4.80012 13.1235 4.80012 17.1C4.80012 21.0765 8.02362 24.3 12.0001 24.3ZM44.4001 0.300003H15.6001C13.6149 0.300003 12.0001 1.96875 12.0001 4.01925V7.5C13.7566 7.5 15.3826 8.0085 16.8001 8.835V5.1H43.2001V26.7H38.4001V21.9H28.8001V26.7H23.0821C24.5146 27.9518 25.5661 29.6048 26.0589 31.5H44.4001C46.3854 31.5 48.0001 29.8313 48.0001 27.7808V4.01925C48.0001 1.96875 46.3854 0.300003 44.4001 0.300003Z" fill="#828282" />
                            </g>
                            <defs>
                              <clipPath id="clip0_69_101">
                                <rect width="48" height="38.4" fill="white" transform="translate(0 0.300003)" />
                              </clipPath>
                            </defs>
                          </svg>
                          <div className="flex flex-col items-start">
                            <h3 className="text-gray font-medium text-md">
                              Register as a Mentor
                            </h3>
                            <p className="text-gray font-normal text-sm">
                              Provide adequate mentorship to available mentees.
                            </p>
                          </div>
                        </div>

                      </label>
                    </li>
                    <li>
                      <input type="radio" id="mentee" name="signUpAs" value="mentee" className="hidden peer" required onChange={(e: any) => setSignUpAs(e.target.value)} />
                      <label htmlFor="mentee" className="inline-flex items-center justify-between w-full p-5 px-3 text-[#828282] bg-transparent border border-[#D9D9D9] rounded-lg cursor-pointer  peer-checked:border-primary  peer-checked:bg-[#0B87490D] hover:bg-[#0B87490D] hover:border-primary">
                        <div className="flex items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 48 49" fill="none">
                            <path d="M42.4744 11.0769L24.4744 5.07688C24.1665 4.97423 23.8335 4.97423 23.5256 5.07688L5.52562 11.0769C5.22695 11.1764 4.96717 11.3675 4.78309 11.6229C4.59902 11.8783 4.49998 12.1852 4.5 12.5V27.5C4.5 27.8978 4.65804 28.2794 4.93934 28.5607C5.22064 28.842 5.60218 29 6 29C6.39782 29 6.77936 28.842 7.06066 28.5607C7.34196 28.2794 7.5 27.8978 7.5 27.5V14.5813L13.7981 16.6794C12.1248 19.3828 11.5927 22.6397 12.3186 25.7351C13.0446 28.8304 14.9692 31.5112 17.67 33.1888C14.295 34.5125 11.3775 36.9069 9.24375 40.1806C9.13278 40.3456 9.0557 40.5309 9.01699 40.7259C8.97828 40.9209 8.97871 41.1216 9.01826 41.3164C9.05782 41.5112 9.1357 41.6962 9.24738 41.8607C9.35906 42.0251 9.50231 42.1658 9.66882 42.2744C9.83532 42.383 10.0217 42.4574 10.2173 42.4933C10.4128 42.5292 10.6135 42.5259 10.8077 42.4836C11.0019 42.4412 11.1858 42.3607 11.3487 42.2467C11.5115 42.1327 11.65 41.9874 11.7563 41.8194C14.5819 37.4844 19.0444 35 24 35C28.9556 35 33.4181 37.4844 36.2438 41.8194C36.4638 42.1464 36.8036 42.3736 37.1898 42.452C37.5761 42.5305 37.9776 42.4537 38.3077 42.2384C38.6378 42.0231 38.8699 41.6865 38.9539 41.3015C39.0378 40.9164 38.9668 40.5138 38.7562 40.1806C36.6225 36.9069 33.6937 34.5125 30.33 33.1888C33.0282 31.5113 34.951 28.8323 35.6768 25.7392C36.4027 22.646 35.8722 19.3913 34.2019 16.6887L42.4744 13.9325C42.7731 13.833 43.033 13.642 43.2171 13.3866C43.4012 13.1311 43.5003 12.8243 43.5003 12.5094C43.5003 12.1945 43.4012 11.8876 43.2171 11.6322C43.033 11.3768 42.7731 11.1858 42.4744 11.0863V11.0769ZM33 23C33.0004 24.4229 32.6634 25.8255 32.0168 27.0929C31.3701 28.3604 30.4322 29.4564 29.2799 30.2911C28.1276 31.1258 26.7938 31.6755 25.388 31.8949C23.9821 32.1143 22.5443 31.9973 21.1925 31.5534C19.8406 31.1096 18.6133 30.3515 17.6111 29.3415C16.609 28.3314 15.8606 27.0982 15.4273 25.7429C14.9941 24.3876 14.8884 22.9489 15.1188 21.5448C15.3493 20.1407 15.9094 18.8113 16.7531 17.6656L23.5256 19.9156C23.8335 20.0183 24.1665 20.0183 24.4744 19.9156L31.2469 17.6656C32.3865 19.2106 33.0009 21.0802 33 23Z" fill="#828282" />
                          </svg>
                          <div className="flex flex-col items-start">
                            <h3 className="text-gray font-medium text-md">
                              Register as a Mentee
                            </h3>
                            <p className="text-gray font-normal text-sm">
                              Gain access to the OnTheJob development program.
                            </p>
                          </div>
                        </div>

                      </label>
                    </li>
                    <li>
                      <input type="radio" id="business" name="signUpAs" value="business" className="hidden peer" required onChange={(e: any) => setSignUpAs(e.target.value)} />
                      <label htmlFor="business" className="inline-flex items-center justify-between w-full p-5 px-3 text-[#828282] bg-transparent border border-[#D9D9D9] rounded-lg cursor-pointer  peer-checked:border-primary  peer-checked:bg-[#0B87490D] hover:bg-[#0B87490D] hover:border-primary">
                        <div className="flex items-center gap-3">
                          <svg xmlns="http://www.w3.org/2000/svg" width="38" height="39" viewBox="0 0 48 49" fill="none">
                            <path d="M20 32.5V30.5H6.02L6 38.5C6 40.72 7.78 42.5 10 42.5H38C40.22 42.5 42 40.72 42 38.5V30.5H28V32.5H20ZM40 14.5H31.98V10.5L27.98 6.5H19.98L15.98 10.5V14.5H8C5.8 14.5 4 16.3 4 18.5V24.5C4 26.72 5.78 28.5 8 28.5H20V24.5H28V28.5H40C42.2 28.5 44 26.7 44 24.5V18.5C44 16.3 42.2 14.5 40 14.5ZM28 14.5H20V10.5H28V14.5Z" fill="#828282" />
                          </svg>
                          <div className="flex flex-col items-start">
                            <h3 className="text-gray font-medium text-md">
                              Register as a Business
                            </h3>
                            <p className="text-gray font-normal text-sm">
                              Utilize OnTheJob features and communities.
                            </p>
                          </div>
                        </div>

                      </label>
                    </li>

                  </ul>
                </form>
              </div>
              <section className="mt-[24px] sm:mx-auto sm:w-full sm:max-w-md">
                <div className="w-full flex items-center lg:px-0 space-y-6 flex-col md:flex-row justify-between md:space-x-6 md:space-y-0">
                  <span className="w-full md:w-fit">
                    <Button
                      loading={false}
                      name={'Back'}
                      type="button"
                      onClick={() => navigate(-1)}
                      className="text-primary border-primary border disabled:border-opacity-40  rounded-[30px] hover:opacity-90 disabled:opacity-40 min-w-[194px]"
                    />
                  </span>
                  <span className="w-full md:w-fit">
                    <Button
                      type={"button"}
                      name={'Next'}
                      onClick={() => navigate(`/signup/${signUpAs}`)}
                      disabled={!signUpAs}
                      className="text-white bg-primary  disabled:border-opacity-40  rounded-[30px] hover:opacity-90 disabled:opacity-40 min-w-[194px]"
                    />
                  </span>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div className="hidden  lg:flex lg:w-1/2 bg-[#82828908] h-screen">
          <img src={imageToDisplay()} alt="" className="w-[88%] mx-auto object-scale-down" />
        </div>
      </section>

    </AuthLayout>
  );
};

export default Register;
