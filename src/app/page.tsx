import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CoreThesis } from "@/components/CoreThesis";
import { OurApproach } from "@/components/OurApproach";
import { WhyMakz } from "@/components/WhyMakz";
import { TheGap } from "@/components/TheGap";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-surface min-h-screen">
      <Navigation />
      <Hero />
      <CoreThesis />
      <OurApproach />
      <WhyMakz />
      <TheGap />
      <Contact />
      <Footer />
    </main>
  );
}
