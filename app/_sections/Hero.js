import Button from "../_components/Button";
import H1 from "../_components/H1";

function Hero({ heading, description }) {
  return (
    <section className="max-w-[1280px] mx-auto px-3 py-12 md:px-4 md:py-16 min-[1440px]:px-8 min-[1440px]:py-24 grid grid-cols-4 md:grid-cols-6 min-[1440px]:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-12 md:gap-y-8 items-center">
      {/* message */}
      <div className="col-span-4 md:col-span-6 min-[1440px]:col-span-5 flex flex-col gap-8 md:gap-16">
        <div className="flex flex-col gap-4 md:gap-6">
          <H1>{heading}</H1>
          <p className="text-lg md:text-xl text-neutral-600">{description}</p>
        </div>
        <div className="flex gap-4 md:gap-8 md:w-[458px] min-[1440px]:w-[383px]">
          <div className="w-full">
            <Button content="label-only" size="xl" hierarchy="secondary" display="block">
              Learn more
            </Button>
          </div>
          <div className="w-full">
            <Button content="label-only" size="xl" hierarchy="primary" display="block">
              See pricing
            </Button>
          </div>
        </div>
      </div>
      {/* image */}
      <div className="col-span-4 md:col-span-6 min-[1440px]:col-span-7 h-[264px] md:h-[526px] bg-[url('/prism1.png')] bg-contain bg-center bg-no-repeat"></div>
    </section>
  );
}

export default Hero;
