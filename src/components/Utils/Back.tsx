import { useNavigate } from "react-router-dom";
import { BackIcon } from "../../assets/icons/index";

export const Back = ({ text, link }: { text: string; link?: string }) => {
  const navigate = useNavigate();

  const handleRoute = () => {
    link ? navigate(link) : navigate(-1);
  };

  return (
    <button onClick={handleRoute} className="flex gap-3 items-center w-max">
      <BackIcon />
      <p className="text-sm  text-[#5C5C5B]">{text}</p>
    </button>
  );
};
