import React from "react";
import FormHeader from "../../../src/components/Forms/FormHeader/RegisterationHeader";
import RegisterForm from "../../../src/components/Forms/RegisterForm/RegisterForm";

import { register } from "../../assets/RequiredData/FormData";

const index = () => {
  return (
    <>
      <FormHeader {...register} />
      <main className="form-header-container">
        <RegisterForm />
      </main>
    </>
  );
};

export default index;
