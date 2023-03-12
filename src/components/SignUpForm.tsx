import { FormHTMLAttributes } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
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

const ERRORS_MESSAGE: { [K in keyof FormValues]: { [T: string]: string } } = {
  firstName: {
    required: "입력해주세요.",
    maxLength: `${MAX_LENGTH["firstName"]}자 이내로 입력해주세요.`,
  },
  lastName: {
    required: "입력해주세요.",
    maxLength: `${MAX_LENGTH["lastName"]}자 이내로 입력해주세요.`,
  },
  email: {
    required: "입력해주세요.",
  },
  password: {
    required: "입력해주세요.",
    maxLength: `${MAX_LENGTH["password"]}자 이내로 입력해주세요.`,
  },
  confirmPassword: {
    required: "입력해주세요.",
    maxLength: `${MAX_LENGTH["confirmPassword"]}자 이내로 입력해주세요.`,
  },
} as const;

type Props = FormHTMLAttributes<HTMLFormElement> & {
  className?: string;
};

const SignUpForm = ({ className, ...props }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

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
                value={ERRORS_MESSAGE["firstName"][errors.firstName.type]}
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
                value={ERRORS_MESSAGE["lastName"][errors.lastName.type]}
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
              value={ERRORS_MESSAGE["email"][errors.email.type]}
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
              value={ERRORS_MESSAGE["password"][errors.password.type]}
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
              value={
                ERRORS_MESSAGE["confirmPassword"][errors.confirmPassword.type]
              }
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
