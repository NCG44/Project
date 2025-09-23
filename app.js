// Bellevue Residence Investment App - Advanced Closing Sales Interface
document.addEventListener('DOMContentLoaded', function() {
    // Investment data for Bellevue Residence
    const data = {
        rental_projections: {
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            low_scenario: [8, 8.2, 8.5, 9.2, 10.8, 12.5, 12.8, 12.6, 11.4, 10.2, 9.1, 8.3],
            high_scenario: [10, 10.3, 10.8, 11.8, 13.5, 15.2, 15.6, 15.3, 14.1, 12.6, 11.3, 10.5]
        },
        growth_timeline: {
            years: ['2025', '2026', '2027', '2028', '2029', '2030'],
            cumulative_growth: [0, 8.5, 18.2, 29.8, 39.1, 49.6],
            annual_growth: [0, 8.5, 9.7, 11.6, 9.3, 10.5]
        },
        investment_metrics: {
            annual_rental_min: 8,
            annual_rental_max: 12,
            five_year_return: 49.6,
            eu_membership_year: 2028,
            construction_completion: '2026 Q2'
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
                        // Handle "RESERVÉR ENHED NU" action
                        showInvestmentDialog();
                    } else {
                        // Handle "BOOK KONSULTATION" action
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
                    const target = parseInt(value.textContent) || 0;
                    animateNumber(value, target, 2500, '%');
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
            // Animate from 0% to 8-12%
            let currentMin = 0;
            let currentMax = 0;
            const targetMin = data.investment_metrics.annual_rental_min;
            const targetMax = data.investment_metrics.annual_rental_max;
            const duration = 3000;
            const steps = duration / 16;
            const incrementMin = targetMin / steps;
            const incrementMax = targetMax / steps;

            const timer = setInterval(() => {
                currentMin += incrementMin;
                currentMax += incrementMax;

                if (currentMin >= targetMin && currentMax >= targetMax) {
                    currentMin = targetMin;
                    currentMax = targetMax;
                    clearInterval(timer);
                }

                projectionElement.textContent = `${Math.floor(currentMin)}-${Math.floor(currentMax)}%`;
            }, 16);
        }
    }

    function animateGrowthPercentage() {
        const growthElement = document.querySelector('.growth-percentage');
        if (growthElement) {
            animateNumber(growthElement, data.investment_metrics.five_year_return, 3500, '%', '', 1);
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
                        animateNumber(value, target, 2000, '% over 5 år', '', 1);
                    } else if (text.includes('-')) {
                        // Handle rental range
                        setTimeout(() => {
                            value.style.opacity = '1';
                            value.style.transform = 'scale(1)';
                        }, 500);
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

        console.log('Creating rental income chart');

        activeCharts.rental = new Chart(canvas, {
            type: 'line',
            data: {
                labels: data.rental_projections.months,
                datasets: [
                    {
                        label: 'Optimistisk scenario (12%)',
                        data: data.rental_projections.high_scenario,
                        borderColor: '#d4af37',
                        backgroundColor: 'rgba(212, 175, 55, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#d4af37',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 6
                    },
                    {
                        label: 'Konservativt scenario (8%)',
                        data: data.rental_projections.low_scenario,
                        borderColor: '#16a085',
                        backgroundColor: 'rgba(22, 160, 133, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#16a085',
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
                            callback: value => value + '%'
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

        console.log('Creating growth timeline chart');

        activeCharts.growth = new Chart(canvas, {
            type: 'bar',
            data: {
                labels: data.growth_timeline.years,
                datasets: [{
                    label: 'Akkumuleret afkast (%)',
                    data: data.growth_timeline.cumulative_growth,
                    backgroundColor: [
                        'rgba(212, 175, 55, 0.3)',
                        'rgba(212, 175, 55, 0.4)',
                        'rgba(212, 175, 55, 0.6)',
                        'rgba(212, 175, 55, 0.8)',
                        'rgba(212, 175, 55, 0.9)',
                        'rgba(212, 175, 55, 1.0)'
                    ],
                    borderColor: '#d4af37',
                    borderWidth: 2,
                    borderRadius: 8
                }]
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
                            callback: value => value + '%'
                        }, 
                        grid: { color: 'rgba(255,255,255,0.1)' } 
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
        // Create a sophisticated dialog for investment
        const dialog = createStyledDialog(
            'Reservér Din Enhed',
            `
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 48px; color: #d4af37; margin-bottom: 20px;">🏖️</div>
                <h3 style="color: #d4af37; margin-bottom: 15px;">Tak for din interesse i Bellevue Residence!</h3>
                <p style="color: rgba(255,255,255,0.9); margin-bottom: 20px; line-height: 1.6;">
                    Du er ved at træffe en klog investeringsbeslutning. Vores investeringsrådgiver vil kontakte dig inden for 24 timer for at hjælpe dig med at vælge den perfekte enhed.
                </p>
                <div style="background: rgba(212, 175, 55, 0.1); border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 12px; padding: 20px; margin: 20px 0;">
                    <p style="color: #d4af37; font-weight: bold; margin-bottom: 10px;">🎯 Næste skridt:</p>
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

        // Track investment intent (you could integrate with analytics here)
        console.log('Investment intent tracked for Bellevue Residence');
    }

    function showConsultationDialog() {
        console.log('Opening consultation booking dialog...');
        const dialog = createStyledDialog(
            'Book Konsultation',
            `
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 48px; color: #16a085; margin-bottom: 20px;">💼</div>
                <h3 style="color: #16a085; margin-bottom: 15px;">Book Personlig Investeringskonsultation</h3>
                <p style="color: rgba(255,255,255,0.9); margin-bottom: 20px; line-height: 1.6;">
                    Lad vores eksperter guide dig gennem investeringsmuligheden i Bellevue Residence. Vi tilbyder omfattende analyser og skræddersyet rådgivning.
                </p>
                <div style="background: rgba(22, 160, 133, 0.1); border: 1px solid rgba(22, 160, 133, 0.3); border-radius: 12px; padding: 20px; margin: 20px 0;">
                    <p style="color: #16a085; font-weight: bold; margin-bottom: 10px;">📋 Konsultationen inkluderer:</p>
                    <p style="color: rgba(255,255,255,0.8); font-size: 14px;">
                        • Detaljeret markedsanalyse<br>
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

    console.log('Bellevue Residence app loaded and initialized with premium closing sales features');
});
