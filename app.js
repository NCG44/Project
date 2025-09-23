// Bellevue Residence Investment App - Professional Closing Sales Interface with Transaction Analysis Data
document.addEventListener('DOMContentLoaded', function() {
    // Real Transaction Analysis data from Norden Capital Group
    const data = {
        transaction_analysis: {
            investment_amount: 148000,
            nightly_rate: 150,
            occupied_nights: 146,
            gross_rental_income: 21900,
            operating_costs: 5040,
            net_rental_income: 16860,
            annual_yield: 11.7,
            projected_exit_price: 187333,
            capital_appreciation: 44333,
            three_year_cashflow: 50580,
            total_return: 94913,
            total_return_percentage: 66.3,
            occupancy_rate: 40 // Conservative 40% occupancy
        },
        rental_projections: {
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            monthly_income: [1205, 1205, 1205, 1680, 2100, 2520, 2520, 2520, 2100, 1680, 1260, 1205] // Based on seasonal variation
        },
        growth_timeline: {
            years: ['År 1', 'År 2', 'År 3'],
            annual_cashflow: [16860, 16860, 16860],
            cumulative_cashflow: [16860, 33720, 50580],
            capital_appreciation: [0, 0, 44333],
            total_value: [16860, 33720, 94913]
        }
    };

    let currentSection = 0;
    const totalSections = 6;
    let activeCharts = {};

    // Initialize app
    setTimeout(() => {
        setupNavigation();
        showSection(0);
        initializeAnimations();
    }, 100);

    function setupNavigation() {
        console.log('Setting up Bellevue Residence navigation...');

        // Breadcrumb navigation
        const breadcrumbs = document.querySelectorAll('.breadcrumb');
        breadcrumbs.forEach((breadcrumb, index) => {
            breadcrumb.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                showSection(index);
            });
        });

        // Next button navigation
        const nextButtons = document.querySelectorAll('.next-btn, .cta-btn');
        nextButtons.forEach((button) => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();

                // Handle CTA buttons differently
                if (button.classList.contains('cta-btn')) {
                    if (button.classList.contains('primary')) {
                        showInvestmentDialog();
                    } else {
                        showConsultationDialog();
                    }
                } else if (currentSection < totalSections - 1) {
                    showSection(currentSection + 1);
                }
            });
        });

        console.log('Navigation setup complete');
    }

    function showSection(index) {
        console.log(`Showing Bellevue section ${index}`);

        if (index < 0 || index >= totalSections) return;

        // Clear existing charts
        Object.values(activeCharts).forEach(chart => {
            if (chart && typeof chart.destroy === 'function') {
                chart.destroy();
            }
        });
        activeCharts = {};

        // Hide all sections
        const allSections = document.querySelectorAll('.section');
        allSections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });

        // Show target section
        const targetSection = document.getElementById(`section-${index}`);
        if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.classList.add('active');
        }

        // Update breadcrumbs
        const breadcrumbs = document.querySelectorAll('.breadcrumb');
        breadcrumbs.forEach((crumb, i) => {
            crumb.classList.remove('active', 'completed');
            if (i === index) {
                crumb.classList.add('active');
            } else if (i < index) {
                crumb.classList.add('completed');
            }
        });

        currentSection = index;

        // Initialize section-specific content
        setTimeout(() => {
            initializeSection(index);
        }, 300);

        window.scrollTo(0, 0);
    }

    function initializeSection(index) {
        console.log(`Initializing Bellevue section ${index}`);

        switch (index) {
            case 0: // Hero section
                setTimeout(() => {
                    animateMetricCards();
                    animateBrandTags();
                }, 500);
                break;
            case 1: // Rental income section
                setTimeout(() => {
                    animateRentalProjection();
                    createRentalIncomeChart();
                }, 500);
                break;
            case 2: // Growth projections
                setTimeout(() => {
                    animateGrowthPercentage();
                    createGrowthTimelineChart();
                }, 500);
                break;
            case 3: // Off-plan strategy
                setTimeout(() => {
                    animateOffPlanBenefits();
                }, 500);
                break;
            case 4: // Luxury positioning
                setTimeout(() => {
                    animateBrandShowcase();
                    animateDestinationShift();
                }, 500);
                break;
            case 5: // Investment summary
                setTimeout(() => {
                    animateSummaryCards();
                    animateStatusItems();
                }, 500);
                break;
        }
    }

    function initializeAnimations() {
        // Add intersection observer for scroll-triggered animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1 });

        // Observe all animatable elements
        const animatableElements = document.querySelectorAll(
            '.metric-card, .advantage-item, .driver-card, .positioning-item, .summary-card, .step-card'
        );
        animatableElements.forEach(el => observer.observe(el));
    }

    // Animation Functions
    function animateNumber(element, target, duration = 2000, suffix = '', prefix = '', decimals = 0) {
        if (!element || element.classList.contains('animated')) return;
        element.classList.add('animated');

        let start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            const displayValue = decimals > 0 ? current.toFixed(decimals) : Math.floor(current);
            element.textContent = prefix + displayValue + suffix;
        }, 16);
    }

    function animateMetricCards() {
        const cards = document.querySelectorAll('.metric-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'translateY(0)';
                card.style.opacity = '1';

                // Animate the metric values
                const value = card.querySelector('.metric-value');
                if (value && value.textContent.includes('%')) {
                    const target = parseFloat(value.textContent) || 0;
                    animateNumber(value, target, 2500, '%', '', 1);
                }
            }, index * 200);
        });
    }

    function animateBrandTags() {
        const tags = document.querySelectorAll('.brand-tag');
        tags.forEach((tag, index) => {
            setTimeout(() => {
                tag.style.transform = 'scale(1)';
                tag.style.opacity = '1';
            }, 1000 + (index * 150));
        });
    }

    function animateRentalProjection() {
        const projectionElement = document.querySelector('.projection-range');
        if (projectionElement) {
            animateNumber(projectionElement, data.transaction_analysis.annual_yield, 3000, '', '', 1);
        }
    }

    function animateGrowthPercentage() {
        const growthElement = document.querySelector('.growth-percentage');
        if (growthElement) {
            animateNumber(growthElement, data.transaction_analysis.total_return_percentage, 3500, '%', '', 1);
        }
    }

    function animateOffPlanBenefits() {
        const stages = document.querySelectorAll('.advantage-stage');
        stages.forEach((stage, index) => {
            setTimeout(() => {
                stage.style.transform = 'translateX(0)';
                stage.style.opacity = '1';
            }, index * 400);
        });
    }

    function animateBrandShowcase() {
        const brandItems = document.querySelectorAll('.brand-item');
        brandItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.transform = 'translateY(0)';
                item.style.opacity = '1';
            }, index * 300);
        });
    }

    function animateDestinationShift() {
        const destinations = document.querySelectorAll('.old-destination, .new-destination');
        destinations.forEach((dest, index) => {
            setTimeout(() => {
                dest.style.transform = 'scale(1)';
                dest.style.opacity = '1';
            }, index * 600);
        });

        // Animate arrow
        const arrow = document.querySelector('.destination-shift .arrow');
        if (arrow) {
            setTimeout(() => {
                arrow.style.transform = 'scale(1) rotate(0deg)';
                arrow.style.opacity = '1';
            }, 800);
        }
    }

    function animateSummaryCards() {
        const summaryCards = document.querySelectorAll('.summary-card');
        summaryCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'translateY(0)';
                card.style.opacity = '1';

                // Animate values in summary cards
                const value = card.querySelector('.summary-value');
                if (value) {
                    const text = value.textContent;
                    if (text.includes('%')) {
                        const target = parseFloat(text) || 0;
                        animateNumber(value, target, 2000, '% årligt', '', 1);
                    }
                }
            }, index * 400);
        });
    }

    function animateStatusItems() {
        const statusItems = document.querySelectorAll('.status-item');
        statusItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.transform = 'translateX(0)';
                item.style.opacity = '1';
            }, index * 300);
        });
    }

    // Chart Creation Functions
    function createRentalIncomeChart() {
        const canvas = document.getElementById('rental-income-chart');
        if (!canvas) return;

        console.log('Creating rental income chart with transaction analysis data');

        activeCharts.rental = new Chart(canvas, {
            type: 'line',
            data: {
                labels: data.rental_projections.months,
                datasets: [
                    {
                        label: 'Månedlig lejeindtægt (€)',
                        data: data.rental_projections.monthly_income,
                        borderColor: '#d4af37',
                        backgroundColor: 'rgba(212, 175, 55, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#d4af37',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 6
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { 
                    legend: { 
                        display: true,
                        labels: { color: '#ffffff' }
                    }
                },
                scales: {
                    x: { 
                        ticks: { color: '#ffffff' }, 
                        grid: { color: 'rgba(255,255,255,0.1)' }
                    },
                    y: { 
                        ticks: { 
                            color: '#ffffff',
                            callback: value => '€' + value.toLocaleString()
                        }, 
                        grid: { color: 'rgba(255,255,255,0.1)' } 
                    }
                },
                animation: {
                    duration: 3000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    function createGrowthTimelineChart() {
        const canvas = document.getElementById('growth-timeline-chart');
        if (!canvas) return;

        console.log('Creating growth timeline chart with transaction analysis data');

        activeCharts.growth = new Chart(canvas, {
            type: 'bar',
            data: {
                labels: data.growth_timeline.years,
                datasets: [
                    {
                        label: 'Årlig cashflow (€)',
                        data: data.growth_timeline.annual_cashflow,
                        backgroundColor: 'rgba(22, 160, 133, 0.8)',
                        borderColor: '#16a085',
                        borderWidth: 2,
                        borderRadius: 8
                    },
                    {
                        label: 'Kapitalvækst (€)',
                        data: [0, 0, data.transaction_analysis.capital_appreciation],
                        backgroundColor: 'rgba(212, 175, 55, 0.8)',
                        borderColor: '#d4af37',
                        borderWidth: 2,
                        borderRadius: 8
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { 
                    legend: { 
                        display: true,
                        labels: { color: '#ffffff' }
                    }
                },
                scales: {
                    x: { 
                        ticks: { color: '#ffffff' }, 
                        grid: { color: 'rgba(255,255,255,0.1)' },
                        stacked: true
                    },
                    y: { 
                        ticks: { 
                            color: '#ffffff',
                            callback: value => '€' + value.toLocaleString()
                        }, 
                        grid: { color: 'rgba(255,255,255,0.1)' },
                        stacked: true
                    }
                },
                animation: {
                    duration: 2500,
                    easing: 'easeOutBounce',
                    delay: function(context) {
                        return context.dataIndex * 200;
                    }
                }
            }
        });
    }

    // Dialog Functions for CTA Actions
    function showInvestmentDialog() {
        console.log('Opening investment reservation dialog...');
        const dialog = createStyledDialog(
            'Reservér Din Enhed',
            `
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 48px; color: #d4af37; margin-bottom: 20px;">INVESTERING</div>
                <h3 style="color: #d4af37; margin-bottom: 15px;">Tak for din interesse i Bellevue Residence!</h3>
                <p style="color: rgba(255,255,255,0.9); margin-bottom: 20px; line-height: 1.6;">
                    Du er ved at træffe en klog investeringsbeslutning med 11,7% årlig afkast og 66,3% total afkast over 3 år.
                </p>
                <div style="background: rgba(212, 175, 55, 0.1); border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 12px; padding: 20px; margin: 20px 0;">
                    <p style="color: #d4af37; font-weight: bold; margin-bottom: 10px;">Næste skridt:</p>
                    <p style="color: rgba(255,255,255,0.8); font-size: 14px;">
                        • Enheds-visning og beliggenhedsvalg<br>
                        • Finansieringsstruktur og betalingsplan<br>
                        • Juridisk gennemgang og dokumentation
                    </p>
                </div>
                <button onclick="closeDialog()" style="background: #d4af37; color: #000; border: none; padding: 12px 30px; border-radius: 25px; font-weight: bold; cursor: pointer; text-transform: uppercase;">
                    Luk
                </button>
            </div>
            `
        );

        console.log('Investment intent tracked for Bellevue Residence');
    }

    function showConsultationDialog() {
        console.log('Opening consultation booking dialog...');
        const dialog = createStyledDialog(
            'Book Konsultation',
            `
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 48px; color: #16a085; margin-bottom: 20px;">KONSULTATION</div>
                <h3 style="color: #16a085; margin-bottom: 15px;">Book Personlig Investeringskonsultation</h3>
                <p style="color: rgba(255,255,255,0.9); margin-bottom: 20px; line-height: 1.6;">
                    Lad vores eksperter guide dig gennem transaktionsanalysen for Bellevue Residence med detaljerede ROI-beregninger.
                </p>
                <div style="background: rgba(22, 160, 133, 0.1); border: 1px solid rgba(22, 160, 133, 0.3); border-radius: 12px; padding: 20px; margin: 20px 0;">
                    <p style="color: #16a085; font-weight: bold; margin-bottom: 10px;">Konsultationen inkluderer:</p>
                    <p style="color: rgba(255,255,255,0.8); font-size: 14px;">
                        • Detaljeret transaktionsanalyse gennemgang<br>
                        • ROI-beregninger og prognoser<br>
                        • Risikoevaluering og mitigering<br>
                        • Skræddersyet investeringsstrategi
                    </p>
                </div>
                <button onclick="closeDialog()" style="background: #16a085; color: #fff; border: none; padding: 12px 30px; border-radius: 25px; font-weight: bold; cursor: pointer; text-transform: uppercase;">
                    Luk
                </button>
            </div>
            `
        );
    }

    function createStyledDialog(title, content) {
        const dialog = document.createElement('div');
        dialog.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            backdrop-filter: blur(10px);
        `;

        dialog.innerHTML = `
            <div style="
                background: linear-gradient(135deg, #1a2332 0%, #0f1419 100%);
                border: 1px solid rgba(212, 175, 55, 0.3);
                border-radius: 20px;
                max-width: 500px;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
                position: relative;
            ">
                <div style="
                    background: linear-gradient(135deg, #d4af37 0%, #b8860b 100%);
                    color: #000;
                    padding: 20px;
                    text-align: center;
                    font-weight: bold;
                    font-size: 18px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                ">
                    ${title}
                </div>
                ${content}
            </div>
        `;

        // Close on background click
        dialog.addEventListener('click', function(e) {
            if (e.target === dialog) {
                closeDialog();
            }
        });

        document.body.appendChild(dialog);

        // Make closeDialog globally accessible
        window.closeDialog = function() {
            document.body.removeChild(dialog);
        };

        return dialog;
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' && currentSection < totalSections - 1) {
            e.preventDefault();
            showSection(currentSection + 1);
        } else if (e.key === 'ArrowLeft' && currentSection > 0) {
            e.preventDefault();
            showSection(currentSection - 1);
        }
    });

    // Initialize scroll-triggered animations
    const style = document.createElement('style');
    style.textContent = `
        .metric-card, .advantage-item, .driver-card, .positioning-item, .summary-card, .step-card {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }

        .metric-card.animate-in, .advantage-item.animate-in, .driver-card.animate-in, 
        .positioning-item.animate-in, .summary-card.animate-in, .step-card.animate-in {
            opacity: 1;
            transform: translateY(0);
        }

        .advantage-stage {
            opacity: 0;
            transform: translateX(-50px);
            transition: all 0.6s ease;
        }

        .brand-item {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }

        .old-destination, .new-destination {
            opacity: 0;
            transform: scale(0.8);
            transition: all 0.6s ease;
        }

        .destination-shift .arrow {
            opacity: 0;
            transform: scale(0.5) rotate(45deg);
            transition: all 0.6s ease;
        }

        .status-item {
            opacity: 0;
            transform: translateX(-30px);
            transition: all 0.4s ease;
        }
    `;
    document.head.appendChild(style);

    console.log('Bellevue Residence app loaded with real Transaction Analysis data and professional design');
});
