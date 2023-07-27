import React from "react";
import FormHeader from "../../../src/components/Forms/FormHeader/RegisterationHeader";
import AdditionalInfoForm from "../../../src/components/Forms/AdditionalInfoForm/AdditionalInfoForm";
// import "../../Components/Forms/AdditionalInfoForm/AdditionalInfoForm.css";
import { additionalInfo } from "../../assets/RequiredData/FormData";
// ../../Components/Forms/AdditionalInfoForm/AdditionalInfoForm

const index = () => {
  return (
    <>
      <main className="form-header-container form-background">
        <FormHeader {...additionalInfo} />
        <form className="additional-info-form-container form-top ">
          <AdditionalInfoForm {...additionalInfo} />
        </form>
      </main>
    </>
  );
};

export default index;
