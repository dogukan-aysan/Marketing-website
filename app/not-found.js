import Link from "next/link";
import Button from "./_components/Button";

function NotFound() {
  return (
    <main className="shadow-sm rounded bg-404 md:shadow-md md:rounded-md min-[1440px]:shadow-lg mt-4">
      <div className="max-w-[1280px] h-screen mx-auto px-3 md:px-4 min-[1440px]:px-8 py-12 md:py-16 min-[1440px]:py-24 flex justify-center items-center">
        <section className="grid grid-cols-4 grid-rows-2 gap-y-8 gap-x-4 md:grid-cols-6 md:gap-8 min-[1440px]:grid-cols-12 min-[1440px]:gap-y-16 min-[1440px]:gap-x-8">
          <div className="col-span-4 md:col-span-6 min-[1440px]:col-span-12">
            <h2 className="text-base text-indigo-700 font-semibold">Not found</h2>
            <h1 className="text-4xl text-neutral-900 font-semibold mt-2 mb-5 md:text-5xl md:mt-3 md:mb-6 min-[1440px]:text-6xl">
              We can’t find the page
            </h1>
            <p className="text-lg text-neutral-600 md:text-xl">Sorry, the page you are looking for doesn&apos;t exist or has been moved.</p>
          </div>
          <div className="col-span-4 md:col-span-2 rounded h-fit font-medium cursor-pointer w-full  md:w-fit">
            <Link href="/">
              <Button hierarchy="primary" size="2xl" display="block" content="label-only">
                Back to home
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default NotFound;
