"use client";

import { useEffect, useState } from "react";
import { StepThree } from "./components/StepThree";
import { StepTwo } from "./components/StepTwo";
import { StepOne } from "./components/StepOne";
import { Header } from "./components/Header";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [formInput, setFormInput] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    bhday: "",
    profile: "",
  });

  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    bhday: "",
    profile: "",
  });

  const steps = [StepOne, StepTwo, StepThree];
  const Component = steps[currentStep];

  const nextStep = () => {
    window.localStorage.setItem(
      "multi-step-form",
      JSON.stringify({ formInput, currentStep: currentStep + 1 })
    );

    if (steps.length - 1 <= currentStep) {
      setCompleted(true);
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  useEffect(() => {
    const localStorage = JSON.parse(
      window.localStorage.getItem("multi-step-form")
    );
    if (!localStorage) return;
    setFormInput(localStorage.formInput);
    // setCurrentStep(localStorage.currentStep);
  }, []);

  const backStep = () => {
    setCurrentStep(currentStep - 1);
  };

  if (completed)
    return (
      <div className="flex h-[100vh] items-start justify-center ">
        <div className="w-[480px] h-auto bg-white rounded-lg mt-[250px] flex flex-col justify-between p-8">
          <img src="Logo.png" className="w-12 h-12 "></img>

          <h1 className="text-[26px] font-semibold text-[#202124] my-2">
            You're All Set 🔥
          </h1>
          <h2 className="text-[#8E8E8E] text-[18px] font-normal ">
            We have received your submission. Thank you!
          </h2>
        </div>
      </div>
    );

  const onChange = (event) => {
    setFormInput((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
    setFormError((prev) => ({ ...prev, [event.target.name]: "" }));
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-[480px] h-auto bg-white rounded-lg flex flex-col justify-between p-8">
        <Header />
        <Component
          onChange={onChange}
          setFormError={setFormError}
          formInput={formInput}
          currentStep={currentStep}
          backStep={backStep}
          nextStep={nextStep}
          stepsLen={steps.length}
          formError={formError}
          setFormInput={setFormInput}
        />
      </div>
    </div>
  );
}
