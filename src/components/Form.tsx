import { FormHTMLAttributes, PropsWithChildren } from "react";

type Props = PropsWithChildren<
  FormHTMLAttributes<HTMLFormElement> & {
    //  ...
  }
>;

const Form = ({ children, ...props }: Props) => {
  return <form {...props}>{children}</form>;
};

export default Form;
