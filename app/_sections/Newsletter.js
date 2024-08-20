"use client";

import { useState } from "react";

import { validateEmail } from "../_lib/helperFunctions";
import { subscribeNewsletter } from "../_lib/action";

import Toast from "../_components/Toast";
import Input from "../_components/Input";
import Button from "../_components/Button";

function Newsletter() {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [apiResponse, setApiResponse] = useState(null);

  async function handleSubmit(formData) {
    if (email === "") {
      setErrorMessage("This field is required");
    } else if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email!");
    } else {
      setErrorMessage("");
      const response = await subscribeNewsletter(formData);
      setApiResponse(response);
      setEmail("");
      setTimeout(() => {
        setApiResponse(null);
      }, 5000);
    }
  }

  return (
    <section className="relative max-w-[1280px] mx-auto px-3 py-8 md:px-4 md:py-16 min-[1440px]:px-8 min-[1440px]:py-24 grid grid-cols-4 gap-y-4 md:gap-y-16 items-center gap-x-4 md:grid-cols-6 md:gap-8 min-[1440px]:grid-cols-12 min-[1440px]:gap-y-12 min-[1440px]:gap-x-8">
      {apiResponse && (
        <Toast state={apiResponse.message ? "Success" : "Error"} message={apiResponse.message ? apiResponse.message : apiResponse.error} />
      )}
      <div className="col-span-4 md:col-span-6 h-[564px] md:h-[460px]">
        <h1 className="text-3xl font-semibold text-neutral-900 mb-8 md:text-5xl md:mb-16">
          Get the finest curated abstracts delivered weekly to your inbox
        </h1>
        <ul className="flex flex-col gap-5 mb-12">
          <li className="flex gap-3 items-center">
            <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-indigo-50">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-indigo-500">
                <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
              </svg>
            </div>
            <p className="text-lg text-neutral-600">Exclusive access to new abstract images and collections</p>
          </li>
          <li className="flex gap-3 items-center">
            <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-indigo-50">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-indigo-500">
                <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
              </svg>
            </div>
            <p className="text-lg text-neutral-600">Unlock special promotions only for subscribers</p>
          </li>
          <li className="flex gap-3 items-center">
            <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 bg-indigo-50">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-indigo-500">
                <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
              </svg>
            </div>
            <p className="text-lg text-neutral-600">Regular doses of artistic inspiration</p>
          </li>
        </ul>
        <form action={handleSubmit} className="flex flex-col gap-4 md:flex-row">
          <div className="relative flex flex-col gap-3 md:gap-4">
            <div className="md:w-[334px]">
              <Input placeholder="Enter your email" name="email" errorMessage={errorMessage} value={email} onChange={setEmail} />
            </div>
            <p className="text-base text-neutral-600">We only send best! no spam.</p>
          </div>
          <Button content="label-only" size="md" hierarchy="primary">
            Subscribe
          </Button>
        </form>
      </div>
      <div className="w-[311px] md:w-[688px] min-[1440px]:w-[592px] col-span-4 md:col-span-6 bg-[url(/abstract.jpg)] bg-cover h-[288px] rounded-lg md:h-[608px] md:rounded-2xl"></div>
    </section>
  );
}

export default Newsletter;
