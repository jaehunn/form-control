import { FormEvent, useRef } from "react";

import Button from "./Button";
import TextInput from "./TextInput";

const SignUpForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formRef.current?.childNodes);

    // Do Something...
  };

  return (
    <form ref={formRef} className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="flex justify-between items-center">
        <TextInput id="first-name" label="First Name" name="firstName" />
        <TextInput id="last-name" label="Last Name" name="lastName" />
      </div>

      <TextInput id="email " label="Email" name="email" />
      <TextInput
        type="password"
        id="password"
        label="Password"
        name="password"
      />
      <TextInput
        type="password"
        id="confirm-password"
        label="Confirm Password"
        name="confirmPassword"
      />

      <div>
        <Button type="submit">Continue</Button>
      </div>
    </form>
  );
};

export default SignUpForm;
