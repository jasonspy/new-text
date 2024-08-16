import { useEffect, useState } from "react";
import { InputField } from "../Input";
import NationalitySelect from "../Selects/NationalitySelect";
import { Button } from "../Button";
import { useAppSelector } from "../../app/hooks";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { createIndividual, updataData, updateSteps } from "../../features/verification/verificationSlice";

export const BioData = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { data, currentCount, previousCount, completedSteps, loading } = useAppSelector((state) => state.verification);
    const [bioData, setBioData] = useState(Object)
    const titles = ['Mr', 'Mrs', 'Miss', 'Dr', 'Other']
    const employmentStatus = ['Self-employed', 'Unemployed', 'Public Servant']


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
        const { payload } = await dispatch(createIndividual({ ...bioData, nin: Number(bioData?.nin) }))
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
                <div className="flex items-center gap-3 font-[400]"><p className="text-md text-black font-[500]">Step 1 - Biodata</p>
                    {!completedSteps.includes(1) ? <span className="text-xs text-[#FF3B30] bg-[#FFF0EF] font-[400] p-1 px-2 rounded-3xl">Action Required</span>
                        : <span className="text-xs text-[#34C759] bg-[#EFFFEF] font-[400] p-1 px-2 rounded-3xl">Completed</span>
                    }
                </div>
                <button onClick={onToggleForm} className="w-fit">
                    {currentCount === 1 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M19 9L12 16L5 9" stroke="black" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 15L12 8L19 15" stroke="black" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>}
                </button>
            </div>
            {currentCount === 1 && <div className="min-h-[400px] mt-8">
                <p className="text-sm font-[300] text-black font-[400]">Kindly fill out the fields below correctly</p>

                <form className="w-full my-5" onSubmit={onSubmitForm}>
                    <div className="grid md:grid-cols-2 md:gap-10">
                        <div className="mb-6 md:w-[90%]">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="title"
                                    className="block font-medium leading-6 text-label-active text-inputlabel"
                                >
                                    Title <span className="text-[#FF3B30]">*</span>
                                </label>
                            </div>
                            <div className="mt-1 relative flex items-center gap-4">
                                {
                                    titles.map((title: string, index: number) => {
                                        return (
                                            <label key={index} className="radio-container w-max">
                                                <input
                                                    value={title}
                                                    type="radio"
                                                    checked={bioData.title === title}
                                                    className="w-fit"
                                                    onChange={(e: any) => setBioData({ ...bioData, title: e.target.value })}
                                                />
                                                <span className="radio"></span>
                                                <span className="checked"></span>
                                                <span className="text-black font-[400] ml-7 text-sm"> {title} </span>
                                            </label>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <div className="mb-6 md:w-[90%]">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="surName"
                                    className="block font-medium leading-6 text-label-active text-inputlabel"
                                >
                                    Surname <span className="text-[#FF3B30]">*</span>
                                </label>
                            </div>
                            <div className="mt-1 relative">
                                <InputField
                                    id="surName"
                                    name="surName"
                                    type={'text'}
                                    placeholder="Surname"
                                    value={bioData?.surName}
                                    onChange={handleFormChanger}
                                    required={true}
                                    classes={"bg-[#ECECEC] border-[#8F8F8F]"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-10">
                        <div className="mb-6 md:w-[90%]">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="firstName"
                                    className="block font-medium leading-6 text-label-active text-inputlabel"
                                >
                                    First Name <span className="text-[#FF3B30]">*</span>
                                </label>
                            </div>
                            <div className="mt-1 relative">
                                <InputField
                                    id="firstName"
                                    name="firstName"
                                    type={'text'}
                                    value={bioData?.firstName}
                                    onChange={handleFormChanger}
                                    placeholder="First name"
                                    required
                                    classes={"bg-[#ECECEC] border-[#8F8F8F]"}
                                />
                            </div>
                        </div>
                        <div className="mb-6 md:w-[90%]">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="dob"
                                    className="block font-medium leading-6 text-label-active text-inputlabel"
                                >
                                    Date of Birth <span className="text-[#FF3B30]">*</span>
                                </label>
                            </div>
                            <div className="mt-1 relative">
                                <InputField
                                    id="dob"
                                    name="dob"
                                    type={'date'}
                                    value={bioData?.dob}
                                    onChange={handleFormChanger}
                                    placeholder="Surname"
                                    required
                                    classes={"bg-[#ECECEC] border-[#8F8F8F]"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-10">
                        <div className="mb-6 md:w-[90%]">
                            <NationalitySelect isRequired={true} label={"Nationality"} selectedCountry={bioData.nationality} setSelectedCountry={(country: any) => setBioData({ ...bioData, nationality: country.nationality })} />
                        </div>
                        <div className="mb-6 md:w-[90%]">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="gender"
                                    className="block font-medium leading-6 text-label-active text-inputlabel"
                                >
                                    Gender <span className="text-[#FF3B30]">*</span>
                                </label>
                            </div>

                            <ul className="grid w-full gap-6 grid-cols-2 mt-1">
                                <li>
                                    <input onChange={handleFormChanger} type="radio" id="male" name="gender" value="male" className="hidden peer" checked={bioData?.gender === 'male'} />
                                    <label htmlFor="male" className="inline-flex items-center justify-center w-full p-3 h-[50px] text-black text-sm font-[400] bg-[#ECECEC] border-[#8F8F8F] border rounded-[12px] cursor-pointer  peer-checked:border-primary peer-checked:text-primary hover:text-[#FF7F00] hover:border-[#FF7F00]">
                                        <div className="block">

                                            <div className="w-full">Male</div>
                                        </div>

                                    </label>
                                </li>
                                <li>
                                    <input onChange={handleFormChanger} type="radio" id="female" name="gender" value="female" className="hidden peer" checked={bioData?.gender === 'female'} />
                                    <label htmlFor="female" className="inline-flex items-center justify-center w-full p-3 h-[50px] text-black text-sm font-[400] bg-[#ECECEC] border-[#8F8F8F] border rounded-[12px] cursor-pointer  peer-checked:border-primary peer-checked:text-primary hover:text-[#FF7F00] hover:border-[#FF7F00]">
                                        <div className="block">

                                            <div className="w-full">Female</div>
                                        </div>

                                    </label>
                                </li>
                            </ul>

                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-10">
                        <div className="mb-6 md:w-[90%]">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="employmentStatus"
                                    className="block font-medium leading-6 text-label-active text-inputlabel"
                                >
                                    Employment Status <span className="text-[#FF3B30]">*</span>
                                </label>
                            </div>
                            <div className="mt-2 relative flex flex-wrap items-center gap-4">
                                {
                                    employmentStatus.map((status: string, index: number) => {
                                        return (
                                            <label key={index} className="radio-container w-max">
                                                <input
                                                    name="employmentStatus"
                                                    value={status}
                                                    type="radio"
                                                    checked={bioData?.employmentStatus === status}
                                                    className="w-fit"
                                                    onChange={(e: any) => setBioData({ ...bioData, employmentStatus: e.target.value })}
                                                />
                                                <span className="radio"></span>
                                                <span className="checked"></span>
                                                <span className="text-black font-[500] ml-7 text-sm"> {status} </span>
                                            </label>
                                        )
                                    })
                                }

                            </div>
                        </div>
                        <div className="mb-6 md:w-[90%]">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="phone"
                                    className="block font-medium leading-6 text-label-active text-inputlabel"
                                >
                                    Phone Number <span className="text-[#FF3B30]">*</span>
                                </label>
                            </div>
                            <div className="mt-1 relative">
                                <InputField
                                    id="phone"
                                    name="phone"
                                    type={'text'}
                                    onChange={handleFormChanger}
                                    value={bioData?.phone}
                                    placeholder="Enter phone number"
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
                                    htmlFor="email"
                                    className="block font-medium leading-6 text-label-active text-inputlabel"
                                >
                                    Email Address <span className="text-[#FF3B30]">*</span>
                                </label>
                            </div>
                            <div className="mt-1 relative">
                                <InputField
                                    id="email"
                                    name="email"
                                    type={'email'}
                                    onChange={handleFormChanger}
                                    value={bioData?.email}
                                    placeholder="Enter email address"
                                    required
                                    classes={"bg-[#ECECEC] border-[#8F8F8F]"}
                                />
                            </div>
                        </div>
                        <div className="mb-6 md:w-[90%]">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="alternativePhone"
                                    className="block font-medium leading-6 text-label-active text-inputlabel"
                                >
                                    Alternative Phone Number <span className="text-[#FF3B30]">*</span>
                                </label>
                            </div>
                            <div className="mt-1 relative">
                                <InputField
                                    id="alternativePhone"
                                    name="alternativePhone"
                                    type={'text'}
                                    onChange={handleFormChanger}
                                    value={bioData?.alternativePhone}
                                    placeholder="Enter alternate phone number"
                                    required={false}
                                    classes={"bg-[#ECECEC] border-[#8F8F8F]"}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 md:gap-10">
                        <div className="mb-6 md:w-[90%]">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="nin"
                                    className="block font-medium leading-6 text-label-active text-inputlabel"
                                >
                                    NIN <span className="text-[#FF3B30]">*</span>
                                </label>
                            </div>
                            <div className="mt-1 relative">
                                <InputField
                                    id="nin"
                                    name="nin"
                                    type={'number'}
                                    onChange={handleFormChanger}
                                    value={bioData?.nin}
                                    placeholder="Enter NIN number"
                                    required
                                    classes={"bg-[#ECECEC] border-[#8F8F8F]"}
                                />
                            </div>
                        </div>
                    </div>

                    {!data?._id && < div className="mt-6">
                        <span className="w-full md:w-fit">
                            <Button
                                loading={loading}
                                disabled={loading}
                                name={'Save and Proceed'}
                                type="submit"
                                className="bg-primary text-white border-primary border disabled:border-opacity-40  rounded-[30px] hover:opacity-90 disabled:opacity-40 min-w-[194px]"
                            />
                        </span>
                    </div>}
                </form>
            </div >}

        </div >
    );
};
