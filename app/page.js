import ContactSection from "@/app/_sections/Contact";
import Faq from "@/app/_sections/Faq/Faq";
import FeaturesGrid from "@/app/_sections/FeaturesGrid";
import FeaturesSideImageLeft from "@/app/_sections/FeaturesSideImageLeft";
import FeaturesSideImageRight from "@/app/_sections/FeaturesSideImageRight";
import Footer from "@/app/_sections/Footer";
import Hero from "@/app/_sections/Hero";
import LogoMarquee from "@/app/_sections/LogoMarquee";
import Newsletter from "@/app/_sections/Newsletter";
import PricingSection from "@/app/_sections/Pricing";

export default function Home() {
  return (
    <main className="shadow-sm bg-white rounded md:shadow-md md:rounded-md min-[1440px]:shadow-lg w-full overflow-hidden mt-4">
      <Hero
        heading={"Well crafted abstract images"}
        description={"High quality abstract images for your projects, wallpaper and presentations."}
      />
      <LogoMarquee />
      <FeaturesGrid />
      <FeaturesSideImageRight />
      <FeaturesSideImageLeft />
      <PricingSection />
      <Faq />
      <Newsletter />
      <ContactSection />
      <Footer />
    </main>
  );
}
