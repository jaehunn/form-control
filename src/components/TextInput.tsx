import { forwardRef, InputHTMLAttributes, ReactNode, Ref } from "react";
import { twMerge } from "tailwind-merge";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  bottomSlot?: ReactNode;
  className?: string;
};

const TextInput = forwardRef(function TextInput(
  { id, label, className, bottomSlot: BottomSlot, ...props }: Props,
  forwardedRef: Ref<HTMLInputElement>
) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>

      <input
        ref={forwardedRef}
        id={id}
        type="text"
        autoComplete="off"
        className={twMerge(
          `block w-full rounded-md border py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none`,
          className
        )}
        {...props}
      />

      {BottomSlot}
    </div>
  );
});

export default TextInput;
