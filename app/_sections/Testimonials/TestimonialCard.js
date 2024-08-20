import Image from "next/image";

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex flex-col gap-4 p-[23px] rounded-lg border border-neutral-200 shadow h-fit">
      <div className="flex gap-4">
        <div className="relative rounded-full w-12 h-12 aspect-square">
          <Image
            className="rounded-full"
            src={`/profile-thumbnail_${testimonial.id}.jpg`}
            alt={`avatar image of ${testimonial.fullname}`}
            fill
            sizes="auto"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold text-neutral-900">{testimonial.fullname}</span>
          <span className="text-sm text-neutral-600">{testimonial.username}</span>
        </div>
      </div>
      <p className="text-base text-neutral-600">{testimonial.testimonial}</p>
    </div>
  );
}

export default TestimonialCard;
