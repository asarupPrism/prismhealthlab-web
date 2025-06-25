'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut, Pie } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export default function GIRoadmap() {
  const brilliantBlues = {
    dark: '#004AAD',
    medium: '#0094D1',
    light: '#78C0E0',
    lighter: '#C1E7F4',
    bg: '#F2F2F2',
  };

  const sharedChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#374151',
          font: {
            family: "'Inter', sans-serif",
          },
        },
      },
      tooltip: {},
    },
    scales: {
      y: {
        ticks: {
          color: '#4b5563',
          font: { family: "'Inter', sans-serif" },
        },
        grid: { color: '#e5e7eb' },
      },
      x: {
        ticks: {
          color: '#4b5563',
          font: { family: "'Inter', sans-serif" },
        },
        grid: { display: false },
      },
    },
  };

  const competitorPriceData = {
    labels: [
      'Our Proposed Price',
      'Diagnostic Solutions GI-MAP',
      'Genova GI-Effects (Low Cash Price)',
      "Doctor's Data GI360",
      'Genova GI-Effects (Billed to Insurance)',
    ],
    datasets: [
      {
        label: 'Test Price (USD)',
        data: [349, 425, 439, 500, 2613],
        backgroundColor: [
          brilliantBlues.dark,
          brilliantBlues.medium,
          brilliantBlues.light,
          brilliantBlues.lighter,
          '#ef4444',
        ],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  const competitorPriceOptions = {
    ...sharedChartOptions,
    scales: {
      y: {
        ...sharedChartOptions.scales.y,
        beginAtZero: true,
        ticks: {
          ...sharedChartOptions.scales.y.ticks,
          callback: (value: string | number) => '$' + value,
        },
      },
      x: {
        ...sharedChartOptions.scales.x,
        ticks: {
          ...sharedChartOptions.scales.x.ticks,
          maxRotation: 45,
          minRotation: 45,
        },
      },
    },
    plugins: {
      ...sharedChartOptions.plugins,
      legend: { display: false },
    },
  };

  const panelCompositionData = {
    labels: [
      'Inflammation/Immunology',
      'Digestion/Absorption',
      'Microbiome Metabolites',
      'Microbiome Composition (qPCR)',
      'Pathogens',
    ],
    datasets: [
      {
        label: 'Panel Composition',
        data: [25, 15, 15, 25, 20],
        backgroundColor: [
          brilliantBlues.dark,
          brilliantBlues.medium,
          '#34d399',
          brilliantBlues.light,
          '#f59e0b',
        ],
        hoverOffset: 4,
      },
    ],
  };

  const panelCompositionOptions = {
    ...sharedChartOptions,
    cutout: '60%',
    plugins: {
      ...sharedChartOptions.plugins,
      legend: {
        ...sharedChartOptions.plugins.legend,
        position: 'right' as const,
      },
    },
    scales: { y: { display: false }, x: { display: false } },
  };

  const cogsData = {
    labels: [
      'qPCR Reagents',
      'ELISA/Immunoassays',
      'Direct Labor',
      'Kit & Logistics',
      'GC-FID & Chem',
      'Other (Depr., OH, Plastics)',
    ],
    datasets: [
      {
        label: 'COGS Breakdown',
        data: [28, 25, 18, 15, 8, 22],
        backgroundColor: [
          brilliantBlues.dark,
          brilliantBlues.medium,
          brilliantBlues.light,
          '#f59e0b',
          '#34d399',
          brilliantBlues.lighter,
        ],
        hoverOffset: 4,
      },
    ],
  };

  const cogsOptions = {
    ...sharedChartOptions,
    plugins: {
      ...sharedChartOptions.plugins,
      legend: {
        ...sharedChartOptions.plugins.legend,
        position: 'right' as const,
      },
    },
    scales: { y: { display: false }, x: { display: false } },
  };

  const marginData = {
    labels: ['Our Wholesale Model', 'Our DTC Model'],
    datasets: [
      {
        label: 'Cost of Goods (COGS)',
        data: [116, 116],
        backgroundColor: '#fb923c',
      },
      {
        label: 'Gross Margin',
        data: [163, 233],
        backgroundColor: '#34d399',
      },
    ],
  };

  const marginOptions = {
    ...sharedChartOptions,
    indexAxis: 'y' as const,
    scales: {
      x: {
        stacked: true,
        ticks: {
          callback: (value: string | number) => '$' + value,
          color: '#4b5563',
          font: { family: "'Inter', sans-serif" },
        },
        grid: { color: '#e5e7eb' },
      },
      y: {
        stacked: true,
        ticks: {
          color: '#4b5563',
          font: { family: "'Inter', sans-serif" },
        },
        grid: { display: false },
      },
    },
  };

  return (
    <div
      className="text-gray-800 antialiased"
      style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#F2F2F2' }}
    >
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <header className="text-center my-12">
          <h1
            className="text-4xl md:text-6xl font-black tracking-tight"
            style={{
              background: 'linear-gradient(90deg, #004AAD, #0094D1)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            The Gut Health Market is Broken.
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Incumbents thrive on opaque pricing and analytical bloat. We&apos;re launching a
            clinically superior, cost-effective, and transparent alternative.
          </p>
        </header>

        <main className="space-y-16">
          <section id="market-opportunity">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">A Multi-Billion Dollar Opportunity</h2>
              <p className="text-lg text-gray-500 mt-2">
                The comprehensive stool testing market is large and growing rapidly.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
              <div
                className="p-6 text-center"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '0.75rem',
                  boxShadow:
                    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                }}
              >
                <div className="text-5xl font-extrabold" style={{ color: '#004AAD' }}>
                  $2.3B
                </div>
                <p className="mt-2 text-gray-600">Peak GI Stool Testing Market Value (2023)</p>
              </div>
              <div
                className="p-6 text-center"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '0.75rem',
                  boxShadow:
                    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                }}
              >
                <div className="text-5xl font-extrabold" style={{ color: '#004AAD' }}>
                  7.8%
                </div>
                <p className="mt-2 text-gray-600">Projected Market CAGR Through 2033</p>
              </div>
              <div
                className="p-6 text-center md:col-span-2 lg:col-span-1"
                style={{
                  backgroundColor: 'white',
                  borderRadius: '0.75rem',
                  boxShadow:
                    '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                }}
              >
                <div className="text-5xl font-extrabold" style={{ color: '#004AAD' }}>
                  $2,613
                </div>
                <p className="mt-2 text-gray-600">
                  Incumbent&apos;s Billed Insurance Price vs. ~$500 Cash Price
                </p>
                <p className="text-sm text-red-500 font-semibold mt-1">
                  This is the key customer pain point.
                </p>
              </div>
            </div>
          </section>

          <section id="competition">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">The Competitive Battleground</h2>
              <p className="text-lg text-gray-500 mt-2">
                Our strategy directly targets the weaknesses of the market leader.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div
                className="relative w-full mx-auto"
                style={{
                  maxWidth: '600px',
                  height: '300px',
                  maxHeight: '400px',
                }}
              >
                <Bar data={competitorPriceData} options={competitorPriceOptions} />
              </div>
              <p className="text-center mt-4 text-gray-600">
                Our proposed direct cash price of $349 fundamentally undercuts incumbent retail
                prices, which are often obscured by complex and aggressive insurance billing
                practices.
              </p>
            </div>
          </section>

          <section id="product-strategy">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Smarter Science: Lean & High-Impact</h2>
              <p className="text-lg text-gray-500 mt-2">
                We replace analytical bloat with evidence-based clinical utility.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-xl text-center" style={{ color: '#004AAD' }}>
                  Our Core Panel Composition
                </h3>
                <div
                  className="relative w-full mx-auto"
                  style={{
                    maxWidth: '600px',
                    height: '320px',
                    maxHeight: '400px',
                  }}
                >
                  <Doughnut data={panelCompositionData} options={panelCompositionOptions} />
                </div>
                <p className="text-center mt-4 text-gray-600">
                  Our panel is rationally designed, focusing on functional domains with the highest
                  diagnostic value, eliminating redundant and low-utility markers that inflate
                  costs.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                <h3 className="font-bold text-xl text-center" style={{ color: '#004AAD' }}>
                  Modular Add-Ons for Customization
                </h3>
                <div className="flex-grow space-y-4 mt-4">
                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: '#C1E7F4', opacity: 0.3 }}
                  >
                    <h4 className="font-semibold" style={{ color: '#004AAD' }}>
                      Inflammation Plus Module (+$79)
                    </h4>
                    <p className="text-sm text-gray-700">
                      Adds EPX and Zonulin for deep dives into allergic inflammation and intestinal
                      permeability.
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: '#C1E7F4', opacity: 0.3 }}
                  >
                    <h4 className="font-semibold" style={{ color: '#004AAD' }}>
                      Yeast/Mycology Module (+$99)
                    </h4>
                    <p className="text-sm text-gray-700">
                      Comprehensive yeast/mold culture with MALDI-TOF ID and sensitivity testing.
                    </p>
                  </div>
                  <div
                    className="p-4 rounded-lg"
                    style={{ backgroundColor: '#C1E7F4', opacity: 0.3 }}
                  >
                    <h4 className="font-semibold" style={{ color: '#004AAD' }}>
                      Full Microbiome Module (+$299)
                    </h4>
                    <p className="text-sm text-gray-700">
                      Premium shotgun metagenomics for research-grade, species-level analysis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="cogs">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">The Cost Advantage Blueprint</h2>
              <p className="text-lg text-gray-500 mt-2">
                A ruthless focus on efficiency enables our disruptive pricing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-xl text-center" style={{ color: '#004AAD' }}>
                  Cost of Goods Breakdown (Target: $116)
                </h3>
                <div
                  className="relative w-full mx-auto"
                  style={{
                    maxWidth: '600px',
                    height: '320px',
                    maxHeight: '400px',
                  }}
                >
                  <Pie data={cogsData} options={cogsOptions} />
                </div>
                <p className="text-center mt-4 text-gray-600">
                  Smart reagent sourcing, automation, and logistics are key to keeping our COGS low.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="font-bold text-xl text-center" style={{ color: '#004AAD' }}>
                  The $20+ Logistics Advantage
                </h3>
                <p className="text-center text-gray-600 mb-6">
                  Our kit design eliminates the need for costly cold-chain shipping.
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Competitor Model: Cold Chain</h4>
                    <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                      <div
                        className="bg-red-500 h-4 rounded-full"
                        style={{ width: '90%' }}
                        title="$25-$40"
                      ></div>
                    </div>
                    <p className="text-sm text-right font-bold text-red-500">$25 - $40 / Kit</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Our Model: Ambient Shipping</h4>
                    <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                      <div
                        className="h-4 rounded-full"
                        style={{ width: '20%', backgroundColor: '#0094D1' }}
                        title="$4.50-$6.50"
                      ></div>
                    </div>
                    <p className="text-sm text-right font-bold" style={{ color: '#004AAD' }}>
                      $4.50 - $6.50 / Kit
                    </p>
                  </div>
                </div>
                <p className="text-center mt-6 text-gray-600">
                  Using an ambient DNA stabilization buffer saves over 80% on return shipping costs
                  per test.
                </p>
              </div>
            </div>
          </section>

          <section id="financials">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">The Winning Financial Formula</h2>
              <p className="text-lg text-gray-500 mt-2">
                Disruptive pricing that still delivers exceptional margins.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 md:col-span-2">
              <h3 className="font-bold text-xl text-center" style={{ color: '#004AAD' }}>
                Price vs. Cost: A Path to 58% Gross Margin
              </h3>
              <div
                className="relative w-full mx-auto"
                style={{
                  maxWidth: '600px',
                  height: '400px',
                  maxHeight: '450px',
                }}
              >
                <Bar data={marginData} options={marginOptions} />
              </div>
              <p className="text-center mt-4 text-gray-600">
                Our model proves that ethical, transparent pricing is not just possible, but highly
                profitable.
              </p>
            </div>
          </section>

          <section id="roadmap">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold">Our Aggressive 3-Month Roadmap to Launch</h2>
              <p className="text-lg text-gray-500 mt-2">
                A high-intensity sprint requiring simultaneous execution of all critical
                workstreams.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Month 1 */}
                <div className="flex-1">
                  <h3
                    className="font-bold text-xl text-center border-b-2 pb-2 mb-4"
                    style={{ color: '#004AAD' }}
                  >
                    Month 1 (Weeks 1-4)
                  </h3>
                  <div className="space-y-3">
                    <div
                      className="flex items-center justify-center text-white text-sm font-semibold p-2 rounded-md text-center"
                      style={{ backgroundColor: '#0094D1' }}
                    >
                      Site & Instrument Setup
                    </div>
                    <div
                      className="flex items-center justify-center text-white text-sm font-semibold p-2 rounded-md text-center"
                      style={{ backgroundColor: '#004AAD' }}
                    >
                      Begin Validation Sprint
                    </div>
                  </div>
                </div>
                {/* Month 2 */}
                <div className="flex-1">
                  <h3
                    className="font-bold text-xl text-center border-b-2 pb-2 mb-4"
                    style={{ color: '#004AAD' }}
                  >
                    Month 2 (Weeks 5-8)
                  </h3>
                  <div className="space-y-3">
                    <div
                      className="flex items-center justify-center text-white text-sm font-semibold p-2 rounded-md text-center"
                      style={{ backgroundColor: '#004AAD' }}
                    >
                      Complete Validation Sprint
                    </div>
                    <div
                      className="flex items-center justify-center text-white text-sm font-semibold p-2 rounded-md text-center"
                      style={{ backgroundColor: '#78C0E0' }}
                    >
                      LIMS Config & Validation
                    </div>
                    <div
                      className="flex items-center justify-center text-white text-sm font-semibold p-2 rounded-md text-center"
                      style={{ backgroundColor: '#f59e0b' }}
                    >
                      Begin Commercial Prep
                    </div>
                  </div>
                </div>
                {/* Month 3 */}
                <div className="flex-1">
                  <h3
                    className="font-bold text-xl text-center border-b-2 pb-2 mb-4"
                    style={{ color: '#004AAD' }}
                  >
                    Month 3 (Weeks 9-12)
                  </h3>
                  <div className="space-y-3">
                    <div
                      className="flex items-center justify-center text-white text-sm font-semibold p-2 rounded-md text-center"
                      style={{ backgroundColor: '#78C0E0' }}
                    >
                      Finalize LIMS
                    </div>
                    <div
                      className="flex items-center justify-center text-white text-sm font-semibold p-2 rounded-md text-center"
                      style={{ backgroundColor: '#9ca3af' }}
                    >
                      Final SOPs & Training
                    </div>
                    <div
                      className="flex items-center justify-center text-white text-sm font-semibold p-2 rounded-md text-center"
                      style={{ backgroundColor: '#10b981' }}
                    >
                      <span>Go-Live!</span>
                      <span className="ml-2 text-xl">🚀</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-center mt-6 text-gray-600">
                <strong>Go-Live in 90 Days.</strong> This accelerated timeline is high-risk and
                assumes immediate capital availability, pre-vetted vendors, and a core team ready on
                Day 1. It merges analytical and clinical validation into a single, intense 6-week
                sprint, a significant compression of the standard process.
              </p>
            </div>
          </section>
        </main>

        <footer className="text-center mt-20 py-8 border-t border-gray-300">
          <p className="text-gray-600">Disrupting Diagnostics. Built on Transparency.</p>
          <p className="text-sm text-gray-400 mt-2">
            This infographic visualizes the strategic roadmap for a new comprehensive stool panel.
            All data derived from the provided planning documentation.
          </p>
        </footer>
      </div>
    </div>
  );
}
