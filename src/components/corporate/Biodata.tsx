import { useEffect, useState } from "react";
import { InputField } from "../Input";
import { Button } from "../Button";
import { useAppSelector } from "../../app/hooks";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { createCorporate, updataData, updateSteps } from "../../features/verification/verificationSlice";

export const BioData = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { data, currentCount, previousCount, completedSteps, loading } = useAppSelector((state) => state.verification);
    const [bioData, setBioData] = useState(Object)

    const onToggleForm = () => {
        if (currentCount === 1) {
            dispatch(updateSteps({ current: currentCount + 1, prev: currentCount, completedStep: 0 }))
        } else {
            dispatch(updateSteps({ current: 1, prev: currentCount, completedStep: 0 }))
        }

    }
    const handleFormChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBioData({ ...bioData, [e.target.name]: e.target.value });
    };

    const onSubmitForm = async (e: any) => {
        e.preventDefault()
        const { payload } = await dispatch(createCorporate(bioData))
        if (payload?.success) {
            dispatch(updataData({ ...payload.data }))
            dispatch(updateSteps({ current: currentCount + 1, prev: currentCount, completedStep: 1 }))
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        setBioData({ ...data })
    }, [data])



    return (
        <div className=" max-w-full  md:max-w-3xl xl:max-w-5xl mx-auto  p-5 md:p-8 px-5 md:px-8  bg-white rounded-2xl my-10">
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3 font-[400]"><p className="text-md text-black font-[500]">Step 1 - Corporate Details</p>
                    {!completedSteps.includes(1)  ||  !data?._id? <span className="text-xs text-[#FF3B30] bg-[#FFF0EF] font-[400] p-1 px-2 rounded-3xl">Action Required</span>
                        : <span className="text-xs text-[#34C759] bg-[#EFFFEF] font-[400] p-1 px-2 rounded-3xl">Completed</span>
                    }
                </div>
                <button onClick={onToggleForm} className="w-fit">
                    {currentCount === 1 && data._id ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M19 9L12 16L5 9" stroke="black" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 15L12 8L19 15" stroke="black" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>}
                </button>
            </div>
            {currentCount === 1 && <div className="min-h-max mt-8">
                <p className="text-sm font-[300] text-black font-[400]">Kindly fill out the fields below correctly</p>

                <form className="w-full my-5" onSubmit={onSubmitForm}>
                    <div className="grid md:grid-cols-2 md:gap-10">
                        <div className="mb-6 md:w-[90%]">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="companyName"
                                    className="block font-medium leading-6 text-label-active text-inputlabel"
                                >
                                    Company Name <span className="text-[#FF3B30]">*</span>
                                </label>
                            </div>
                            <div className="mt-1 relative">
                                <InputField
                                    id="companyName"
                                    name="companyName"
                                    type={'text'}
                                    value={bioData?.companyName}
                                    onChange={handleFormChanger}
                                    placeholder="Company name"
                                    required
                                    classes={"bg-[#ECECEC] border-[#8F8F8F]"}
                                />
                            </div>
                        </div>
                        <div className="mb-6 md:w-[90%]">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="registrationNumber"
                                    className="block font-medium leading-6 text-label-active text-inputlabel"
                                >
                                    Registration Number <span className="text-[#FF3B30]">*</span>
                                </label>
                            </div>
                            <div className="mt-1 relative">
                                <InputField
                                    id="registrationNumber"
                                    name="registrationNumber"
                                    type={'text'}
                                    onChange={handleFormChanger}
                                    value={bioData?.registrationNumber}
                                    placeholder="Enter registration number"
                                    required
                                    classes={"bg-[#ECECEC] border-[#8F8F8F]"}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 md:gap-10">
                        <div className="mb-6 md:w-[90%]">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="companyWebsite"
                                    className="block font-medium leading-6 text-label-active text-inputlabel"
                                >
                                    Company Website <span className="text-[#FF3B30]">*</span>
                                </label>
                            </div>
                            <div className="mt-1 relative">
                                <InputField
                                    id="companyWebsite"
                                    name="companyWebsite"
                                    type={'url'}
                                    onChange={handleFormChanger}
                                    value={bioData?.companyWebsite}
                                    placeholder="Enter company website"
                                    required
                                    classes={"bg-[#ECECEC] border-[#8F8F8F]"}
                                />
                            </div>
                        </div>
                        <div className="mb-6 md:w-[90%]">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="companyPhoneNumber"
                                    className="block font-medium leading-6 text-label-active text-inputlabel"
                                >
                                    Company Phone Number <span className="text-[#FF3B30]">*</span>
                                </label>
                            </div>
                            <div className="mt-1 relative">
                                <InputField
                                    id="companyPhoneNumber"
                                    name="companyPhoneNumber"
                                    type={'text'}
                                    onChange={handleFormChanger}
                                    value={bioData?.companyPhoneNumber}
                                    placeholder="Enter company phone number"
                                    required
                                    classes={"bg-[#ECECEC] border-[#8F8F8F]"}
                                />
                            </div>
                        </div>
                    </div>

                    {!data?._id && <div className="mt-6">
                        <span className="w-full md:w-fit">
                            <Button
                                loading={loading}
                                name={'Save and Proceed'}
                                type="submit"
                                disabled={loading}
                                className="bg-primary text-white border-primary border disabled:border-opacity-40  rounded-[18px] hover:opacity-90 disabled:opacity-40 min-w-[194px]"
                            />
                        </span>
                    </div>}
                </form>
            </div>}

        </div>
    );
};
