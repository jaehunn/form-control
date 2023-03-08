import { ChangeEvent, FormEvent, useRef, useState } from "react";

import Button from "./Button";
import TextInput from "./TextInput";
import NameInputGroup, { NameInputValues } from "./NameInputGroup";
import PasswordInputGroup, { PasswordInputValues } from "./PasswordInputGroup";

const SignUpForm = () => {
  const nameInputRef = useRef<{ values: NameInputValues } | null>(null);
  const passwordInputRef = useRef<{ values: PasswordInputValues } | null>(null);

  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({
      ...nameInputRef?.current?.values,
      ...passwordInputRef?.current?.values,
      email,
    });
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="flex justify-between items-center">
        <NameInputGroup ref={nameInputRef} />
      </div>

      <TextInput
        id="email "
        label="Email"
        name="email"
        value={email}
        onChange={({ target: { value } }) => setEmail(value)}
      />

      <PasswordInputGroup ref={passwordInputRef} />

      <div>
        <Button type="submit">Continue</Button>
      </div>
    </form>
  );
};

export default SignUpForm;
