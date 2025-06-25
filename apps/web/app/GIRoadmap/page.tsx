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
  // Uniform spacing system
  const spacing = {
    xs: '0.5rem', // 8px
    sm: '1rem', // 16px
    md: '1.5rem', // 24px
    lg: '2rem', // 32px
    xl: '3rem', // 48px
    xxl: '4rem', // 64px
  };

  // Minimalist color palette
  const colors = {
    primary: '#1f2937', // Gray 800
    secondary: '#6b7280', // Gray 500
    accent: '#3b82f6', // Blue 500
    background: '#ffffff', // White
    border: '#e5e7eb', // Gray 200
    surface: '#f9fafb', // Gray 50
    text: '#111827', // Gray 900
    textLight: '#6b7280', // Gray 500
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
          colors.accent,
          colors.secondary,
          colors.secondary,
          colors.secondary,
          '#dc2626', // Red for the problematic high price
        ],
        borderColor: colors.border,
        borderWidth: 1,
      },
    ],
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
        backgroundColor: ['#1f2937', '#374151', '#4b5563', '#6b7280', '#9ca3af'],
        borderWidth: 0,
      },
    ],
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
        backgroundColor: ['#1f2937', '#374151', '#4b5563', '#6b7280', '#9ca3af', '#d1d5db'],
        borderWidth: 0,
      },
    ],
  };

  const marginData = {
    labels: ['Our Wholesale Model', 'Our DTC Model'],
    datasets: [
      {
        label: 'Cost of Goods (COGS)',
        data: [116, 116],
        backgroundColor: colors.secondary,
      },
      {
        label: 'Gross Margin',
        data: [163, 233],
        backgroundColor: colors.accent,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 16,
          color: colors.text,
          font: {
            family: "'Inter', sans-serif",
            size: 12,
            weight: 400,
          },
        },
      },
      tooltip: {
        backgroundColor: colors.primary,
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: colors.border,
        borderWidth: 1,
        cornerRadius: 4,
        displayColors: true,
        usePointStyle: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: colors.border,
          drawBorder: false,
        },
        ticks: {
          color: colors.textLight,
          font: {
            family: "'Inter', sans-serif",
            size: 11,
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: colors.textLight,
          font: {
            family: "'Inter', sans-serif",
            size: 11,
          },
        },
      },
    },
  };

  const barOptions = {
    ...chartOptions,
    plugins: { ...chartOptions.plugins, legend: { display: false } },
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 12,
          color: colors.text,
          font: {
            family: "'Inter', sans-serif",
            size: 11,
            weight: 400,
          },
        },
      },
      tooltip: {
        backgroundColor: colors.primary,
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: colors.border,
        borderWidth: 1,
        cornerRadius: 4,
      },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 10,
          color: colors.text,
          font: {
            family: "'Inter', sans-serif",
            size: 10,
            weight: 400,
          },
        },
      },
      tooltip: {
        backgroundColor: colors.primary,
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: colors.border,
        borderWidth: 1,
        cornerRadius: 4,
      },
    },
  };

  const marginBarOptions = {
    ...chartOptions,
    indexAxis: 'y' as const,
    scales: {
      x: {
        stacked: true,
        grid: {
          color: colors.border,
          drawBorder: false,
        },
        ticks: {
          callback: (value: number | string) => '$' + value,
          color: colors.textLight,
          font: { family: "'Inter', sans-serif", size: 11 },
        },
      },
      y: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          color: colors.textLight,
          font: { family: "'Inter', sans-serif", size: 11 },
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto" style={{ padding: spacing.xl }}>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Gut Health Market is Broken
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Incumbents thrive on opaque pricing and analytical bloat. We&apos;re launching a
              clinically superior, cost-effective, and transparent alternative.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto" style={{ padding: spacing.xl }}>
        {/* Market Opportunity */}
        <section style={{ marginBottom: spacing.xxl }}>
          <div className="text-center" style={{ marginBottom: spacing.xl }}>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">Market Opportunity</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The comprehensive stool testing market is large and growing rapidly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="bg-white border border-gray-200 rounded-lg"
              style={{ padding: spacing.lg }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">$2.3B</div>
                <p className="text-gray-600">Peak GI Stool Testing Market Value (2023)</p>
              </div>
            </div>

            <div
              className="bg-white border border-gray-200 rounded-lg"
              style={{ padding: spacing.lg }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">7.8%</div>
                <p className="text-gray-600">Projected Market CAGR Through 2033</p>
              </div>
            </div>

            <div
              className="bg-white border border-gray-200 rounded-lg"
              style={{ padding: spacing.lg }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">$2,613</div>
                <p className="text-gray-600 mb-2">
                  Incumbent&apos;s Billed Insurance Price vs. ~$500 Cash Price
                </p>
                <p className="text-sm text-red-600 font-medium">Key customer pain point</p>
              </div>
            </div>
          </div>
        </section>

        {/* Competition */}
        <section style={{ marginBottom: spacing.xxl }}>
          <div className="text-center" style={{ marginBottom: spacing.xl }}>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">Competitive Analysis</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our strategy directly targets the weaknesses of the market leader.
            </p>
          </div>

          <div
            className="bg-white border border-gray-200 rounded-lg"
            style={{ padding: spacing.xl }}
          >
            <div className="relative w-full h-96">
              <Bar data={competitorPriceData} options={barOptions} />
            </div>
            <div className="mt-6 p-4 bg-gray-50 border-l-4 border-blue-500">
              <p className="text-gray-700">
                Our proposed direct cash price of $349 fundamentally undercuts incumbent retail
                prices, which are often obscured by complex and aggressive insurance billing
                practices.
              </p>
            </div>
          </div>
        </section>

        {/* Product Strategy */}
        <section style={{ marginBottom: spacing.xxl }}>
          <div className="text-center" style={{ marginBottom: spacing.xl }}>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">Product Strategy</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We replace analytical bloat with evidence-based clinical utility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              className="bg-white border border-gray-200 rounded-lg"
              style={{ padding: spacing.lg }}
            >
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">
                Core Panel Composition
              </h3>
              <div className="relative w-full h-80">
                <Doughnut data={panelCompositionData} options={doughnutOptions} />
              </div>
              <div className="mt-6 p-4 bg-gray-50">
                <p className="text-gray-700 text-sm">
                  Our panel is rationally designed, focusing on functional domains with the highest
                  diagnostic value, eliminating redundant and low-utility markers that inflate
                  costs.
                </p>
              </div>
            </div>

            <div
              className="bg-white border border-gray-200 rounded-lg"
              style={{ padding: spacing.lg }}
            >
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-6">
                Modular Add-Ons
              </h3>
              <div className="space-y-4">
                <div className="border border-gray-200 rounded p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Inflammation Plus Module</h4>
                      <p className="text-sm text-gray-600">
                        Adds EPX and Zonulin for deep dives into allergic inflammation and
                        intestinal permeability.
                      </p>
                    </div>
                    <span className="text-sm font-medium text-gray-900 bg-gray-100 px-2 py-1 rounded">
                      +$79
                    </span>
                  </div>
                </div>

                <div className="border border-gray-200 rounded p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Yeast/Mycology Module</h4>
                      <p className="text-sm text-gray-600">
                        Comprehensive yeast/mold culture with MALDI-TOF ID and sensitivity testing.
                      </p>
                    </div>
                    <span className="text-sm font-medium text-gray-900 bg-gray-100 px-2 py-1 rounded">
                      +$99
                    </span>
                  </div>
                </div>

                <div className="border border-gray-200 rounded p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-1">Full Microbiome Module</h4>
                      <p className="text-sm text-gray-600">
                        Premium shotgun metagenomics for research-grade, species-level analysis.
                      </p>
                    </div>
                    <span className="text-sm font-medium text-gray-900 bg-gray-100 px-2 py-1 rounded">
                      +$299
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Advantage */}
        <section style={{ marginBottom: spacing.xxl }}>
          <div className="text-center" style={{ marginBottom: spacing.xl }}>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">Cost Advantage</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A focus on efficiency enables our disruptive pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              className="bg-white border border-gray-200 rounded-lg"
              style={{ padding: spacing.lg }}
            >
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                Cost of Goods Breakdown
              </h3>
              <div className="text-center mb-6">
                <span className="inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded">
                  Target: $116
                </span>
              </div>
              <div className="relative w-full h-80">
                <Pie data={cogsData} options={pieOptions} />
              </div>
              <div className="mt-6 p-4 bg-gray-50">
                <p className="text-gray-700 text-sm">
                  Smart reagent sourcing, automation, and logistics are key to keeping our COGS low.
                </p>
              </div>
            </div>

            <div
              className="bg-white border border-gray-200 rounded-lg"
              style={{ padding: spacing.lg }}
            >
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                Logistics Advantage
              </h3>
              <p className="text-center text-gray-600 mb-6">
                Our kit design eliminates the need for costly cold-chain shipping.
              </p>

              <div className="space-y-6">
                <div className="border border-red-200 bg-red-50 rounded p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Competitor Model: Cold Chain</h4>
                  <div className="w-full bg-red-200 rounded-full h-4 relative">
                    <div className="bg-red-500 h-4 rounded-full" style={{ width: '90%' }}></div>
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-gray-900">
                      $25 - $40 / Kit
                    </div>
                  </div>
                </div>

                <div className="border border-blue-200 bg-blue-50 rounded p-4">
                  <h4 className="font-medium text-gray-900 mb-3">Our Model: Ambient Shipping</h4>
                  <div className="w-full bg-blue-200 rounded-full h-4 relative">
                    <div className="bg-blue-500 h-4 rounded-full" style={{ width: '20%' }}></div>
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-gray-900">
                      $4.50 - $6.50 / Kit
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-gray-50 border-l-4 border-blue-500">
                  <p className="text-gray-700 text-sm">
                    Using an ambient DNA stabilization buffer saves over 80% on return shipping
                    costs per test.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Formula */}
        <section style={{ marginBottom: spacing.xxl }}>
          <div className="text-center" style={{ marginBottom: spacing.xl }}>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">Financial Model</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Disruptive pricing that delivers exceptional margins.
            </p>
          </div>

          <div
            className="bg-white border border-gray-200 rounded-lg"
            style={{ padding: spacing.xl }}
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Price vs. Cost: 58% Gross Margin
              </h3>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                Target: 58% Gross Margin
              </span>
            </div>
            <div className="relative w-full h-80">
              <Bar data={marginData} options={marginBarOptions} />
            </div>
            <div className="mt-6 p-4 bg-gray-50 border-l-4 border-blue-500">
              <p className="text-gray-700">
                Our model proves that ethical, transparent pricing is not just possible, but highly
                profitable and sustainable for long-term growth.
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section style={{ marginBottom: spacing.xxl }}>
          <div className="text-center" style={{ marginBottom: spacing.xl }}>
            <h2 className="text-3xl font-semibold text-gray-900 mb-3">3-Month Launch Roadmap</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A high-intensity sprint requiring simultaneous execution of all critical workstreams.
            </p>
          </div>

          <div
            className="bg-white border border-gray-200 rounded-lg"
            style={{ padding: spacing.xl }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Month 1 */}
              <div>
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Month 1</h3>
                  <p className="text-sm text-gray-600">Weeks 1-4</p>
                  <div className="h-px w-16 bg-gray-300 mx-auto mt-3"></div>
                </div>
                <div className="space-y-3">
                  <div className="border border-gray-200 rounded p-3">
                    <p className="text-sm font-medium text-gray-900">Site & Instrument Setup</p>
                  </div>
                  <div className="border border-gray-200 rounded p-3">
                    <p className="text-sm font-medium text-gray-900">Begin Validation Sprint</p>
                  </div>
                </div>
              </div>

              {/* Month 2 */}
              <div>
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Month 2</h3>
                  <p className="text-sm text-gray-600">Weeks 5-8</p>
                  <div className="h-px w-16 bg-gray-300 mx-auto mt-3"></div>
                </div>
                <div className="space-y-3">
                  <div className="border border-gray-200 rounded p-3">
                    <p className="text-sm font-medium text-gray-900">Complete Validation Sprint</p>
                  </div>
                  <div className="border border-gray-200 rounded p-3">
                    <p className="text-sm font-medium text-gray-900">LIMS Config & Validation</p>
                  </div>
                  <div className="border border-gray-200 rounded p-3">
                    <p className="text-sm font-medium text-gray-900">Begin Commercial Prep</p>
                  </div>
                </div>
              </div>

              {/* Month 3 */}
              <div>
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Month 3</h3>
                  <p className="text-sm text-gray-600">Weeks 9-12</p>
                  <div className="h-px w-16 bg-gray-300 mx-auto mt-3"></div>
                </div>
                <div className="space-y-3">
                  <div className="border border-gray-200 rounded p-3">
                    <p className="text-sm font-medium text-gray-900">Finalize LIMS</p>
                  </div>
                  <div className="border border-gray-200 rounded p-3">
                    <p className="text-sm font-medium text-gray-900">Final SOPs & Training</p>
                  </div>
                  <div className="border border-blue-500 bg-blue-50 rounded p-3">
                    <p className="text-sm font-medium text-blue-900">Go-Live</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded border">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Go-Live in 90 Days</h4>
                <p className="text-gray-700 max-w-4xl mx-auto">
                  This accelerated timeline is high-risk and assumes immediate capital availability,
                  pre-vetted vendors, and a core team ready on Day 1. It merges analytical and
                  clinical validation into a single, intense 6-week sprint, a significant
                  compression of the standard process.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto" style={{ padding: spacing.xl }}>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Disrupting Diagnostics. Built on Transparency.
            </h3>
            <p className="text-sm text-gray-600">
              This infographic visualizes the strategic roadmap for a new comprehensive stool panel.
              All data derived from the provided planning documentation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
