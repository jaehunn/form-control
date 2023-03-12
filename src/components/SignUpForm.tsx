import { FormHTMLAttributes } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { twMerge } from "tailwind-merge";

import Button from "./Button";
import Message from "./Message";
import TextInput from "./TextInput";

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const MAX_LENGTH = {
  firstName: 15,
  lastName: 20,
  password: 15,
  confirmPassword: 15,
} as const;

type Props = FormHTMLAttributes<HTMLFormElement> & {
  className?: string;
};

const VALIDATION_SCHEMA = Yup.object({
  firstName: Yup.string()
    .required("필수 입력값입니다")
    .max(MAX_LENGTH["firstName"], "10자 미만으로 입력해주세요."),
  lastName: Yup.string()
    .required("필수 입력값입니다")
    .max(MAX_LENGTH["lastName"], "10자 미만으로 입력해주세요"),
  email: Yup.string().required("필수 입력값입니다"),
  password: Yup.string().required("필수 입력값입니다"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "패스워드와 일치하지않아요."
  ),
}).required();

const SignUpForm = ({ className, ...props }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(VALIDATION_SCHEMA),
  });

  const onValidSubmit: SubmitHandler<FormValues> = (values) => {
    console.log(values);
  };

  const onInValidSubmit: SubmitErrorHandler<FormValues> = (errorValues) => {
    console.log(errorValues);

    alert("다시 입력해주세요.");
  };

  return (
    <form
      className={twMerge(`mt-8 space-y-6`, className)}
      onSubmit={handleSubmit(onValidSubmit, onInValidSubmit)}
      {...props}
    >
      <div className="flex justify-between items-center">
        <TextInput
          id="first-name"
          label="First Name"
          {...register("firstName", {
            required: true,
            maxLength: MAX_LENGTH["firstName"],
          })}
          className={`relative ${
            !!errors?.firstName && "border-red-500 focus:border-red-500"
          }`}
          bottomSlot={
            errors?.firstName?.type && (
              <Message
                className={`absolute text-red-500`}
                value={errors.firstName.message ?? ""}
              />
            )
          }
        />

        <TextInput
          id="last-name"
          label="Last Name"
          {...register("lastName", {
            required: true,
            maxLength: MAX_LENGTH["lastName"],
          })}
          className={`relative ${
            !!errors?.lastName && "border-red-500 focus:border-red-500"
          }`}
          bottomSlot={
            !!errors?.lastName && (
              <Message
                className={`absolute text-red-500`}
                value={errors.lastName.message ?? ""}
              />
            )
          }
        />
      </div>

      <TextInput
        id="email "
        label="Email"
        {...register("email", { required: true })}
        className={`relative ${
          !!errors?.email && "border-red-500 focus:border-red-500"
        }`}
        bottomSlot={
          !!errors?.email && (
            <Message
              className={`absolute text-red-500`}
              value={errors.email.message ?? ""}
            />
          )
        }
      />

      <TextInput
        type="password"
        id="password"
        label="Password"
        {...register("password", { required: true })}
        className={`relative ${
          !!errors?.password && "border-red-500 focus:border-red-500"
        }`}
        bottomSlot={
          !!errors?.password && (
            <Message
              className={`absolute text-red-500`}
              value={errors.password.message ?? ""}
            />
          )
        }
      />

      <TextInput
        type="password"
        id="confirm-password"
        label="Confirm Password"
        {...register("confirmPassword", { required: true })}
        className={`relative ${
          !!errors?.confirmPassword && "border-red-500 focus:border-red-500"
        }`}
        bottomSlot={
          !!errors?.confirmPassword && (
            <Message
              className={`absolute text-red-500`}
              value={errors.confirmPassword.message ?? ""}
            />
          )
        }
      />

      <div>
        <Button type="submit">Continue</Button>
      </div>
    </form>
  );
};

export default SignUpForm;
