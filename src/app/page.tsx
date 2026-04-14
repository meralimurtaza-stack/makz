import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { CoreThesis } from "@/components/CoreThesis";
import { OurApproach } from "@/components/OurApproach";
import { HowWeWork } from "@/components/HowWeWork";
import { WhyMakz } from "@/components/WhyMakz";
import { ExampleTask } from "@/components/ExampleTask";
import { TheGap } from "@/components/TheGap";
import { Founder } from "@/components/Founder";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-surface min-h-screen">
      <Navigation />
      <Hero />
      <CoreThesis />
      <OurApproach />
      <HowWeWork />
      <WhyMakz />
      <ExampleTask />
      <TheGap />
      <Founder />
      <Contact />
      <Footer />
    </main>
  );
}
