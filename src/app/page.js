"use client";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const FormSteps = [Step1, Step2][currentStep];
  return (
    <div className="flex justify-center items-center pt-[182px]">
      <FormSteps
        currentStep={currentStep}
        onClick={() => {
          setCurrentStep(currentStep + 1);
        }}
        goBack={() => {
          setCurrentStep(currentStep - 1);
        }}
      />
    </div>
  );
}
