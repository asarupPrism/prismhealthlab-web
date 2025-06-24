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
    <div className="min-h-screen bg-white">
      <Navbar4 />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#002e53] to-[#0d4a7d] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              At-Home Lab Testing
              <br />
              Made Easy.
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Personalized at-home testing made easy by a world class CLIA Certified Laboratory
              built by doctors.
            </p>
            <button className="bg-[#7aff6a] text-[#002e53] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#6ee85a] transition-colors">
              Explore Products
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-lg text-gray-600">Comprehensive at-home testing solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <img
                src="/phone-test-mock-up-for-web-789x1024-1500w.png"
                alt="Test Kit"
                className="w-32 h-32 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">At-Home Oral Health Test Kit</h3>
              <p className="text-gray-600 mb-4">Comprehensive oral health analysis from home</p>
              <div className="text-2xl font-bold text-[#002e53]">$359.97</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <img
                src="/prism_website_product-images_01-2-300w.png"
                alt="PCR Kit"
                className="w-32 h-32 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">At-Home Respiratory Pathogen PCR Kit</h3>
              <p className="text-gray-600 mb-4">Advanced PCR testing for respiratory pathogens</p>
              <div className="text-2xl font-bold text-[#002e53]">$359.97</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <img
                src="/6-300w.png"
                alt="Oil Pulling"
                className="w-32 h-32 mx-auto mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">Coconut Oil Pulling Complex</h3>
              <p className="text-gray-600 mb-4">Natural oral health enhancement solution</p>
              <div className="text-2xl font-bold text-[#002e53]">$29.97</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Trusted & Certified</h2>
          <div className="flex justify-center items-center space-x-8">
            <img src="/clia-200h.png" alt="CLIA Certified" className="h-16" />
            <img src="/hippa-200h.png" alt="HIPAA Compliant" className="h-16" />
          </div>
        </div>
      </section>

      <FAQ12 />
      <Footer3 />
    </div>
  );
}
