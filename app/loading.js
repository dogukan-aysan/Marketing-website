import Spinner from "./_components/Spinner";

function Loading() {
  return (
    <div className="shadow-sm bg-white rounded md:shadow-md md:rounded-md min-[1440px]:shadow-lg overflow-hidden mt-4">
      <div className="w-[1280px] h-screen mx-auto px-3 py-12 md:px-4 md:py-16 min-[1440px]:px-8 min-[1440px]:py-24 flex justify-center items-center">
        <Spinner />
      </div>
    </div>
  );
}

export default Loading;
