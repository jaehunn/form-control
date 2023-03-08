import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./Button";
import TextInput from "./TextInput";

const SignUpForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = ({
    target: { name, value },
  }: ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formValues);
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="flex justify-between items-center">
        <TextInput
          id="first-name"
          label="First Name"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
        />

        <TextInput
          id="last-name"
          label="Last Name"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
        />
      </div>

      <TextInput
        id="email "
        label="Email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
      />

      <TextInput
        id="password"
        label="Password"
        name="password"
        value={formValues.password}
        onChange={handleChange}
      />

      <TextInput
        id="confirm-password"
        label="Confirm Password"
        name="confirmPassword"
        value={formValues.confirmPassword}
        onChange={handleChange}
      />

      <div>
        <Button type="submit">Continue</Button>
      </div>
    </form>
  );
};

export default SignUpForm;
