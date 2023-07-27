import React from "react";
import RecentlySoldSlider from "../../../src/components/RecentlySoldSlider/RecentlySoldSlider";
// ../../../src/components/RecentlySoldSlider/RecentlySoldSlider
import Buyers from "../../../src/components/Buyers/Buyers";
import Seller from "../../../src/components/Seller/Seller";
import LatestEdition from "../../../src/components/LatestEdition/LatestEdition";
import CurrentPosition from "../../../src/components/CurrentPosition/CurrentPosition";
import JoinThePremium from "../../../src/components/JoinThePremium/JoinThePremium";
import Testimonials from "../../../src/components/Testimonials/Testimonials";
import FreeResources from "../../../src/components/FreeResources/FreeResources";
import Header from "../../../src/components/Header/Header";
import HomeHeaderData from "../../assets/RequiredData/HomeHeaderData";
import cardData from "../../assets/RequiredData/LatestEditionCardData";
import ScrollToTop from "../../../src/components/ScrollToTop/ScrollToTop";

const Home = () => {
  const {
    features,
    note,
    heading,
    headerImage,
    buttons,
    backgroundImage,
    isHomeOpen,
  } = HomeHeaderData;

  return (
    <>
      <ScrollToTop />
      <Header
        heading={heading}
        note={note}
        features={features}
        headerImage={headerImage}
        buttons={buttons}
        backgroundImage={backgroundImage}
        isHomeOpen={isHomeOpen}
      />
      <RecentlySoldSlider />
      <Buyers />
      <Seller />
      <LatestEdition cardData={cardData} />
      <CurrentPosition />
      <JoinThePremium />
      <Testimonials />
      <FreeResources />
    </>
  );
};

export default Home;
