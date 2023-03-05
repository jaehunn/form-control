import { useRef } from "react";

import UserInputGroup, { UserInputValues } from "./UserInputGroup";
import PasswordInputGroup, { PasswordInputValues } from "./PasswordInputGroup";

const Login = () => {
  const userInputGroupRef = useRef<{ values: UserInputValues } | null>(null);
  const passwordInputGroupRef = useRef<{ values: PasswordInputValues } | null>(
    null
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(userInputGroupRef?.current?.values);
    console.log(passwordInputGroupRef?.current?.values);
  };

  return (
    <div className="flex w-full min-h-full items-center justify-center py-12 px-4 ">
      <div className="w-full max-w-md space-y-8">
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Login Page
        </h1>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <UserInputGroup ref={userInputGroupRef} />
          <PasswordInputGroup ref={passwordInputGroupRef} />

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-blue-500 py-2 px-3 text-sm font-semibold text-white hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
