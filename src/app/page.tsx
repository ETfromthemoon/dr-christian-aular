import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { Problem } from "@/components/sections/Problem";
import { Method } from "@/components/sections/Method";
import { Benefits } from "@/components/sections/Benefits";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Footer } from "@/components/sections/Footer";
import { KineticWord } from "@/components/scroll-fx";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <Problem />
        <Method />
        <Benefits />
        <div className="bg-[#f2f2f4] py-6">
          <KineticWord text="RESPIRA · SIENTE · VIVE · RESPIRA · SIENTE · VIVE ·" />
        </div>
        <About />
        <Testimonials />
        <Pricing />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
