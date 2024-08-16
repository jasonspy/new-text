import { useEffect, useState } from "react";
import { InputField } from "../Input";
import NationalitySelect from "../Selects/NationalitySelect";
import { Button } from "../Button";
import { useAppSelector } from "../../app/hooks";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { clearState, clearUserData, updataData, updateSteps } from "../../features/verification/verificationSlice";
import { Link, useNavigate } from "react-router-dom";
import FaceImg from "../../assets/images/face.svg";
import SuccessIcon from "../../assets/images/success.svg";
import Modal from "../Modal";

export const ReviewIndividual = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate()

    const { data, currentCount, previousCount, completedSteps } = useAppSelector((state) => state.verification);
    const [agreeTerms, setAgreeTerms] = useState<boolean>(false)
    const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)
    const [isDisabled, setIsdisabled] = useState<boolean>(false)
    const [bioData, setBioData] = useState(Object)

    const onToggleForm = () => {
        if (currentCount === 5) {
            dispatch(updateSteps({ current: currentCount + 1, prev: currentCount, completedStep: 0 }))
        } else {
            dispatch(updateSteps({ current: 5, prev: currentCount, completedStep: 0 }))
        }
    }
    const handleFormChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBioData({ ...bioData, [e.target.name]: e.target.value });
    };

    const onSubmitForm = (e: any) => {
        e.preventDefault()
        // dispatch(updataData(bioData))
        dispatch(updateSteps({ current: currentCount + 1, prev: currentCount, completedStep: 1 }))
    }

    const onSubmit = () => {
        setLoading(true)
        setShowSuccessModal(false)
        setTimeout(() => {
            setShowSuccessModal(true)
        }, 3000);
    }
    const closeSuccessModal = () => {
        setLoading(false)
        setShowSuccessModal(false)
        dispatch(clearUserData())
        dispatch(clearState())
        navigate('/')
    }

    useEffect(() => {
        setBioData({ ...data })
        window.scrollTo(0, 0)
        if (!data?.residential?.address || !data.residential?.city || !data.residential?.state || !data.residential?.zipCode || !data.documents?.identity || !data.biometrics?.selfie) {
            setIsdisabled(true)
        }
        else {
            setIsdisabled(false)
        }
    }, [data, currentCount])



    return (
        <>
            <section className="max-w-full  md:max-w-3xl xl:max-w-5xl mx-auto    my-10">
                <div className="my-10 bg-white rounded-2xl">
                    <div className={`flex w-full items-center justify-between p-5 md:p-8 md:px-8 ${currentCount === 5 ? 'pb-0' : ' pt-5 md:pt-8'}`}>
                        <div className="flex items-center gap-3 font-[400]"><p className="text-md text-black font-[500]">Step 5 - Review</p>
                            {!completedSteps.includes(5) ? <span className="text-xs text-[#FF3B30] bg-[#FFF0EF] font-[400] p-1 px-2 rounded-3xl">Action Required</span>
                                : <span className="text-xs text-[#34C759] bg-[#EFFFEF] font-[400] p-1 px-2 rounded-3xl">Completed</span>
                            }
                        </div>
                        <button onClick={onToggleForm} className="w-fit">
                            {currentCount === 5 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M19 9L12 16L5 9" stroke="black" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M5 15L12 8L19 15" stroke="black" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>}
                        </button>
                    </div>
                    {
                        currentCount === 5 && <>
                            <div className="border-b">
                                <div className="min-h-max px-5 md:px-8 pt-8">
                                    <p className="text-sm font-[300] text-black font-[400]">Carefully review the information provided. Click the edit button to adjust any section.</p>

                                    <form className="w-full my-5" onSubmit={onSubmitForm}>
                                        <div className="flex justify-between items-center mb-5">
                                            <p className="text-md text-black font-[500]">Biodata</p>

                                            <button type="button" className="hidden w-max flex gap-1 items-center" onClick={() => dispatch(updateSteps({ current: 1, prev: currentCount, completedStep: 1 }))}>
                                                <svg className="w-3.5 h-3.5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0 14.46V17.5C0 17.78 0.22 18 0.5 18H3.54C3.67 18 3.8 17.95 3.89 17.85L14.81 6.94L11.06 3.19L0.15 14.1C0.0500001 14.2 0 14.32 0 14.46ZM17.71 2.63L15.37 0.289999C15.2775 0.197295 15.1676 0.123748 15.0466 0.0735662C14.9257 0.0233847 14.796 -0.00244522 14.665 -0.00244522C14.534 -0.00244522 14.4043 0.0233847 14.2834 0.0735662C14.1624 0.123748 14.0525 0.197295 13.96 0.289999L12.13 2.12L15.88 5.87L17.71 4.04C17.8027 3.94749 17.8762 3.8376 17.9264 3.71662C17.9766 3.59565 18.0024 3.46597 18.0024 3.335C18.0024 3.20403 17.9766 3.07435 17.9264 2.95337C17.8762 2.8324 17.8027 2.72251 17.71 2.63Z" fill="black" fillOpacity="0.9" />
                                                </svg>

                                                <p className="text-sm text-black font-[500]">Edit</p>
                                            </button>
                                        </div>
                                        <div className="grid md:grid-cols-2 md:gap-10">

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
                                                        disabled={true}
                                                        required
                                                        classes={"bg-[#ECECEC] border-[#8F8F8F]"}
                                                    />
                                                </div>
                                            </div>
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
                                                        disabled={true}
                                                        placeholder="First name"
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
                                                        disabled={true}
                                                        placeholder="Surname"
                                                        required
                                                        classes={"bg-[#ECECEC] border-[#8F8F8F]"}
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-6 md:w-[90%]">
                                                <div className="flex items-center justify-between">
                                                    <label
                                                        htmlFor="nationality"
                                                        className="block font-medium leading-6 text-label-active text-inputlabel"
                                                    >
                                                        Nationality <span className="text-[#FF3B30]">*</span>
                                                    </label>
                                                </div>
                                                <div className="mt-1 relative">
                                                    <InputField
                                                        id="nationality"
                                                        name="nationality"
                                                        type={'text'}
                                                        value={bioData?.nationality}
                                                        disabled={true}
                                                        placeholder="Nationality"
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
                                                        htmlFor="dateOfBirth"
                                                        className="block font-medium leading-6 text-label-active text-inputlabel"
                                                    >
                                                        Gender <span className="text-[#FF3B30]">*</span>
                                                    </label>
                                                </div>

                                                <ul className="grid w-full gap-6 grid-cols-2 mt-1">
                                                    <li>
                                                        <input onChange={handleFormChanger} disabled={true}
                                                            type="radio" id="male" name="gender" value="male" className="hidden peer" checked={bioData?.gender === 'male'} />
                                                        <label htmlFor="male" className="inline-flex items-center justify-center w-full p-3 h-[50px] text-black text-sm font-[400] bg-[#ECECEC] border-[#8F8F8F] border rounded-[12px] cursor-pointer  peer-checked:border-primary peer-checked:text-primary">
                                                            <div className="block">

                                                                <div className="w-full">Male</div>
                                                            </div>

                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input onChange={handleFormChanger} disabled={true} type="radio" id="female" name="gender" value="female" className="hidden peer" checked={bioData?.gender === 'female'} />
                                                        <label htmlFor="female" className="inline-flex items-center justify-center w-full p-3 h-[50px] text-black text-sm font-[400] bg-[#ECECEC] border-[#8F8F8F] border rounded-[12px] cursor-pointer  peer-checked:border-primary peer-checked:text-primary">
                                                            <div className="block">

                                                                <div className="w-full">Female</div>
                                                            </div>

                                                        </label>
                                                    </li>
                                                </ul>

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
                                                        disabled={true}
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
                                                        disabled={true}
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
                                                        disabled={true}
                                                        value={bioData?.nin}
                                                        placeholder="Enter NIN number"
                                                        required
                                                        classes={"bg-[#ECECEC] border-[#8F8F8F]"}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="border-b">
                                <div className="min-h-max mt-8 px-5 md:px-8 border-b">
                                    <div className="flex justify-between items-center mb-5">
                                        <p className="text-md text-black font-[500]">Residential</p>

                                        <button type="button" className="w-max flex gap-1 items-center" onClick={() => dispatch(updateSteps({ current: 2, prev: currentCount, completedStep: 1 }))}>
                                            <svg className="w-3.5 h-3.5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 14.46V17.5C0 17.78 0.22 18 0.5 18H3.54C3.67 18 3.8 17.95 3.89 17.85L14.81 6.94L11.06 3.19L0.15 14.1C0.0500001 14.2 0 14.32 0 14.46ZM17.71 2.63L15.37 0.289999C15.2775 0.197295 15.1676 0.123748 15.0466 0.0735662C14.9257 0.0233847 14.796 -0.00244522 14.665 -0.00244522C14.534 -0.00244522 14.4043 0.0233847 14.2834 0.0735662C14.1624 0.123748 14.0525 0.197295 13.96 0.289999L12.13 2.12L15.88 5.87L17.71 4.04C17.8027 3.94749 17.8762 3.8376 17.9264 3.71662C17.9766 3.59565 18.0024 3.46597 18.0024 3.335C18.0024 3.20403 17.9766 3.07435 17.9264 2.95337C17.8762 2.8324 17.8027 2.72251 17.71 2.63Z" fill="black" fillOpacity="0.9" />
                                            </svg>

                                            <p className="text-sm text-black font-[500]">Edit</p>
                                        </button>
                                    </div>

                                    <form className="w-full my-5" >
                                        <div className="grid md:grid-cols-2 md:gap-10">
                                            <div className="mb-6 md:w-[90%]">
                                                <div className="flex items-center justify-between">
                                                    <label
                                                        htmlFor="addressLine"
                                                        className="block font-medium leading-6 text-label-active text-inputlabel"
                                                    >
                                                        Address Line <span className="text-[#FF3B30]">*</span>
                                                    </label>
                                                </div>
                                                <div className="mt-1 relative">
                                                    <InputField
                                                        id="addressLine"
                                                        name="addressLine"
                                                        disabled={true}
                                                        value={bioData?.residential?.address}
                                                        onChange={handleFormChanger}
                                                        type={'text'}
                                                        placeholder="Enter address"
                                                        required
                                                        classes={"bg-[#ECECEC] border-[#8F8F8F]"}
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-6 md:w-[90%]">
                                                <div className="flex items-center justify-between">
                                                    <label
                                                        htmlFor="city"
                                                        className="block font-medium leading-6 text-label-active text-inputlabel"
                                                    >
                                                        City <span className="text-[#FF3B30]">*</span>
                                                    </label>
                                                </div>
                                                <div className="mt-1 relative">
                                                    <InputField
                                                        id="city"
                                                        name="city"
                                                        type={'text'}
                                                        disabled={true}
                                                        value={bioData?.residential?.city}
                                                        onChange={handleFormChanger}
                                                        placeholder="Enter city"
                                                        required
                                                        classes={"bg-[#ECECEC] border border-[#8F8F8F]"}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 md:gap-10">
                                            <div className="mb-6 md:w-[90%]">
                                                <div className="flex items-center justify-between">
                                                    <label
                                                        htmlFor="state"
                                                        className="block font-medium leading-6 text-label-active text-inputlabel"
                                                    >
                                                        State <span className="text-[#FF3B30]">*</span>
                                                    </label>
                                                </div>
                                                <div className="mt-1 relative">
                                                    <InputField
                                                        id="state"
                                                        name="state"
                                                        type={'text'}
                                                        disabled={true}
                                                        value={bioData?.residential?.state}
                                                        onChange={handleFormChanger}
                                                        placeholder="Enter state"
                                                        required
                                                        classes={"bg-[#ECECEC] border border-[#8F8F8F]"}
                                                    />
                                                </div>
                                            </div>
                                            <div className="mb-6 md:w-[90%]">
                                                <div className="flex items-center justify-between">
                                                    <label
                                                        htmlFor="zipCode"
                                                        className="block font-medium leading-6 text-label-active text-inputlabel"
                                                    >
                                                        Zip Code <span className="text-[#FF3B30]">*</span>
                                                    </label>
                                                </div>
                                                <div className="mt-1 relative">
                                                    <InputField
                                                        id="zipCode"
                                                        name="zipCode"
                                                        type={'number'}
                                                        disabled={true}
                                                        value={bioData?.residential?.zipCode}
                                                        onChange={handleFormChanger}
                                                        placeholder="Enter Zip Code"
                                                        required
                                                        classes={"bg-[#ECECEC] border border-[#8F8F8F]"}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 md:gap-10">
                                            <div className="mb-6 md:w-[90%]">
                                                <div className="flex items-center justify-between">
                                                    <label
                                                        htmlFor="landmark"
                                                        className="block font-medium leading-6 text-label-active text-inputlabel"
                                                    >
                                                        Nearest Landmark
                                                    </label>
                                                </div>
                                                <div className="mt-1 relative">
                                                    <InputField
                                                        id="landmark"
                                                        name="landmark"
                                                        disabled={true}
                                                        type={'text'}
                                                        value={bioData?.residential?.landMark}
                                                        onChange={handleFormChanger}
                                                        placeholder="Enter nearest landmark"
                                                        required
                                                        classes={"bg-[#ECECEC] border-[#8F8F8F]"}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>


                            </div>
                            <div className="px-5 md:px-8 border-b">
                                <div className="min-h-max mt-8  pb-10">
                                    <div className="flex justify-between items-center mb-5">
                                        <p className="text-md text-black font-[500]">Upload Document</p>

                                        <button type="button" className="w-max flex gap-1 items-center" onClick={() => dispatch(updateSteps({ current: 3, prev: currentCount, completedStep: 1 }))}>
                                            <svg className="w-3.5 h-3.5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 14.46V17.5C0 17.78 0.22 18 0.5 18H3.54C3.67 18 3.8 17.95 3.89 17.85L14.81 6.94L11.06 3.19L0.15 14.1C0.0500001 14.2 0 14.32 0 14.46ZM17.71 2.63L15.37 0.289999C15.2775 0.197295 15.1676 0.123748 15.0466 0.0735662C14.9257 0.0233847 14.796 -0.00244522 14.665 -0.00244522C14.534 -0.00244522 14.4043 0.0233847 14.2834 0.0735662C14.1624 0.123748 14.0525 0.197295 13.96 0.289999L12.13 2.12L15.88 5.87L17.71 4.04C17.8027 3.94749 17.8762 3.8376 17.9264 3.71662C17.9766 3.59565 18.0024 3.46597 18.0024 3.335C18.0024 3.20403 17.9766 3.07435 17.9264 2.95337C17.8762 2.8324 17.8027 2.72251 17.71 2.63Z" fill="black" fillOpacity="0.9" />
                                            </svg>

                                            <p className="text-sm text-black font-[500]">Edit</p>
                                        </button>
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="title"
                                            className="block font-medium leading-6 text-label-active text-inputlabel flex items-center mb-2"
                                        >
                                            <p className="text-sm text-black font-[400]">Selected Document</p> <span className="text-[#FF3B30]">*</span>
                                        </label>

                                        <p className="text-sm text-black mb-2 font-[500]">National ID</p>
                                        <div className="w-64 border rounded-lg">
                                            <img src={data?.documents?.identity} alt="" className="h-28 w-full rounded-t-lg object-cover" />
                                            <p className="p-2 text-sm uppercase">National ID</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-b px-5 md:px-8 pb-10">
                                <div className="min-h-max mt-8">
                                    <div className="flex justify-between items-center mb-5">
                                        <p className="text-md text-black font-[500]">Liveness Capture</p>

                                        <button type="button" className="w-max flex gap-1 items-center" onClick={() => dispatch(updateSteps({ current: 4, prev: currentCount, completedStep: 1 }))}>
                                            <svg className="w-3.5 h-3.5" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 14.46V17.5C0 17.78 0.22 18 0.5 18H3.54C3.67 18 3.8 17.95 3.89 17.85L14.81 6.94L11.06 3.19L0.15 14.1C0.0500001 14.2 0 14.32 0 14.46ZM17.71 2.63L15.37 0.289999C15.2775 0.197295 15.1676 0.123748 15.0466 0.0735662C14.9257 0.0233847 14.796 -0.00244522 14.665 -0.00244522C14.534 -0.00244522 14.4043 0.0233847 14.2834 0.0735662C14.1624 0.123748 14.0525 0.197295 13.96 0.289999L12.13 2.12L15.88 5.87L17.71 4.04C17.8027 3.94749 17.8762 3.8376 17.9264 3.71662C17.9766 3.59565 18.0024 3.46597 18.0024 3.335C18.0024 3.20403 17.9766 3.07435 17.9264 2.95337C17.8762 2.8324 17.8027 2.72251 17.71 2.63Z" fill="black" fillOpacity="0.9" />
                                            </svg>

                                            <p className="text-sm text-black font-[500]">Edit</p>
                                        </button>
                                    </div>

                                    <div className="flex gap-4 items-center">

                                        <div className="flex items-center gap-2">
                                            <img src={FaceImg} alt="" className="h-12 w-12 rounded-full border border-[#FF7F00] object-cover" />
                                            <p className="text-sm text-black font-[500]">Live Selfie </p>
                                            {data?.biometrics?.selfie && <span className="text-xs text-[#34C759] bg-[#EFFFEF] font-[400] p-1 px-2 rounded-3xl">Completed</span>}
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </>
                    }



                </div>

                <div className="my-5 md:max-w-3xl mx-auto">
                    <label className="checkbox-container w-max my-8 mx-auto">
                        <input
                            type="checkbox"
                            checked={agreeTerms}
                            onChange={(e: any) => setAgreeTerms(!agreeTerms)}
                            className="w-fit"
                        />
                        <span className="checkmark"></span>
                        <span className="text-neutral-600 ml-7 text-sm"> I  have read and agree to the <Link to={'/'} className="text-secondary"> Privacy Policy</Link> and <Link to={'/'} className="text-secondary">Terms and Conditions</Link></span>
                    </label>
                    <Button
                        loading={loading}
                        name={'Submit'}
                        type="submit"
                        disabled={!agreeTerms || loading || isDisabled}
                        onClick={onSubmit}
                        className="w-full bg-primary text-white border-primary border disabled:border-opacity-40  rounded-[18px] hover:opacity-90 disabled:opacity-40 min-w-[194px]"
                    />
                </div>
            </section>

            {showSuccessModal && <Modal
                showHeader={true}
                showCloseIcon={true}
                showfooter={true}
                closeModal={closeSuccessModal}
                onConfirm={() => null}
                showConfirmButton={false}
                showCloseButton={true}
                closeButtonLabel={'Close'}
                closeButtonClassName={`border-none text-neutral-800 rounded-[30px] hover:opacity-90 bg-primary-600 text-white }`}
            >
                <div key="header">
                    <h3 className="text-lg font-[500]">Verification Successful</h3>
                </div>

                <div key="body">
                    <div className="text-center flex flex-col items-center">
                        <div className="flex flex-col gap-4 space-x-8 items-center mx-auto">
                            <img src={SuccessIcon} alt="" className="w-[30%]" />
                            <span className="text-xs text-[#8F8F8F]">Your details has been captured successfully! and your application successful.</span>
                        </div>
                    </div>
                </div>
            </Modal>}</>
    );
};
