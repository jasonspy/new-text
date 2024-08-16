import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { InputField } from "../Input";
import { Button } from "../Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { useAppSelector } from "../../app/hooks";
import { updataData, updateSteps, uploadDocument } from "../../features/verification/verificationSlice";


export const DocumentUpload = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { data, currentCount, previousCount, completedSteps } = useAppSelector((state) => state.verification);
    const [residentialData, setResidentialData] = useState(Object)

    const [isUploading, setIsUploading] = useState<boolean>(false)
    const [imagePreview, setImagePreview] = useState<string>('')
    const [upload, setUpload] = useState()
    const [docType, setDocType] = useState<string>("National ID")


    const onToggleForm = () => {
        if (currentCount === 3) {
            dispatch(updateSteps({ current: currentCount + 1, prev: currentCount, completedStep: 0 }))
        } else {
            dispatch(updateSteps({ current: 3, prev: currentCount, completedStep: 0 }))
        }

    }

    const handleFileUpload = (e: any) => {
        const file = e.target.files[0]
        if (file) {
            setUpload(file)
            const imageUrl = URL.createObjectURL(file)
            setImagePreview(imageUrl)
        }
    }

    const uploadFile = async (file: any) => {
        setIsUploading(true)
        const API_ENDPOINT = `http://159.203.142.44:4080/api/v1/individual/documents/${data?._id}`;
        const request = new XMLHttpRequest();
        const formData = new FormData();

        request.open("PATCH", API_ENDPOINT, true);
        request.onreadystatechange = () => {
            if (request.readyState === 4 && request.status === 200) {
                const response = JSON.parse(request.responseText)
                dispatch(updataData({ ...response.data }))

                if (response.data.documents.identity) {
                    dispatch(updateSteps({ current: currentCount + 1, prev: currentCount, completedStep: 3 }))
                }
                setIsUploading(false)
            }
        };
        formData.append('identity', file)
        request.send(formData);

    };

    const onSubmitForm = async (e: any) => {
        e.preventDefault()
        upload ? await uploadFile(upload) : dispatch(updateSteps({ current: currentCount + 1, prev: currentCount, completedStep: 3 }))
    }
    const onReset = (e: any) => {
        setImagePreview('')
        uploadFile(null)
        dispatch(updateSteps({ current: 3, prev: currentCount, completedStep: 2 }))
    }

    useEffect(() => {
        setUpload(data?.file)
        setImagePreview((data?.documents?.identity))

        window.scrollTo(0, 0)
    }, [data])




    return (
        <div className=" max-w-full  md:max-w-3xl xl:max-w-5xl mx-auto p-5 px-5 md:p-8 md:px-8  bg-white rounded-2xl my-10">
            <div className="flex w-full items-center justify-between">
                <div className="flex items-center gap-3 font-[400]"><p className="text-md text-black font-[500]">Step 3 - Upload Document</p>
                    {completedSteps.includes(3) && data?.documents?.identity ? <span className="text-xs text-[#34C759] bg-[#EFFFEF] font-[400] p-1 px-2 rounded-3xl">Completed</span>

                        :
                        <span className="text-xs text-[#FF3B30] bg-[#FFF0EF] font-[400] p-1 px-2 rounded-3xl">Action Required</span>
                    }
                </div>
                <button onClick={onToggleForm} className="w-fit">
                    {currentCount === 3 ? <svg xmlns="http://www.w3.org/2000/svg" className="" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M19 9L12 16L5 9" stroke="black" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 15L12 8L19 15" stroke="black" strokeOpacity="0.9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>}
                </button>
            </div>
            {currentCount === 3 && <div className="min-h-[400px] mt-8">
                <p className="text-sm text-black font-[400]">{imagePreview ? 'Review Document' : 'Kindly upload a  valid document'}</p>

                <div></div>

                <form className="w-full my-5" onSubmit={onSubmitForm}>
                    {!data?.documents?.identity && <div className="grid md:grid-cols-2 md:gap-10">
                        <div className="mb-6 md:w-[90%]">
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="upload"
                                    className="block font-medium leading-6 text-label-active text-inputlabel"
                                >
                                    Select Document <span className="text-[#FF3B30]">*</span>
                                </label>
                            </div>
                            <div className="mt-1 relative">
                                <select name="upload" id="upload"
                                    onChange={(e: any) => setDocType(e.target.value)}
                                    value={docType}
                                    className="block w-full rounded-[12px] border border-[#E8EAED] py-3 px-2.5 placeholder:text-placeholder placeholder:text-placeholder-inactive placeholder:text-sm  sm:text-sm sm:leading-6 outline-none h-[50px] bg-[#ECECEC] border-[#8F8F8F]">
                                    <option value="National ID">National ID</option>
                                    <option value="Passport">Passport</option>
                                    <option value={"Driver's License"}>{"Driver's"} License</option>
                                    <option value="Voter's Card">{"Voter's"} Card</option>
                                </select>
                            </div>
                        </div>
                    </div>}


                    {imagePreview && <div>
                        <p className="text-sm mb-3">National Id</p>
                        <div className="w-64 border rounded-lg">
                            <img src={imagePreview || data?.documents?.identity} alt="" className="h-28 w-full rounded-t-lg object-cover" />
                            <p className="p-2 text-sm uppercase">National Id</p>
                        </div>
                    </div>}

                    {!imagePreview && <div className="my-4">
                        <div className="flex w-full items-center justify-center bg-grey-lighter">
                            <label className="w-full flex flex-col items-center px-4 py-6 bg-[#F5F5F5] text-blue rounded-lg  tracking-wide p-8 md:py-20 cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 96 96" fill="none">
                                    <path d="M19.1992 19.2C19.1992 16.6539 20.2106 14.2121 22.011 12.4118C23.8113 10.6114 26.2531 9.59998 28.7992 9.59998H50.812C52.7209 9.60166 54.5511 10.3613 55.9 11.712L74.692 30.4992C76.0409 31.8489 76.7988 33.6789 76.7992 35.5872V45.6C76.7992 46.2365 76.5464 46.8469 76.0963 47.297C75.6462 47.7471 75.0357 48 74.3992 48C73.7627 48 73.1522 47.7471 72.7022 47.297C72.2521 46.8469 71.9992 46.2365 71.9992 45.6V38.4H55.1992C53.2897 38.4 51.4583 37.6414 50.108 36.2911C48.7578 34.9409 47.9992 33.1095 47.9992 31.2V14.4H28.7992C27.5262 14.4 26.3053 14.9057 25.4051 15.8059C24.5049 16.706 23.9992 17.9269 23.9992 19.2V45.6C23.9992 46.2365 23.7464 46.8469 23.2963 47.297C22.8462 47.7471 22.2357 48 21.5992 48C20.9627 48 20.3523 47.7471 19.9022 47.297C19.4521 46.8469 19.1992 46.2365 19.1992 45.6V19.2ZM52.7992 15.3936V31.2C52.7992 31.8365 53.0521 32.4469 53.5022 32.897C53.9522 33.3471 54.5627 33.6 55.1992 33.6H71.0056L52.7992 15.3936ZM21.5992 55.2C22.2357 55.2 22.8462 55.4528 23.2963 55.9029C23.7464 56.353 23.9992 56.9635 23.9992 57.6V62.4C23.9992 63.0365 23.7464 63.6469 23.2963 64.097C22.8462 64.5471 22.2357 64.8 21.5992 64.8C20.9627 64.8 20.3523 64.5471 19.9022 64.097C19.4521 63.6469 19.1992 63.0365 19.1992 62.4V57.6C19.1992 56.9635 19.4521 56.353 19.9022 55.9029C20.3523 55.4528 20.9627 55.2 21.5992 55.2ZM74.3992 55.2C75.0357 55.2 75.6462 55.4528 76.0963 55.9029C76.5464 56.353 76.7992 56.9635 76.7992 57.6V62.4C76.7992 63.0365 76.5464 63.6469 76.0963 64.097C75.6462 64.5471 75.0357 64.8 74.3992 64.8C73.7627 64.8 73.1522 64.5471 72.7022 64.097C72.2521 63.6469 71.9992 63.0365 71.9992 62.4V57.6C71.9992 56.9635 72.2521 56.353 72.7022 55.9029C73.1522 55.4528 73.7627 55.2 74.3992 55.2ZM21.5992 72C22.2357 72 22.8462 72.2528 23.2963 72.7029C23.7464 73.153 23.9992 73.7635 23.9992 74.4V76.8C23.9992 78.073 24.5049 79.2939 25.4051 80.1941C26.3053 81.0943 27.5262 81.6 28.7992 81.6H31.1992C31.8357 81.6 32.4462 81.8528 32.8963 82.3029C33.3464 82.753 33.5992 83.3635 33.5992 84C33.5992 84.6365 33.3464 85.2469 32.8963 85.697C32.4462 86.1471 31.8357 86.4 31.1992 86.4H28.7992C26.2531 86.4 23.8113 85.3885 22.011 83.5882C20.2106 81.7878 19.1992 79.3461 19.1992 76.8V74.4C19.1992 73.7635 19.4521 73.153 19.9022 72.7029C20.3523 72.2528 20.9627 72 21.5992 72ZM74.3992 72C75.0357 72 75.6462 72.2528 76.0963 72.7029C76.5464 73.153 76.7992 73.7635 76.7992 74.4V76.8C76.7992 79.3461 75.7878 81.7878 73.9874 83.5882C72.1871 85.3885 69.7453 86.4 67.1992 86.4H64.7992C64.1627 86.4 63.5522 86.1471 63.1022 85.697C62.6521 85.2469 62.3992 84.6365 62.3992 84C62.3992 83.3635 62.6521 82.753 63.1022 82.3029C63.5522 81.8528 64.1627 81.6 64.7992 81.6H67.1992C68.4723 81.6 69.6932 81.0943 70.5933 80.1941C71.4935 79.2939 71.9992 78.073 71.9992 76.8V74.4C71.9992 73.7635 72.2521 73.153 72.7022 72.7029C73.1522 72.2528 73.7627 72 74.3992 72ZM40.7992 84C40.7992 83.3635 41.0521 82.753 41.5022 82.3029C41.9522 81.8528 42.5627 81.6 43.1992 81.6H52.7992C53.4357 81.6 54.0462 81.8528 54.4963 82.3029C54.9464 82.753 55.1992 83.3635 55.1992 84C55.1992 84.6365 54.9464 85.2469 54.4963 85.697C54.0462 86.1471 53.4357 86.4 52.7992 86.4H43.1992C42.5627 86.4 41.9522 86.1471 41.5022 85.697C41.0521 85.2469 40.7992 84.6365 40.7992 84Z" fill="#8F8F8F" />
                                </svg>
                                <span className="mt-2 text-sm text-[#8F8F8F] font-[500] leading-normal">Drag and drop document here</span>
                                <span className="mt-2 text-sm text-primary font-[500] underline leading-normal">Upload File</span>
                                <input type='file' className="hidden" onDragEnter={handleFileUpload} onChange={handleFileUpload} />
                            </label>
                        </div>
                    </div>}

                    <div className="mt-10">
                        <span className="flex flex-col gap-4 w-full md:w-full">
                            {true && <Button
                                loading={isUploading}
                                name={'Save and Proceed'}
                                disabled={isUploading}
                                type="submit"
                                className="w-full bg-primary text-white border-primary border disabled:border-opacity-40  rounded-[30px] hover:opacity-90 disabled:opacity-40 min-w-[194px]"
                            />}
                            <Button
                                loading={false}
                                name={'Change Document'}
                                type="button"
                                disabled={isUploading}
                                onClick={onReset}
                                className="bg-transparent  text-primary border-primary border disabled:border-opacity-40  rounded-[30px] hover:opacity-90 disabled:opacity-40 min-w-[194px]"
                            />
                        </span>
                    </div>
                </form>
            </div>}

        </div>
    );
};
