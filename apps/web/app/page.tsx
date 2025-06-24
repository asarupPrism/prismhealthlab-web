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

      <FAQ12 />
      <Footer3 />
    </div>
  );
}
