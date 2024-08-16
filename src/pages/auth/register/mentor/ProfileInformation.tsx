
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { Button } from "../../../../components/Button";
import { InputField } from "../../../../components/Input";


interface ProfileInformationProps {
    currentStep: number;
    data: any;
    onComplete: any;
}
const ProfileInformation = ({ currentStep, data, onComplete }: ProfileInformationProps) => {
    const navigate = useNavigate();
    const dateOfBirthInputRef = useRef<HTMLInputElement>(null);
    const [passwordInputType, setPasswordInputType] = useState("password");
    const [confirmPasswordInputType, setConfirmPasswordInputType] = useState("password");
    const [passwordError, setPasswordError] = useState(false);

    // 
    const [allInputs, setAllInputs] = useState({
        firstName: "",
        lastName: "",
        password: "",
        email: "",
        userName: "",
        residence: "",
        dateOfBirth: "",
        confirmPassword: '',
        agreeToTerms: false
    });

    const handlePasswordToggle = () => {
        setPasswordInputType(passwordInputType === "text" ? "password" : "text");
    };
    const handleConfirmPasswordToggle = () => {
        setConfirmPasswordInputType(confirmPasswordInputType === "text" ? "password" : "text");
    };

    const handleFormChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAllInputs({ ...allInputs, [e.target.name]: e.target.value });
    };

    const isButtonDisabled = () => {
        if (!allInputs.agreeToTerms) {
            return true
        }
        const signUpValues = Object.values(allInputs)

        if (signUpValues.includes("")) {
            return true
        } else {
            return false
        }
    }

    const handleFormSubmit = () => {
        setPasswordError(false)
        if (allInputs.password !== allInputs.confirmPassword) {
            setPasswordError(true)
        }
        else {
            setPasswordError(false)
            onComplete(currentStep, allInputs)

        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        setAllInputs({
            ...allInputs, ...data
        })
    }, [])

    return (
        <div className="mt-8 mx-4  sm:w-full sm:max-w-sm md:max-w-2xl lg:max-w-5xl md:w-full md:mx-auto">
            <div className="bg-white shadow rounded-xl ">

                <p className="text-primary text-md lg:text-md  border-b  px-3 md:px-5 py-4 ">
                    Profile Information
                </p>

                <div className="px-3 md:px-5 py-5">

                    <form className="lg:pb-[0rem] grid md:grid-cols-2 gap-6">
                        <div className="md:mr-10">
                            <label
                                htmlFor="firstName"
                                className="block font-[400] leading-6 text-label-active text-inputlabel"
                            >
                                First Name
                            </label>
                            <div className="mt-2">
                                <InputField
                                    id="firstName"
                                    name="firstName"
                                    type="text"
                                    onChange={handleFormChanger}
                                    placeholder={''}
                                    value={allInputs.firstName}
                                    classes={"bg-transparent border-[#E8EAED]"}
                                    required
                                />
                            </div>
                        </div>
                        <div className="md:mr-5">
                            <label
                                htmlFor="lastName"
                                className="block font-[400] leading-6 text-label-active text-inputlabel"
                            >
                                Last Name
                            </label>
                            <div className="mt-2">
                                <InputField
                                    id="lastName"
                                    name="lastName"
                                    type="text"
                                    onChange={handleFormChanger}
                                    placeholder={''}
                                    value={allInputs?.lastName}
                                    classes={"bg-transparent border-[#E8EAED]"}
                                    required
                                />
                            </div>
                        </div>
                        <div className="md:mr-10">
                            <label
                                htmlFor="email"
                                className="block font-[400] leading-6 text-label-active text-inputlabel"
                            >
                                Email Address
                            </label>
                            <div className="mt-2">
                                <InputField
                                    id="email"
                                    name="email"
                                    type="email"
                                    onChange={handleFormChanger}
                                    placeholder={''}
                                    value={allInputs?.email}
                                    classes={"bg-transparent border-[#E8EAED]"}
                                    required
                                />
                            </div>
                        </div>
                        <div className="md:mr-10">
                            <label
                                htmlFor="userName"
                                className="block font-[400] leading-6 text-label-active text-inputlabel"
                            >
                                Username
                            </label>
                            <div className="mt-2">
                                <InputField
                                    id="userName"
                                    name="userName"
                                    type="text"
                                    onChange={handleFormChanger}
                                    placeholder={''}
                                    value={allInputs?.userName}
                                    classes={"bg-transparent border-[#E8EAED]"}
                                    required
                                />
                            </div>
                        </div>
                        <div className="md:mr-10">
                            <label
                                htmlFor="residence"
                                className="block font-[400] leading-6 text-label-active text-inputlabel"
                            >
                                State Of Residence
                            </label>
                            <div className="mt-2">
                                <InputField
                                    id="residence"
                                    name="residence"
                                    type="text"
                                    onChange={handleFormChanger}
                                    placeholder={''}
                                    value={allInputs.residence}
                                    classes={"bg-transparent border-[#E8EAED]"}
                                    required
                                />
                            </div>
                        </div>
                        <div className="md:mr-10">
                            <label
                                htmlFor="dateOfBirth"
                                className="block font-[400] leading-6 text-label-active text-inputlabel"
                            >
                                Date of birth
                            </label>
                            <div className="mt-2 relative">
                                <InputField
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    type="date"
                                    onChange={handleFormChanger}
                                    placeholder={''}
                                    value={allInputs.dateOfBirth}
                                    classes={"bg-transparent border-[#E8EAED]"}
                                    required
                                    inputRef={dateOfBirthInputRef}
                                />
                            </div>
                        </div>


                        <div className="md:mr-10">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block font-[400] leading-6 text-label-active text-inputlabel"
                                >
                                    Password
                                </label>
                            </div>
                            <div className="mt-2 relative">
                                <InputField
                                    onChange={handleFormChanger}
                                    onPasswordToggle={handlePasswordToggle}
                                    id="password"
                                    name="password"
                                    type={passwordInputType}
                                    placeholder="********"
                                    required
                                    value={allInputs?.password}
                                    classes={"bg-transparent border-[#E8EAED]"}
                                    togglePassword={true}
                                />
                            </div>


                        </div>
                        <div className="md:mr-10">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="confirmPassword"
                                    className="block font-[400] leading-6 text-label-active text-inputlabel"
                                >
                                    Confirm Password
                                </label>
                            </div>
                            <div className="mt-2 relative">
                                <InputField
                                    onChange={handleFormChanger}
                                    onPasswordToggle={handleConfirmPasswordToggle}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type={confirmPasswordInputType}
                                    placeholder="********"
                                    required
                                    value={allInputs?.confirmPassword}
                                    classes={`bg-transparent  ${passwordError ? 'border border-red-500' : 'border-[#E8EAED]'}`}
                                    togglePassword={true}
                                />
                                {passwordError && <p className="text-xs ml-2 mt-1 text-red-500">*Confirm password does not match with password.</p>}
                            </div>


                        </div>
                        <label className="checkbox-container w-max">
                            <input
                                type="checkbox"
                                checked={allInputs.agreeToTerms}
                                className="w-fit"
                                onChange={(e: any) => setAllInputs({ ...allInputs, agreeToTerms: !allInputs.agreeToTerms })}
                            />
                            <span className="checkmark"></span>
                            <span className="text-neutral-600 ml-7 text-sm"> I agree with <Link to={'/'} className="text-secondary">Terms & Conditions</Link></span>
                        </label>

                    </form>

                    <section className="mt-20 my-10 w-full">
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
                                    onClick={handleFormSubmit}
                                    disabled={isButtonDisabled()}
                                    className="text-white bg-primary  disabled:border-opacity-40  rounded-[30px] hover:opacity-90 disabled:opacity-40 min-w-[194px]"
                                />
                            </span>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ProfileInformation

