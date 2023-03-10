import { twMerge } from "tailwind-merge";

type Props = {
  value: string;
  className?: string;
};

const Message = ({ value, className }: Props) => {
  return (
    <div>
      <span className={twMerge(`text-sm`, className)}>{value}</span>
    </div>
  );
};

export default Message;
