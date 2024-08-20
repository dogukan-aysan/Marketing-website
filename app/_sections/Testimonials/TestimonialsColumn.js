import TestimonialCard from "./TestimonialCard";

function TestimonialsColumn({ column }) {
  return (
    <div className="flex flex-col gap-y-6 md:gap-y-8 gap-x-8 md:flex-row md:col-span-2 min-[1440px]:col-span-1 flex-wrap h-fit">
      {column.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
}

export default TestimonialsColumn;
