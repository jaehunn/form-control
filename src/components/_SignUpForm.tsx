import { useForm } from "react-hook-form";

import Message from "./Message";
import TextInput from "./TextInput";
import { FormValues } from "./SignUpForm";

const SignUpForm = () => {
  const {
    register, // ref, name, onChange, onBlur 을 포함한 객체를 반환합니다.
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onValidSubmit: Parameters<typeof handleSubmit>[0] = (values) => {
    // 유효성 검사 결과, 성공이면 실행됩니다.

    console.log(values);
  };

  const onInvalidSubmit: Parameters<typeof handleSubmit>[1] = (errorValues) => {
    // 유효성 검사 결과, 실패하면 실행됩니다.

    console.log(errorValues);
    alert("다시 입력해주세요.");
  };

  return (
    <form onSubmit={handleSubmit(onValidSubmit, onInvalidSubmit)}>
      <TextInput
        id="first-name"
        label="First Name"
        {...register("firstName", {
          required: true,
        })}
        bottomSlot={
          errors?.firstName?.type === "required" && (
            <Message
              className={`absolute text-red-500`}
              value="필수값입니다."
            />
          )
        }
      />
    </form>
  );
};

export default SignUpForm;
