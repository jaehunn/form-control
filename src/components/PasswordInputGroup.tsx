import {
  ChangeEvent,
  forwardRef,
  Ref,
  useImperativeHandle,
  useState,
} from "react";

import TextInput from "./TextInput";

export type PasswordInputValues = {
  password: string;
  confirmPassword: string;
};

const PasswordInputGroup = forwardRef(function PasswordInputGroup(
  _,
  forwardedRef: Ref<{ values: PasswordInputValues }>
) {
  const [inputValues, setInputValues] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  useImperativeHandle(
    forwardedRef,
    () => ({
      values: inputValues,
    }),
    [inputValues]
  );

  return (
    <>
      <TextInput
        type="password"
        id="password"
        label="Password"
        name="password"
        value={inputValues.password}
        onChange={handleChange}
      />

      <TextInput
        type="password"
        id="confirm-password"
        label="Confirm Password"
        name="confirmPassword"
        value={inputValues.confirmPassword}
        onChange={handleChange}
      />
    </>
  );
});

export default PasswordInputGroup;
