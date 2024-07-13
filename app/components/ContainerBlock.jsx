import React from "react";
import Header from "./Header";
import BenefitsBlock from "./BenefitsBlock";
import FeaturesSection from "./FeaturesSection";
import TargetAudience from "./TargetAudience";
import Opportunities from "./Opportunities";
import Dropdown from "./Dropdown";
import Circle from "./Circle1";
import FAQBlock from "./FAQBlock";
import Nav from "./Nav";

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
