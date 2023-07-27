import React from "react";
import PremiumHeaderData from "../../assets/RequiredData/PremiumHeaderData";
import Header from "../../../src/components/Header/Header";
import FeaturedIn from "../../../src/components/FeaturedIn/FeaturedIn";
import OurMemberShip from "../../../src/components/OurMemberShip/OurMemberShip";
import RequireBusiness from "../../../src/components/RequireBuisness/RequireBusiness";
import PremiumTestimonials from "../../../src/components/PremiumTestimonials/PremiumTestimonials";
import FAQs from "../../../src/components/FAQs/FAQs";
import ScrollToTop from "../../../src/components/ScrollToTop/ScrollToTop";
const Premium = () => {
  const { slogon, heading, buttons, isHomeOpen, features, headerImage } =
    PremiumHeaderData;
  return (
    <div>
      <ScrollToTop />
      <Header
        slogon={slogon}
        buttons={buttons}
        isHomeOpen={isHomeOpen}
        features={features}
        heading={heading}
        headerImage={headerImage}
      />

      {/* <h1 style={{ textAlign: "center",  color: '#4a1172'}} > PREMIUM </h1> */}
      <FeaturedIn />
      <RequireBusiness />
      <OurMemberShip />
      <PremiumTestimonials />
      <FAQs />
    </div>
  );
};

export default Premium;
