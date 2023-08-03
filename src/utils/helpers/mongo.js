import axios from "axios";
export const handleSignup = async (e) => {
  e.preventDefault();
  console.log("handleSignup");
  try {
    const { data } = await axios.post(
      "http://localhost:8080/users/registration",
      {
        display_name: formData.name,
        password: formData.password,
        email: formData.email,
      }
    );
  } catch (error) {
    console.error(error);
  }
};
