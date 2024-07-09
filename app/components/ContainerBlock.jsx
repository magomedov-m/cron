import React from "react";
import Header from "./Header";
import BenefitsBlock from "./BenefitsBlock";
import FeaturesSection from "./FeaturesSection";

export default function ContainerBlock() {
  return (
    <div className="container-block">
      <Header />
      <BenefitsBlock />
      <FeaturesSection />
    </div>
  );
}
