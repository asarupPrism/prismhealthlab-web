export default function GIRoadmap() {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stool Panel Launch: A Disruptive Roadmap</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #F2F2F2;
        }
        .chart-container {
            position: relative;
            width: 100%;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
            height: 300px;
            max-height: 400px;
        }
        @media (min-width: 768px) {
            .chart-container {
                height: 350px;
            }
        }
        .gradient-text {
            background: linear-gradient(90deg, #004AAD, #0094D1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .kpi-card {
            background-color: white;
            border-radius: 0.75rem;
            padding: 1.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
            text-align: center;
        }
        .task-bar {
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 0.875rem;
            font-weight: 600;
            padding: 0.5rem;
            border-radius: 0.375rem;
            text-align: center;
        }
    </style>
</head>
<body class="text-gray-800 antialiased">

    <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <header class="text-center my-12">
            <h1 class="text-4xl md:text-6xl font-black tracking-tight gradient-text">The Gut Health Market is Broken.</h1>
            <p class="mt-4 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">Incumbents thrive on opaque pricing and analytical bloat. We're launching a clinically superior, cost-effective, and transparent alternative.</p>
        </header>

        <main class="space-y-16">
            
            <section id="market-opportunity">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold">A Multi-Billion Dollar Opportunity</h2>
                    <p class="text-lg text-gray-500 mt-2">The comprehensive stool testing market is large and growing rapidly.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    <div class="kpi-card">
                        <div class="text-5xl font-extrabold text-[#004AAD]">$2.3B</div>
                        <p class="mt-2 text-gray-600">Peak GI Stool Testing Market Value (2023)</p>
                    </div>
                    <div class="kpi-card">
                        <div class="text-5xl font-extrabold text-[#004AAD]">7.8%</div>
                        <p class="mt-2 text-gray-600">Projected Market CAGR Through 2033</p>
                    </div>
                    <div class="kpi-card md:col-span-2 lg:col-span-1">
                        <div class="text-5xl font-extrabold text-[#004AAD]">$2,613</div>
                        <p class="mt-2 text-gray-600">Incumbent's Billed Insurance Price vs. ~$500 Cash Price</p>
                        <p class="text-sm text-red-500 font-semibold mt-1">This is the key customer pain point.</p>
                    </div>
                </div>
                
                <!-- Read the Full Report Button -->
                <div class="text-center mt-8">
                    <a href="/FullReport" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#004AAD] hover:bg-[#003d8a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004AAD] transition-colors duration-200 shadow-lg hover:shadow-xl">
                        Read the Full Report
                        <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </section>

            <section id="competition">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold">The Competitive Battleground</h2>
                    <p class="text-lg text-gray-500 mt-2">Our strategy directly targets the weaknesses of the market leader.</p>
                </div>
                <div class="bg-white rounded-lg shadow-md p-6">
                    <div class="chart-container h-96 md:h-[450px]">
                        <canvas id="competitorPriceChart"></canvas>
                    </div>
                    <p class="text-center mt-4 text-gray-600">Our proposed direct cash price of $349 fundamentally undercuts incumbent retail prices, which are often obscured by complex and aggressive insurance billing practices.</p>
                </div>
            </section>
            
            <section id="product-strategy">
                 <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold">Smarter Science: Lean & High-Impact</h2>
                    <p class="text-lg text-gray-500 mt-2">We replace analytical bloat with evidence-based clinical utility.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <h3 class="font-bold text-xl text-center text-[#004AAD]">Our Core Panel Composition</h3>
                        <div class="chart-container h-80 md:h-96">
                            <canvas id="panelCompositionChart"></canvas>
                        </div>
                        <p class="text-center mt-4 text-gray-600">Our panel is rationally designed, focusing on functional domains with the highest diagnostic value, eliminating redundant and low-utility markers that inflate costs.</p>
                    </div>
                     <div class="bg-white rounded-lg shadow-md p-6 flex flex-col">
                        <h3 class="font-bold text-xl text-center text-[#004AAD]">Modular Add-Ons for Customization</h3>
                        <div class="flex-grow space-y-4 mt-4">
                            <div class="p-4 rounded-lg bg-[#C1E7F4]/30">
                                <h4 class="font-semibold text-[#004AAD]">Inflammation Plus Module (+$79)</h4>
                                <p class="text-sm text-gray-700">Adds EPX and Zonulin for deep dives into allergic inflammation and intestinal permeability.</p>
                            </div>
                            <div class="p-4 rounded-lg bg-[#C1E7F4]/30">
                                <h4 class="font-semibold text-[#004AAD]">Yeast/Mycology Module (+$99)</h4>
                                <p class="text-sm text-gray-700">Comprehensive yeast/mold culture with MALDI-TOF ID and sensitivity testing.</p>
                            </div>
                            <div class="p-4 rounded-lg bg-[#C1E7F4]/30">
                                <h4 class="font-semibold text-[#004AAD]">Full Microbiome Module (+$299)</h4>
                                <p class="text-sm text-gray-700">Premium shotgun metagenomics for research-grade, species-level analysis.</p>
                            </div>
                        </div>
                     </div>
                </div>
            </section>

            <section id="cogs">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold">The Cost Advantage Blueprint</h2>
                    <p class="text-lg text-gray-500 mt-2">A ruthless focus on efficiency enables our disruptive pricing.</p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <h3 class="font-bold text-xl text-center text-[#004AAD]">Cost of Goods Breakdown (Target: $116)</h3>
                         <div class="chart-container h-80 md:h-96">
                            <canvas id="cogsChart"></canvas>
                        </div>
                        <p class="text-center mt-4 text-gray-600">Smart reagent sourcing, automation, and logistics are key to keeping our COGS low.</p>
                    </div>
                    <div class="bg-white rounded-lg shadow-md p-6">
                         <h3 class="font-bold text-xl text-center text-[#004AAD]">The $20+ Logistics Advantage</h3>
                         <p class="text-center text-gray-600 mb-6">Our kit design eliminates the need for costly cold-chain shipping.</p>
                         <div class="space-y-4">
                             <div>
                                 <h4 class="font-semibold">Competitor Model: Cold Chain</h4>
                                 <div class="w-full bg-gray-200 rounded-full h-4 mt-2">
                                    <div class="bg-red-500 h-4 rounded-full" style="width: 90%" title="$25-$40"></div>
                                 </div>
                                  <p class="text-sm text-right font-bold text-red-500">$25 - $40 / Kit</p>
                             </div>
                             <div>
                                 <h4 class="font-semibold">Our Model: Ambient Shipping</h4>
                                 <div class="w-full bg-gray-200 rounded-full h-4 mt-2">
                                    <div class="bg-[#0094D1] h-4 rounded-full" style="width: 20%" title="$4.50-$6.50"></div>
                                 </div>
                                 <p class="text-sm text-right font-bold text-[#004AAD]">$4.50 - $6.50 / Kit</p>
                             </div>
                         </div>
                         <p class="text-center mt-6 text-gray-600">Using an ambient DNA stabilization buffer saves over 80% on return shipping costs per test.</p>
                    </div>
                </div>
            </section>
            
            <section id="financials">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold">The Winning Financial Formula</h2>
                    <p class="text-lg text-gray-500 mt-2">Disruptive pricing that still delivers exceptional margins.</p>
                </div>
                <div class="bg-white rounded-lg shadow-md p-6 md:col-span-2">
                    <h3 class="font-bold text-xl text-center text-[#004AAD]">Price vs. Cost: A Path to 58% Gross Margin</h3>
                    <div class="chart-container h-96 md:h-[450px]">
                        <canvas id="marginChart"></canvas>
                    </div>
                    <p class="text-center mt-4 text-gray-600">Our model proves that ethical, transparent pricing is not just possible, but highly profitable.</p>
                </div>
            </section>

            <section id="roadmap">
                <div class="text-center mb-8">
                    <h2 class="text-3xl font-bold">Our Aggressive 3-Month Roadmap to Launch</h2>
                    <p class="text-lg text-gray-500 mt-2">A high-intensity sprint requiring simultaneous execution of all critical workstreams.</p>
                </div>
                <div class="bg-white rounded-lg shadow-md p-6">
                    <div class="flex flex-col md:flex-row gap-6">
                        <!-- Month 1 -->
                        <div class="flex-1">
                            <h3 class="font-bold text-xl text-center text-[#004AAD] border-b-2 pb-2 mb-4">Month 1 (Weeks 1-4)</h3>
                            <div class="space-y-3">
                                <div class="task-bar bg-[#0094D1]">Site & Instrument Setup</div>
                                <div class="task-bar bg-[#004AAD]">Begin Validation Sprint</div>
                            </div>
                        </div>
                        <!-- Month 2 -->
                        <div class="flex-1">
                            <h3 class="font-bold text-xl text-center text-[#004AAD] border-b-2 pb-2 mb-4">Month 2 (Weeks 5-8)</h3>
                             <div class="space-y-3">
                                <div class="task-bar bg-[#004AAD]">Complete Validation Sprint</div>
                                <div class="task-bar bg-[#78C0E0]">LIMS Config & Validation</div>
                                <div class="task-bar bg-[#f59e0b]">Begin Commercial Prep</div>
                            </div>
                        </div>
                        <!-- Month 3 -->
                        <div class="flex-1">
                             <h3 class="font-bold text-xl text-center text-[#004AAD] border-b-2 pb-2 mb-4">Month 3 (Weeks 9-12)</h3>
                              <div class="space-y-3">
                                <div class="task-bar bg-[#78C0E0]">Finalize LIMS</div>
                                <div class="task-bar bg-gray-400">Final SOPs & Training</div>
                                <div class="task-bar bg-emerald-500 flex items-center justify-center">
                                    <span>Go-Live!</span>
                                    <span class="ml-2 text-xl">🚀</span>
                                </div>
                            </div>
                        </div>
                    </div>
                     <p class="text-center mt-6 text-gray-600">
                        <strong>Go-Live in 90 Days.</strong> This accelerated timeline is high-risk and assumes immediate capital availability, pre-vetted vendors, and a core team ready on Day 1. It merges analytical and clinical validation into a single, intense 6-week sprint, a significant compression of the standard process.
                     </p>
                </div>
            </section>

            <!-- Bottom Read the Full Report Button -->
            <section class="text-center mt-16">
                <div class="bg-white rounded-lg shadow-md p-8">
                    <h3 class="text-2xl font-bold text-[#004AAD] mb-4">Ready for the Complete Analysis?</h3>
                    <p class="text-gray-600 mb-6">Dive deep into the comprehensive market analysis, technical specifications, and financial projections.</p>
                    <a href="/FullReport" class="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-[#004AAD] hover:bg-[#003d8a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#004AAD] transition-colors duration-200 shadow-lg hover:shadow-xl">
                        Read the Full Report
                        <svg class="ml-3 -mr-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                </div>
            </section>

        </main>

        <footer class="text-center mt-20 py-8 border-t border-gray-300">
            <h1 class="text-lg font-semibold text-gray-500 mb-1">Prism Health Lab</h1>
            <h2 class="text-sm text-gray-400">This infographic visualizes the strategic roadmap for a new comprehensive stool panel. All data derived from the full report.</h2>
        </footer>

    </div>

    <script>
        const brilliantBlues = {
            dark: '#004AAD',
            medium: '#0094D1',
            light: '#78C0E0',
            lighter: '#C1E7F4',
            bg: '#F2F2F2'
        };

        function wrapLabels(label, maxWidth) {
            const words = label.split(' ');
            let lines = [];
            let currentLine = '';
            words.forEach(word => {
                if ((currentLine + ' ' + word).trim().length > maxWidth && currentLine.length > 0) {
                    lines.push(currentLine);
                    currentLine = word;
                } else {
                    currentLine = (currentLine + ' ' + word).trim();
                }
            });
            lines.push(currentLine);
            return lines;
        }

        const tooltipTitleCallback = (tooltipItems) => {
            const item = tooltipItems[0];
            let label = item.chart.data.labels[item.dataIndex];
            if (Array.isArray(label)) {
                return label.join(' ');
            } else {
                return label;
            }
        };

        const sharedChartOptions = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                       color: '#374151',
                       font: {
                           family: "'Inter', sans-serif"
                       }
                    }
                },
                tooltip: {
                    callbacks: {
                        title: tooltipTitleCallback
                    }
                }
            },
            scales: {
                y: {
                    ticks: { 
                        color: '#4b5563', 
                        font: { family: "'Inter', sans-serif" }
                    },
                    grid: { color: '#e5e7eb' }
                },
                x: {
                    ticks: { 
                        color: '#4b5563', 
                        font: { family: "'Inter', sans-serif" }
                    },
                    grid: { display: false }
                }
            }
        };

        new Chart(document.getElementById('competitorPriceChart'), {
            type: 'bar',
            data: {
                labels: ['Our Proposed Price', 'Diagnostic Solutions GI-MAP', "Genova GI-Effects (Low Cash Price)", 'Doctor\\'s Data GI360', 'Genova GI-Effects (Billed to Insurance)'],
                datasets: [{
                    label: 'Test Price (USD)',
                    data: [349, 425, 439, 500, 2613],
                    backgroundColor: [
                        brilliantBlues.dark,
                        brilliantBlues.medium,
                        brilliantBlues.light,
                        brilliantBlues.lighter,
                        '#ef4444' 
                    ],
                    borderColor: '#ffffff',
                    borderWidth: 2
                }]
            },
            options: {
                ...sharedChartOptions,
                scales: {
                    y: { ...sharedChartOptions.scales.y, beginAtZero: true, ticks: { callback: value => '$' + value } },
                    x: { ...sharedChartOptions.scales.x, ticks: { autoSkip: false, callback: function(value) { return wrapLabels(this.getLabelForValue(value), 15); } } }
                },
                 plugins: { ...sharedChartOptions.plugins, legend: { display: false } }
            }
        });
        
        new Chart(document.getElementById('panelCompositionChart'), {
            type: 'doughnut',
            data: {
                labels: ['Inflammation/Immunology', 'Digestion/Absorption', 'Microbiome Metabolites', 'Microbiome Composition (qPCR)', 'Pathogens'],
                datasets: [{
                    label: 'Panel Composition',
                    data: [25, 15, 15, 25, 20],
                    backgroundColor: [
                        brilliantBlues.dark,
                        brilliantBlues.medium,
                        '#34d399',
                        brilliantBlues.light,
                        '#f59e0b'
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                ...sharedChartOptions,
                cutout: '60%',
                plugins: { 
                    ...sharedChartOptions.plugins, 
                    legend: { 
                        position: window.innerWidth < 768 ? 'bottom' : 'right',
                        labels: {
                            boxWidth: 12,
                            padding: 10,
                            font: {
                                size: window.innerWidth < 768 ? 10 : 12
                            }
                        }
                    } 
                },
                scales: { y: { display: false }, x: { display: false } }
            }
        });
        
        new Chart(document.getElementById('cogsChart'), {
            type: 'pie',
            data: {
                labels: ['qPCR Reagents', 'ELISA/Immunoassays', 'Direct Labor', 'Kit & Logistics', 'GC-FID & Chem', 'Other (Depr., OH, Plastics)'],
                datasets: [{
                    label: 'COGS Breakdown',
                    data: [28, 25, 18, 15, 8, 22],
                    backgroundColor: [
                        brilliantBlues.dark,
                        brilliantBlues.medium,
                        brilliantBlues.light,
                        '#f59e0b',
                        '#34d399',
                        brilliantBlues.lighter
                    ],
                    hoverOffset: 4
                }]
            },
            options: {
                ...sharedChartOptions,
                plugins: { 
                    ...sharedChartOptions.plugins, 
                    legend: { 
                        position: window.innerWidth < 768 ? 'bottom' : 'right',
                        labels: {
                            boxWidth: 12,
                            padding: 10,
                            font: {
                                size: window.innerWidth < 768 ? 10 : 12
                            }
                        }
                    } 
                },
                scales: { y: { display: false }, x: { display: false } }
            }
        });

        new Chart(document.getElementById('marginChart'), {
            type: 'bar',
            data: {
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
                }
                ]
            },
            options: {
                ...sharedChartOptions,
                indexAxis: 'y',
                scales: {
                    x: {
                        stacked: true,
                        ticks: { callback: value => '$' + value }
                    },
                    y: {
                        stacked: true
                    }
                }
            }
        });

        // Handle responsive legend positioning
        function updateChartResponsiveness() {
            const panelChart = Chart.getChart('panelCompositionChart');
            const cogsChart = Chart.getChart('cogsChart');
            
            const isMobile = window.innerWidth < 768;
            const legendPosition = isMobile ? 'bottom' : 'right';
            const fontSize = isMobile ? 10 : 12;
            
            if (panelChart) {
                panelChart.options.plugins.legend.position = legendPosition;
                panelChart.options.plugins.legend.labels.font.size = fontSize;
                panelChart.update();
            }
            
            if (cogsChart) {
                cogsChart.options.plugins.legend.position = legendPosition;
                cogsChart.options.plugins.legend.labels.font.size = fontSize;
                cogsChart.update();
            }
        }

        // Listen for window resize events
        window.addEventListener('resize', updateChartResponsiveness);
    </script>
</body>
</html>
      `,
      }}
    />
  );
}
