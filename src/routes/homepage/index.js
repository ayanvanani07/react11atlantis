import react from "react";
import HeroSection from "./heroSection";
import AtlantisReports from "./atlantisResorts";
import LargestWaterpark from "./largestWaterpark";
import ExquisiteDiningOptions from "./exquisiteDiningOptions";
import Entertainment from "./entertainment";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <AtlantisReports />
      <LargestWaterpark />
      <ExquisiteDiningOptions />
      <Entertainment />
    </div>
  );
}
