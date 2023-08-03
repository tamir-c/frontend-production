import { useState } from "react";

const useForm = (initialData) => {
  const [formData, setFormData] = useState(initialData);
  const [warnings, setWarnings] = useState({});

  const handleWarningOnFocus = (event) => {
    setWarnings((prevWarnings) => ({
      ...prevWarnings,
      [event.target.name]: true,
    }));
  };

  const handleWarningOnBlur = (event) => {
    setWarnings((prevWarnings) => ({
      ...prevWarnings,
      [event.target.name]: false,
    }));
  };

  const handleInputChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    formData,
    handleInputChange,
    handleWarningOnFocus,
    handleWarningOnBlur,
    warnings,
  };
};

export default useForm;
