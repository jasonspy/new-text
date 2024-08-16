
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../../../layouts/AuthLayout";
import Stepper from "../../../../components/Utils/SignUpSteps";

import { useState } from "react";

import PathSelection from "./PathSelection";
import ProfileInformation from "./ProfileInformation";
import { Button } from "../../../../components/Button";
import { EmailIcon } from "../../../../assets/icons";



const MentorSignUp = () => {
    const navigate = useNavigate();

    const [signUpData, setSignUpData] = useState<object>({
        paths: [],
        skills: []
    })
    const [currentStep, setCurrentStep] = useState<number>(1)
    const steps = [
        { name: 'Profile Information', id: 1 },
        { name: 'Mentorship Path', id: 2 },
        { name: 'Verify Email Address', id: 3 }
    ]

    const onCompleteStep = (step: number, data: any, isBack: boolean) => {
        setSignUpData({ ...signUpData, ...data, paths: data.paths.filter((path: string, index: number) => data.paths.indexOf(path) === index), skills: data.skills.filter((skill: string, index: number) => data.skills.indexOf(skill) === index) })
        isBack ? setCurrentStep(step - 1) : setCurrentStep(step + 1)

    }

    return (
        <AuthLayout>
            <div className="w-full flex flex-col relative bg-[#82828908] min-h-[90svh] py-10">
                <div className="flex flex-col items-center justify-center">
                    <h2 className=" text-2xl font-medium leading-9 tracking-tight text-gray pt-0 lg:pt-0 text-center">
                        Create Account
                    </h2>

                    <p className="text-secondary-300 font-normal text-sm text-center">
                        Fill in the accurate information below
                    </p>
                </div>
                <div className="hidden md:flex items-center justify-center">
                    <div className="mt-8">
                        <Stepper steps={steps} currentStep={currentStep} />
                    </div>
                </div>
                {currentStep === 1 && <ProfileInformation onComplete={onCompleteStep} currentStep={currentStep} data={signUpData} />}
                {currentStep === 2 && <PathSelection onComplete={onCompleteStep} currentStep={currentStep} data={signUpData} />}
                {currentStep === 3 && <div>
                    <div className="mt-8 mx-4  sm:w-full sm:max-w-sm md:max-w-2xl lg:max-w-5xl md:w-full md:mx-auto">
                        <div className="bg-white shadow rounded-xl ">

                            <p className="text-primary text-md lg:text-md  border-b  px-3 md:px-5 py-4 ">
                                Verify Email Address
                            </p>

                            <div className="px-3 md:px-5 py-5">
                                <div className="flex flex-col items-center justify-center min-h-[30vh]">
                                    <EmailIcon />
                                    <h2 className="text-md font-medium leading-9 tracking-tight text-gray pt-0 lg:pt-0">
                                        Check Your Email
                                    </h2>
                                    <p className="text-secondary-300 font-normal text-sm">
                                        A link has been sent to your you to verify your email.
                                    </p>
                                </div>
                                <section className="mt-20 my-10 w-full">
                                    <div className="w-full flex items-center lg:px-0 space-y-6 flex-col md:flex-row justify-center md:space-x-6 md:space-y-0">
                                        {/* <span className="w-full md:w-fit">
                                            <Button
                                                loading={false}
                                                name={'Back'}
                                                type="button"
                                                onClick={() => null}
                                                className="text-primary border-primary border disabled:border-opacity-40  rounded-[30px] hover:opacity-90 disabled:opacity-40 min-w-[194px]"
                                            />
                                        </span> */}
                                        <span className="w-full md:w-fit">
                                            <Button
                                                type={"button"}
                                                name={'Go to dashboard'}
                                                onClick={() => null}
                                                className="text-white bg-primary  disabled:border-opacity-40  rounded-[30px] hover:opacity-90 disabled:opacity-40 min-w-[194px]"
                                            />
                                        </span>
                                    </div>
                                </section>
                            </div>



                        </div>
                    </div>
                </div>
                }
            </div>
        </AuthLayout>
    );
}

export default MentorSignUp

