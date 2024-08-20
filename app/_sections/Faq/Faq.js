import Button from "@/app/_components/Button";
import FaqRow from "./FaqRow";

const questions = [
  {
    question: "What types of images are available on your platform?",
    answer:
      "Our platform offers a diverse range of abstract images to suit various preferences and needs. From vibrant geometric patterns to soothing landscapes, we strive to provide a wide selection to cater to different tastes.",
  },
  {
    question: "How can I access and download images from your platform?",
    answer:
      "Accessing and downloading images from our platform is simple. Upon signing up and logging in, users can browse through our curated collection and download their chosen images directly to their devices with just a few clicks.",
  },
  {
    question: "Do you offer free images, or is there a subscription required?",
    answer:
      "We provide both free and premium images on our platform. Users can explore a selection of free images without any subscription. For access to our entire library and additional features, we offer subscription plans tailored to different user needs.",
  },
  {
    question: "What payment methods do you accept for subscriptions?",
    answer:
      "We accept a variety of payment methods, including credit/debit cards and online payment gateways, to make the subscription process convenient for our users.",
  },
  {
    question: "Can I cancel or modify my subscription at any time?",
    answer:
      "Yes, absolutely. You have the flexibility to cancel or modify your subscription at any time through your account settings. Changes will take effect immediately, ensuring you have full control over your subscription preferences.",
  },
  {
    question: "How frequently do you update your image collection?",
    answer:
      "We regularly update our image collection with fresh and captivating content to keep our users inspired and engaged. New images are added consistently to ensure there's always something new to discover on our platform.",
  },
];

function Faq() {
  return (
    <section className="max-w-[1280px] mx-auto px-3 py-12 md:px-4 md:py-16 min-[1440px]:px-8 min-[1440px]:py-24 flex flex-col gap-12 md:gap-16">
      <header className="flex flex-col gap-5 items-center">
        <h1 className="text-neutral-900 text-center font-semibold text-3xl md:text-5xl">Frequently asked questions</h1>
        <p className="text-neutral-600 text-lg md:text-xl">Get all your questions answered</p>
      </header>
      <div className="flex flex-col gap-7">
        {questions.map((item, index) => {
          return (
            <div key={index}>
              <FaqRow question={item.question} answer={item.answer} />
              {index < questions.length - 1 && <div className="h-[1px] bg-neutral-300 mt-7"></div>}
            </div>
          );
        })}
        <div className="p-4 rounded-lg flex gap-4 flex-col md:flex-row md:p-8 md:items-center shadow-faq">
          <div>
            <h2 className="text-xl font-semibold text-neutral-900 mb-2">Can’t find the answer you’re looking for?</h2>
            <p className="text-base text-neutral-600">
              Reach out to our <span className="text-indigo-700">customer support</span> team.
            </p>
          </div>
          <div className="md:w-[138px] md:ml-auto">
            <Button size="xl" hierarchy="primary" content="label-only" display="block">
              Get in touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
