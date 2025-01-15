import Input from "@/components/Input";
import Buttons from "@/components/Buttons";
import { useState } from "react";

export default function Home({ currentStep, onClick, goBack }) {
  const [formValues, setFormValues] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    if (!formValues.email.trim()) {
      newErrors.email = "Email address is required";
      isValid = false;
    } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())) {
      newErrors.email = "Enter valid email";
      isValid = false;
    }

    if (!formValues.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
      isValid = false;
    }

    if (!formValues.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (!formValues.confirmPassword.trim()) {
      newErrors.confirmPassword = "Confirm your password";
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
    <div className="flex bg-[#ffffff] w-[480px] min-h-[655px] p-[32px] flex-col">
      <img src="Main 1.png" width="60px" alt="" />
      <h1 className="text-[#202124] font-bold text-[26px]">Join Us! 😎</h1>
      <p className="text-[#8E8E8E] mb-5">
        Please provide all current information accurately.
      </p>
      <div className="flex flex-col items-start gap-1 w-[416px]">
        <Input
          label="Email"
          placeholder="Your email address"
          errortext={formErrors.email}
          onChange={handleChange}
          name="email"
          type="email"
          value={formValues.email}
        />
        <Input
          label="Phone number"
          placeholder="Your phone number"
          errortext={formErrors.phoneNumber}
          onChange={handleChange}
          name="phoneNumber"
          type="number"
          value={formValues.phoneNumber}
        />
        <Input
          label="Password"
          placeholder="Your password"
          errortext={formErrors.password}
          onChange={handleChange}
          name="password"
          type="password"
          value={formValues.password}
        />
        <Input
          label="Confirm Password"
          placeholder="Confirm your password"
          errortext={formErrors.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
          type="password"
          value={formValues.confirmPassword}
        />
      </div>
      <div className="flex mt-auto text-center pt-8 gap-2 ">
        <button
          onClick={goBack}
          className="text-[#202124] bg-white p-[8px] rounded-[5px] justify-center border-[#202124] border flex"
        >
          <img src="chevron_left.svg" alt="" />
          Back
        </button>
        <Buttons
          handleClick={handleClick}
          onClick={onClick}
          currentStep={currentStep + 1}
        />
      </div>
    </div>
  );
}
