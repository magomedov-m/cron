import React from "react";
import Header from "./Header";
import BenefitsBlock from "./BenefitsBlock";
import FeaturesSection from "./FeaturesSection";
import TargetAudience from "./TargetAudience";

export default function ContainerBlock() {
  return (
    <div className="container-block">
      <Header />
      <BenefitsBlock />
      <FeaturesSection />
      <TargetAudience />
    </div>
  );
}
