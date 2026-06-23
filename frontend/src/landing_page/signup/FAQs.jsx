import React, { useState } from "react";

const faqs = [
  {
    question: "What documents are required to open a StockSphere account?",
    answer:
      "You need your PAN card, Aadhaar card, bank proof, signature, and a recent photograph to complete the account opening process.",
  },
  {
    question: "How long does it take to open an account?",
    answer:
      "If all documents are submitted correctly, the account is usually activated within 24-48 hours.",
  },
  {
    question: "Is there any account opening charge?",
    answer:
      "Charges may vary depending on the account type and current pricing policy.",
  },
  {
    question: "Can I open an account completely online?",
    answer:
      "Yes, the entire process can be completed online using Aadhaar-based eKYC verification.",
  },
  {
    question: "Can I invest in IPOs through my account?",
    answer:
      "Yes, once your account is activated, you can apply for IPOs directly from the platform.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-14">
        Frequently Asked Questions
      </h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50"
            >
              <span className="font-medium text-gray-800">
                {faq.question}
              </span>

              <span className="text-2xl text-gray-500">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-5 pb-5 text-gray-600 leading-7">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;