import Input from "@/components/Input";
import Buttons from "@/components/Buttons";
import { useState } from "react";
export default function Home({ currentStep, onClick, goBack }) {
  const [formValues, setFormValues] = useState({
    dateOfBirth: "",
    profileImage: "",
  });

  const [formErrors, setFormErrors] = useState({
    dateOfBirth: "",
    profileImage: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...formErrors };

    if (!formValues.dateOfBirth.trim()) {
      newErrors.dateOfBirth = "Please select a date.";
      isValid = false;
    } else {
    const currentDate = new Date();
    const birthDate = new Date(formValues.dateOfBirth);
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDifference = currentDate.getMonth() - birthDate.getMonth();
    const dayDifference = currentDate.getDate() - birthDate.getDate();

    if (
      age < 18 || 
      (age === 18 && (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)))
    ) {
      newErrors.dateOfBirth = "You must be at least 18 years old.";
      isValid = false;
    }
  }

    if (!formValues.profileImage.trim()) {
      newErrors.profileImage = "Image cannot be blank";
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
      <div className="flex flex-col items-start gap-2 w-[416px]">
        <Input
          label="Date of birth"
          errortext={formErrors.dateOfBirth}
          onChange={handleChange}
          name="dateOfBirth"
          type="date"
        />
        <Input 
          label="Profile image"
            errortext={formErrors.profileImage}
          onChange={handleChange}
          name="profileImage"
          type="file"
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
