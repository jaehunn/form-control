import {
  ChangeEvent,
  forwardRef,
  Ref,
  useImperativeHandle,
  useState,
} from "react";

import TextInput from "./TextInput";

export type NameInputValues = {
  firstName: string;
  lastName: string;
};

const NameInputGroup = forwardRef(function NameInputGroup(
  _,
  forwardedRef: Ref<{ values: NameInputValues }>
) {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
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
        id="first-name"
        label="First Name"
        name="firstName"
        value={inputValues.firstName}
        onChange={handleChange}
      />

      <TextInput
        id="last-name"
        label="Last Name"
        name="lastName"
        value={inputValues.lastName}
        onChange={handleChange}
      />
    </>
  );
});

export default NameInputGroup;
