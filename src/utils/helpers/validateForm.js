/* 

`Password must contain ${value}`
I know if Object.values().length > 0 && ${value} */
const validateForm = (values) => {
  const { name, email, password } = values;
  // Create an errors obejct to store the errors. If there are any error occurs this object will look like this:
  /*
    {
        name: ["Name is required"],
        email: ["Invalid email format."],
        password: [
            "Your password must be at least 8 characters.",
            "Your password must contain at least one lowercase letter.",
            "Your password must contain at least one uppercase letter.",
            "Your password must contain at least one digit.",
            "Your password must contain at least one special character.",
        ],
    }

    My thinking is in the component we can just loop over it and show the error under the input.
    */

  let errors = {};

  // If there is no name, I decided to create an array even though it is only holding one value. The reason is that I want to keep the same structure for all the errors.
  if (!name) {
    errors.name = ["Name is required"];
  } else {
    errors.name = [];
  }

  // If there is email errors, create an array.
  const emailErrors = isEmail(email);
  if (emailErrors.length > 0) {
    errors.email = emailErrors;
  }

  // If there is password errors, create an array.
  const passwordErrors = isPassword(password);
  if (passwordErrors.length > 0) {
    errors.password = passwordErrors;
  }

  return errors;
};

const isEmail = (emailAdress) => {
  let errors = [];

  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailAdress.match(regex)) {
    errors.push("Invalid email format.");
  }

  return errors;
};

const isPassword = (value) => {
  let errors = [];

  if (value.length < 8) {
    errors.push("Your password must be at least 8 characters.");
  }
  if (!/[a-z]/.test(value)) {
    errors.push("Your password must contain at least one lowercase letter.");
  }
  if (!/[A-Z]/.test(value)) {
    errors.push("Your password must contain at least one uppercase letter.");
  }
  if (!/\d/.test(value)) {
    errors.push("Your password must contain at least one digit.");
  }
  if (!/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/.test(value)) {
    errors.push("Your password must contain at least one special character.");
  }

  return errors;
};

export default validateForm;
