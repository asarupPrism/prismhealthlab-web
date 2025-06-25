import Navbar4 from '../components/navbar4';
import FAQ12 from '../components/faq12';
import Footer3 from '../components/footer3';

export const metadata = {
  title: 'PRISM Home Page',
  openGraph: {
    title: 'PRISM Home Page',
  },
};

export default function Home() {
  return (
    <div className="home-container10">
      <Navbar4 />

      {/* Hero Title */}
      <div className="home-hero-title">
        <h1 className="home-text135">
          <span>At-Home Lab Testing</span>
          <br />
          <span>Made Easy.​</span>
        </h1>
      </div>

      {/* Hero Subtext */}
      <div className="home-hero-subtext">
        <p className="home-text139">
          <span>Personalized at-home testing made easy by a world class CLIA Certified&nbsp;</span>
          <span>Laboratory built by doctors.​</span>
        </p>
      </div>

      {/* CTA Button */}
      <div className="home-cta1">
        <button type="button" className="home-button1 button">
          Explore
        </button>
      </div>

      {/* Subtitle - Over 20+ Tests */}
      <div className="home-subtitle1">
        <h2 className="home-text142">Over 20+ Tests Available​</h2>
      </div>

      {/* Test Categories */}
      <div className="home-container11">
        <div className="home-container12">
          <img alt="image" src="/untitled-1-03.svg" className="home-image10" />
          <span className="home-text143 ContPop18">General Health Tests​</span>
        </div>
        <div className="home-container13">
          <img alt="image" src="/untitled-1-02.svg" className="home-image11" />
          <span className="home-text144 ContPop18">Oral HealthTests​</span>
        </div>
        <div className="home-container14">
          <img alt="image" src="/untitled-1-01.svg" className="home-image12" />
          <span className="home-text145 ContPop18">STI Testing</span>
        </div>
      </div>

      {/* Title 2 - Personalized insights */}
      <div className="home-title2">
        <h1 className="home-text146">
          <span>Personalized insights that guide</span>
          <span>you all the way.​</span>
        </h1>
      </div>

      {/* Phone Mockup Image */}
      <div className="home-image1">
        <img
          alt="image"
          src="/phone-test-mock-up-for-web-789x1024-1500w.png"
          className="home-image13"
        />
      </div>

      {/* Paragraph 2 */}
      <div className="home-parag2">
        <p className="home-text149">
          <span className="home-text150">Don&apos;t guess.</span>
          <span>Let our personalized insights guide you to the best</span>
          <br />
          <span>possible outcomes</span>
          <span className="home-text154">based on the data.</span>
        </p>
      </div>

      {/* Data Visualization Section */}
      <div className="home-container15">
        <div className="home-container16">
          <div className="home-container17">
            <span className="home-text155">32</span>
            <span className="home-text156">miu/l​</span>
          </div>
          <div className="home-container18">
            <svg width="48" height="48" viewBox="0 0 48 48" className="home-icon10">
              <path
                d="M24.008 12.1V36M12 24l12-12l12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <span className="home-text157">30%​</span>
          </div>
          <div className="home-container19">
            <span className="home-text158 Content">
              <span>improvement since your last</span>
              <br />
              <span>test</span>
            </span>
          </div>
        </div>
        <div className="home-container20">
          <div className="home-container21">
            <span className="home-text162">Normal Range​</span>
            <img
              alt="image"
              src="/screenshot-2025-06-10-at-7.45.01-pm-200h.png"
              className="home-image14"
            />
            <span className="home-text163 Content">Your level</span>
          </div>
          <div className="home-container22">
            <p className="home-text164">
              <span className="home-text165">This is an</span>
              <span className="home-text166">optimal range.</span>
            </p>
            <p className="home-text167">
              <span className="Content">
                You have improved significnatly since your last test at
              </span>
              <span className="home-text169">15.22</span>
              <span className="Content">for</span>
              <br className="Content" />
              <span className="home-text172">Fusobacterium nucleatum.</span>
              <br className="Content" />
              <br className="Content" />
              <span className="Content">
                Continue to implement routines such as daily oil pulling & reducing
              </span>
              <br className="Content" />
              <span className="Content">acidic foods & drink.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Next Test Paragraph */}
      <div className="home-parag3">
        <p className="home-text178">
          <span>Your next test to stay on track:</span>
          <span className="home-text180">March 25th, 2025</span>
        </p>
      </div>

      {/* Subscribe/Order Section */}
      <div className="home-parag4">
        <svg width="48" height="48" viewBox="0 0 48 48" className="home-image2">
          <path
            d="M24.008 35.9V12M36 24L24 36L12 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <h2 className="home-text181">
          <span className="home-text182">Subscribe</span>
          <span>and stay on track</span>
        </h2>
        <p className="home-text184">
          <span>We automatically send you your tests on-time and at the appropriate</span>
          <br />
          <span>intervals so you don&apos;t have to worry about it.</span>
        </p>
        <span className="home-text188">or</span>
        <h2 className="home-text189">
          <span className="home-text190">Order</span>
          <span>à la carte</span>
        </h2>
        <p className="home-text192">
          <span>
            If you&apos;re looking for a one-off test, that&apos;s ok too. We still send you the
            full
          </span>
          <br />
          <span>range of personalized insights & recommendations.</span>
        </p>
      </div>

      {/* CLIA Certification Section */}
      <div className="home-clia">
        <h1 className="home-text196">CLIA Certified Precision​</h1>
        <p className="home-text197">
          <span className="home-text198">We take testing seriously, seriously. Our</span>
          <span className="home-text199">CLIA Certification</span>
          <span className="home-text200">
            places us at the highest possible standard of testing.
          </span>
          <br />
          <span>We are also proudly a</span>
          <span className="home-text203">HIPAA compliant laboratory.</span>
        </p>
        <div className="home-container23">
          <img alt="image" src="/clia-200h.png" className="home-image15" />
          <img alt="image" src="/hippa-200h.png" className="home-image16" />
        </div>
      </div>

      {/* Subscribe 1 */}
      <div className="home-subscribe1">
        <h2 className="home-text204">Limited Time Offer​</h2>
        <h2 className="home-text205">Subscribe for 30% off your first at-home health test.​</h2>
        <p className="home-text206 Content">
          Join our Prism health & wellness newsletter to receive updates, knowledge, and exclusive
          discounts.
        </p>
        <div className="home-container24">
          <input type="text" placeholder="Enter your email" className="home-input1 input" />
          <button type="button" className="home-button2 button">
            Subscribe
          </button>
        </div>
      </div>

      {/* Title 4 - Take the leap */}
      <div className="home-title4">
        <p className="home-text207">
          <span>Take the leap with</span>
          <span className="home-text209">thousands of others.</span>
        </p>
      </div>

      {/* Reviews Section */}
      <div className="home-reviews thq-section-padding">
        <div className="home-max-width thq-section-max-width">
          <div className="home-content thq-flex-row">
            <div className="home-column1 thq-flex-column thq-card">
              <div className="home-stars1">
                <svg viewBox="0 0 1024 1024" className="home-icon13 thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon15 thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon17 thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon19 thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon21 thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span className="home-text210 Content">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;
              </span>
              <div className="home-avatar1">
                <img
                  alt="Author Avatar"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHVzZXJ8ZW58MHx8fHwxNzEwOTQyNjEyfDA&ixlib=rb-4.0.3&w=1400"
                  className="home-avatar-image1 thq-img-round thq-img-ratio-1-1"
                />
                <div className="home-avatar-content1">
                  <span className="home-text211">Author Name</span>
                  <span className="home-text212 Content">Position, Company name</span>
                </div>
              </div>
            </div>
            <div className="home-column2 thq-flex-column thq-card">
              <div className="home-stars2">
                <svg viewBox="0 0 1024 1024" className="home-icon23 thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon25 thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon27 thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon29 thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon31 thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span className="home-text213 Content">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;
              </span>
              <div className="home-avatar2">
                <img
                  alt="Author Avatar"
                  src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=1400"
                  className="home-avatar-image2 thq-img-round thq-img-ratio-1-1"
                />
                <div className="home-avatar-content2">
                  <span className="home-text214">Author Name</span>
                  <span className="home-text215 Content">Position, Company name</span>
                </div>
              </div>
            </div>
            <div className="home-column3 thq-flex-column thq-card">
              <div className="home-stars3">
                <svg viewBox="0 0 1024 1024" className="home-icon33 thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon35 thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon37 thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon39 thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
                <svg viewBox="0 0 1024 1024" className="home-icon41 thq-icon-small">
                  <path d="M512 736l-264 160 70-300-232-202 306-26 120-282 120 282 306 26-232 202 70 300z"></path>
                </svg>
              </div>
              <span className="home-text216 Content">
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius
                enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;
              </span>
              <div className="home-avatar3">
                <img
                  alt="Author Avatar"
                  src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHx1c2VyfGVufDB8fHx8MTcxMDk0MjYxMnww&ixlib=rb-4.0.3&w=1400"
                  className="home-avatar-image3 thq-img-round thq-img-ratio-1-1"
                />
                <div className="home-avatar-content3">
                  <span className="home-text217">Author Name</span>
                  <span className="home-text218 Content">Position, Company name</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How Tests Work */}
      <div className="home-how-works">
        <h1 className="home-text219">How our tests work​</h1>
        <div className="home-container25">
          <div className="home-container26">
            <img alt="image" src="/1-2-200h.png" className="home-image17" />
            <span className="home-text220">Order the test​</span>
            <span className="home-text221">
              Order your kit online for a one-time test with all of the necessary materials that
              ship directly to you.
            </span>
          </div>
          <div className="home-container27">
            <img alt="image" src="/3-2-1024x1024-200h.png" className="home-image18" />
            <span className="home-text222">
              <span>Collect your sample</span>
              <br />
              <span>at-home​</span>
            </span>
            <span className="home-text226">
              Use the oral sponge to collect your saliva sample in the morning before eating or
              brushing. It&apos;s quick and easy.
            </span>
          </div>
          <div className="home-container28">
            <img alt="image" src="/5-1024x1024-200h.png" className="home-image19" />
            <span className="home-text227">Receive results​</span>
            <span className="home-text228">
              Receive your detailed PDF results via email within a few days, including pathogen
              detection and personalized health recommendations.
            </span>
          </div>
        </div>
      </div>

      {/* Title 5 - Most Affordable */}
      <div className="home-title5">
        <h1 className="home-text229">
          <span>The Most Affordable Tests On&nbsp;</span>
          <span>The Market​</span>
        </h1>
      </div>

      {/* Pricing Plans */}
      <div className="home-plans">
        <div className="home-container29">
          <div className="home-container30">
            <h2 className="home-text232">Choose Your Option</h2>
          </div>
          <div className="home-container31">
            <span className="home-text233">Prism Membership</span>
            <span className="home-text234">$42</span>
            <span className="home-text235">per month</span>
            <button type="button" className="home-button3 button">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Join Now</span>
            </button>
          </div>
          <div className="home-container32">
            <span className="home-text237">À La Carte</span>
            <span className="home-text238">$89 - $219</span>
            <span className="home-text239">per month</span>
            <button type="button" className="home-button4 button">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path
                  d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2s-.9-2-2-2M1 2v2h2l3.6 7.59l-1.35 2.45c-.16.28-.25.61-.25.96c0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12l.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2s2-.9 2-2s-.9-2-2-2"
                  fill="currentColor"
                ></path>
              </svg>
              <span>Order Now</span>
            </button>
          </div>
        </div>
        <div className="home-container33">
          <h2 className="home-text241">Ultra-Fast Turnarounds​</h2>
          <p className="home-text242">
            Receive your results within 2 business days. This is the fastest on the market.
          </p>
          <h2 className="home-text243">Personalized Insights​</h2>
          <p className="home-text244">
            Our user portal gives you a series of personalized insights and data tracking so
            it&apos;s easy to understand.
          </p>
          <h2 className="home-text245">At-Home Convenience​</h2>
          <p className="home-text246">
            Our user portal gives you a series of personalized insights and data tracking so
            it&apos;s easy to understand.
          </p>
        </div>
      </div>

      {/* Subscribe 2 */}
      <div className="home-subscribe2">
        <h2 className="home-text247">Limited Time Offer​</h2>
        <h2 className="home-text248">Subscribe for 30% off your first at-home health test.​</h2>
        <p className="home-text249 Content">
          Join our Prism health & wellness newsletter to receive updates, knowledge, and exclusive
          discounts.
        </p>
        <div className="home-container34">
          <input type="text" placeholder="Enter your email" className="home-input2 input" />
          <button type="button" className="home-button5 button">
            Subscribe
          </button>
        </div>
      </div>

      {/* Experts Section */}
      <div className="home-experts">
        <h1 className="home-text250">Expertly Crafted by Medical Professionals​</h1>
        <p className="home-text251">
          <span>
            Our diagnostic tests are meticulously developed by top-tier medical professionals and
            clinical experts at Prism Health.
          </span>
          <br />
          <br />
          <span>
            Trust our dedicated team to provide you with the most accurate insights into your oral
            health.
          </span>
        </p>
      </div>

      {/* Expert Photos */}
      <div className="home-experts-photos">
        <div className="home-container35">
          <img alt="image" src="/18-1024x717-300w.png" className="home-image20" />
          <h2 className="home-text256">Dr. Mehbub Kapadia, MD​</h2>
          <span className="home-text257">Medical Director</span>
        </div>
        <div className="home-container36">
          <img alt="image" src="/19-1024x717-300w.png" className="home-image21" />
          <h2 className="home-text258">Zul Kapadia​</h2>
          <span className="home-text259">President</span>
        </div>
        <div className="home-container37">
          <img alt="image" src="/20-1-300w.png" className="home-image22" />
          <h2 className="home-text260">Sameer Kapadia, MD​</h2>
          <span className="home-text261">Chief Strategy Director</span>
        </div>
        <div className="home-container38">
          <img
            alt="image"
            src="/prism_website_product-images_01-2-300w.png"
            className="home-image23"
          />
          <h2 className="home-text262">Abhi Sarup​</h2>
          <span className="home-text263">Lead Scientist</span>
        </div>
      </div>

      <FAQ12 />

      {/* HealthierTogether BBC Section */}
      <div className="home-healtier-bbc">
        <h1 className="home-text276">#HealthierTogether​</h1>
        <p className="home-text277">
          <span>
            Prism is proud to be featured in the #HealthierTogether series, produced by the
          </span>
          <span className="home-text279">WHO Foundation</span>
          <span>in&nbsp;</span>
          <span>collaboration with</span>
          <span className="home-text282">BBC StoryWorks.</span>
          <span>We are committed to making healthcare accessible to all.</span>
        </p>
      </div>

      {/* BBC Commercial Photos */}
      <div className="home-commercial-photos-bbc">
        <div className="home-bbc-photos1">
          <div className="home-container39">
            <img alt="image" src="/13-1024x717-300w.png" className="home-image24" />
          </div>
          <div className="home-container40">
            <img alt="image" src="/12-1024x717-300w.png" className="home-image25" />
          </div>
          <div className="home-container41">
            <img alt="image" src="/6-300w.png" className="home-image26" />
          </div>
        </div>
        <button type="button" className="home-button6 button">
          Watch Now
        </button>
        <span className="home-text284">As seen on​</span>
        <div className="home-bbc-photos2">
          <div className="home-container42">
            <img alt="image" src="/14-1024x717-300w.png" className="home-image27" />
          </div>
          <div className="home-container43">
            <img alt="image" src="/15-1024x717-300w.png" className="home-image28" />
          </div>
          <div className="home-container44">
            <img alt="image" src="/16-300w.png" className="home-image29" />
          </div>
        </div>
      </div>

      {/* Subscribe 3 */}
      <div className="home-subscribe3">
        <h2 className="home-text285">Limited Time Offer​</h2>
        <h2 className="home-text286">Subscribe for 30% off your first at-home health test.​</h2>
        <p className="home-text287 Content">
          Join our Prism health & wellness newsletter to receive updates, knowledge, and exclusive
          discounts.
        </p>
        <div className="home-container45">
          <input type="text" placeholder="Enter your email" className="home-input3 input" />
          <button type="button" className="home-button7 button">
            Subscribe
          </button>
        </div>
      </div>

      <Footer3 />
    </div>
  );
}
