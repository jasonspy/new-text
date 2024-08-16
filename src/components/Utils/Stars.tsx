import { OffStarIcon, OnStarIcon } from "../../assets/icons";

const Star = ({ filled }: { filled: boolean }) => {
  return <span>{filled ? <OnStarIcon /> : <OffStarIcon />}</span>;
};

export default Star;
