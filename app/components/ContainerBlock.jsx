import React from "react";
import Header from "./Header";
import BenefitsBlock from "./BenefitsBlock";
import FeaturesSection from "./FeaturesSection";
import TargetAudience from "./TargetAudience";
import Opportunities from "./Opportunities";

export default function ContainerBlock() {
  return (
    <div className="container-block">
      <Header />
      <BenefitsBlock />
      <FeaturesSection />
      <TargetAudience />
      <Opportunities />
    </div>
  );
}
