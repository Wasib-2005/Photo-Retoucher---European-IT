import { useState } from "react";
import AQ from "./AQ";

const faqData = [
  {
    _id: "11",
    question: "How can I claim my business?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    _id: "12",
    question: "Can I customize my subscription package?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    _id: "13",
    question: "How can I contact customer support?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    _id: "14",
    question: "How can I contact customer support?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    _id: "15",
    question: "How can I contact customer support?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
];
const FAQ = () => {
  const [openAq, setOpenAq] = useState(faqData[0]);

  return (
    <div className="flex flex-col gap-4">
      {faqData.map((item, index) => (
        <div key={index} className="">
          <AQ item={item} openAq={openAq} setOpenAq={setOpenAq} />
        </div>
      ))}
    </div>
  );
};

export default FAQ;
