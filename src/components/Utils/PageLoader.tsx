import LoaderIcon from "../../assets/icons/loader-1.svg";
export const PageLoader = () => {
  return (
    <div className="fixed h-screen top-0 left-0 w-full bg-[#595959b3] z-max flex items-center justify-center">
      <img src={LoaderIcon} alt="" />
    </div>
  );
};
