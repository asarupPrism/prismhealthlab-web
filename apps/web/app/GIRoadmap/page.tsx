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

  // Dashboard color palette with cool blues and maroon
  const colors = {
    primary: '#1e3a8a', // Blue 800
    primaryLight: '#3b82f6', // Blue 500
    primaryDark: '#1e40af', // Blue 700
    secondary: '#991b1b', // Red 800 (Maroon)
    secondaryLight: '#dc2626', // Red 600
    accent: '#0369a1', // Sky 700
    accentLight: '#0ea5e9', // Sky 500
    background: '#f8fafc', // Slate 50
    surface: '#ffffff', // White
    surfaceHover: '#f1f5f9', // Slate 100
    border: '#e2e8f0', // Slate 200
    text: '#0f172a', // Slate 900
    textSecondary: '#475569', // Slate 600
    textLight: '#64748b', // Slate 500
    success: '#059669', // Emerald 600
    warning: '#d97706', // Amber 600
    danger: '#dc2626', // Red 600
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
          colors.primaryLight,
          colors.accent,
          colors.textLight,
          colors.warning,
          colors.secondaryLight,
        ],
        borderColor: colors.surface,
        borderWidth: 2,
        borderRadius: 6,
        borderSkipped: false,
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
        backgroundColor: [
          colors.primary,
          colors.primaryLight,
          colors.accent,
          colors.accentLight,
          colors.secondary,
        ],
        borderWidth: 0,
        hoverOffset: 4,
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
        backgroundColor: [
          colors.primary,
          colors.primaryLight,
          colors.accent,
          colors.accentLight,
          colors.secondary,
          colors.textLight,
        ],
        borderWidth: 0,
        hoverOffset: 4,
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
        borderRadius: 6,
        borderSkipped: false,
      },
      {
        label: 'Gross Margin',
        data: [163, 233],
        backgroundColor: colors.primaryLight,
        borderRadius: 6,
        borderSkipped: false,
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
          padding: 20,
          color: colors.text,
          font: {
            family: "'Inter', sans-serif",
            size: 13,
            weight: 500,
          },
        },
      },
      tooltip: {
        backgroundColor: colors.primary,
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: colors.border,
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        usePointStyle: true,
        titleFont: {
          family: "'Inter', sans-serif",
          size: 14,
          weight: 600,
        },
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 13,
        },
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
            size: 12,
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
            size: 12,
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
    cutout: '65%',
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 16,
          color: colors.text,
          font: {
            family: "'Inter', sans-serif",
            size: 12,
            weight: 500,
          },
        },
      },
      tooltip: {
        backgroundColor: colors.primary,
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: colors.border,
        borderWidth: 1,
        cornerRadius: 8,
        titleFont: {
          family: "'Inter', sans-serif",
          size: 14,
          weight: 600,
        },
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 13,
        },
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
          padding: 14,
          color: colors.text,
          font: {
            family: "'Inter', sans-serif",
            size: 11,
            weight: 500,
          },
        },
      },
      tooltip: {
        backgroundColor: colors.primary,
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: colors.border,
        borderWidth: 1,
        cornerRadius: 8,
        titleFont: {
          family: "'Inter', sans-serif",
          size: 14,
          weight: 600,
        },
        bodyFont: {
          family: "'Inter', sans-serif",
          size: 13,
        },
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
          font: { family: "'Inter', sans-serif", size: 12 },
        },
      },
      y: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          color: colors.textLight,
          font: { family: "'Inter', sans-serif", size: 12 },
        },
      },
    },
  };

  return (
    <div className="min-h-screen font-inter" style={{ backgroundColor: colors.background }}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b" style={{ borderColor: colors.border }}>
        <div className="max-w-7xl mx-auto" style={{ padding: spacing.xl }}>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.text }}>
              The Gut Health Market is Broken
            </h1>
            <p
              className="text-xl max-w-4xl mx-auto leading-relaxed"
              style={{ color: colors.textSecondary }}
            >
              Incumbents thrive on opaque pricing and analytical bloat. We&apos;re launching a
              clinically superior, cost-effective, and transparent alternative.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto" style={{ padding: spacing.xl }}>
        {/* Market Opportunity */}
        <section style={{ marginBottom: spacing.xxl }}>
          <div className="text-center" style={{ marginBottom: spacing.xl }}>
            <div
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{
                backgroundColor: colors.primaryLight + '20',
                color: colors.primary,
                border: `1px solid ${colors.primaryLight}40`,
              }}
            >
              Market Opportunity
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.text }}>
              A Multi-Billion Dollar Opportunity
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: colors.textSecondary }}>
              The comprehensive stool testing market is large and growing rapidly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow duration-300"
              style={{ padding: spacing.lg, borderColor: colors.border }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold mb-3" style={{ color: colors.primary }}>
                  $2.3B
                </div>
                <p style={{ color: colors.textSecondary }}>
                  Peak GI Stool Testing Market Value (2023)
                </p>
              </div>
            </div>

            <div
              className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow duration-300"
              style={{ padding: spacing.lg, borderColor: colors.border }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold mb-3" style={{ color: colors.accent }}>
                  7.8%
                </div>
                <p style={{ color: colors.textSecondary }}>Projected Market CAGR Through 2033</p>
              </div>
            </div>

            <div
              className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow duration-300"
              style={{ padding: spacing.lg, borderColor: colors.border }}
            >
              <div className="text-center">
                <div className="text-4xl font-bold mb-3" style={{ color: colors.secondaryLight }}>
                  $2,613
                </div>
                <p className="mb-3" style={{ color: colors.textSecondary }}>
                  Incumbent&apos;s Billed Insurance Price vs. ~$500 Cash Price
                </p>
                <span
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: colors.secondaryLight + '20',
                    color: colors.secondary,
                  }}
                >
                  Key Pain Point
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Competition */}
        <section style={{ marginBottom: spacing.xxl }}>
          <div className="text-center" style={{ marginBottom: spacing.xl }}>
            <div
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{
                backgroundColor: colors.secondary + '20',
                color: colors.secondary,
                border: `1px solid ${colors.secondary}40`,
              }}
            >
              Competitive Analysis
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.text }}>
              The Competitive Battleground
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: colors.textSecondary }}>
              Our strategy directly targets the weaknesses of the market leader.
            </p>
          </div>

          <div
            className="bg-white rounded-xl shadow-lg border"
            style={{ padding: spacing.xl, borderColor: colors.border }}
          >
            <div className="relative w-full h-96">
              <Bar data={competitorPriceData} options={barOptions} />
            </div>
            <div
              className="mt-6 p-6 rounded-lg border-l-4"
              style={{
                backgroundColor: colors.primaryLight + '10',
                borderLeftColor: colors.primaryLight,
              }}
            >
              <p style={{ color: colors.textSecondary }}>
                Our proposed direct cash price of{' '}
                <span style={{ color: colors.primary, fontWeight: '600' }}>$349</span> fundamentally
                undercuts incumbent retail prices, which are often obscured by complex and
                aggressive insurance billing practices.
              </p>
            </div>
          </div>
        </section>

        {/* Product Strategy */}
        <section style={{ marginBottom: spacing.xxl }}>
          <div className="text-center" style={{ marginBottom: spacing.xl }}>
            <div
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{
                backgroundColor: colors.accent + '20',
                color: colors.accent,
                border: `1px solid ${colors.accent}40`,
              }}
            >
              Product Strategy
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.text }}>
              Smarter Science: Lean & High-Impact
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: colors.textSecondary }}>
              We replace analytical bloat with evidence-based clinical utility.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              className="bg-white rounded-xl shadow-lg border"
              style={{ padding: spacing.lg, borderColor: colors.border }}
            >
              <h3 className="text-xl font-semibold text-center mb-6" style={{ color: colors.text }}>
                Core Panel Composition
              </h3>
              <div className="relative w-full h-80">
                <Doughnut data={panelCompositionData} options={doughnutOptions} />
              </div>
              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: colors.background }}>
                <p className="text-sm" style={{ color: colors.textSecondary }}>
                  Our panel is rationally designed, focusing on functional domains with the highest
                  diagnostic value, eliminating redundant and low-utility markers that inflate
                  costs.
                </p>
              </div>
            </div>

            <div
              className="bg-white rounded-xl shadow-lg border"
              style={{ padding: spacing.lg, borderColor: colors.border }}
            >
              <h3 className="text-xl font-semibold text-center mb-6" style={{ color: colors.text }}>
                Modular Add-Ons
              </h3>
              <div className="space-y-4">
                <div
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                  style={{ borderColor: colors.border }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: colors.text }}>
                        Inflammation Plus Module
                      </h4>
                      <p className="text-sm" style={{ color: colors.textSecondary }}>
                        Adds EPX and Zonulin for deep dives into allergic inflammation and
                        intestinal permeability.
                      </p>
                    </div>
                    <span
                      className="text-sm font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: colors.primaryLight + '20',
                        color: colors.primary,
                      }}
                    >
                      +$79
                    </span>
                  </div>
                </div>

                <div
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                  style={{ borderColor: colors.border }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: colors.text }}>
                        Yeast/Mycology Module
                      </h4>
                      <p className="text-sm" style={{ color: colors.textSecondary }}>
                        Comprehensive yeast/mold culture with MALDI-TOF ID and sensitivity testing.
                      </p>
                    </div>
                    <span
                      className="text-sm font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: colors.accent + '20',
                        color: colors.accent,
                      }}
                    >
                      +$99
                    </span>
                  </div>
                </div>

                <div
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                  style={{ borderColor: colors.border }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: colors.text }}>
                        Full Microbiome Module
                      </h4>
                      <p className="text-sm" style={{ color: colors.textSecondary }}>
                        Premium shotgun metagenomics for research-grade, species-level analysis.
                      </p>
                    </div>
                    <span
                      className="text-sm font-semibold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: colors.secondary + '20',
                        color: colors.secondary,
                      }}
                    >
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
            <div
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{
                backgroundColor: colors.success + '20',
                color: colors.success,
                border: `1px solid ${colors.success}40`,
              }}
            >
              Cost Strategy
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.text }}>
              The Cost Advantage Blueprint
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: colors.textSecondary }}>
              A focus on efficiency enables our disruptive pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div
              className="bg-white rounded-xl shadow-lg border"
              style={{ padding: spacing.lg, borderColor: colors.border }}
            >
              <h3 className="text-xl font-semibold text-center mb-4" style={{ color: colors.text }}>
                Cost of Goods Breakdown
              </h3>
              <div className="text-center mb-6">
                <span
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold"
                  style={{
                    backgroundColor: colors.success + '20',
                    color: colors.success,
                  }}
                >
                  Target: $116
                </span>
              </div>
              <div className="relative w-full h-80">
                <Pie data={cogsData} options={pieOptions} />
              </div>
              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: colors.background }}>
                <p className="text-sm" style={{ color: colors.textSecondary }}>
                  Smart reagent sourcing, automation, and logistics are key to keeping our COGS low.
                </p>
              </div>
            </div>

            <div
              className="bg-white rounded-xl shadow-lg border"
              style={{ padding: spacing.lg, borderColor: colors.border }}
            >
              <h3 className="text-xl font-semibold text-center mb-4" style={{ color: colors.text }}>
                Logistics Advantage
              </h3>
              <p className="text-center mb-6" style={{ color: colors.textSecondary }}>
                Our kit design eliminates the need for costly cold-chain shipping.
              </p>

              <div className="space-y-6">
                <div
                  className="border rounded-lg p-4"
                  style={{
                    borderColor: colors.secondaryLight + '40',
                    backgroundColor: colors.secondaryLight + '10',
                  }}
                >
                  <h4 className="font-semibold mb-3" style={{ color: colors.text }}>
                    Competitor Model: Cold Chain
                  </h4>
                  <div
                    className="w-full rounded-full h-4 relative"
                    style={{ backgroundColor: colors.secondaryLight + '30' }}
                  >
                    <div
                      className="h-4 rounded-full"
                      style={{
                        width: '90%',
                        backgroundColor: colors.secondaryLight,
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 flex items-center justify-center text-xs font-semibold"
                      style={{ color: colors.surface }}
                    >
                      $25 - $40 / Kit
                    </div>
                  </div>
                </div>

                <div
                  className="border rounded-lg p-4"
                  style={{
                    borderColor: colors.primaryLight + '40',
                    backgroundColor: colors.primaryLight + '10',
                  }}
                >
                  <h4 className="font-semibold mb-3" style={{ color: colors.text }}>
                    Our Model: Ambient Shipping
                  </h4>
                  <div
                    className="w-full rounded-full h-4 relative"
                    style={{ backgroundColor: colors.primaryLight + '30' }}
                  >
                    <div
                      className="h-4 rounded-full"
                      style={{
                        width: '20%',
                        backgroundColor: colors.primaryLight,
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 flex items-center justify-center text-xs font-semibold"
                      style={{ color: colors.text }}
                    >
                      $4.50 - $6.50 / Kit
                    </div>
                  </div>
                </div>

                <div
                  className="p-4 rounded-lg border-l-4"
                  style={{
                    backgroundColor: colors.background,
                    borderLeftColor: colors.success,
                  }}
                >
                  <p className="text-sm" style={{ color: colors.textSecondary }}>
                    Using an ambient DNA stabilization buffer saves over{' '}
                    <span style={{ color: colors.success, fontWeight: '600' }}>80%</span> on return
                    shipping costs per test.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Formula */}
        <section style={{ marginBottom: spacing.xxl }}>
          <div className="text-center" style={{ marginBottom: spacing.xl }}>
            <div
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{
                backgroundColor: colors.warning + '20',
                color: colors.warning,
                border: `1px solid ${colors.warning}40`,
              }}
            >
              Financial Model
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.text }}>
              The Winning Financial Formula
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: colors.textSecondary }}>
              Disruptive pricing that delivers exceptional margins.
            </p>
          </div>

          <div
            className="bg-white rounded-xl shadow-lg border"
            style={{ padding: spacing.xl, borderColor: colors.border }}
          >
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-4" style={{ color: colors.text }}>
                Price vs. Cost: 58% Gross Margin
              </h3>
              <span
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: colors.primaryLight + '20',
                  color: colors.primary,
                }}
              >
                Target: 58% Gross Margin
              </span>
            </div>
            <div className="relative w-full h-80">
              <Bar data={marginData} options={marginBarOptions} />
            </div>
            <div
              className="mt-6 p-6 rounded-lg border-l-4"
              style={{
                backgroundColor: colors.success + '10',
                borderLeftColor: colors.success,
              }}
            >
              <p style={{ color: colors.textSecondary }}>
                Our model proves that{' '}
                <span style={{ color: colors.success, fontWeight: '600' }}>
                  ethical, transparent pricing
                </span>{' '}
                is not just possible, but highly profitable and sustainable for long-term growth.
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section style={{ marginBottom: spacing.xxl }}>
          <div className="text-center" style={{ marginBottom: spacing.xl }}>
            <div
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4"
              style={{
                backgroundColor: colors.accent + '20',
                color: colors.accent,
                border: `1px solid ${colors.accent}40`,
              }}
            >
              Launch Timeline
            </div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: colors.text }}>
              3-Month Launch Roadmap
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: colors.textSecondary }}>
              A high-intensity sprint requiring simultaneous execution of all critical workstreams.
            </p>
          </div>

          <div
            className="bg-white rounded-xl shadow-lg border"
            style={{ padding: spacing.xl, borderColor: colors.border }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Month 1 */}
              <div>
                <div className="text-center mb-6">
                  <div
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-2"
                    style={{
                      backgroundColor: colors.primaryLight + '20',
                      color: colors.primary,
                    }}
                  >
                    Month 1
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text }}>
                    Weeks 1-4
                  </h3>
                  <div
                    className="h-px w-16 mx-auto"
                    style={{ backgroundColor: colors.border }}
                  ></div>
                </div>
                <div className="space-y-3">
                  <div
                    className="border rounded-lg p-3 hover:shadow-md transition-shadow duration-200"
                    style={{ borderColor: colors.border }}
                  >
                    <p className="text-sm font-medium" style={{ color: colors.text }}>
                      Site & Instrument Setup
                    </p>
                  </div>
                  <div
                    className="border rounded-lg p-3 hover:shadow-md transition-shadow duration-200"
                    style={{ borderColor: colors.border }}
                  >
                    <p className="text-sm font-medium" style={{ color: colors.text }}>
                      Begin Validation Sprint
                    </p>
                  </div>
                </div>
              </div>

              {/* Month 2 */}
              <div>
                <div className="text-center mb-6">
                  <div
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-2"
                    style={{
                      backgroundColor: colors.accent + '20',
                      color: colors.accent,
                    }}
                  >
                    Month 2
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text }}>
                    Weeks 5-8
                  </h3>
                  <div
                    className="h-px w-16 mx-auto"
                    style={{ backgroundColor: colors.border }}
                  ></div>
                </div>
                <div className="space-y-3">
                  <div
                    className="border rounded-lg p-3 hover:shadow-md transition-shadow duration-200"
                    style={{ borderColor: colors.border }}
                  >
                    <p className="text-sm font-medium" style={{ color: colors.text }}>
                      Complete Validation Sprint
                    </p>
                  </div>
                  <div
                    className="border rounded-lg p-3 hover:shadow-md transition-shadow duration-200"
                    style={{ borderColor: colors.border }}
                  >
                    <p className="text-sm font-medium" style={{ color: colors.text }}>
                      LIMS Config & Validation
                    </p>
                  </div>
                  <div
                    className="border rounded-lg p-3 hover:shadow-md transition-shadow duration-200"
                    style={{ borderColor: colors.border }}
                  >
                    <p className="text-sm font-medium" style={{ color: colors.text }}>
                      Begin Commercial Prep
                    </p>
                  </div>
                </div>
              </div>

              {/* Month 3 */}
              <div>
                <div className="text-center mb-6">
                  <div
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-2"
                    style={{
                      backgroundColor: colors.secondary + '20',
                      color: colors.secondary,
                    }}
                  >
                    Month 3
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text }}>
                    Weeks 9-12
                  </h3>
                  <div
                    className="h-px w-16 mx-auto"
                    style={{ backgroundColor: colors.border }}
                  ></div>
                </div>
                <div className="space-y-3">
                  <div
                    className="border rounded-lg p-3 hover:shadow-md transition-shadow duration-200"
                    style={{ borderColor: colors.border }}
                  >
                    <p className="text-sm font-medium" style={{ color: colors.text }}>
                      Finalize LIMS
                    </p>
                  </div>
                  <div
                    className="border rounded-lg p-3 hover:shadow-md transition-shadow duration-200"
                    style={{ borderColor: colors.border }}
                  >
                    <p className="text-sm font-medium" style={{ color: colors.text }}>
                      Final SOPs & Training
                    </p>
                  </div>
                  <div
                    className="border rounded-lg p-3 shadow-md"
                    style={{
                      borderColor: colors.success,
                      backgroundColor: colors.success + '10',
                    }}
                  >
                    <p className="text-sm font-semibold" style={{ color: colors.success }}>
                      Go-Live
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mt-8 p-6 rounded-lg border"
              style={{
                backgroundColor: colors.background,
                borderColor: colors.border,
              }}
            >
              <div className="text-center">
                <h4 className="text-lg font-semibold mb-3" style={{ color: colors.text }}>
                  Go-Live in 90 Days
                </h4>
                <p className="max-w-4xl mx-auto" style={{ color: colors.textSecondary }}>
                  This accelerated timeline is{' '}
                  <span style={{ color: colors.warning, fontWeight: '600' }}>high-risk</span> and
                  assumes immediate capital availability, pre-vetted vendors, and a core team ready
                  on Day 1. It merges analytical and clinical validation into a single, intense{' '}
                  <span style={{ color: colors.primary, fontWeight: '600' }}>6-week sprint</span>, a
                  significant compression of the standard process.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t shadow-sm" style={{ borderColor: colors.border }}>
        <div className="max-w-7xl mx-auto" style={{ padding: spacing.xl }}>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2" style={{ color: colors.text }}>
              Disrupting Diagnostics. Built on Transparency.
            </h3>
            <p className="text-sm" style={{ color: colors.textSecondary }}>
              This infographic visualizes the strategic roadmap for a new comprehensive stool panel.
              All data derived from the provided planning documentation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
