"use client";

import { useState } from "react";
import Button from "../_components/Button";
import { validateEmail } from "../_lib/helperFunctions";
import { sendContactInfo } from "../_lib/action";
import Toast from "../_components/Toast";
import Input from "../_components/Input";

function ContactSection() {
  const [errors, setErrors] = useState({});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [charCount, setCharCount] = useState(0);

  const [apiResponse, setApiResponse] = useState(null);

  function handleMessageChange(userInput) {
    setMessage(userInput);
    setCharCount(userInput.length);
  }

  async function handleSubmit(formData) {
    console.log(formData);
    let newErrors = { name: "", email: "", message: "" };

    if (name === "") {
      newErrors.name = "This field is required";
    }
    if (email === "") {
      newErrors.email = "This field is required";
    } else if (!validateEmail(email)) {
      newErrors.email = "Please provide a valid email!";
    }
    if (message === "") {
      newErrors.message = "This field is required";
    }
    setErrors(newErrors);
    if (!(newErrors.name || newErrors.email || newErrors.message)) {
      const response = await sendContactInfo(formData);
      console.log(response);
      setApiResponse(response);
    }
  }

  function resetForm() {
    setApiResponse(null);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section className="relative max-w-[1280px] mx-auto px-3 py-12 md:px-4 md:py-16 min-[1440px]:px-8 min-[1440px]:py-24 grid grid-cols-4 gap-y-12 gap-x-4 md:grid-cols-6 md:gap-x-8 md:gap-y-16 min-[1440px]:grid-cols-12 min-[1440px]:gap-x-8">
      {apiResponse?.error && <Toast state="Error" message={apiResponse.error} />}
      {/* left */}
      <div className="place-self-center h-[424px] flex flex-col justify-center col-span-4 md:col-span-6">
        <h1 className="text-4xl text-neutral-900 font-semibold md:text-5xl min-[1440px]:text-6xl">Talk to our team</h1>
        <p className="text-lg text-neutral-600 mb-10 mt-5 md:text-xl md:mb-12">
          We&apos;re committed to delivering the support you require to make your experience as smooth as possible.
        </p>
        <ul className="flex flex-col gap-6">
          <li className="flex gap-3 items-center">
            <span className="w-12 h-12 rounded-full shadow bg-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-indigo-700">
                <path d="M21 19H23V21H1V19H3V4C3 3.44772 3.44772 3 4 3H14C14.5523 3 15 3.44772 15 4V19H19V11H17V9H20C20.5523 9 21 9.44772 21 10V19ZM5 5V19H13V5H5ZM7 11H11V13H7V11ZM7 7H11V9H7V7Z"></path>
              </svg>
            </span>
            <p className="text-neutral-600 text-base font-medium w-[146px] md:w-fit">123 Maple Street, Springfield, IL, USA</p>
          </li>
          <li className="flex gap-3 items-center">
            <span className="w-12 h-12 rounded-full shadow bg-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-indigo-700">
                <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path>
              </svg>
            </span>
            <p className="text-neutral-600 text-base font-medium">+1 (650) 555-0198</p>
          </li>
          <li className="flex gap-3 items-center">
            <span className="w-12 h-12 rounded-full shadow bg-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-indigo-700">
                <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
              </svg>
            </span>
            <a href="mailto:hello@abstractly.com" target="_blank" className="text-neutral-600 text-base font-medium">
              hello@abstractly.com
            </a>
          </li>
        </ul>
      </div>
      {/* form */}
      <form
        className={`col-span-4 md:col-span-6 p-[15px] md:p-[31px] shadow-lg rounded-lg bg-white border border-neutral-200 ${
          apiResponse?.message && "hidden"
        }`}
        action={handleSubmit}
      >
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* name */}
          <div className="w-full">
            <Input name={"name"} label="Name" placeholder="Your name" value={name} onChange={setName} errorMessage={errors.name} />
          </div>
          {/* email */}
          <div className="w-full">
            <Input
              name={"email"}
              label="Email"
              placeholder="example@example.com"
              value={email}
              onChange={setEmail}
              errorMessage={errors.email}
            />
          </div>
        </div>
        {/* message */}
        <div className="flex flex-col gap-1.5 mt-6 mb-[66px]">
          <label className="text-sm text-neutral-700 font-medium">Message</label>
          <div className="relative h-[108px]">
            <textarea
              value={message}
              onChange={(e) => handleMessageChange(e.target.value)}
              className={`resize-none text-sm text-neutral-900 w-full h-full bg-neutral-50 border border-neutral-200 rounded-lg px-3.5 py-3 placeholder:text-sm placeholder:text-neutral-500 focus:outline-none focus:border-0 ${
                errors.message || charCount > 500 ? "focus:shadow-inset-error-focus border-red-300" : "focus:shadow-inset-focus"
              }`}
              name="message"
              placeholder="Write your message..."
            ></textarea>
            {errors.message && <span className="absolute left-0 bottom-[-20px] text-sm text-red-600">{errors.message}</span>}
            <span className={`absolute right-0 bottom-[-26px] text-sm ${charCount > 500 ? "text-red-600" : "text-neutral-500"}`}>
              {charCount}/500
            </span>
          </div>
        </div>
        <Button content="label-only" size="lg" hierarchy="primary" display="block">
          Submit
        </Button>
      </form>
      {/* success feedback */}
      <div
        className={`h-[398px] w-full col-span-4 md:col-span-6 rounded-lg p-4 md:p-8 border border-neutral-200 bg-white flex-col justify-center items-center ${
          apiResponse?.message ? "flex" : "hidden"
        }`}
      >
        <span className="w-16 h-16 rounded-full flex justify-center items-center shadow">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="fill-green-700 w-8 h-8">
            <path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path>
          </svg>
        </span>
        <p className="mt-6 mb-16 text-xl text-neutral-900 text-center md:w-[322px]">{apiResponse?.message}</p>
        <button className="px-4 py-2.5 rounded border-[0.5px] border-neutral-200 bg-white shadow" onClick={resetForm}>
          <span className="p-0.5 text-neutral-900 text-base font-medium">Send another message</span>
        </button>
      </div>
    </section>
  );
}

export default ContactSection;
