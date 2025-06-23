import React, { Fragment, ReactNode } from 'react';

import { useTranslations } from 'next-intl';

interface Navbar4Props {
  logoAlt?: string;
  logoSrc?: string;
  text?: ReactNode;
  text1?: ReactNode;
  text2?: ReactNode;
  text3?: ReactNode;
  text4?: ReactNode;
  text5?: ReactNode;
  text6?: ReactNode;
  text7?: ReactNode;
  text9?: ReactNode;
  text10?: ReactNode;
  text11?: ReactNode;
  text12?: ReactNode;
  text13?: ReactNode;
  text14?: ReactNode;
  text21?: ReactNode;
  text22?: ReactNode;
  text23?: ReactNode;
  text24?: ReactNode;
  text32?: ReactNode;
  text33?: ReactNode;
  text34?: ReactNode;
  text35?: ReactNode;
  text71?: ReactNode;
  action1?: ReactNode;
  text141?: ReactNode;
  text241?: ReactNode;
  text351?: ReactNode;
  text712?: ReactNode;
  text713?: ReactNode;
  text1412?: ReactNode;
  text1413?: ReactNode;
  text2412?: ReactNode;
  text2413?: ReactNode;
  text3512?: ReactNode;
  text3513?: ReactNode;
}

const Navbar4: React.FC<Navbar4Props> = (props) => {
  return (
    <>
      <header className="navbar4-container">
        <header data-thq="thq-navbar" className="navbar4-navbar-interactive">
          <img alt={props.logoAlt} src={props.logoSrc} className="navbar4-image1" />
          <div data-thq="thq-navbar-nav" className="navbar4-desktop-menu">
            <nav className="navbar4-links1">
              <div data-thq="thq-dropdown" className="navbar4-thq-dropdown1 list-item">
                <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle10">
                  <span className="navbar4-text10 nav">
                    {props.text ?? (
                      <Fragment>
                        <span className="navbar4-text44">Our Products</span>
                      </Fragment>
                    )}
                  </span>
                  <div data-thq="thq-dropdown-arrow" className="navbar4-dropdown-arrow1">
                    <svg viewBox="0 0 1024 1024" className="navbar4-icon10">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul data-thq="thq-dropdown-list" className="navbar4-dropdown-list1">
                  <li data-thq="thq-dropdown" className="navbar4-dropdown10 list-item">
                    <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle11">
                      <span className="navbar4-text11 nav">
                        {props.text1 ?? (
                          <Fragment>
                            <span className="navbar4-text77">At-Home Oral Health Test Kit</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="navbar4-dropdown11 list-item">
                    <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle12">
                      <span className="navbar4-text12 nav">
                        {props.text2 ?? (
                          <Fragment>
                            <span className="navbar4-text64">
                              At-Home Respiratory Pathogen PCR Kit
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="navbar4-dropdown12 list-item">
                    <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle13">
                      <span className="navbar4-text13 nav">
                        {props.text3 ?? (
                          <Fragment>
                            <span className="navbar4-text74">Coconut Oil Pulling Complex</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div data-thq="thq-dropdown" className="navbar4-thq-dropdown2 list-item">
                <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle14">
                  <span className="navbar4-text14 nav">
                    {props.text7 ?? (
                      <Fragment>
                        <span className="navbar4-text68">Our Services</span>
                      </Fragment>
                    )}
                  </span>
                  <div data-thq="thq-dropdown-arrow" className="navbar4-dropdown-arrow2">
                    <svg viewBox="0 0 1024 1024" className="navbar4-icon12">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul data-thq="thq-dropdown-list" className="navbar4-dropdown-list2">
                  <li data-thq="thq-dropdown" className="navbar4-dropdown13 list-item">
                    <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle15">
                      <span className="navbar4-text15 nav">
                        {props.text14 ?? (
                          <Fragment>
                            <span className="navbar4-text56">At-Home Oral Health Test Kit</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="navbar4-dropdown14 list-item">
                    <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle16">
                      <span className="navbar4-text16 nav">
                        {props.text24 ?? (
                          <Fragment>
                            <span className="navbar4-text45">
                              At-Home Respiratory Pathogen PCR Kit
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="navbar4-dropdown15 list-item">
                    <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle17">
                      <span className="navbar4-text17 nav">
                        {props.text35 ?? (
                          <Fragment>
                            <span className="navbar4-text69">Coconut Oil Pulling Complex</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div data-thq="thq-dropdown" className="navbar4-thq-dropdown3 list-item">
                <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle18">
                  <span className="navbar4-text18 nav">
                    {props.text6 ?? (
                      <Fragment>
                        <span className="navbar4-text59">Our Company</span>
                      </Fragment>
                    )}
                  </span>
                  <div data-thq="thq-dropdown-arrow" className="navbar4-dropdown-arrow3">
                    <svg viewBox="0 0 1024 1024" className="navbar4-icon14">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul data-thq="thq-dropdown-list" className="navbar4-dropdown-list3">
                  <li data-thq="thq-dropdown" className="navbar4-dropdown16 list-item">
                    <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle19">
                      <span className="navbar4-text19 nav">
                        {props.text13 ?? (
                          <Fragment>
                            <span className="navbar4-text72">At-Home Oral Health Test Kit</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="navbar4-dropdown17 list-item">
                    <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle20">
                      <span className="navbar4-text20 nav">
                        {props.text23 ?? (
                          <Fragment>
                            <span className="navbar4-text71">
                              At-Home Respiratory Pathogen PCR Kit
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="navbar4-dropdown18 list-item">
                    <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle21">
                      <span className="navbar4-text21 nav">
                        {props.text34 ?? (
                          <Fragment>
                            <span className="navbar4-text66">Coconut Oil Pulling Complex</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div data-thq="thq-dropdown" className="navbar4-thq-dropdown4 list-item">
                <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle22">
                  <span className="navbar4-text22 nav">
                    {props.text5 ?? (
                      <Fragment>
                        <span className="navbar4-text53">Shop</span>
                      </Fragment>
                    )}
                  </span>
                  <div data-thq="thq-dropdown-arrow" className="navbar4-dropdown-arrow4">
                    <svg viewBox="0 0 1024 1024" className="navbar4-icon16">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul data-thq="thq-dropdown-list" className="navbar4-dropdown-list4">
                  <li data-thq="thq-dropdown" className="navbar4-dropdown19 list-item">
                    <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle23">
                      <span className="navbar4-text23 nav">
                        {props.text12 ?? (
                          <Fragment>
                            <span className="navbar4-text52">At-Home Oral Health Test Kit</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="navbar4-dropdown20 list-item">
                    <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle24">
                      <span className="navbar4-text24 nav">
                        {props.text22 ?? (
                          <Fragment>
                            <span className="navbar4-text70">
                              At-Home Respiratory Pathogen PCR Kit
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="navbar4-dropdown21 list-item">
                    <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle25">
                      <span className="navbar4-text25 nav">
                        {props.text33 ?? (
                          <Fragment>
                            <span className="navbar4-text63">Coconut Oil Pulling Complex</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div data-thq="thq-dropdown" className="navbar4-thq-dropdown5 list-item">
                <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle26">
                  <span className="navbar4-text26 nav">
                    {props.text4 ?? (
                      <Fragment>
                        <span className="navbar4-text75">Blog</span>
                      </Fragment>
                    )}
                  </span>
                  <div data-thq="thq-dropdown-arrow" className="navbar4-dropdown-arrow5">
                    <svg viewBox="0 0 1024 1024" className="navbar4-icon18">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul data-thq="thq-dropdown-list" className="navbar4-dropdown-list5">
                  <li data-thq="thq-dropdown" className="navbar4-dropdown22 list-item">
                    <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle27">
                      <span className="navbar4-text27 nav">
                        {props.text11 ?? (
                          <Fragment>
                            <span className="navbar4-text48">At-Home Oral Health Test Kit</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="navbar4-dropdown23 list-item">
                    <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle28">
                      <span className="navbar4-text28 nav">
                        {props.text21 ?? (
                          <Fragment>
                            <span className="navbar4-text43">
                              At-Home Respiratory Pathogen PCR Kit
                            </span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </li>
                  <li data-thq="thq-dropdown" className="navbar4-dropdown24 list-item">
                    <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle29">
                      <span className="navbar4-text29 nav">
                        {props.text32 ?? (
                          <Fragment>
                            <span className="navbar4-text46">Coconut Oil Pulling Complex</span>
                          </Fragment>
                        )}
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="navbar4-buttons">
              <button className="navbar4-action1 thq-button-filled thq-button-animated">
                <span className="navbar4-text30">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="navbar4-text47">$359.97</span>
                    </Fragment>
                  )}
                </span>
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path
                    d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0 0 20.01 4H5.21l-.94-2H1v2h2l3.6 7.59l-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM6.16 6h12.15l-2.76 5H8.53zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navbar4-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar4-icon22">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar4-mobile-menu">
            <div className="navbar4-nav">
              <div className="navbar4-top">
                <img alt={props.logoAlt} src={props.logoSrc} className="navbar4-logo" />
                <div data-thq="thq-close-menu" className="navbar4-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar4-icon24">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar4-links2">
                <div data-thq="thq-dropdown" className="navbar4-thq-dropdown6 list-item">
                  <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle30">
                    <span className="navbar4-text31 nav">
                      {props.text71 ?? (
                        <Fragment>
                          <span className="navbar4-text54">Our Products</span>
                        </Fragment>
                      )}
                    </span>
                    <div data-thq="thq-dropdown-arrow" className="navbar4-dropdown-arrow6">
                      <svg viewBox="0 0 1024 1024" className="navbar4-icon26">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul data-thq="thq-dropdown-list" className="navbar4-dropdown-list6">
                    <li data-thq="thq-dropdown" className="navbar4-dropdown25 list-item">
                      <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle31">
                        <span className="navbar4-text32 nav">
                          {props.text141 ?? (
                            <Fragment>
                              <span className="navbar4-text58">At-Home Oral Health Test Kit</span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </li>
                    <li data-thq="thq-dropdown" className="navbar4-dropdown26 list-item">
                      <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle32">
                        <span className="navbar4-text33 nav">
                          {props.text241 ?? (
                            <Fragment>
                              <span className="navbar4-text73">
                                At-Home Respiratory Pathogen PCR Kit
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </li>
                    <li data-thq="thq-dropdown" className="navbar4-dropdown27 list-item">
                      <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle33">
                        <span className="navbar4-text34 nav">
                          {props.text351 ?? (
                            <Fragment>
                              <span className="navbar4-text51">Coconut Oil Pulling Complex</span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div data-thq="thq-dropdown" className="navbar4-thq-dropdown7 list-item">
                  <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle34">
                    <span className="navbar4-text35 nav">
                      {props.text713 ?? (
                        <Fragment>
                          <span className="navbar4-text65">Our Services</span>
                        </Fragment>
                      )}
                    </span>
                    <div data-thq="thq-dropdown-arrow" className="navbar4-dropdown-arrow7">
                      <svg viewBox="0 0 1024 1024" className="navbar4-icon28">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul data-thq="thq-dropdown-list" className="navbar4-dropdown-list7">
                    <li data-thq="thq-dropdown" className="navbar4-dropdown28 list-item">
                      <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle35">
                        <span className="navbar4-text36 nav">
                          {props.text1413 ?? (
                            <Fragment>
                              <span className="navbar4-text76">At-Home Oral Health Test Kit</span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </li>
                    <li data-thq="thq-dropdown" className="navbar4-dropdown29 list-item">
                      <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle36">
                        <span className="navbar4-text37 nav">
                          {props.text2413 ?? (
                            <Fragment>
                              <span className="navbar4-text60">
                                At-Home Respiratory Pathogen PCR Kit
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </li>
                    <li data-thq="thq-dropdown" className="navbar4-dropdown30 list-item">
                      <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle37">
                        <span className="navbar4-text38 nav">
                          {props.text3513 ?? (
                            <Fragment>
                              <span className="navbar4-text50">Coconut Oil Pulling Complex</span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div data-thq="thq-dropdown" className="navbar4-thq-dropdown8 list-item">
                  <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle38">
                    <span className="navbar4-text39 nav">
                      {props.text712 ?? (
                        <Fragment>
                          <span className="navbar4-text62">Our Company</span>
                        </Fragment>
                      )}
                    </span>
                    <div data-thq="thq-dropdown-arrow" className="navbar4-dropdown-arrow8">
                      <svg viewBox="0 0 1024 1024" className="navbar4-icon30">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul data-thq="thq-dropdown-list" className="navbar4-dropdown-list8">
                    <li data-thq="thq-dropdown" className="navbar4-dropdown31 list-item">
                      <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle39">
                        <span className="navbar4-text40 nav">
                          {props.text1412 ?? (
                            <Fragment>
                              <span className="navbar4-text49">At-Home Oral Health Test Kit</span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </li>
                    <li data-thq="thq-dropdown" className="navbar4-dropdown32 list-item">
                      <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle40">
                        <span className="navbar4-text41 nav">
                          {props.text2412 ?? (
                            <Fragment>
                              <span className="navbar4-text55">
                                At-Home Respiratory Pathogen PCR Kit
                              </span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </li>
                    <li data-thq="thq-dropdown" className="navbar4-dropdown33 list-item">
                      <div data-thq="thq-dropdown-toggle" className="navbar4-dropdown-toggle41">
                        <span className="navbar4-text42 nav">
                          {props.text3512 ?? (
                            <Fragment>
                              <span className="navbar4-text61">Coconut Oil Pulling Complex</span>
                            </Fragment>
                          )}
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <a
                  href={props.textUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="nav navbar4-link1"
                >
                  {props.text9 ?? (
                    <Fragment>
                      <span className="navbar4-text57">Shop</span>
                    </Fragment>
                  )}
                </a>
                <a
                  href={props.textUrl1}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="nav navbar4-link2"
                >
                  {props.text10 ?? (
                    <Fragment>
                      <span className="navbar4-text67">Blog</span>
                    </Fragment>
                  )}
                </a>
              </nav>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .navbar4-container {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar4-navbar-interactive {
            width: 100%;
            display: flex;
            max-width: var(--dl-layout-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: space-between;
          }
          .navbar4-image1 {
            width: 177px;
            height: 38px;
          }
          .navbar4-desktop-menu {
            flex: 1;
            display: flex;
            align-items: stretch;
            justify-content: flex-start;
          }
          .navbar4-links1 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar4-thq-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle10 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius2);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-text10 {
            color: #ffffff;
            font-style: normal;
            text-align: center;
            margin-right: 4px;
            vertical-align: middle;
          }
          .navbar4-dropdown-arrow1 {
            transition: 0.3s;
          }
          .navbar4-icon10 {
            color: white;
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .navbar4-dropdown-list1 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #002e53;
            list-style-position: inside;
          }
          .navbar4-dropdown10 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle11 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle11:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text11 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-dropdown11 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle12 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle12:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text12 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-dropdown12 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle13 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle13:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text13 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-thq-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle14 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius2);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-text14 {
            color: #ffffff;
            font-style: normal;
            text-align: center;
            margin-right: 4px;
            vertical-align: middle;
          }
          .navbar4-dropdown-arrow2 {
            transition: 0.3s;
          }
          .navbar4-icon12 {
            color: white;
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .navbar4-dropdown-list2 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #002e53;
            list-style-position: inside;
          }
          .navbar4-dropdown13 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle15 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle15:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text15 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-dropdown14 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle16 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle16:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text16 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-dropdown15 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle17 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle17:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text17 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-thq-dropdown3 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle18 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius2);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-text18 {
            color: #ffffff;
            font-style: normal;
            text-align: center;
            margin-right: 4px;
            vertical-align: middle;
          }
          .navbar4-dropdown-arrow3 {
            transition: 0.3s;
          }
          .navbar4-icon14 {
            color: white;
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .navbar4-dropdown-list3 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #002e53;
            list-style-position: inside;
          }
          .navbar4-dropdown16 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle19 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle19:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text19 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-dropdown17 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle20 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle20:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text20 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-dropdown18 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle21 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle21:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text21 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-thq-dropdown4 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle22 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius2);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-text22 {
            color: #ffffff;
            font-style: normal;
            text-align: center;
            margin-right: 4px;
            vertical-align: middle;
          }
          .navbar4-dropdown-arrow4 {
            transition: 0.3s;
          }
          .navbar4-icon16 {
            color: white;
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .navbar4-dropdown-list4 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #002e53;
            list-style-position: inside;
          }
          .navbar4-dropdown19 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle23 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle23:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text23 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-dropdown20 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle24 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle24:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text24 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-dropdown21 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle25 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle25:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text25 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-thq-dropdown5 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle26 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius2);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-text26 {
            color: #ffffff;
            font-style: normal;
            text-align: center;
            margin-right: 4px;
            vertical-align: middle;
          }
          .navbar4-dropdown-arrow5 {
            transition: 0.3s;
          }
          .navbar4-icon18 {
            color: white;
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .navbar4-dropdown-list5 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #002e53;
            list-style-position: inside;
          }
          .navbar4-dropdown22 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle27 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle27:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text27 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-dropdown23 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle28 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle28:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text28 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-dropdown24 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle29 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle29:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text29 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-buttons {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-twounits);
          }
          .navbar4-action1 {
            display: flex;
            flex-direction: row;
            text-transform: capitalize;
            background-color: var(--dl-color-theme-secondary2);
          }
          .navbar4-text30 {
            font-size: 15px;
            font-style: normal;
            font-weight: 300;
          }
          .navbar4-burger-menu {
            display: none;
          }
          .navbar4-icon22 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar4-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-layout-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar4-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar4-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .navbar4-logo {
            height: 3rem;
          }
          .navbar4-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar4-icon24 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar4-links2 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .navbar4-thq-dropdown6 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle30 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius2);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-text31 {
            color: #ffffff;
            font-style: normal;
            text-align: center;
            margin-right: 4px;
            vertical-align: middle;
          }
          .navbar4-dropdown-arrow6 {
            transition: 0.3s;
          }
          .navbar4-icon26 {
            color: white;
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .navbar4-dropdown-list6 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #002e53;
            list-style-position: inside;
          }
          .navbar4-dropdown25 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle31 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle31:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text32 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-dropdown26 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle32 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle32:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text33 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-dropdown27 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle33 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle33:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text34 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-thq-dropdown7 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle34 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius2);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-text35 {
            color: #ffffff;
            font-style: normal;
            text-align: center;
            margin-right: 4px;
            vertical-align: middle;
          }
          .navbar4-dropdown-arrow7 {
            transition: 0.3s;
          }
          .navbar4-icon28 {
            color: white;
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .navbar4-dropdown-list7 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #002e53;
            list-style-position: inside;
          }
          .navbar4-dropdown28 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle35 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle35:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text36 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-dropdown29 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle36 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle36:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text37 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-dropdown30 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle37 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle37:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text38 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-thq-dropdown8 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle38 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius2);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-text39 {
            color: #ffffff;
            font-style: normal;
            text-align: center;
            margin-right: 4px;
            vertical-align: middle;
          }
          .navbar4-dropdown-arrow8 {
            transition: 0.3s;
          }
          .navbar4-icon30 {
            color: white;
            width: 18px;
            height: 18px;
            transition: 0.3s;
          }
          .navbar4-dropdown-list8 {
            left: 0%;
            width: max-content;
            display: none;
            z-index: 100;
            position: absolute;
            min-width: 100%;
            transition: 0.3s;
            align-items: stretch;
            border-color: #d9d9d9;
            border-width: 1px;
            border-radius: var(--dl-layout-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: #002e53;
            list-style-position: inside;
          }
          .navbar4-dropdown31 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle39 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle39:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text40 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-dropdown32 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle40 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle40:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text41 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-dropdown33 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-layout-radius-radius2);
          }
          .navbar4-dropdown-toggle41 {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-layout-space-halfunit);
            padding-left: var(--dl-layout-space-unit);
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: var(--dl-layout-space-unit);
            padding-bottom: var(--dl-layout-space-halfunit);
          }
          .navbar4-dropdown-toggle41:hover {
            fill: #fff;
            color: #fff;
            background-color: #595959;
          }
          .navbar4-text42 {
            color: #ffffff;
            width: 100%;
            cursor: pointer;
            display: flex;
            font-style: normal;
          }
          .navbar4-text43 {
            display: inline-block;
          }
          .navbar4-text44 {
            color: rgb(25, 24, 24);
            display: inline-block;
            font-size: 20px;
            font-style: normal;
            font-family: 'Poppins';
            font-weight: 300;
            text-transform: none;
            text-decoration: none;
          }
          .navbar4-text45 {
            display: inline-block;
          }
          .navbar4-text46 {
            display: inline-block;
          }
          .navbar4-text47 {
            display: inline-block;
            font-size: 15px;
            font-style: normal;
            font-weight: 300;
          }
          .navbar4-text48 {
            display: inline-block;
          }
          .navbar4-text49 {
            display: inline-block;
          }
          .navbar4-text50 {
            display: inline-block;
          }
          .navbar4-text51 {
            display: inline-block;
          }
          .navbar4-text52 {
            display: inline-block;
          }
          .navbar4-text53 {
            display: inline-block;
            font-style: normal;
          }
          .navbar4-text54 {
            display: inline-block;
            font-style: normal;
          }
          .navbar4-text55 {
            display: inline-block;
          }
          .navbar4-text56 {
            display: inline-block;
          }
          .navbar4-text57 {
            display: inline-block;
          }
          .navbar4-text58 {
            display: inline-block;
          }
          .navbar4-text59 {
            display: inline-block;
            font-style: normal;
          }
          .navbar4-text60 {
            display: inline-block;
          }
          .navbar4-text61 {
            display: inline-block;
          }
          .navbar4-text62 {
            display: inline-block;
            font-style: normal;
          }
          .navbar4-text63 {
            display: inline-block;
          }
          .navbar4-text64 {
            display: inline-block;
          }
          .navbar4-text65 {
            display: inline-block;
            font-style: normal;
          }
          .navbar4-text66 {
            display: inline-block;
          }
          .navbar4-text67 {
            display: inline-block;
          }
          .navbar4-text68 {
            display: inline-block;
            font-style: normal;
          }
          .navbar4-text69 {
            display: inline-block;
          }
          .navbar4-text70 {
            display: inline-block;
          }
          .navbar4-text71 {
            display: inline-block;
          }
          .navbar4-text72 {
            display: inline-block;
          }
          .navbar4-text73 {
            display: inline-block;
          }
          .navbar4-text74 {
            display: inline-block;
          }
          .navbar4-text75 {
            display: inline-block;
            font-style: normal;
          }
          .navbar4-text76 {
            display: inline-block;
          }
          .navbar4-text77 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .navbar4-image1 {
              width: var(--dl-layout-size-large);
              height: auto;
            }
            .navbar4-desktop-menu {
              display: none;
            }
            .navbar4-dropdown-list1 {
              display: none;
            }
            .navbar4-dropdown-list2 {
              display: none;
            }
            .navbar4-dropdown-list3 {
              display: none;
            }
            .navbar4-dropdown-list4 {
              display: none;
            }
            .navbar4-dropdown-list5 {
              display: none;
            }
            .navbar4-burger-menu {
              display: flex;
            }
            .navbar4-icon22 {
              fill: var(--dl-color-theme-secondary1);
              width: 30px;
              height: auto;
            }
            .navbar4-icon24 {
              fill: var(--dl-color-theme-secondary1);
              width: 30px;
              height: auto;
            }
            .navbar4-links2 {
              width: 100%;
              align-items: flex-start;
              flex-direction: column;
            }
            .navbar4-dropdown-list6 {
              top: 0;
              left: 100%;
              display: none;
            }
            .navbar4-dropdown-list7 {
              top: 0;
              left: 100%;
              display: none;
            }
            .navbar4-dropdown-list8 {
              top: 0;
              left: 100%;
              display: none;
            }
            .navbar4-link1 {
              fill: var(--dl-color-theme-secondary1);
              color: var(--dl-color-theme-secondary1);
              padding: var(--dl-layout-space-halfunit);
            }
            .navbar4-link2 {
              fill: var(--dl-color-theme-secondary1);
              color: var(--dl-color-theme-secondary1);
              padding: var(--dl-layout-space-halfunit);
            }
          }
          @media (max-width: 767px) {
            .navbar4-navbar-interactive {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .navbar4-burger-menu {
              align-items: center;
              justify-content: center;
            }
            .navbar4-icon22 {
              fill: var(--dl-color-theme-secondary1);
              width: 30px;
              height: auto;
            }
            .navbar4-icon24 {
              fill: var(--dl-color-theme-secondary1);
              width: 30px;
              height: auto;
            }
            .navbar4-links2 {
              width: 100%;
            }
            .navbar4-icon26 {
              fill: var(--dl-color-theme-secondary1);
            }
            .navbar4-icon28 {
              fill: var(--dl-color-theme-secondary1);
            }
            .navbar4-icon30 {
              fill: var(--dl-color-theme-secondary1);
            }
          }
          @media (max-width: 479px) {
            .navbar4-navbar-interactive {
              padding: var(--dl-layout-space-unit);
            }
            .navbar4-image1 {
              width: var(--dl-layout-size-medium);
            }
            .navbar4-dropdown-list1 {
              display: none;
            }
            .navbar4-dropdown-list2 {
              display: none;
            }
            .navbar4-dropdown-list3 {
              display: none;
            }
            .navbar4-dropdown-list4 {
              display: none;
            }
            .navbar4-dropdown-list5 {
              display: none;
            }
            .navbar4-icon22 {
              fill: var(--dl-color-theme-secondary1);
              width: 25px;
              height: auto;
            }
            .navbar4-mobile-menu {
              padding: var(--dl-layout-space-unit);
            }
            .navbar4-logo {
              width: var(--dl-layout-size-large);
              height: auto;
            }
            .navbar4-icon24 {
              fill: var(--dl-color-theme-secondary1);
              width: 30px;
              height: auto;
            }
            .navbar4-links2 {
              align-items: flex-start;
              flex-direction: column;
            }
            .navbar4-dropdown-toggle30 {
              padding: var(--dl-layout-space-halfunit);
            }
            .navbar4-icon26 {
              fill: var(--dl-color-theme-secondary1);
            }
            .navbar4-dropdown-list6 {
              top: 0;
              left: 100%;
              width: 180px;
              display: none;
              min-width: auto;
            }
            .navbar4-dropdown-toggle34 {
              padding: var(--dl-layout-space-halfunit);
            }
            .navbar4-icon28 {
              fill: var(--dl-color-theme-secondary1);
            }
            .navbar4-dropdown-list7 {
              top: 0;
              left: 100%;
              width: 180px;
              display: none;
              min-width: auto;
            }
            .navbar4-dropdown-toggle38 {
              padding: var(--dl-layout-space-halfunit);
            }
            .navbar4-icon30 {
              fill: var(--dl-color-theme-secondary1);
            }
            .navbar4-dropdown-list8 {
              top: 0;
              left: 100%;
              width: 180px;
              display: none;
              min-width: auto;
            }
            .navbar4-text54 {
              font-style: normal;
            }
            .navbar4-text62 {
              font-style: normal;
            }
            .navbar4-text65 {
              font-style: normal;
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar4;
