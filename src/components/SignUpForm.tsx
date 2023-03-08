import { FormEvent } from "react";
import Button from "./Button";
import TextInput from "./TextInput";

const SignUpForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    console.log(values);
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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
