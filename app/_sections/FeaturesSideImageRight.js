function FeaturesSideImageRight() {
  return (
    <section className="max-w-[1280px] mx-auto px-3 py-12 md:px-4 md:py-16 min-[1440px]:px-8 min-[1440px]:py-24 flex flex-col gap-12 md:gap-16">
      <header className="text-center min-[1440px]:px-40">
        <h3 className="text-base font-semibold text-indigo-700">High quality images</h3>
        <h1 className="text-3xl font-semibold text-neutral-900 md:text-5xl mt-3 mb-5">For designers, by designers</h1>
        <p className="text-lg text-neutral-600 md:text-xl md:max-[1439px]:px-[109px]">
          Unleash boundless creativity with a large repository of images optimized for designers
        </p>
      </header>
      {/* grid */}
      <div className="grid grid-cols-4 gap-y-12 gap-x-4 md:grid-cols-6 md:gap-x-8 min-[1440px]:grid-cols-12 min-[1440px]:gap-y-8">
        <ul className="flex flex-col gap-10 col-span-4 md:col-span-6">
          <li className="flex gap-5">
            <span className="shrink-0 w-12 h-12 rounded-full shadow flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 fill-indigo-700">
                <path d="M4 5V19H20V5H4ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM7.5 11.25H9.5V9H11V15H9.5V12.75H7.5V15H6V9H7.5V11.25ZM14.5 10.5V13.5H16C16.2761 13.5 16.5 13.2761 16.5 13V11C16.5 10.7239 16.2761 10.5 16 10.5H14.5ZM13 9H16C17.1046 9 18 9.89543 18 11V13C18 14.1046 17.1046 15 16 15H13V9Z"></path>
              </svg>
            </span>
            <div className="flex flex-col gap-2 py-2.5">
              <h2 className="text-lg font-semibold text-neutral-900">5K resolution support</h2>
              <p className="text-base text-neutral-600">
                All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality.
              </p>
            </div>
          </li>
          <li className="flex gap-5">
            <span className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 fill-indigo-700">
                <path d="M7.05025 8.04673L12 3.09698L16.9497 8.04673C19.6834 10.7804 19.6834 15.2126 16.9497 17.9462C14.2161 20.6799 9.78392 20.6799 7.05025 17.9462C4.31658 15.2126 4.31658 10.7804 7.05025 8.04673ZM18.364 6.63252L12 0.268555L5.63604 6.63252C2.12132 10.1472 2.12132 15.8457 5.63604 19.3604C9.15076 22.8752 14.8492 22.8752 18.364 19.3604C21.8787 15.8457 21.8787 10.1472 18.364 6.63252ZM16.2427 10.1714L14.8285 8.75718L7.7574 15.8282L9.17161 17.2425L16.2427 10.1714ZM8.11095 11.232C8.69674 11.8178 9.64648 11.8178 10.2323 11.232C10.8181 10.6463 10.8181 9.69652 10.2323 9.11073C9.64648 8.52494 8.69674 8.52494 8.11095 9.11073C7.52516 9.69652 7.52516 10.6463 8.11095 11.232ZM15.8891 16.8889C15.3033 17.4747 14.3536 17.4747 13.7678 16.8889C13.182 16.3031 13.182 15.3534 13.7678 14.7676C14.3536 14.1818 15.3033 14.1818 15.8891 14.7676C16.4749 15.3534 16.4749 16.3031 15.8891 16.8889Z"></path>
              </svg>
            </span>
            <div className="flex flex-col gap-2 py-2.5">
              <h2 className="text-lg font-semibold text-neutral-900">From water to glass</h2>
              <p className="text-base text-neutral-600">
                We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector.
              </p>
            </div>
          </li>
          <li className="flex gap-5">
            <span className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 fill-indigo-700">
                <path d="M12 4C18.0751 4 23 8.92487 23 15V20H21V15C21 10.1182 17.1132 6.14421 12.2654 6.00384L12 6C7.1182 6 3.14421 9.88681 3.00384 14.7346L3 15V20H1V15C1 8.92487 5.92487 4 12 4ZM12 8C15.866 8 19 11.134 19 15V20H17V15C17 12.3112 14.8777 10.1182 12.2169 10.0046L12 10C9.31124 10 7.11818 12.1223 7.00462 14.7831L7 15V20H5V15C5 11.134 8.13401 8 12 8ZM12 12C13.6569 12 15 13.3431 15 15V20H13V15C13 14.4872 12.614 14.0645 12.1166 14.0067L12 14C11.4872 14 11.0645 14.386 11.0067 14.8834L11 15V20H9V15C9 13.3431 10.3431 12 12 12Z"></path>
              </svg>
            </span>
            <div className="flex flex-col gap-2 py-2.5">
              <h2 className="text-lg font-semibold text-neutral-900">Portrait or landscape</h2>
              <p className="text-base text-neutral-600">
                Effortlessly adapt your images for any platform - whether it&apos;s a stunning wallpaper or captivating Instagram reels and
                stories.
              </p>
            </div>
          </li>
        </ul>
        <div className="h-[180px] md:h-[394px] col-span-4 md:col-span-6 rounded-lg shadow-lg bg-[url('/unsplash_rAtzDB6hWrU.jpg')] bg-cover bg-center"></div>
      </div>
    </section>
  );
}

export default FeaturesSideImageRight;
