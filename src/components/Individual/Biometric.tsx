import { useNavigate } from "react-router-dom";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { InputField } from "../Input";
import { Button } from "../Button";
import Modal from "../Modal";
import { updataData, updateIndividual, updateSteps } from "../../features/verification/verificationSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { useAppSelector } from "../../app/hooks";


export const Biometric = () => {

    const dispatch = useDispatch<AppDispatch>();

    const { data, currentCount, previousCount, completedSteps, loading } = useAppSelector((state) => state.verification);

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState<boolean>(false)
    const [imageCaptured, setImageCaptured] = useState<boolean>(false)
    const [capturedImage, setCapturedImage] = useState<string | null>(null);


    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });

            if (videoRef.current) {
                videoRef.current.srcObject = stream;
            }
        } catch (error) {
            console.error('Error accessing camera:', error);
        }
    };

    const takeSelfie = () => {

        if (videoRef.current && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');

            if (context) {
                // Set the canvas size to match the video stream
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;

                // Draw the current frame of the video onto the canvas
                context.drawImage(video, 0, 0, canvas.width, canvas.height);

                setImageCaptured(true)
                // Stop the video stream
                // video?.srcObject?.getTracks().forEach((track: any) => track.stop());

                // Convert the canvas content to a data URL
                const imageDataURL = canvas.toDataURL();
                setCapturedImage(imageDataURL);

            }
        }
    };
    const onCameraClick = () => {
        setShowModal(true)
        startCamera()
    }
    const onRetakeImage = () => {
        setImageCaptured(false)
        startCamera()
    }
    const onResetSelfie = async () => {
        setCapturedImage(null);
        const { payload } = await dispatch(updateIndividual({ biometrics: { selfie: false, fingerPrint: false }, route: 'biometrics', id: data._id }))
        if (payload?.success) {
            dispatch(updataData({ ...payload.data }))
        }

    }


    const onToggleForm = () => {
        if (currentCount === 4) {
            dispatch(updateSteps({ current: currentCount + 1, prev: currentCount, completedStep: 4 }))
        } else {
            dispatch(updateSteps({ current: 4, prev: currentCount, completedStep: 4 }))
        }

    }

    const onSubmitForm = async (e: any) => {
        e.preventDefault()
        const { payload } = await dispatch(updateIndividual({ biometrics: { selfie: true }, route: 'biometrics', id: data._id }))

        if (payload?.success) {
            dispatch(updataData({ ...payload.data }))
            dispatch(updateSteps({ current: currentCount + 1, prev: currentCount, completedStep: 4 }))
        }
    }

    const onCloseModal = () => {
        setShowModal(false)
    }

    useEffect(() => {
        setCapturedImage(data.biometrics?.selfie)
        setImageCaptured(data?.biometrics?.selfie)
    }, [data])



    return (
        <div className=" max-w-full  md:max-w-3xl xl:max-w-5xl mx-auto p-5 px-5 md:p-8 md:px-8  bg-white rounded-2xl my-10">
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-1 md:gap-3 font-[400]"><p className="text-md font-[500] text-black">Step 4 -  Biometrics Capture</p>
                    {!completedSteps.includes(4) || !imageCaptured ? <span className="text-xs text-[#FF3B30] bg-[#FFF0EF] font-[400] p-1 px-2 rounded-3xl">Action Required</span>
                        : <span className="text-xs text-[#34C759] bg-[#EFFFEF] font-[400] p-1 px-2 rounded-3xl">Completed</span>
                    }                 </div>
                <button onClick={onToggleForm} className="w-fit">
                    {currentCount === 4 ? <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M19 9L12 16L5 9" stroke="black" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 15L12 8L19 15" stroke="black" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>}
                </button>
            </div>
            {currentCount === 4 && <div className="min-h-[400px] mt-8">
                <p className="text-sm text-black font-[400]">Open camera to take a live selfie</p>

                <form className="w-full my-5" onSubmit={onSubmitForm}>


                    {(imageCaptured && capturedImage) && <div>

                        <div className="w-64 border rounded-lg">
                            <img src={capturedImage} alt="" className="h-48 w-full rounded-t-lg object-cover" />
                            <p className="p-2 text-sm uppercase">Selfie Image</p>
                        </div>
                    </div>}

                    {(!imageCaptured || !capturedImage) && <div className="my-4">
                        <div className="flex w-full items-center justify-center bg-grey-lighter" onClick={onCameraClick}>
                            <label className="w-full flex flex-col items-center px-4 py-6 bg-[#F5F5F5] text-blue rounded-lg  tracking-wide p-8 md:py-20 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 96 96" fill="none">
                                    <path d="M48 64C54.6274 64 60 58.6274 60 52C60 45.3726 54.6274 40 48 40C41.3726 40 36 45.3726 36 52C36 58.6274 41.3726 64 48 64Z" stroke="#8F8F8F" strokeWidth="4" />
                                    <path d="M12 52C12 40.764 12 35.148 14.696 31.112C15.8636 29.3642 17.3642 27.8636 19.112 26.696C23.148 24 28.76 24 40 24H56C67.236 24 72.852 24 76.888 26.696C78.6358 27.8636 80.1364 29.3642 81.304 31.112C84 35.148 84 40.76 84 52C84 63.236 84 68.852 81.304 72.888C80.1361 74.6356 78.6356 76.1361 76.888 77.304C72.852 80 67.24 80 56 80H40C28.764 80 23.148 80 19.112 77.304C17.3644 76.1362 15.8638 74.6356 14.696 72.888C13.768 71.5 13.16 69.928 12.76 68M72 40H70M58 14H38" stroke="#8F8F8F" strokeWidth="4" strokeLinecap="round" />
                                </svg>
                                <span className="mt-2 text-sm text-[#8F8F8F] font-[500] leading-normal">Open camera to take a live selfie</span>
                                <span className="mt-2 text-sm text-primary font-[500] underline leading-normal">Open Camera</span>
                            </label>
                        </div>
                    </div>}

                    <div className="my-4 mt-8">
                        <p className="text-sm text-black font-[400] mb-4">Attach fingerprint scanner to capture fingerprint</p>

                        <div className="flex w-full items-center justify-center bg-grey-lighter">
                            <label className="w-full flex flex-col items-center px-4 py-6 bg-[#F5F5F5] text-blue rounded-lg  tracking-wide p-8 md:py-20 cursor-pointer">
                                <svg width="76" height="76" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M71.2409 17.88C70.9209 17.88 70.6009 17.8 70.3209 17.64C62.6409 13.68 56.0009 12 48.0409 12C40.1209 12 32.6009 13.88 25.7609 17.64C24.8009 18.16 23.6009 17.8 23.0409 16.84C22.7915 16.3722 22.7355 15.8252 22.8851 15.3165C23.0347 14.8079 23.3779 14.3783 23.8409 14.12C31.2809 10.08 39.4409 8 48.0409 8C56.5609 8 64.0009 9.88 72.1609 14.08C73.1609 14.6 73.5209 15.8 73.0009 16.76C72.8428 17.0934 72.5937 17.3755 72.2823 17.5736C71.971 17.7717 71.61 17.8779 71.2409 17.88ZM14.0009 38.88C13.6322 38.8834 13.2698 38.7847 12.9538 38.5947C12.6378 38.4046 12.3806 38.1308 12.2107 37.8035C12.0409 37.4763 11.965 37.1083 11.9915 36.7405C12.018 36.3728 12.1459 36.0195 12.3609 35.72C16.3209 30.12 21.3609 25.72 27.3609 22.64C39.9209 16.16 56.0009 16.12 68.6009 22.6C74.6009 25.68 79.6409 30.04 83.6009 35.6C83.7544 35.815 83.8638 36.0582 83.9227 36.3157C83.9817 36.5731 83.9891 36.8397 83.9445 37.1C83.8998 37.3604 83.8041 37.6093 83.6627 37.8324C83.5214 38.0555 83.3372 38.2484 83.1209 38.4C82.2009 39.04 80.9609 38.84 80.3209 37.92C76.818 32.9615 72.1651 28.9263 66.7609 26.16C55.2809 20.28 40.6009 20.28 29.1609 26.2C23.7209 29 19.1609 33 15.5609 38.04C15.2409 38.6 14.6409 38.88 14.0009 38.88ZM39.0009 87.16C38.7386 87.1632 38.4786 87.1115 38.2374 87.0081C37.9963 86.9048 37.7795 86.7521 37.6009 86.56C34.1209 83.08 32.2409 80.84 29.5609 76C26.8009 71.08 25.3609 65.08 25.3609 58.64C25.3609 46.76 35.5209 37.08 48.0009 37.08C60.4809 37.08 70.6409 46.76 70.6409 58.64C70.6409 59.76 69.7609 60.64 68.6409 60.64C67.5209 60.64 66.6409 59.76 66.6409 58.64C66.6409 48.96 58.2809 41.08 48.0009 41.08C37.7209 41.08 29.3609 48.96 29.3609 58.64C29.3609 64.4 30.6409 69.72 33.0809 74.04C35.6409 78.64 37.4009 80.6 40.4809 83.72C41.2409 84.52 41.2409 85.76 40.4809 86.56C40.0409 86.96 39.5209 87.16 39.0009 87.16ZM67.6809 79.76C62.9209 79.76 58.7209 78.56 55.2809 76.2C49.3209 72.16 45.7609 65.6 45.7609 58.64C45.7609 57.52 46.6409 56.64 47.7609 56.64C48.8809 56.64 49.7609 57.52 49.7609 58.64C49.7609 64.28 52.6409 69.6 57.5209 72.88C60.3609 74.8 63.6809 75.72 67.6809 75.72C68.6409 75.72 70.2409 75.6 71.8409 75.32C72.9209 75.12 73.9609 75.84 74.1609 76.96C74.3609 78.04 73.6409 79.08 72.5209 79.28C70.2409 79.72 68.2409 79.76 67.6809 79.76ZM59.6409 88C59.4809 88 59.2809 87.96 59.1209 87.92C52.7609 86.16 48.6009 83.8 44.2409 79.52C41.4781 76.7919 39.2872 73.54 37.7968 69.9547C36.3064 66.3694 35.5462 62.5227 35.5609 58.64C35.5609 52.16 41.0809 46.88 47.8809 46.88C54.6809 46.88 60.2009 52.16 60.2009 58.64C60.2009 62.92 63.9209 66.4 68.5209 66.4C73.1209 66.4 76.8409 62.92 76.8409 58.64C76.8409 43.56 63.8409 31.32 47.8409 31.32C36.4809 31.32 26.0809 37.64 21.4009 47.44C19.8409 50.68 19.0409 54.48 19.0409 58.64C19.0409 61.76 19.3209 66.68 21.7209 73.08C22.1209 74.12 21.6009 75.28 20.5609 75.64C19.5209 76.04 18.3609 75.48 18.0009 74.48C16.0735 69.4212 15.084 64.0535 15.0809 58.64C15.0809 53.84 16.0009 49.48 17.8009 45.68C23.1209 34.52 34.9209 27.28 47.8409 27.28C66.0409 27.28 80.8409 41.32 80.8409 58.6C80.8409 65.08 75.3209 70.36 68.5209 70.36C61.7209 70.36 56.2009 65.08 56.2009 58.6C56.2009 54.32 52.4809 50.84 47.8809 50.84C43.2809 50.84 39.5609 54.32 39.5609 58.6C39.5609 65.44 42.2009 71.84 47.0409 76.64C50.8409 80.4 54.4809 82.48 60.1209 84.04C61.2009 84.32 61.8009 85.44 61.5209 86.48C61.3209 87.4 60.4809 88 59.6409 88Z" fill="#8F8F8F" />
                                </svg>

                                <span className="mt-2 text-sm text-[#8F8F8F] font-[500] leading-normal mt-4">Click below to access fingerprint scanner</span>
                                <span className="mt-2 text-sm text-primary font-[500] underline leading-normal">Access Fingerprint Scanner</span>
                            </label>
                        </div>
                    </div>

                    <div className="mt-10">
                        <span className="flex flex-col gap-4 w-full md:w-full">
                            <Button
                                loading={loading}
                                name={'Save and Proceed'}
                                type="submit"
                                disabled={!imageCaptured || loading}
                                className="w-full bg-primary text-white border-primary border disabled:border-opacity-40  rounded-[30px] hover:opacity-90 disabled:opacity-40 min-w-[194px]"
                            />
                            <Button
                                loading={false}
                                name={'Change Selfie'}
                                type="button"
                                disabled={!imageCaptured || loading}
                                onClick={onResetSelfie}
                                className="bg-transparent  text-primary border-primary border disabled:border-opacity-40  rounded-[30px] hover:opacity-90 disabled:opacity-40 min-w-[194px]"
                            />
                        </span>
                    </div>
                </form>
            </div>}

            {showModal && <Modal
                showHeader={false}
                showCloseIcon={true}
                showfooter={false}
                closeModal={onCloseModal}
                onConfirm={() => null}
                showConfirmButton={false}
                showCloseButton={false}
                closeButtonLabel={'Close'}
                closeButtonClassName={`border-none text-neutral-800 rounded-[30px] hover:opacity-90 bg-primary-600 text-white }`}
            >
                <div key="header"></div>

                <div key="body">
                    <div className="text-center flex flex-col items-center">

                        {!imageCaptured && <div className="web-cam" >
                            <video ref={videoRef} autoPlay className="video-circle" /> </div>}
                        {true && <canvas ref={canvasRef} className={`${imageCaptured ? 'w-[400px] h-[400px] rounded-full' : 'w-[0px] h-[0px] rounded-full'}`} />}

                        <Button
                            name={imageCaptured ? 'Save and Continue' : 'Capture Selfie'}
                            type="button"
                            onClick={() => imageCaptured ? setShowModal(false) : takeSelfie()}
                            className="bg-primary  mt-10 text-white border-primary border disabled:border-opacity-40  rounded-[30px] hover:opacity-90 disabled:opacity-40 min-w-[194px]"
                        />
                        {imageCaptured && <Button
                            name={'Retake Selfie'}
                            type="button"
                            onClick={onRetakeImage}
                            className="bg-transparent  mt-5 text-primary border-primary border disabled:border-opacity-40  rounded-[30px] hover:opacity-90 disabled:opacity-40 min-w-[194px]"
                        />}
                        <div className="flex space-x-8 items-center mx-auto mt-10">
                            <span className="text-xs text-[#8F8F8F]">Tip: Position your face inside the circle and wait till it turns
                                orange. Ensure your face is sufficiently lit for better results</span>
                        </div>
                    </div>
                </div>
            </Modal>}

        </div>
    );
};
