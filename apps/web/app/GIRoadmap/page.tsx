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
    dark: '#0F172A',
    medium: '#1E293B',
    light: '#334155',
    lighter: '#64748B',
    accent: '#3B82F6',
    accentLight: '#60A5FA',
    success: '#10B981',
    warning: '#F59E0B',
    danger: '#EF4444',
    bg: '#F8FAFC',
    surface: '#FFFFFF',
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
          brilliantBlues.accent,
          brilliantBlues.light,
          brilliantBlues.lighter,
          brilliantBlues.warning,
          brilliantBlues.danger,
        ],
        borderColor: 'transparent',
        borderWidth: 0,
        borderRadius: 8,
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
          brilliantBlues.accent,
          brilliantBlues.accentLight,
          brilliantBlues.success,
          brilliantBlues.light,
          brilliantBlues.warning,
        ],
        borderWidth: 0,
        hoverOffset: 8,
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
          brilliantBlues.accent,
          brilliantBlues.accentLight,
          brilliantBlues.light,
          brilliantBlues.warning,
          brilliantBlues.success,
          brilliantBlues.lighter,
        ],
        borderWidth: 0,
        hoverOffset: 8,
      },
    ],
  };

  const marginData = {
    labels: ['Our Wholesale Model', 'Our DTC Model'],
    datasets: [
      {
        label: 'Cost of Goods (COGS)',
        data: [116, 116],
        backgroundColor: brilliantBlues.warning,
        borderRadius: 8,
        borderSkipped: false,
      },
      {
        label: 'Gross Margin',
        data: [163, 233],
        backgroundColor: brilliantBlues.success,
        borderRadius: 8,
        borderSkipped: false,
      },
    ],
  };

  const modernChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
          color: brilliantBlues.light,
          font: {
            family: "'Inter', sans-serif",
            size: 12,
            weight: '500',
          },
        },
      },
      tooltip: {
        backgroundColor: brilliantBlues.dark,
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
        borderColor: brilliantBlues.lighter,
        borderWidth: 1,
        cornerRadius: 12,
        displayColors: true,
        usePointStyle: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#E2E8F0',
          drawBorder: false,
        },
        ticks: {
          color: brilliantBlues.lighter,
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
          color: brilliantBlues.lighter,
          font: {
            family: "'Inter', sans-serif",
            size: 11,
          },
        },
      },
    },
  };

  const barOptions = {
    ...modernChartOptions,
    plugins: { ...modernChartOptions.plugins, legend: { display: false } },
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
          padding: 15,
          color: brilliantBlues.light,
          font: {
            family: "'Inter', sans-serif",
            size: 11,
            weight: '500',
          },
        },
      },
      tooltip: {
        backgroundColor: brilliantBlues.dark,
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
        borderColor: brilliantBlues.lighter,
        borderWidth: 1,
        cornerRadius: 12,
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
          padding: 12,
          color: brilliantBlues.light,
          font: {
            family: "'Inter', sans-serif",
            size: 10,
            weight: '500',
          },
        },
      },
      tooltip: {
        backgroundColor: brilliantBlues.dark,
        titleColor: '#FFFFFF',
        bodyColor: '#FFFFFF',
        borderColor: brilliantBlues.lighter,
        borderWidth: 1,
        cornerRadius: 12,
      },
    },
  };

  const marginBarOptions = {
    ...modernChartOptions,
    indexAxis: 'y' as const,
    scales: {
      x: {
        stacked: true,
        grid: {
          color: '#E2E8F0',
          drawBorder: false,
        },
        ticks: {
          callback: (value: number | string) => '$' + value,
          color: brilliantBlues.lighter,
          font: { family: "'Inter', sans-serif", size: 11 },
        },
      },
      y: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          color: brilliantBlues.lighter,
          font: { family: "'Inter', sans-serif", size: 11 },
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 font-inter">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern
                id="hero-pattern"
                x="0"
                y="0"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="30" cy="30" r="4" fill="white" fillOpacity="0.02" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-pattern)" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></span>
              Market Disruption in Progress
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent leading-tight">
              The Gut Health Market
              <br />
              <span className="text-red-400">is Broken.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Incumbents thrive on opaque pricing and analytical bloat. We&apos;re launching a{' '}
              <span className="text-blue-300 font-semibold">clinically superior</span>,{' '}
              <span className="text-green-300 font-semibold">cost-effective</span>, and{' '}
              <span className="text-purple-300 font-semibold">transparent</span> alternative.
            </p>
            <div className="flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* Market Opportunity */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-medium rounded-full">
              💰 Market Opportunity
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              A Multi-Billion Dollar
              <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                {' '}
                Opportunity
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The comprehensive stool testing market is large and growing rapidly, presenting
              unprecedented opportunities for disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="text-center space-y-4">
                <div className="text-6xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  $2.3B
                </div>
                <p className="text-slate-600 font-medium">
                  Peak GI Stool Testing Market Value (2023)
                </p>
                <div className="h-1 w-16 bg-blue-200 rounded-full mx-auto group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-teal-600"></div>
              <div className="text-center space-y-4">
                <div className="text-6xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  7.8%
                </div>
                <p className="text-slate-600 font-medium">Projected Market CAGR Through 2033</p>
                <div className="h-1 w-16 bg-emerald-200 rounded-full mx-auto group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>

            <div className="group relative overflow-hidden bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-orange-600"></div>
              <div className="text-center space-y-4">
                <div className="text-6xl font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  $2,613
                </div>
                <p className="text-slate-600 font-medium">
                  Incumbent&apos;s Billed Insurance Price vs. ~$500 Cash Price
                </p>
                <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-800 text-sm font-semibold rounded-full">
                  🎯 Key Pain Point
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Competition */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
              ⚔️ Competitive Analysis
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              The Competitive
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                {' '}
                Battleground
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our strategy directly targets the weaknesses of the market leader with transparent,
              disruptive pricing.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200">
            <div className="relative w-full h-96 lg:h-[500px]">
              <Bar data={competitorPriceData} options={barOptions} />
            </div>
            <div className="mt-8 p-6 bg-slate-50 rounded-2xl border-l-4 border-blue-500">
              <p className="text-slate-700 text-lg leading-relaxed">
                <span className="font-semibold text-blue-600">
                  Our proposed direct cash price of $349
                </span>{' '}
                fundamentally undercuts incumbent retail prices, which are often obscured by complex
                and aggressive insurance billing practices.
              </p>
            </div>
          </div>
        </section>

        {/* Product Strategy */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm font-medium rounded-full">
              🧬 Product Strategy
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Smarter Science:
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {' '}
                Lean & High-Impact
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We replace analytical bloat with evidence-based clinical utility and modular
              customization.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 text-center">
                  Our Core Panel Composition
                </h3>
                <div className="relative w-full h-80">
                  <Doughnut data={panelCompositionData} options={doughnutOptions} />
                </div>
                <div className="p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-500">
                  <p className="text-slate-700 leading-relaxed">
                    Our panel is rationally designed, focusing on functional domains with the
                    highest diagnostic value, eliminating redundant and low-utility markers that
                    inflate costs.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 text-center">
                  Modular Add-Ons for Customization
                </h3>
                <div className="space-y-4">
                  <div className="group p-6 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">🔬</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-blue-900 mb-2">
                          Inflammation Plus Module
                        </h4>
                        <p className="text-sm text-blue-700 mb-3">
                          Adds EPX and Zonulin for deep dives into allergic inflammation and
                          intestinal permeability.
                        </p>
                        <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                          +$79
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group p-6 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">🦠</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-emerald-900 mb-2">
                          Yeast/Mycology Module
                        </h4>
                        <p className="text-sm text-emerald-700 mb-3">
                          Comprehensive yeast/mold culture with MALDI-TOF ID and sensitivity
                          testing.
                        </p>
                        <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-800 text-sm font-semibold rounded-full">
                          +$99
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group p-6 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">🧬</span>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-purple-900 mb-2">
                          Full Microbiome Module
                        </h4>
                        <p className="text-sm text-purple-700 mb-3">
                          Premium shotgun metagenomics for research-grade, species-level analysis.
                        </p>
                        <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full">
                          +$299
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Advantage */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
              💸 Cost Strategy
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              The Cost Advantage
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                {' '}
                Blueprint
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A ruthless focus on efficiency enables our disruptive pricing while maintaining
              superior margins.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 text-center">
                  Cost of Goods Breakdown
                </h3>
                <div className="text-center">
                  <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                    Target: $116
                  </span>
                </div>
                <div className="relative w-full h-80">
                  <Pie data={cogsData} options={pieOptions} />
                </div>
                <div className="p-6 bg-green-50 rounded-2xl border-l-4 border-green-500">
                  <p className="text-slate-700 leading-relaxed">
                    Smart reagent sourcing, automation, and logistics are key to keeping our COGS
                    low.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 text-center">
                  The $20+ Logistics Advantage
                </h3>
                <p className="text-center text-slate-600">
                  Our kit design eliminates the need for costly cold-chain shipping.
                </p>

                <div className="space-y-6">
                  <div className="p-6 bg-red-50 rounded-2xl border border-red-200">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-red-900">Competitor Model: Cold Chain</h4>
                      <div className="w-full bg-red-200 rounded-full h-6 relative overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-red-500 to-red-600 h-6 rounded-full animate-pulse"
                          style={{ width: '90%' }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-semibold">
                          $25 - $40 / Kit
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-blue-50 rounded-2xl border border-blue-200">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-blue-900">Our Model: Ambient Shipping</h4>
                      <div className="w-full bg-blue-200 rounded-full h-6 relative overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-6 rounded-full"
                          style={{ width: '20%' }}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center text-blue-900 text-sm font-semibold">
                          $4.50 - $6.50 / Kit
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-emerald-50 rounded-2xl border-l-4 border-emerald-500">
                    <p className="text-slate-700 leading-relaxed">
                      <span className="font-semibold text-emerald-700">
                        Using an ambient DNA stabilization buffer saves over 80%
                      </span>{' '}
                      on return shipping costs per test.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Formula */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center px-3 py-1 bg-teal-100 text-teal-800 text-sm font-medium rounded-full">
              📊 Financial Model
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              The Winning
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                {' '}
                Financial Formula
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Disruptive pricing that still delivers exceptional margins and sustainable growth.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200">
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Price vs. Cost: A Path to 58% Gross Margin
                </h3>
                <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-semibold rounded-full">
                  🎯 Target: 58% Gross Margin
                </div>
              </div>
              <div className="relative w-full h-96 lg:h-[400px]">
                <Bar data={marginData} options={marginBarOptions} />
              </div>
              <div className="p-6 bg-emerald-50 rounded-2xl border-l-4 border-emerald-500">
                <p className="text-slate-700 text-lg leading-relaxed">
                  <span className="font-semibold text-emerald-700">
                    Our model proves that ethical, transparent pricing
                  </span>{' '}
                  is not just possible, but highly profitable and sustainable for long-term growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
              🚀 Launch Timeline
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900">
              Our Aggressive
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {' '}
                3-Month Roadmap
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A high-intensity sprint requiring simultaneous execution of all critical workstreams.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Month 1 */}
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                    Month 1
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Weeks 1-4</h3>
                  <div className="h-1 w-16 bg-blue-500 rounded-full mx-auto"></div>
                </div>
                <div className="space-y-4">
                  <div className="group p-4 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold">🏗️</span>
                      </div>
                      <span className="font-semibold">Site & Instrument Setup</span>
                    </div>
                  </div>
                  <div className="group p-4 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold">⚡</span>
                      </div>
                      <span className="font-semibold">Begin Validation Sprint</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Month 2 */}
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 text-sm font-semibold rounded-full">
                    Month 2
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Weeks 5-8</h3>
                  <div className="h-1 w-16 bg-emerald-500 rounded-full mx-auto"></div>
                </div>
                <div className="space-y-4">
                  <div className="group p-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold">✅</span>
                      </div>
                      <span className="font-semibold">Complete Validation Sprint</span>
                    </div>
                  </div>
                  <div className="group p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold">🔧</span>
                      </div>
                      <span className="font-semibold">LIMS Config & Validation</span>
                    </div>
                  </div>
                  <div className="group p-4 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold">🎯</span>
                      </div>
                      <span className="font-semibold">Begin Commercial Prep</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Month 3 */}
              <div className="space-y-6">
                <div className="text-center space-y-2">
                  <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full">
                    Month 3
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Weeks 9-12</h3>
                  <div className="h-1 w-16 bg-purple-500 rounded-full mx-auto"></div>
                </div>
                <div className="space-y-4">
                  <div className="group p-4 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold">🏁</span>
                      </div>
                      <span className="font-semibold">Finalize LIMS</span>
                    </div>
                  </div>
                  <div className="group p-4 rounded-xl bg-gradient-to-r from-slate-500 to-slate-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold">📚</span>
                      </div>
                      <span className="font-semibold">Final SOPs & Training</span>
                    </div>
                  </div>
                  <div className="group p-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative flex items-center space-x-3">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold animate-bounce">🚀</span>
                      </div>
                      <span className="font-semibold">Go-Live!</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl border border-slate-200">
              <div className="text-center space-y-4">
                <h4 className="text-2xl font-bold text-slate-900">
                  <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    Go-Live in 90 Days
                  </span>
                </h4>
                <p className="text-slate-700 leading-relaxed max-w-4xl mx-auto">
                  This accelerated timeline is{' '}
                  <span className="font-semibold text-orange-600">high-risk</span> and assumes
                  immediate capital availability, pre-vetted vendors, and a core team ready on Day
                  1. It merges analytical and clinical validation into a single, intense{' '}
                  <span className="font-semibold text-blue-600">6-week sprint</span>, a significant
                  compression of the standard process.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">Disrupting Diagnostics.</h3>
              <p className="text-xl text-blue-200">Built on Transparency.</p>
            </div>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto"></div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              This infographic visualizes the strategic roadmap for a new comprehensive stool panel.
              All data derived from the provided planning documentation.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
