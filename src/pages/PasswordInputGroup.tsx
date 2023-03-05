import { forwardRef, Ref, useImperativeHandle, useState } from "react";

export type PasswordInputValues = {
  password: "";
  confirmPassword: "";
};

const PasswordInputGroup = forwardRef(function LoginForm(
  _,
  forwardedRef: Ref<{ values: PasswordInputValues }>
) {
  const [values, setValues] = useState<PasswordInputValues>({
    password: "",
    confirmPassword: "",
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: value });
  };

  useImperativeHandle(forwardedRef, () => ({
    values,
  }));

  return (
    <>
      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Password
          <input
            type="text"
            name="password"
            value={values.password}
            onChange={handleChange}
            autoComplete="off"
            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500 "
          />
        </label>
      </div>

      <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Confirm Password
          <input
            type="text"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            autoComplete="off"
            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500"
          />
        </label>
      </div>
    </>
  );
});

export default PasswordInputGroup;
