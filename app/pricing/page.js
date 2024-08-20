import ContactSection from "@/app/_sections/Contact";
import Faq from "@/app/_sections/Faq/Faq";
import FeaturesGrid from "@/app/_sections/FeaturesGrid";
import Footer from "@/app/_sections/Footer";
import PricingSection from "@/app/_sections/Pricing";
import Testimonials from "@/app/_sections/Testimonials/Testimonials";
import testimonials from "../_lib/testimonialsData";

function PricingPage() {
  return (
    <main className="shadow-sm bg-white rounded md:shadow-md md:rounded-md min-[1440px]:shadow-lg w-full overflow-hidden mt-4">
      <PricingSection />
      <Faq />
      <FeaturesGrid />
      <Testimonials testimonials={testimonials} />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default PricingPage;
