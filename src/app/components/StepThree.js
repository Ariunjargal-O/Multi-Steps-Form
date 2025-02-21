import { useRef, useState } from "react";

export const StepThree = ({
  onChange,
  setFormError,
  formInput,
  currentStep,
  backStep,
  nextStep,
  stepsLen,
  formError,
  setFormInput,
}) => {
  const handleNext = (event) => {
    let hasError = false;

    if (!formInput.bhday) {
      hasError = true;
      setFormError((prev) => ({
        ...prev,
        bhday: " Энэ талбар хоосон байна.",
      }));
    } else {
      const bhday = new Date(formInput.bhday);
      const currentDate = new Date();
      currentDate.setFullYear(currentDate.getFullYear() - 18);

      if (currentDate < bhday) {
        hasError = true;
        setFormError((prev) => ({
          ...prev,
          bhday: "18 Насанд  хүрсэн байх ёстой.",
        }));
      }
    }

    if (!formInput.profile) {
      hasError = true;

      setFormError((prev) => ({
        ...prev,
        profile: " Энэ талбар хоосон байна.",
      }));
    }

    console.log({ hasError, formError, formInput });

    if (!hasError) {
      console.log(1);
      nextStep();
    }
  };

  const imageRef = useRef();

  const imageHandler = (event) => {
    setFormInput((prev) => ({
      ...prev,
      profile: window.URL.createObjectURL(event.target.files[0]),
    }));
  };

  const uploadImage = () => {
    imageRef.current.click();
  };
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div>
          <p className="text-[#334155] text-[14px] font-semibold mt-3">
            Date of birth<span className="text-red-400">*</span>
          </p>
          <input
            error={formError["Date"]}
            onChange={onChange}
            name="bhday"
            type="date"
            className="w-[416px] h-auto px-3 py-[10px] bg-white text-black rounded-[6px] text-[16px] font-medium border border-[#CBD5E1] mt-2 "
            placeholder="--/--/--"
            value={formInput.bhday}
          ></input>
          {formError.bhday && (
            <p className="text-red-600 mb-2 ">{formError.bhday}</p>
          )}
        </div>
        <div className="mb-[90px]">
          <p className="text-[#334155] text-[14px] font-semibold mt-3">
            Profile image<span className="text-red-400">*</span>
          </p>
          <div className="relative bg-[#f2f4f6] p-4 w-[416px] h-[180px] rounded-[6px] text-center flex flex-col justify-center items-center overflow-hidden cursor-pointer">
            <div className="bg-white w-9 h-9 mb-2 rounded-full flex justify-center items-center">
              <img src="imageicon.png" className="w-5 h-5 "></img>
            </div>
            <p className="text-black font-medium leading-5">Add Image</p>
            <input
              onChange={imageHandler}
              name="profile"
              className="absolute inset-0 opacity-0"
              type="file"
              ref={imageRef}
            />
            {formError.profile && (
              <p className="text-red-600 mb-2 ">{formError.profile}</p>
            )}

            {formInput.profile ? (
              <img
                className="bg-cover absolute inset-0"
                src={formInput.profile}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>

      <div>
        <div className="flex gap-2">
          <button
            className="flex border border-[#CBD5E1] w-[128px] h-11 py-[10px] px-3 rounded-[6px] gap-2 bg-white items-center justify-center mt-3"
            onClick={backStep}
          >
            <img className="w-6 h-6 " src="chevron_left.png" />
            <div className=" text-black text-center text-[16px] font-medium ">
              Back
            </div>
          </button>

          <button
            className="py-[10px] px-3 bg-black h-auto rounded-[6px] w-full flex justify-center gap-2 mt-3"
            onClick={handleNext}
          >
            <div className=" text-white h-auto rounded-[6px] text-center text-[16px] font-medium ">
              Continue{" "}
              <span>
                {currentStep + 1} / {stepsLen}
              </span>
            </div>
            <img className="w-6 h-6 " src="chevron_right.png" />
          </button>
        </div>
      </div>
    </div>
  );
};
