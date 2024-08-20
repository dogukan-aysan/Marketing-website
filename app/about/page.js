import ContactSection from "@/app/_sections/Contact";
import Footer from "@/app/_sections/Footer";
import Hero from "@/app/_sections/Hero";
import Statistics from "@/app/_sections/Statistics";
import Team from "@/app/_sections/Team";

export default function AboutPage() {
  return (
    <main className="shadow-sm bg-white rounded md:shadow-md md:rounded-md min-[1440px]:shadow-lg w-full overflow-hidden mt-4">
      <Hero
        heading={"From a tiny desk to the entire world"}
        description={
          "As a lean, passionate team, we've made something that most would think is impossible - premium abstract images for free and for all."
        }
      />
      <Statistics />
      <Team />
      <ContactSection />
      <Footer />
    </main>
  );
}
