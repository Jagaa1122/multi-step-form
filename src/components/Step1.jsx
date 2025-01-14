import Input from "@/components/Input";
import Buttons from "@/components/Buttons";
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
    console.log(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: "" }));

    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleClick = () => {
    const { firstName, lastName, userName } = formValues;

    if (!firstName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        firstName: "First name cannot contain special characters or numbers.",
      }));
    }
    if (!lastName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        lastName: "Last name cannot contain special characters or numbers.",
      }));
    }
    if (!userName.trim()) {
      setFormErrors((prev) => ({
        ...prev,
        userName: "This username is already taken. Please choose another one.",
      }));
      onClick();
    }
  };
  return (
    <div className="flex bg-[#ffffff] w-[480px] h-[655px] p-[32px] flex-col">
      <img src="Main 1.png" width="60px" alt="" />
      <h1 className="text-[#202124] font-bold text-[26px]">Join Us! 😎</h1>
      <p className="text-[#8E8E8E] mb-5">
        Please provide all current information accurately.
      </p>
      <div className="flex flex-col items-start gap-7 w-[416px]">
        <Input
          label="First name"
          placeholder="Your first name"
          errortext={formErrors.firstName}
          onChange={handleChange}
          name="firstName"
        />
        <Input
          label="Last name"
          placeholder="Your last name"
          errortext={formErrors.lastName}
          onChange={handleChange}
          name="lastName"
        />
        <Input
          label="User name"
          placeholder="Your username"
          errortext={formErrors.userName}
          onChange={handleChange}
          name="userName"
        />
      </div>
      <div className="mt-auto text-center">
        <Buttons
          handleClick={handleClick}
          onClick={onClick}
          title="Continue 1/3"
        />
      </div>
    </div>
  );
}
