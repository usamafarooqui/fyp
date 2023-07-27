import React from "react";
import Header from "../../../src/components/Header/Header";
import RecentlySoldSlider from "../../../src/components/RecentlySoldSlider/RecentlySoldSlider";
import SellerHeaderData from "../../assets/RequiredData/SellerHeaderData";
import SellerFeatures from "../../../src/components/SellerFeatures/SellerFeatures";
import HowItWorks from "../../../src/components/HowItWorks/HowItWorks";
import CompareUs from "../../components/CompareUs/CompareUs";
import Testimonials from "../../../src/components/Testimonials/Testimonials";
import IsSiteFit from "../../../src/components/IsSiteFit/IsSiteFit";
import SellingProcess from "../../../src/components/SellingProcess/SellingProcess";
import HowItFeels from "../../../src/components/HowItFeels/HowItFeels";
import TheBestPart from "../../../src/components/TheBestPart/TheBestPart";
import ScrollToTop from "../../../src/components/ScrollToTop/ScrollToTop";
const Sell = () => {
  const { heading, slogon, features, buttons, backgroundImage, isHomeOpen } =
    SellerHeaderData;
  return (
    <div>
      <ScrollToTop />
      <Header
        heading={heading}
        features={features}
        slogon={slogon}
        buttons={buttons}
        backgroundImage={backgroundImage}
        isHomeOpen={isHomeOpen}
      />
      <RecentlySoldSlider />
      <SellerFeatures />

      <HowItWorks />
      <Testimonials />
      <IsSiteFit />
      <CompareUs />
      <SellingProcess />
      <HowItFeels />
      <TheBestPart />
      {/* <h1 style={{ textAlign: "center", color: "#4a1172" }}> SELL </h1> */}
    </div>
  );
};

export default Sell;
