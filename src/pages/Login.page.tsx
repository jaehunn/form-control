import { useState } from "react";

const Login = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(formValues);
  };

  return (
    <div className="flex w-full min-h-full items-center justify-center py-12 px-4 ">
      <div className="w-full max-w-md space-y-8">
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Login Page
        </h1>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username or email address
            </label>

            <input
              id="username"
              type="text"
              name="username"
              value={formValues.username}
              onChange={handleChange}
              autoComplete="off"
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <input
              id="password"
              type="text"
              name="password"
              value={formValues.password}
              onChange={handleChange}
              autoComplete="off"
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 "
            />
          </div>

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
