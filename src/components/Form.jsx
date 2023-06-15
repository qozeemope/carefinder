import React, { useState } from "react";
import Input from "./Input.jsx";
import { FormProvider, useForm } from "react-hook-form";
import {
  name_validation,
  email_validation,
  address_validation,
} from "../utils/inputValidations.js";
import SuccessPage from "./SuccessPage.jsx";

import { GrMail } from "react-icons/gr";
import { BsFillCheckSquareFill } from "react-icons/bs";

function Form() {
  const [success, setSuccess] = useState(false);
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
  });

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={(e) => e.preventDefault()}
          noValidate
          autoComplete="off"
          action=""
          className="w-full flex items-center flex-col gap-[3.43vh]"
        >
          <Input {...address_validation} />
          <Input {...name_validation} />
          <Input {...email_validation} />

          <button
            type="submit"
            className="bg-[#08299B] w-full h-[7.46vh] rounded-xl hover:bg-opacity-90 text-white "
            onClick={onSubmit}
          >
            Book Appointment Now
          </button>

          {success && (
            <p className="flex items-center gap-1 mb-5 font-semibold text-green-500">
              <BsFillCheckSquareFill /> Appointment has been scheduled!
            </p>
          )}
        </form>
      </FormProvider>
      {/* <div className="absolute z-20 top-0 left-0 bg-red-500 w-screen h-full "></div>
      {success && <SuccessPage />} */}
    </>
  );
}

export default Form;
