import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HomePageComponents/HeroSection";
import AboutUs from "../components/HomePageComponents/AboutUs";
import RecipeContainerComponent from "../components/HomePageComponents/RecipeContainer";
import Footer from "../components/Footer";
import FooterMobile from "../components/FooterMobile";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <RecipeContainerComponent />
      <AboutUs />
      <Footer />
      <FooterMobile />
    </>
  );
};
export default HomePage;
