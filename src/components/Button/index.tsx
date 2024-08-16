import { LoadingSpinner } from "../LoadingSpinner";
import MindTheGapLogo from "../../assets/images/onboarding/mindthegap-logo.svg";

interface buttonProps extends React.HTMLProps<HTMLButtonElement> {
  name?: string | undefined;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  loadingText?: string;
  showLogo?: boolean;
  type: "submit" | "reset" | "button" | undefined;
}

export const Button = ({
  name,
  type,
  className,
  loading,
  disabled,
  onClick,
}: buttonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`flex w-full justify-center rounded-[12px] px-3 py-3 text-sm font-[500] text-[#0E0E0E] leading-6 shadow-sm disabled:cursor-not-allowed ${className}`}
    >
      {loading ? <LoadingSpinner /> : `${name}`}
    </button>
  );
};

export const BTN = ({
  text,
  onClick,
  className,
  loading,
  disabled,
}: {
  text: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  className: string;
  loading?: boolean;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      type="button"
      disabled={disabled}
      className={`flex w-full justify-center rounded-[12px] px-3 py-3 text-sm font-[500] leading-6 shadow-sm ${className} `}
    >
      {loading ? <LoadingSpinner /> : `${text}`}
    </button>
  );
};



export const MindTheGapBtn = ({
  name,
  type,
  className,
  loading,
  disabled,
  onClick,
  showLogo
}: buttonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`flex w-full justify-center items-end gap-4 rounded-[12px] px-3 py-3 text-sm font-[500] text-[#0E0E0E] leading-6 shadow-sm disabled:cursor-not-allowed ${className}`}
    >
      {showLogo && <span> <img src={MindTheGapLogo} alt=""  className="w-[80%]"/> </span>}
      <span className="text-inherit"> {loading ? <LoadingSpinner /> : `${name}`}</span>
    </button>
  );
};
