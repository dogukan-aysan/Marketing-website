"use client";

import { useState } from "react";
import Button from "../_components/Button";

function PricingSection() {
  const [tier, setTier] = useState("Monthly");

  function handleClick(e) {
    let $spanEl;
    if (e.target.tagName === "BUTTON") {
      $spanEl = e.target.querySelector("span");
    } else $spanEl = e.target;
    if ($spanEl.textContent !== tier) setTier($spanEl.textContent);
  }

  return (
    <section className="max-w-[1280px] mx-auto px-3 py-12 md:px-4 md:py-16 min-[1440px]:px-8 min-[1440px]:py-24 flex flex-col gap-12 md:gap-16">
      <header className="text-center md:px-8 min-[1440px]:px-40">
        <h3 className="text-base font-semibold text-indigo-700">Pricing Tiers</h3>
        <h1 className="text-3xl font-semibold text-neutral-900 md:text-5xl mt-3 mb-5">Fit for all your needs</h1>
        <p className="text-lg text-neutral-600 md:text-xl">
          Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out.
        </p>
        {/* toggle buttons */}
        <div className="flex gap-4 md:gap-8 mt-10 items-center w-fit mx-auto justify-evenly">
          <button
            onClick={handleClick}
            className={`w-[140px] rounded flex justify-center items-center cursor-pointer h-fit shrink-0 text-base font-medium gap-1.5 ${
              tier === "Monthly" ? "px-4 py-2.5 bg-white text-neutral-900 outline-[0.5px] shadow-secondary" : "p-0 text-neutral-600"
            }`}
          >
            <span className="px-0.5">Monthly</span>
          </button>
          <button
            onClick={handleClick}
            className={`w-[140px] rounded flex justify-center items-center cursor-pointer h-fit shrink-0 text-base font-medium gap-1.5 ${
              tier === "Annually" ? "px-4 py-2.5 bg-white text-neutral-900 outline-[0.5px] shadow-secondary" : "p-0 text-neutral-600"
            }`}
          >
            <span className="px-0.5">Annually</span>
          </button>
        </div>
      </header>
      {/* grid */}
      <div className="grid grid-cols-4 gap-y-8 gap-x-4 md:grid-cols-6 md:gap-8 min-[1440px]:grid-cols-12 min-[1440px]:gap-y-12 min-[1440px]:gap-x-8">
        {/* basic plan */}
        <div className="col-span-4 md:max-[1439px]:col-span-6 p-[15px] flex flex-col rounded-lg shadow-sm border border-neutral-200 md:p-[31px] md:h-[532px] min-[1440px]:h-full">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-2">Basic Plan</h2>
          <p className="text-base text-neutral-600">Access to a curated selection of abstract images</p>
          <div className="text-base text-neutral-900 mt-8 mb-2">
            <span className="text-5xl font-semibold mr-0.5">{tier === "Monthly" ? "$9.99" : "$6.99"}</span>
            /month
          </div>
          <span className="text-base text-neutral-600">{tier === "Monthly" ? "Billed monthly" : "Billed annually ($84)"}</span>
          <ul className="my-8 flex flex-col gap-5 md:mb-auto">
            <li className="flex gap-3 items-center">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-indigo-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-indigo-500">
                  <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                </svg>
              </div>
              <p className="text-base text-neutral-600">Standard quality images</p>
            </li>
            <li className="flex gap-3 items-center">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-indigo-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-indigo-500">
                  <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                </svg>
              </div>
              <p className="text-base text-neutral-600">Limited to personal use</p>
            </li>
            <li className="flex gap-3 items-center">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-indigo-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-indigo-500">
                  <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                </svg>
              </div>
              <p className="text-base text-neutral-600">Email support</p>
            </li>
          </ul>
          <Button content="label-only" size="xl" hierarchy="secondary" display="block">
            Buy now
          </Button>
        </div>
        {/* standard plan */}
        <div className="relative col-span-4 md:max-[1439px]:col-span-6 p-[15px] pr-0 flex flex-col rounded-lg shadow-2xl border border-indigo-600 md:p-[31px] md:pr-0">
          <div className="absolute top-0 left-0 rounded-t-lg w-full px-2 min-[1440px]:px-0 py-4 bg-indigo-50 text-xl font-bold text-indigo-700 text-center">
            Most Popular
          </div>
          <h2 className="text-2xl font-semibold text-neutral-900 mb-2 mt-[76px] md:mt-[60px]">Standard Plan</h2>
          <p className="text-base text-neutral-600">Next-level Integrations, priced economically</p>
          <div className="text-base text-indigo-700 mt-8 mb-2">
            <span className="text-5xl font-semibold mr-0.5">{tier === "Monthly" ? "$19.99" : "$15.99"}</span>
            /month
          </div>
          <span className="text-base text-neutral-600">{tier === "Monthly" ? "Billed monthly" : "Billed annually ($192)"}</span>
          <ul className="min-[1440px]:h-[264px] my-8 flex flex-col gap-5">
            <li className="flex gap-3 items-center">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-indigo-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-indigo-500">
                  <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                </svg>
              </div>
              <p className="text-base text-neutral-600">Expanded library with more diverse abstract images</p>
            </li>
            <li className="flex gap-3 items-center">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-indigo-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-indigo-500">
                  <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                </svg>
              </div>
              <p className="text-base text-neutral-600">High-resolution images available</p>
            </li>
            <li className="flex gap-3 items-center">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-indigo-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-indigo-500">
                  <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                </svg>
              </div>
              <p className="text-base text-neutral-600">Suitable for commercial use</p>
            </li>
            <li className="flex gap-3 items-center">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-indigo-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-indigo-500">
                  <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                </svg>
              </div>
              <p className="text-base text-neutral-600">Priority email support</p>
            </li>
            <li className="flex gap-3 items-center">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-indigo-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-indigo-500">
                  <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                </svg>
              </div>
              <p className="text-base text-neutral-600">Advanced analytics</p>
            </li>
          </ul>
          <div className="mr-8">
            <Button content="label-only" size="xl" hierarchy="primary" display="block">
              Buy now
            </Button>
          </div>
        </div>
        {/* premium plan */}
        <div className="col-span-4 md:max-[1439px]:col-span-6 p-[15px] flex flex-col rounded-lg shadow-sm border border-neutral-200 md:p-[31px] md:h-[596px] min-[1440px]:h-full">
          <h2 className="text-2xl font-semibold text-neutral-900 mb-2">Premium Plan</h2>
          <p className="text-base text-neutral-600">Experience limitless living for power users</p>
          <div className="text-base text-neutral-900 mt-8 mb-2">
            <span className="text-5xl font-semibold mr-0.5">{tier === "Monthly" ? "$29.99" : "$25.99"}</span>
            /month
          </div>
          <span className="text-base text-neutral-600">{tier === "Monthly" ? "Billed monthly" : "Billed annually ($312)"}</span>
          <ul className="my-8 flex flex-col gap-5 md:mb-auto">
            <li className="flex gap-3 items-center">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-indigo-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-indigo-500">
                  <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                </svg>
              </div>
              <p className="text-base text-neutral-600">Full access to the entire image library, including exclusive content</p>
            </li>
            <li className="flex gap-3 items-center">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-indigo-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-indigo-500">
                  <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                </svg>
              </div>
              <p className="text-base text-neutral-600">Highest quality images, including premium collections</p>
            </li>
            <li className="flex gap-3 items-center">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-indigo-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-indigo-500">
                  <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                </svg>
              </div>
              <p className="text-base text-neutral-600">Commercial and resale rights</p>
            </li>
            <li className="flex gap-3 items-center">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-indigo-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-indigo-500">
                  <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                </svg>
              </div>
              <p className="text-base text-neutral-600">Dedicated customer support line</p>
            </li>
            <li className="flex gap-3 items-center">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-indigo-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-indigo-500">
                  <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                </svg>
              </div>
              <p className="text-base text-neutral-600">24/7 support response time</p>
            </li>
            <li className="flex gap-3 items-center">
              <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-indigo-50">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-indigo-500">
                  <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
                </svg>
              </div>
              <p className="text-base text-neutral-600">Advanced analytics and insights</p>
            </li>
          </ul>
          <Button content="label-only" size="xl" hierarchy="secondary" display="block">
            Buy now
          </Button>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
