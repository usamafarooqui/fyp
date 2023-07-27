import React from "react";
import Header from "../../../src/components/Header/Header";
import BuyerHeaderData from "../../assets/RequiredData/BuyerHeaderData";
import Cards from "../../../src/components/Cards/Cards";
import BuyerFeatures from "../../../src/components/BuyerFeatures/BuyerFeatures";
import LatestEdition from "../../../src/components/LatestEdition/LatestEdition";
import Highlight from "../../../src/components/Highlight/Highlight";
import ShowKindness from "../../../src/components/ShowKindness/ShowKindness";
import cardData from "../../assets/RequiredData/BuyPageLatestEditionData";
import Analyze from "../../../src/components/Analyze/Analyze";
import JoinUsToday from "../../../src/components/JoinUsToday/JoinUsToday";
import CompareUs from "../../../src/components/CompareUs/CompareUs";
import PremiumServices from "../../../src/components/PremiumServices/PremiumServices";
import Testimonials from "../../../src/components/Testimonials/Testimonials";
import ScrollToTop from "../../../src/components/ScrollToTop/ScrollToTop";
const Buy = () => {
  const { heading, slogon, features, buttons, backgroundImage, isHomeOpen } =
    BuyerHeaderData;
  return (
    <>
      <ScrollToTop />
      <Header
        heading={heading}
        features={features}
        slogon={slogon}
        buttons={buttons}
        backgroundImage={backgroundImage}
        isHomeOpen={isHomeOpen}
      />
      <Cards />
      <BuyerFeatures />
      <div style={{ backgroundColor: "#f4f7ff" }}>
        <LatestEdition cardData={cardData} />

        <Highlight />
        <ShowKindness />
        <Analyze />
      </div>
      <JoinUsToday />
      <CompareUs />
      <Testimonials />
      <PremiumServices />
      <JoinUsToday />
    </>
  );
};

export default Buy;
