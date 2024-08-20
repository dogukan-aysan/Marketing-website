"use client";

import { Masonry } from "react-plock";
import TestimonialCard from "./TestimonialCard";

function Testimonials({ testimonials }) {
  return (
    <section className="max-w-[1280px] mx-auto px-3 py-12 md:px-4 md:py-16 min-[1440px]:px-8 min-[1440px]:py-24 flex flex-col gap-12 md:gap-16">
      <header className="text-center px-8 min-[1440px]:px-20">
        <h3 className="text-xl font-semibold text-indigo-700">Testimonials</h3>
        <h2 className="text-3xl font-semibold text-neutral-900 mb-5 mt-3 md:text-5xl">Countless users, countless smiles</h2>
        <p className="text-lg text-neutral-600 md:text-xl">
          Explore our community&apos;s journey and discover why satisfaction defines us.
        </p>
      </header>
      {/* grid */}
      <Masonry
        items={testimonials}
        config={{ columns: [1, 2, 3], gap: [24, 32, 32], media: [376, 769, 1441] }}
        render={(item, index) => {
          return <TestimonialCard key={index} testimonial={item} />;
        }}
      />
    </section>
  );
}

export default Testimonials;
