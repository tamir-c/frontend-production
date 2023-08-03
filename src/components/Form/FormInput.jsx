const FormInput = ({
  type,
  placeholder,
  name,
  value,
  onFocus,
  onBlur,
  onChange,
  errorMessage,
  warnings,
  isClicked,
  emailError,
  loginError,
}) => {
  return (
    <>
      <input
        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />
      {isClicked && (
        <small className="text-sm text-red-500">{loginError}</small>
      )}
      {isClicked && (
        <small className="text-sm text-red-500">{emailError}</small>
      )}

      {warnings && errorMessage && (
        <small className="text-sm text-red-500">{errorMessage}</small>
      )}
    </>
  );
};

export default FormInput;
