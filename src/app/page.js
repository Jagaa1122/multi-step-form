"use client";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";
import Step4 from "@/components/Step4";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);

  const FormSteps = [Step1, Step2, Step3, Step4][currentStep];
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center pt-[182px] px-[480px] pb-[187px] ">
      <AnimatePresence initial={false}>
        <FormSteps
          currentStep={currentStep}
          onClick={() => {
            setCurrentStep(currentStep + 1);
          }}
          goBack={() => {
            setCurrentStep(currentStep - 1);
          }}
        />
      </AnimatePresence>
    </div>
  );
}
