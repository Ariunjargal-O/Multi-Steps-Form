export const StepOne = ({
  onChange,
  setFormError,
  formInput,
  currentStep,
  backStep,
  nextStep,
  stepsLen,
  formError,
}) => {
  const handleNext = (event) => {
    let hasError = false;

    if (!formInput.firstName) {
      hasError = true;
      setFormError((prev) => ({
        ...prev,
        firstName: " Энэ талбар хоосон байна.",
      }));
    } else {
      setFormError((prev) => ({
        ...prev,
        firstName: "",
      }));
    }

    if (!formInput.lastName) {
      hasError = true;
      setFormError((prev) => ({
        ...prev,
        lastName: " Энэ талбар хоосон байна.",
      }));
    }

    if (!formInput.userName) {
      hasError = true;
      setFormError((prev) => ({
        ...prev,
        userName: " Энэ талбар хоосон байна.",
      }));
    }

    if (!hasError) {
      nextStep();
    }
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex-1">
        <div>
          <p className="text-[#334155] text-[14px] font-semibold mt-3">
            First Name<span className="text-red-400">*</span>{" "}
          </p>
          <input
            onChange={onChange}
            name="firstName"
            placeholder="Firstname"
            type="text"
            className="w-[416px] h-auto px-3 py-[10px] bg-white text-black rounded-[6px] text-[16px] font-medium border border-[#CBD5E1] mt-2 "
            value={formInput.firstName}
          ></input>
          {formError.firstName && (
            <p className="text-red-600 mb-2 ">{formError.firstName}</p>
          )}
        </div>
        <div>
          <p className="text-[#334155] text-[14px] font-semibold mt-3">
            Last name<span className="text-red-400">*</span>
          </p>
          <input
            value={formInput.lastName}
            onChange={onChange}
            name="lastName"
            placeholder="Lastname"
            type="text"
            className="w-[416px] h-auto px-3 py-[10px] bg-white text-black rounded-[6px] text-[16px] font-medium border border-[#CBD5E1] mt-2 "
          ></input>
          {formError.lastName && (
            <p className="text-red-600 mb-2 ">{formError.lastName}</p>
          )}
        </div>
        <div>
          <p className="text-[#334155] text-[14px] font-semibold mt-3 ">
            Username<span className="text-red-400">*</span>
          </p>
          <input
            value={formInput.userName}
            onChange={onChange}
            name="userName"
            placeholder="username"
            type="text"
            className="w-[416px] h-auto px-3 py-[10px] bg-white text-black rounded-[6px] text-[16px] font-medium border border-[#CBD5E1] mt-2 "
          ></input>
          {formError.userName && (
            <p className="text-red-600 mb-2 ">{formError.userName}</p>
          )}
        </div>
      </div>

      <div>
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
        <div className="flex gap-2"></div>
      </div>
    </div>
  );
};
