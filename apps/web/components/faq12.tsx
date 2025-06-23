'use client';

import React, { useState, Fragment, ReactNode } from 'react';

interface FAQ12Props {
  heading1?: ReactNode;
  content1?: ReactNode;
  faq1Question?: ReactNode;
  faq2Question?: ReactNode;
  faq3Question?: ReactNode;
  faq4Question?: ReactNode;
}

const FAQ12: React.FC<FAQ12Props> = (props) => {
  const [faq2Visible, setFaq2Visible] = useState(false);
  const [faq1Visible, setFaq1Visible] = useState(false);
  const [faq4Visible, setFaq4Visible] = useState(false);
  const [faq3Visible, setFaq3Visible] = useState(false);
  return (
    <>
      <div className="faq12faq8 thq-section-padding">
        <div className="faq12-max-width thq-section-max-width thq-flex-row">
          <div className="faq12-section-title thq-flex-column">
            <div className="faq12-content thq-flex-column">
              <h2 className="faq12-text10">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="faq12-text21">
                      <span>Frequently asked</span>
                      <br></br>
                      <span>questions​</span>
                    </span>
                  </Fragment>
                )}
              </h2>
              <p className="faq12-text11 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="faq12-text17">
                      <span>
                        Have more questions? Our FAQ should answer of them! If not, don&apos;t
                        hesitate to
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span className="faq12-text19">contact us</span>
                      <span> - we&apos;d love to hear from you!</span>
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
          </div>
          <div className="faq12-list thq-flex-column">
            <div className="faq12-faq1">
              <div onClick={() => setFaq1Visible(!faq1Visible)} className="faq12-trigger1">
                <p className="faq12-faq1-question">
                  {props.faq1Question ?? (
                    <Fragment>
                      <span className="faq12-text25">Frequently Asked Questions</span>
                    </Fragment>
                  )}
                </p>
                <div className="faq12-icons-container1">
                  {faq1Visible === false && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq12-icon10">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq1Visible === true && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq12-icon12">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq1Visible === true && (
                <div className="faq12-container12">
                  <span className="faq12-text12 Content thq-body-small">
                    Lorem ipsum dolor sit amet. Est eaque sint ut blanditiis sunt aut deleniti illum
                    non repudiandae voluptatem. Aut praesentium doloribus qui distinctio neque ut
                    unde temporibus. Cum exercitationem eveniet in omnis animi in corporis nulla.
                    Sed tempora excepturi et voluptatem modi et exercitationem voluptate cum illum
                    quisquam 33 quia blanditiis eos minus consequatur.Ut neque quam qui dignissimos
                    voluptates ut voluptate totam aut consequuntur quod. Ut voluptas incidunt ut
                    fuga nostrum ut quaerat enim eum earum tenetur? Est esse harum et Quis officiis
                    et enim amet.Et minima tempore et neque voluptatem eos amet officiis et
                    temporibus Quis. Et suscipit esse id nemo sunt At nihil earum et consequatur
                    fuga aut sapiente voluptate est cupiditate esse non dolor cumque. Ut obcaecati
                    recusandae et beatae quae qui doloremque eligendi sit eaque labore.
                  </span>
                </div>
              )}
            </div>
            <div className="faq12-faq2">
              <div onClick={() => setFaq2Visible(!faq2Visible)} className="faq12-trigger2">
                <p className="faq12-faq2-question1">
                  {props.faq2Question ?? (
                    <Fragment>
                      <span className="faq12-text27">Frequently Asked Questions</span>
                    </Fragment>
                  )}
                </p>
                <div className="faq12-icons-container2">
                  {faq2Visible === false && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq12-icon14">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq2Visible === true && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq12-icon16">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq2Visible === true && (
                <div className="faq12-container15">
                  <span className="faq12-text13 Content thq-body-small">
                    Et minima tempore et neque voluptatem eos amet officiis et temporibus Quis. Et
                    suscipit esse id nemo sunt At nihil earum et consequatur fuga aut sapiente
                    voluptate est cupiditate esse non dolor cumque. Ut obcaecati recusandae et
                    beatae quae qui doloremque eligendi sit eaque labore.
                  </span>
                </div>
              )}
            </div>
            <div className="faq12-faq3">
              <div onClick={() => setFaq3Visible(!faq3Visible)} className="faq12-trigger3">
                <p className="faq12-faq2-question2">
                  {props.faq3Question ?? (
                    <Fragment>
                      <span className="faq12-text26">Frequently Asked Questions</span>
                    </Fragment>
                  )}
                </p>
                <div className="faq12-icons-container3">
                  {faq3Visible === false && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq12-icon18">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq3Visible === true && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq12-icon20">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq3Visible === true && (
                <div className="faq12-container18">
                  <span className="faq12-text14 Content thq-body-small">
                    A quia temporibus aut ullam assumenda vel eius sapiente ut eligendi molestias.
                    Ex ipsum incidunt ut excepturi eaque sed nulla quia qui exercitationem alias aut
                    consequuntur nihil et animi voluptas.
                  </span>
                </div>
              )}
            </div>
            <div className="faq12-faq4">
              <div onClick={() => setFaq4Visible(!faq4Visible)} className="faq12-trigger4">
                <p className="faq12-faq2-question3">
                  {props.faq4Question ?? (
                    <Fragment>
                      <span className="faq12-text16">Frequently Asked Questions</span>
                    </Fragment>
                  )}
                </p>
                <div className="faq12-icons-container4">
                  {faq4Visible === false && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq12-icon22">
                        <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
                      </svg>
                    </div>
                  )}
                  {faq4Visible === true && (
                    <div>
                      <svg viewBox="0 0 1024 1024" className="faq12-icon24">
                        <path d="M316 658l-60-60 256-256 256 256-60 60-196-196z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
              {faq4Visible === true && (
                <div className="faq12-container21">
                  <span className="faq12-text15 Content thq-body-small">
                    A quia temporibus aut ullam assumenda vel eius sapiente ut eligendi molestias.
                    Ex ipsum incidunt ut excepturi eaque sed nulla quia qui exercitationem alias aut
                    consequuntur nihil et animi voluptas.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .faq12faq8 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq12-max-width {
            gap: var(--dl-layout-space-threeunits);
            align-self: center;
            align-items: flex-start;
          }
          .faq12-section-title {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .faq12-content {
            align-self: stretch;
            align-items: flex-start;
          }
          .faq12-text10 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 40px;
            font-family: 'Poppins';
            font-weight: 600;
            text-transform: none;
            text-decoration: none;
          }
          .faq12-text11 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .faq12-list {
            flex: 1;
            width: 100%;
          }
          .faq12-faq1 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq12-trigger1 {
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq12-faq1-question {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .faq12-icons-container1 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq12-icon10 {
            fill: var(--dl-color-theme-secondary1);
            width: 24px;
            height: 24px;
          }
          .faq12-icon12 {
            fill: var(--dl-color-theme-secondary1);
            width: 24px;
            height: 24px;
          }
          .faq12-container12 {
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq12-text12 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .faq12-faq2 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq12-trigger2 {
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq12-faq2-question1 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .faq12-icons-container2 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq12-icon14 {
            fill: var(--dl-color-theme-secondary1);
            width: 24px;
            height: 24px;
          }
          .faq12-icon16 {
            fill: var(--dl-color-theme-secondary1);
            width: 24px;
            height: 24px;
          }
          .faq12-container15 {
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq12-text13 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .faq12-faq3 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq12-trigger3 {
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq12-faq2-question2 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .faq12-icons-container3 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq12-icon18 {
            fill: var(--dl-color-theme-secondary1);
            width: 24px;
            height: 24px;
          }
          .faq12-icon20 {
            fill: var(--dl-color-theme-secondary1);
            width: 24px;
            height: 24px;
          }
          .faq12-container18 {
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq12-text14 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .faq12-faq4 {
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .faq12-trigger4 {
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq12-faq2-question3 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 20px;
            font-style: normal;
            text-align: center;
            font-family: 'Poppins';
            font-weight: 600;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .faq12-icons-container4 {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .faq12-icon22 {
            fill: var(--dl-color-theme-secondary1);
            width: 24px;
            height: 24px;
          }
          .faq12-icon24 {
            fill: var(--dl-color-theme-secondary1);
            width: 24px;
            height: 24px;
          }
          .faq12-container21 {
            display: flex;
            padding: var(--dl-layout-space-unit);
            align-self: stretch;
            align-items: flex-start;
            animation-name: fadeIn;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: space-between;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .faq12-text15 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
          }
          .faq12-text16 {
            display: inline-block;
          }
          .faq12-text17 {
            display: inline-block;
          }
          .faq12-text19 {
            font-weight: 700;
          }
          .faq12-text21 {
            display: inline-block;
          }
          .faq12-text25 {
            display: inline-block;
          }
          .faq12-text26 {
            display: inline-block;
          }
          .faq12-text27 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .faq12-max-width {
              flex-direction: column;
            }
            .faq12-list {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .faq12-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  );
};

export default FAQ12;
