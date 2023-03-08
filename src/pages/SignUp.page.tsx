import SignUpForm from "../components/SignUpForm";

const SignUp = () => {
  return (
    <div className="flex w-full min-h-full items-center justify-center py-12 px-4 ">
      <div className="w-full max-w-md space-y-8">
        <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign-Up Page
        </h1>

        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUp;
