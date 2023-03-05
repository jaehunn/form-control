import { forwardRef, Ref, useImperativeHandle, useState } from "react";

export type UserInputValues = {
  username: "";
};

const UserInputGroup = forwardRef(function LoginForm(
  _,
  forwardedRef: Ref<{ values: UserInputValues }>
) {
  const [values, setValues] = useState<UserInputValues>({
    username: "",
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
          Username or email address
          <input
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            autoComplete="off"
            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-500"
          />
        </label>
      </div>
    </>
  );
});

export default UserInputGroup;
