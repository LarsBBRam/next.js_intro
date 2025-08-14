import { Box, MappedBoxes } from "@/components/UI/base/Box";
import { boxData } from "@/data/boxData";
import BoxSection from "./index/components/sections/BoxSection";
import { ScreenSection } from "@/components/UI/base/Sections";

export default function HomePage() {
  return (
    <>
      <section className="h-screen flex justify-center items-center bg-amber-700">
        <h1 className="text-7xl">Main Page</h1>
      </section>
      <ScreenSection className= "bg-orange-800">
        <h1 className="text-7xl">main page section 2</h1>
      </ScreenSection>
     <BoxSection/>
    </>
  );
}
