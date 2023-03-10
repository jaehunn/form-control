import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

type Props = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    className?: string;
  }
>;

const Button = ({ children, className, ...props }: Props) => {
  return (
    <button
      type="button"
      className={twMerge(
        `group relative flex w-full justify-center rounded-md bg-blue-500 py-2 px-3 text-sm font-semibold text-white hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500`,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
