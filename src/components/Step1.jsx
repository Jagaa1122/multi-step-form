import Input from "@/components/Input";
import Buttons from "@/components/Buttons";
import * as motion from "motion/react-client";

import { useState } from "react";

export default function Home({ currentStep, onClick }) {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    if (!formValues.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!formValues.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    if (!formValues.userName.trim()) {
      newErrors.userName = "Username is required";
      isValid = false;
    }

    setFormErrors(newErrors);
    return isValid;
  };

  const handleClick = () => {
    const isValid = validateForm();

    if (isValid) {
      onClick();
    }
  };

  return (
    <motion.div
      className="flex bg-[#ffffff] w-[480px] min-h-[655px] p-[32px] flex-col"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.72 }}
    >
      <img src="Main 1.png" width="60px" alt="" />
      <h1 className="text-[#202124] font-bold text-[26px]">Join Us! 😎</h1>
      <p className="text-[#8E8E8E] mb-5">
        Please provide all current information accurately.
      </p>
      <div className="flex flex-col items-start gap-2 w-[416px]">
        <Input
          label="First name"
          placeholder="Your first name"
          errortext={formErrors.firstName}
          onChange={handleChange}
          name="firstName"
          value={formValues.firstName}
        />
        <Input
          label="Last name"
          placeholder="Your last name"
          errortext={formErrors.lastName}
          onChange={handleChange}
          name="lastName"
          value={formValues.lastName}
        />
        <Input
          label="User name"
          placeholder="Your username"
          errortext={formErrors.userName}
          onChange={handleChange}
          name="userName"
          value={formValues.userName}
        />
      </div>
      <div className="mt-auto text-center pt-8 flex">
        <Buttons
          currentStep={currentStep + 1}
          handleClick={handleClick}
          onClick={onClick}
          title="Continue 1/3"
        />
      </div>
    </motion.div>
  );
}
