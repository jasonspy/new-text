import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { AppDispatch } from "../../app/store";
import { Button, MindTheGapBtn } from "../../components/Button";
import { InputField } from "../../components/Input";
import { PageLoader } from "../../components/Utils/PageLoader";
import { loginUser } from "../../features/auth/authSlice";
import AuthLayout from "../../layouts/AuthLayout";
import LoiginImage from "../../assets/images/onboarding/login-illustration.png";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const authUser = useAppSelector((state) => state.auth);
  const { loading } = authUser;
  const [allInputs, setAllInputs] = useState({
    email: "",
    password: "",
  });
  const [passwordInputType, setPasswordInputType] = useState("password");
  const [buttonDisabled, isButtonDisabled] = useState(false);



  const handleFormChanger = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAllInputs({ ...allInputs, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await dispatch(loginUser(allInputs));
  };
  const handlePasswordToggle = () => {
    setPasswordInputType(passwordInputType === "text" ? "password" : "text");
  };


  return (
    <AuthLayout>
      <section className="min-h-screen lg:max-h-[100svh] overflow-y-scroll justify-between  flex flex-col lg:flex-row bg-[#82828908]">
        <div className="w-full lg:w-1/2">
          <div className="contents bg-[#82828908]">
            <div className="flex h-full flex-1 flex-col justify-center px-6 py-3 md:py-12 lg:px-8 mb-4 bg-[#82828908] pb-20 md:pb-12">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm md:max-w-md md:w-full  md:mx-auto lg:mr-auto  lg:ml-[80px]">
                <div className="my-10 text-center">
                  <h2 className=" text-2xl font-medium leading-9 tracking-tight text-gray pt-0 lg:pt-0">
                    Hello Stranger!
                  </h2>
                  <p className="text-secondary-300 font-normal text-sm mt-3">
                    To sign in, please fill in your email/username and password
                  </p>

                </div>
                <form className="lg:pb-[6rem]" onSubmit={handleFormSubmit}>
                  <div className="mb-6">
                    <label
                      htmlFor="email"
                      className="block font-medium leading-6 text-label-active text-inputlabel"
                    >
                      Email Address or Username
                    </label>
                    <div className="mt-2">
                      <InputField
                        id="email"
                        name="email"
                        type="text"
                        onChange={handleFormChanger}
                        onFocus={() => isButtonDisabled(true)}
                        onBlur={() => isButtonDisabled(false)}
                        placeholder={'Enter your email address or username'}
                        classes={"bg-transparent border-[#E8EAED]"}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between">
                      <label
                        htmlFor="password"
                        className="block font-medium leading-6 text-label-active text-inputlabel"
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
                        classes={"bg-transparent border-[#E8EAED]"}
                        onBlur={() => isButtonDisabled(false)}
                        togglePassword={true}
                      />
                    </div>
                    <div className="text-sm text-end  mt-3">
                      <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="font-medium text-primary text-md w-max"
                      >
                        Forgot Password?
                      </button>
                    </div>
                    <div className="relative flex items-center gap-4 my-6">
                      <div className="flex-grow border-t border-[0.5px] border-[#66666640]"></div>
                      <span className="flex-shrink mx-4 text-[#666666] text-md">OR</span>
                      <div className="flex-grow border-t border-[0.5px] border-[#66666640]"></div>
                    </div>

                    <MindTheGapBtn
                      loading={false}
                      name={'Sign in with MindTheGap'}
                      showLogo={true}
                      type="button"
                      disabled={loading || buttonDisabled}
                      className="bg-transparent text-grey  rounded-[30px] border border-[#E2E8F0] hover:opacity-90 disabled:opacity-40"
                    />
                  </div>




                  <div className="mt-16">


                    <Button
                      loading={false}
                      name={'Sign In'}
                      type="submit"
                      disabled={loading || (!allInputs.email || !allInputs.password)}
                      className="bg-primary text-neutral-100  rounded-[30px] hover:opacity-90 disabled:opacity-40 primary-button-shado"
                    />
                  </div>
                  <p className="mt-5 text-center text-sm text-gray-500 flex gap-2 items-center justify-center">
                    <span> Don’t have an account? </span>
                    <Link
                      to="/signup"
                      className="font-bold text-secondary text-sm "
                    >
                      Sign Up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden  lg:flex lg:w-1/2 bg-[#82828908] h-screen">
          <img src={LoiginImage} alt="" className="w-[98%] mx-auto object-scale-down" />
        </div>
      </section>




      {loading ? <PageLoader /> : ""}
    </AuthLayout>
  );
};

export default Login;
