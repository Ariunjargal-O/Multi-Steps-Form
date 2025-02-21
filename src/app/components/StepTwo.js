export const StepTwo = ({
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

    let mailshalgah = /^[^\s@]+@[^\s@]+\.[^\s@+$]/;
    if (!formInput.email) {
      hasError = true;
      setFormError((prev) => ({
        ...prev,
        email: " Энэ талбар хоосон байна.",
      }));
    } else {
      if (!mailshalgah.test(formInput.email)) {
        hasError = true;
        setFormError((prev) => ({
          ...prev,
          email: "Майл хаяг буруу байна.",
        }));
      }
    }

    let phoneNumbershalgah = /^\+?\d{8}$/;
    if (!formInput.phoneNumber) {
      hasError = true;

      setFormError((prev) => ({
        ...prev,
        phoneNumber: " Энэ талбар хоосон байна.",
      }));
    } else {
      if (!phoneNumbershalgah.test(formInput.phoneNumber)) {
        hasError = true;
        setFormError((prev) => ({
          ...prev,
          phoneNumber: " Утасны дугаар буруу байна.",
        }));
      } else {
        setFormError((prev) => ({
          ...prev,
          phoneNumber: "",
        }));
      }
    }

    if (!formInput.password) {
      hasError = true;

      setFormError((prev) => ({
        ...prev,
        password: " Энэ талбар хоосон байна.",
      }));
    }

    if (!formInput.confirmPassword) {
      hasError = true;

      setFormError((prev) => ({
        ...prev,
        confirmPassword: " Энэ талбар хоосон байна.",
      }));
    }

    if (
      formInput.confirmPassword !== formInput.password &&
      formInput.confirmPassword
    ) {
      hasError = true;
      setFormError((prev) => ({
        ...prev,
        confirmPassword: "Нууц үг таарахгүй байна.",
      }));
    }

    if (!hasError) {
      nextStep();
    }
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div>
          <p className="text-[#334155] text-[14px] font-semibold mt-3">
            Email<span className="text-red-400">*</span>
          </p>
          <input
            value={formInput.email}
            onChange={onChange}
            name="email"
            placeholder="email@gmail.com"
            type="email"
            className="w-[416px] h-auto px-3 py-[10px] bg-white text-black rounded-[6px] text-[16px] font-medium border border-[#CBD5E1] mt-2 "
          ></input>
          {formError.email && (
            <p className="text-red-600 mb-2 ">{formError.email}</p>
          )}
        </div>
        <div>
          <p className="text-[#334155] text-[14px] font-semibold mt-3">
            Phone Number<span className="text-red-400">*</span>
          </p>
          <input
            value={formInput.phoneNumber}
            onChange={onChange}
            name="phoneNumber"
            placeholder="00000000"
            type="number"
            className="w-[416px] h-auto px-3 py-[10px] bg-white text-black rounded-[6px] text-[16px] font-medium border border-[#CBD5E1] mt-2 "
          ></input>
          {formError.phoneNumber && (
            <p className="text-red-600 mb-2 ">{formError.phoneNumber}</p>
          )}
        </div>
        <div>
          <p className="text-[#334155] text-[14px] font-semibold mt-3">
            Password<span className="text-red-400">*</span>
          </p>
          <input
            value={formInput.password}
            onChange={onChange}
            name="password"
            placeholder="Password"
            type="password"
            className="w-[416px] h-auto px-3 py-[10px] bg-white text-black rounded-[6px] text-[16px] font-medium border border-[#CBD5E1] mt-2 "
          ></input>
          {formError.password && (
            <p className="text-red-600 mb-2 mt-3">{formError.password}</p>
          )}
        </div>
        <div>
          <p className="text-[#334155] text-[14px] font-semibold">
            Confirm Password<span className="text-red-400">*</span>
          </p>
          <input
            value={formInput.confirmPassword}
            onChange={onChange}
            name="confirmPassword"
            placeholder="Password"
            type="password"
            className="w-[416px] h-auto px-3 py-[10px] bg-white text-black rounded-[6px] text-[16px] font-medium border border-[#CBD5E1] mt-2 "
          ></input>
          {formError.confirmPassword && (
            <p className="text-red-600 mb-2 ">{formError.confirmPassword}</p>
          )}
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
