'use client';
import React, { useState } from 'react';

interface FAQ12Props {
  className?: string;
}

const FAQ12: React.FC<FAQ12Props> = ({ className = '' }) => {
  return (
    <div className={`faq12-wrapper ${className}`}>
      <div className="faq12faq8 thq-section-padding">
        <div className="faq12-max-width thq-section-max-width thq-flex-row">
          <div className="faq12-section-title thq-flex-column">
            <div className="faq12-content thq-flex-column">
              <h2 className="faq12-text10">
                <span>Frequently asked</span>
                <br />
                <span>questions​</span>
              </h2>
              <p className="faq12-text11 thq-body-large">
                <span>
                  Have more questions? Our FAQ should answer most of them! If not, don&apos;t
                  hesitate to
                  <span dangerouslySetInnerHTML={{ __html: ' ' }} />
                </span>
                <span className="faq12-text19">contact us</span>
                <span> - we&apos;d love to hear from you!</span>
              </p>
            </div>
          </div>
          <div className="faq12-list thq-flex-column">
            <div className="faq12-item1">
              <div className="faq12-header1">
                <div className="faq12-trigger1">
                  <p className="faq12-faq1-question thq-body-large">
                    How accurate are your at-home tests?
                  </p>
                  <div className="faq12-icons-container1">
                    <svg viewBox="0 0 1024 1024" className="faq12-icon10">
                      <path d="M298 426h428l-214 214z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="faq12-content1">
                <div className="faq12-faq1-answer">
                  <span>
                    Our tests are processed in CLIA-certified laboratories with the same accuracy
                    standards as traditional lab testing, typically 99%+ accuracy.
                  </span>
                </div>
              </div>
            </div>
            <div className="faq12-item2">
              <div className="faq12-header2">
                <div className="faq12-trigger2">
                  <p className="faq12-faq2-question thq-body-large">
                    How long does it take to get results?
                  </p>
                  <div className="faq12-icons-container2">
                    <svg viewBox="0 0 1024 1024" className="faq12-icon12">
                      <path d="M298 426h428l-214 214z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="faq12-content2">
                <div className="faq12-faq2-answer">
                  <span>
                    Most test results are available within 2-3 business days after we receive your
                    sample at our laboratory.
                  </span>
                </div>
              </div>
            </div>
            <div className="faq12-item3">
              <div className="faq12-header3">
                <div className="faq12-trigger3">
                  <p className="faq12-faq3-question thq-body-large">
                    Are the test kits easy to use?
                  </p>
                  <div className="faq12-icons-container3">
                    <svg viewBox="0 0 1024 1024" className="faq12-icon14">
                      <path d="M298 426h428l-214 214z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="faq12-content3">
                <div className="faq12-faq3-answer">
                  <span>
                    Yes! Each kit comes with simple, step-by-step instructions and all necessary
                    materials. No medical training required.
                  </span>
                </div>
              </div>
            </div>
            <div className="faq12-item4">
              <div className="faq12-header4">
                <div className="faq12-trigger4">
                  <p className="faq12-faq4-question thq-body-large">
                    What should I do if I have questions about my results?
                  </p>
                  <div className="faq12-icons-container4">
                    <svg viewBox="0 0 1024 1024" className="faq12-icon16">
                      <path d="M298 426h428l-214 214z"></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="faq12-content4">
                <div className="faq12-faq4-answer">
                  <span>
                    Our medical team is available to discuss your results and answer any questions.
                    You can reach us through our patient portal or customer service.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ12;
