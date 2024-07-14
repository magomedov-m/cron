import React from "react";
import Header from "./Header/Header";
import BenefitsBlock from "./BenefitsBlock/BenefitsBlock";
import FeaturesSection from "./FeatureSection/FeaturesSection";
import TargetAudience from "./TargetAudience/TargetAudience";
import Opportunities from "./Opportunities/Opportunities";
import FAQBlock from "./FAQBlock/FAQBlock";
import Nav from "./Nav/Nav";

export default function ContainerBlock() {
  return (
    <>
      <Nav />
      <main className="container-block">
        <header>
          <Header />
        </header>
        <section>
          <BenefitsBlock />
        </section>
        <section>
          <FeaturesSection />
        </section>
        <section>
          <TargetAudience />
        </section>
        <section>
          <Opportunities />
        </section>
        <section>
          <FAQBlock />
        </section>
      </main>
    </>
  );
}
