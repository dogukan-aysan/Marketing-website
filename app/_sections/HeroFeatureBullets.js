import Button from "../_components/Button";
import H1 from "../_components/H1";

function HeroFeatureBullets() {
  return (
    <section className="max-w-[1280px] mx-auto px-3 py-12 md:px-4 md:py-16 min-[1440px]:px-8 min-[1440px]:py-24 grid grid-cols-4 md:grid-cols-6 min-[1440px]:grid-cols-12 gap-x-4 md:gap-x-8 gap-y-12 md:gap-y-8 items-center">
      {/* message */}
      <div className="self-center col-span-4 md:col-span-6 min-[1440px]:col-span-5">
        <H1>Premium abstract images</H1>
        <ul className="flex flex-col gap-5 mb-8 md:mb-16 mt-8 md:mt-16">
          <li className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-indigo-700">
                <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
              </svg>
            </div>
            <p className="text-lg text-neutral-600">Minimum 5k image resolution</p>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-indigo-700">
                <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
              </svg>
            </div>
            <p className="text-lg text-neutral-600">Various format variants available</p>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-indigo-700">
                <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
              </svg>
            </div>
            <p className="text-lg text-neutral-600">Retina display support</p>
          </li>
        </ul>
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
      <div className="col-span-4 md:col-span-6 min-[1440px]:col-span-7 h-[264px] md:h-[526px] bg-[url('/prism2.png')] bg-contain bg-center bg-no-repeat"></div>
    </section>
  );
}

export default HeroFeatureBullets;
