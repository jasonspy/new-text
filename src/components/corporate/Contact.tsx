import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { InputField } from "../Input";
import { Button } from "../Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { useAppSelector } from "../../app/hooks";
import { updataData, updateCorporate, updateSteps } from "../../features/verification/verificationSlice";


export const ContactIndividual = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { data, currentCount, previousCount, completedSteps } = useAppSelector((state) => state.verification);
    const [residentialData, setResidentialData] = useState(Object)


    const onToggleForm = () => {
        if (currentCount === 3) {
            dispatch(updateSteps({ current: currentCount + 1, prev: currentCount, completedStep: 0 }))
        } else {
            dispatch(updateSteps({ current: 3, prev: currentCount, completedStep: 0 }))
        }

    }
    const handleFormChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
        setResidentialData({ ...residentialData, [e.target.name]: e.target.value });
    };

    const onSubmitForm = async (e: any) => {
        e.preventDefault()
        const { payload } = await dispatch(updateCorporate({ data: { ...residentialData }, route: 'contact', id: data._id }))
        if (payload?.success) {
            dispatch(updataData({ ...payload.data }))
            dispatch(updateSteps({ current: currentCount + 1, prev: currentCount, completedStep: 3 }))
        }
    }
    const isCompleted = () => {
        return data?.contact?.designation && data?.contact?.email && data?.contact?.nameOfContact && data?.contact?.phoneNumber
    }


    useEffect(() => {
        setResidentialData({
            designation: data?.contact?.designation,
            email: data?.contact?.email,
            nameOfContact: data?.contact?.nameOfContact,
            phoneNumber: data?.contact?.phoneNumber
        })
        window.scrollTo(0, 0)
    }, [data])


    return (
        <div className=" max-w-full  md:max-w-3xl xl:max-w-5xl mx-auto p-5 px-5 md:p-8 md:px-8  bg-white rounded-2xl my-10">
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3 font-[400]"><p className="text-md  text-black font-[500]">Step 3 - Contact Individual</p>
                    {!completedSteps.includes(3) || !isCompleted() ? <span className="text-xs text-[#FF3B30] bg-[#FFF0EF] font-[400] p-1 px-2 rounded-3xl">Action Required</span>
                        : <span className="text-xs text-[#34C759] bg-[#EFFFEF] font-[400] p-1 px-2 rounded-3xl">Completed</span>
                    }
                </div>
                <button onClick={onToggleForm} className="w-fit">
                    {currentCount === 3 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M19 9L12 16L5 9" stroke="black" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 15L12 8L19 15" stroke="black" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>}
                </button>
            </div>
            {currentCount === 3 && <div className="min-h-max mt-8">
                <p className="text-sm font-[400] text-black">Kindly fill out the fields below correctly</p>

                <form className="w-full my-5" onSubmit={onSubmitForm}>
                    <div className="grid md:grid-cols-2 md:gap-10">
                        <div className="mb-6 md:w-[90%]">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="nameOfContact"
                                    className="block font-medium leading-6 text-label-active text-inputlabel"
                                >
                                    Name of Contact Person <span className="text-[#FF3B30]">*</span>
                                </label>
                            </div>
                            <div className="mt-1 relative">
                                <InputField
                                    id="nameOfContact"
                                    name="nameOfContact"
                                    value={residentialData?.nameOfContact}
                                    onChange={handleFormChanger}
                                    type={'text'}
                                    placeholder="Enter name"
                                    required
                                    classes={"bg-[#ECECEC] border-[#8F8F8F]"}
                                />
                            </div>
                        </div>
                        <div className="mb-6 md:w-[90%]">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="designation"
                                    className="block font-medium leading-6 text-label-active text-inputlabel"
                                >
                                    Designation <span className="text-[#FF3B30]">*</span>
                                </label>
                            </div>
                            <div className="mt-1 relative">
                                <InputField
                                    id="designation"
                                    name="designation"
                                    type={'text'}
                                    value={residentialData?.designation}
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
                                    htmlFor="phoneNumber"
                                    className="block font-medium leading-6 text-label-active text-inputlabel"
                                >
                                    Phone Number <span className="text-[#FF3B30]">*</span>
                                </label>
                            </div>
                            <div className="mt-1 relative">
                                <InputField
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type={'text'}
                                    value={residentialData?.phoneNumber}
                                    onChange={handleFormChanger}
                                    placeholder="Enter phone number"
                                    required
                                    classes={"bg-[#ECECEC] border border-[#8F8F8F]"}
                                />
                            </div>
                        </div>
                        <div className="mb-6 md:w-[90%]">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="email"
                                    className="block font-medium leading-6 text-label-active text-inputlabel"
                                >
                                    Email <span className="text-[#FF3B30]">*</span>
                                </label>
                            </div>
                            <div className="mt-1 relative">
                                <InputField
                                    id="email"
                                    name="email"
                                    type={'email'}
                                    value={residentialData?.email}
                                    onChange={handleFormChanger}
                                    placeholder="Enter email address"
                                    required
                                    classes={"bg-[#ECECEC] border border-[#8F8F8F]"}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <span className="w-full md:w-fit">
                            <Button
                                loading={false}
                                name={'Save and Proceed'}
                                type="submit"
                                className="bg-primary text-white border-primary border disabled:border-opacity-40  rounded-[30px] hover:opacity-90 disabled:opacity-40 min-w-[194px]"
                            />
                        </span>
                    </div>
                </form>
            </div>}

        </div>
    );
};
