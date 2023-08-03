// Import: Components
import { FormInput } from "../../components";

const SignUpForm = ({
  formData,
  handleInputChange,
  handleWarningOnFocus,
  handleWarningOnBlur,
  errors,
  warnings,
  signup,
  handleSubmit,
  emailError,
  isClicked,
  loginError,
}) => {
  const { name, email, password } = formData;

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto max-w-xs">
        {signup && (
          <FormInput
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onFocus={handleWarningOnFocus}
            onBlur={handleWarningOnBlur}
            onChange={handleInputChange}
            errorMessage={errors.name?.length > 0 ? errors.name[0] : null}
            warnings={warnings.name}
            isClicked={isClicked}
            loginError={loginError}
          />
        )}

        <FormInput
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onFocus={handleWarningOnFocus}
          onBlur={handleWarningOnBlur}
          onChange={handleInputChange}
          errorMessage={errors.email?.length > 0 ? errors.email[0] : null}
          warnings={warnings.email}
          isClicked={isClicked}
          emailError={emailError}
        />

        <FormInput
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onFocus={handleWarningOnFocus}
          onBlur={handleWarningOnBlur}
          onChange={handleInputChange}
          errorMessage={errors.password?.length > 0 ? errors.password[0] : null}
          warnings={warnings.password}
        />

        <button className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
          <svg
            className="w-6 h-6 -ml-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></svg>
          <span className="ml-3">{signup ? "Sign up" : "Login"}</span>
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
