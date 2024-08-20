import ContactSection from "@/app/_sections/Contact";
import Faq from "@/app/_sections/Faq/Faq";
import Footer from "@/app/_sections/Footer";

export default function ContactPage() {
  return (
    <main className="shadow-sm bg-white rounded md:shadow-md md:rounded-md min-[1440px]:shadow-lg w-full overflow-hidden mt-4">
      <ContactSection />
      <Faq />
      <Footer />
    </main>
  );
}
