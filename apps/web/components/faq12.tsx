'use client';
import React, { useState } from 'react';

interface FAQ12Props {
  className?: string;
}

const FAQ12: React.FC<FAQ12Props> = ({ className = '' }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How accurate are your at-home tests?',
      answer:
        'Our tests are processed in CLIA-certified laboratories with the same accuracy standards as traditional lab testing, typically 99%+ accuracy.',
    },
    {
      question: 'How long does it take to get results?',
      answer:
        'Most test results are available within 2-3 business days after we receive your sample at our laboratory.',
    },
    {
      question: 'Are the test kits easy to use?',
      answer:
        'Yes! Each kit comes with simple, step-by-step instructions and all necessary materials. No medical training required.',
    },
    {
      question: 'What should I do if I have questions about my results?',
      answer:
        'Our medical team is available to discuss your results and answer any questions. You can reach us through our patient portal or customer service.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">
            Have more questions? Our FAQ should answer most of them! If not, don&apos;t hesitate to{' '}
            <span className="text-[#002e53] font-semibold">contact us</span> - we&apos;d love to
            hear from you!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ12;
