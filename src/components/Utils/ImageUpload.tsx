import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { InputField } from "../Input";
import document from "../../assets/icons/document-upload.svg";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  getStorage,
} from "firebase/storage";
import { useState } from "react";
import toast from "react-hot-toast";

interface ImageUploadProps {
  accecpt?: string;
  classNames?: string;
  text?: string;
  description?: string;
  showPreview?: boolean;
  isProfile?: boolean;
  previewImg?: string;
  onImageUpload: (imageUrl: string) => void;
}

export const ImageUpload = ({
  accecpt,
  classNames,
  text,
  description,
  previewImg,
  onImageUpload,
  isProfile,
}: ImageUploadProps) => {
  const [photoProgress, setPhotoProgress] = useState(0);
  const [photoProgressComplete, setPhotoProgressComplete] = useState(false);
  const [imageUrl, setImageUrl] = useState("");

  // Handle file upload
  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const storage = getStorage();

    const storageRef = ref(storage, `guarantor/${file.name}`);

    // Upload file
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("Progress:", progress);
        setPhotoProgress(progress);
        // console.log("Photo progress:", photoProgress);
      },
      (error) => {
        toast.error(error.message);
        console.log(error);
      },
      async () => {
        // console.log("Upload complete");
        // Get download URL
        const downloadURL = await getDownloadURL(storageRef);
        setImageUrl(downloadURL);
        onImageUpload(downloadURL);
        setPhotoProgressComplete(true);
      }
    );
  };

  return (
    <div>
      {isProfile ? (
        <>
          <div className="flex items-center justify-center py-4">
            <div className="text-center">
              <div className="relative h-28 w-28 rounded-full bg-[#F7F7F7] mx-auto flex items-center justify-center">
                <img
                  src={previewImg ? previewImg : "/icons/user-edit.svg"}
                  className={
                    previewImg
                      ? "w-full h-full w-full rounded-full object-contain"
                      : ""
                  }
                  alt=""
                />
                <InputField
                  required={false}
                  name="idPhotoUrl"
                  type="file"
                  onChange={handleFileUpload}
                  accept={"image/*"}
                  classes={`${classNames} absolute top-0 w-full h-full opacity-0 cursor-pointer`}
                />
              </div>

              <div className="text-center">
                <p className="text-[#1A1717] text-md mt-2 font-semibold">
                  {text}
                </p>
                <p className="text-xs text-secondary-300">{description}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="mt-8">
            <label className="cursor-pointer">
              <div className="text-center mt-[12px] px-[89px] py-[30px] rounded-[12px] border border-dashed border-[#1A1717]">
                <div className="flex items-center justify-center">
                  <img
                    src={previewImg ? previewImg : document}
                    className={previewImg ? "w-full h-40 object-contain" : ""}
                    alt=""
                  />
                </div>
                <p className="text-sm font-semibold mt-[20px] text-black">
                  {text}
                </p>
                <p className="text-[12px] font-normal">{description}</p>
                <InputField
                  required={false}
                  name="idPhotoUrl"
                  type="file"
                  onChange={handleFileUpload}
                  accept={"image/*"}
                  classes={`${classNames} `}
                />
              </div>
            </label>
          </div>
        </>
      )}

      <div className="mt-[10px] w-[30%] ml-[35%] md:mx-auto grid grid-cols-1 gap-6">
        {photoProgress > 0 && photoProgressComplete === false ? (
          <div className="relative pt-1">
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: `${photoProgress}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
              ></div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
