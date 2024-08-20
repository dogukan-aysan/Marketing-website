import ContactSection from "@/app/_sections/Contact";
import Faq from "@/app/_sections/Faq/Faq";
import FeaturesGrid from "@/app/_sections/FeaturesGrid";
import FeaturesSideImageLeft from "@/app/_sections/FeaturesSideImageLeft";
import FeaturesSideImageRight from "@/app/_sections/FeaturesSideImageRight";
import Footer from "@/app/_sections/Footer";
import HeroFeatureBullets from "@/app/_sections/HeroFeatureBullets";
import Testimonials from "@/app/_sections/Testimonials/Testimonials";
import testimonials from "../_lib/testimonialsData";

export default function FeaturesPage() {
  return (
    <main className="shadow-sm bg-white rounded md:shadow-md md:rounded-md min-[1440px]:shadow-lg w-full overflow-hidden mt-4">
      <HeroFeatureBullets />
      <FeaturesGrid />
      <FeaturesSideImageRight />
      <FeaturesSideImageLeft />
      <Testimonials testimonials={testimonials} />
      <Faq />
      <ContactSection />
      <Footer />
    </main>
  );
}
