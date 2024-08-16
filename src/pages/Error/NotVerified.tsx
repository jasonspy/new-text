import React, { useEffect } from 'react'
import { Button } from '../../components/Button';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { clearState } from '../../features/auth/authSlice';
const NotVerified = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();


  useEffect(() => {
    dispatch(clearState())
  }, [])

  return (
    <div className="w-full flex flex-col justify-center items-center h-screen text-center  lg:px-6">
      <h1 className="text-secondary-general text-2xl lg:text-[32px] font-bold  ">
        Verify Your Account
      </h1>
      <p className="text-grey text-base mt-4 lg:text-lg lg:w-1/2 mx-auto ">
        Please check your registered email inbox for a message from OnTheJob and follow the simple steps outlined to complete the
        verification process. This step is crucial for seamless access to our
        platform and to keep your account information secure.
      </p>
      <span className="max-w-[200px] w-full mt-6">

        <Button
          loading={false}
          name="Back"
          type="button"
          onClick={() => navigate("/login")}
          className="bg-primary-600 text-neutral-100  rounded-[30px] hover:opacity-90 disabled:opacity-40"
        />
      </span>
    </div>
  );
}

export default NotVerified
