// Enhanced Bellevue Residence App - Complete JavaScript with All Content
document.addEventListener('DOMContentLoaded', function() {
    // Transaction Analysis Data (from your document)
    const data = {
        rental_projections: {
            years: ['2027', '2028', '2029'],
            accumulated_income: [16860, 33720, 50580],
            annual_yield: 11.7,
            net_annual: 16860
        },
        growth_timeline: {
            periods: ['Køb (2025)', 'Off-plan (2026)', 'Færdiggørelse Q1 2027', 'År 2 (2028)', 'År 3 (2029)'],
            property_value: [143000, 143000, 187333, null, null],
            accumulated_rental: [0, 0, 16860, 33720, 50580],
            total_return: 89913,
            total_return_percentage: 66.3
        },
        fdi_data: {
            years: ['2019', '2020', '2021', '2022', '2023', '2024'],
            fdi_amounts: [487, 356, 625, 758, 892, 1050]
        },
        investment: {
            amount: 143000,
            exit_price: 187333,
            discounting_factor: 9
        }
    };

    let currentSection = 0;
    const totalSections = 7; // Now 7 sections including next steps
    let activeCharts = {};
    let animationObserver;

    // Initialize app
    init();

    function init() {
        console.log('Initializing complete Bellevue Residence app with enhanced animations...');
        setupNavigation();
        setupAnimationObserver();
        setupEnhancedEffects();
        setupCountdown();
        showSection(0);
        
        // Add subtle background animation
        createBackgroundEffects();
    }

    function setupNavigation() {
        // Breadcrumb navigation
        const breadcrumbs = document.querySelectorAll('.breadcrumb');
        breadcrumbs.forEach((breadcrumb, index) => {
            breadcrumb.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Navigating to section', index);
                showSection(index);
            });
        });

        // Next button navigation
        const nextButtons = document.querySelectorAll('.next-btn');
        nextButtons.forEach((button) => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                if (currentSection < totalSections - 1) {
                    showSection(currentSection + 1);
                }
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowRight' && currentSection < totalSections - 1) {
                showSection(currentSection + 1);
            } else if (e.key === 'ArrowLeft' && currentSection > 0) {
                showSection(currentSection - 1);
            }
        });
    }

    function showSection(index) {
        if (index < 0 || index >= totalSections) return;
        
        console.log('Showing section', index);
        
        // Clear existing charts
        Object.values(activeCharts).forEach(chart => {
            if (chart && typeof chart.destroy === 'function') {
                chart.destroy();
            }
        });
        activeCharts = {};

        // Hide all sections with smooth fade out
        const allSections = document.querySelectorAll('.section');
        allSections.forEach((section) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            setTimeout(() => {
                section.classList.remove('active');
                section.style.display = 'none';
            }, 300);
        });

        // Show target section with enhanced fade in
        const targetSection = document.getElementById(`section-${index}`);
        if (targetSection) {
            setTimeout(() => {
                targetSection.style.display = 'block';
                targetSection.classList.add('active');
                
                // Smooth fade in animation
                requestAnimationFrame(() => {
                    targetSection.style.opacity = '1';
                    targetSection.style.transform = 'translateY(0)';
                });
            }, 350);
        }

        // Update breadcrumbs with enhanced animation
        updateBreadcrumbs(index);
        currentSection = index;

        // Initialize section-specific content
        setTimeout(() => {
            initializeSection(index);
        }, 500);

        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function updateBreadcrumbs(activeIndex) {
        const breadcrumbs = document.querySelectorAll('.breadcrumb');
        breadcrumbs.forEach((crumb, i) => {
            crumb.classList.remove('active', 'completed');
            
            if (i === activeIndex) {
                crumb.classList.add('active');
                // Add subtle pulse animation
                crumb.style.animation = 'pulse 0.6s ease-out';
                setTimeout(() => {
                    crumb.style.animation = '';
                }, 600);
            } else if (i < activeIndex) {
                crumb.classList.add('completed');
            }
        });
    }

    function initializeSection(index) {
        console.log('Initializing section', index, 'with enhanced animations');
        
        // Reset all animated elements
        const animatedElements = document.querySelectorAll('.animated');
        animatedElements.forEach(el => el.classList.remove('animated'));

        switch (index) {
            case 0: // Hero section
                animateHeroElements();
                animateStrategicPositioning();
                break;
            case 1: // Rental section
                animateRentalHighlights();
                animateCalculationGrid();
                setTimeout(() => createRentalChart(), 800);
                break;
            case 2: // Growth section
                animateGrowthHighlights();
                setTimeout(() => createGrowthChart(), 800);
                animateCatalystTimeline();
                animateValueDrivers();
                break;
            case 3: // Off-plan section
                animateTimingUrgency();
                animateTimingPhases();
                animateProgressBars();
                break;
            case 4: // Market section
                animateDestinationShift();
                animateMarketTransition();
                setTimeout(() => createFDIChart(), 800);
                animateBrandInvestments();
                animateCompetitionGrid();
                break;
            case 5: // Summary section
                animateInvestmentThesis();
                animateSummaryCards();
                animateStatusUpdate();
                animateScenarios();
                break;
            case 6: // Next steps section
                animateUrgencyBanner();
                animateActionTimeline();
                animateProtectionGrid();
                break;
        }
    }

    // ENHANCED ANIMATION FUNCTIONS

    function animateHeroElements() {
        const metrics = document.querySelectorAll('#section-0 .metric-card');
        metrics.forEach((metric, index) => {
            metric.style.opacity = '0';
            metric.style.transform = 'translateY(30px) scale(0.95)';
            
            setTimeout(() => {
                metric.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
                metric.style.opacity = '1';
                metric.style.transform = 'translateY(0) scale(1)';
                
                // Animate the number inside
                const valueEl = metric.querySelector('.metric-value');
                if (valueEl) {
                    animateNumber(valueEl, 1500);
                }
            }, index * 200 + 300);
        });

        // Animate brand validations
        const brands = document.querySelectorAll('#section-0 .brand-validation');
        brands.forEach((brand, index) => {
            brand.style.opacity = '0';
            brand.style.transform = 'translateX(-20px)';
            
            setTimeout(() => {
                brand.style.transition = 'all 0.6s ease-out';
                brand.style.opacity = '1';
                brand.style.transform = 'translateX(0)';
            }, index * 150 + 600);
        });
    }

    function animateStrategicPositioning() {
        const positioning = document.querySelector('.strategic-positioning');
        if (positioning) {
            positioning.style.opacity = '0';
            positioning.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                positioning.style.transition = 'all 0.8s ease-out';
                positioning.style.opacity = '1';
                positioning.style.transform = 'translateY(0)';
            }, 1200);
        }
    }

    function animateRentalHighlights() {
        const highlight = document.querySelector('.projection-highlight');
        if (highlight) {
            highlight.style.opacity = '0';
            highlight.style.transform = 'scale(0.8)';
            
            setTimeout(() => {
                highlight.style.transition = 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)';
                highlight.style.opacity = '1';
                highlight.style.transform = 'scale(1)';
                
                // Animate the percentage
                const percentage = highlight.querySelector('.projection-range');
                if (percentage) {
                    animatePercentage(percentage, 11.7, 2000);
                }
            }, 400);
        }

        // Animate demand grid
        const demandItems = document.querySelectorAll('#section-1 .demand-item');
        demandItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.6s ease-out';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 200 + 800);
        });
    }

    function animateCalculationGrid() {
        const calcItems = document.querySelectorAll('.calculation-grid .calc-item');
        calcItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-30px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.6s ease-out';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
                
                // Animate numbers
                const valueEl = item.querySelector('.calc-value');
                if (valueEl && valueEl.textContent.includes('€')) {
                    animateNumber(valueEl, 1200);
                }
            }, index * 150 + 1000);
        });
    }

    function animateGrowthHighlights() {
        const growthBox = document.querySelector('.growth-value-box');
        if (growthBox) {
            growthBox.style.opacity = '0';
            growthBox.style.transform = 'scale(0.8) rotateY(15deg)';
            
            setTimeout(() => {
                growthBox.style.transition = 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
                growthBox.style.opacity = '1';
                growthBox.style.transform = 'scale(1) rotateY(0deg)';
                
                // Animate the percentage
                const percentage = growthBox.querySelector('.growth-percentage');
                if (percentage) {
                    animatePercentage(percentage, 66.3, 2500);
                }
            }, 400);
        }
    }

    function animateCatalystTimeline() {
        const catalysts = document.querySelectorAll('#section-2 .catalyst-item');
        catalysts.forEach((catalyst, index) => {
            catalyst.style.opacity = '0';
            catalyst.style.transform = 'translateX(-50px)';
            
            setTimeout(() => {
                catalyst.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                catalyst.style.opacity = '1';
                catalyst.style.transform = 'translateX(0)';
                
                // Add subtle bounce effect
                setTimeout(() => {
                    catalyst.style.transform = 'translateX(5px)';
                    setTimeout(() => {
                        catalyst.style.transform = 'translateX(0)';
                    }, 150);
                }, 300);
            }, index * 300 + 600);
        });
    }

    function animateValueDrivers() {
        const drivers = document.querySelectorAll('.driver-item');
        drivers.forEach((driver, index) => {
            driver.style.opacity = '0';
            driver.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                driver.style.transition = 'all 0.6s ease-out';
                driver.style.opacity = '1';
                driver.style.transform = 'scale(1)';
            }, index * 200 + 1200);
        });
    }

    function animateTimingUrgency() {
        const urgencyBanner = document.querySelector('.urgency-banner');
        if (urgencyBanner) {
            urgencyBanner.style.opacity = '0';
            urgencyBanner.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                urgencyBanner.style.transition = 'all 0.8s ease-out';
                urgencyBanner.style.opacity = '1';
                urgencyBanner.style.transform = 'scale(1)';
            }, 200);
        }
    }

    function animateTimingPhases() {
        const phases = document.querySelectorAll('#section-3 .timing-phase');
        phases.forEach((phase, index) => {
            phase.style.opacity = '0';
            phase.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                phase.style.transition = 'all 0.8s ease-out';
                phase.style.opacity = '1';
                phase.style.transform = 'translateY(0)';
            }, index * 400 + 300);
        });
    }

    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-fill');
        progressBars.forEach((bar) => {
            const progress = parseInt(bar.dataset.progress) || 50;
            bar.style.width = '0%';
            
            setTimeout(() => {
                bar.style.transition = 'width 2s ease-out';
                bar.style.width = progress + '%';
            }, 1000);
        });
    }

    function animateDestinationShift() {
        const shift = document.querySelector('.destination-shift');
        if (shift) {
            shift.style.opacity = '0';
            shift.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                shift.style.transition = 'all 0.8s ease-out';
                shift.style.opacity = '1';
                shift.style.transform = 'translateY(0)';
            }, 300);
        }
    }

    function animateMarketTransition() {
        const oldMarket = document.querySelector('#section-4 .old-market');
        const newMarket = document.querySelector('#section-4 .new-market');
        const arrow = document.querySelector('#section-4 .market-arrow');

        if (oldMarket && newMarket && arrow) {
            // Initial state
            [oldMarket, newMarket, arrow].forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
            });

            // Animate in sequence
            setTimeout(() => {
                oldMarket.style.transition = 'all 0.8s ease-out';
                oldMarket.style.opacity = '1';
                oldMarket.style.transform = 'translateY(0)';
            }, 600);

            setTimeout(() => {
                arrow.style.transition = 'all 0.6s ease-out';
                arrow.style.opacity = '1';
                arrow.style.transform = 'translateY(0) scale(1.2)';
                setTimeout(() => {
                    arrow.style.transform = 'translateY(0) scale(1)';
                }, 200);
            }, 1000);

            setTimeout(() => {
                newMarket.style.transition = 'all 0.8s ease-out';
                newMarket.style.opacity = '1';
                newMarket.style.transform = 'translateY(0)';
            }, 1400);
        }
    }

    function animateBrandInvestments() {
        const brandCases = document.querySelectorAll('#section-4 .brand-case');
        brandCases.forEach((brandCase, index) => {
            brandCase.style.opacity = '0';
            brandCase.style.transform = 'translateX(-30px)';
            
            setTimeout(() => {
                brandCase.style.transition = 'all 0.7s ease-out';
                brandCase.style.opacity = '1';
                brandCase.style.transform = 'translateX(0)';
            }, index * 300 + 1800);
        });
    }

    function animateCompetitionGrid() {
        const competitors = document.querySelectorAll('.competitor');
        competitors.forEach((comp, index) => {
            comp.style.opacity = '0';
            comp.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                comp.style.transition = 'all 0.6s ease-out';
                comp.style.opacity = '1';
                comp.style.transform = 'scale(1)';
            }, index * 200 + 2200);
        });
    }

    function animateInvestmentThesis() {
        const thesis = document.querySelector('.investment-thesis');
        if (thesis) {
            thesis.style.opacity = '0';
            thesis.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                thesis.style.transition = 'all 0.8s ease-out';
                thesis.style.opacity = '1';
                thesis.style.transform = 'translateY(0)';
            }, 200);
        }
    }

    function animateSummaryCards() {
        const cards = document.querySelectorAll('#section-5 .summary-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(40px) rotateX(15deg)';
            
            setTimeout(() => {
                card.style.transition = 'all 1s cubic-bezier(0.34, 1.56, 0.64, 1)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) rotateX(0deg)';
                
                // Animate numbers
                const valueEl = card.querySelector('.summary-value');
                if (valueEl) {
                    animateNumber(valueEl, 1800);
                }
            }, index * 250 + 400);
        });

        // Animate reality grid
        const realityItems = document.querySelectorAll('#section-5 .reality-item');
        realityItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.6s ease-out';
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, index * 150 + 1200);
        });
    }

    function animateStatusUpdate() {
        const statusItems = document.querySelectorAll('#section-5 .status-item');
        statusItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-40px)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.7s ease-out';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, index * 300 + 1800);
        });
    }

    function animateScenarios() {
        const scenarios = document.querySelectorAll('.scenario');
        scenarios.forEach((scenario, index) => {
            scenario.style.opacity = '0';
            scenario.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                scenario.style.transition = 'all 0.8s ease-out';
                scenario.style.opacity = '1';
                scenario.style.transform = 'translateY(0)';
            }, index * 200 + 2400);
        });
    }

    function animateUrgencyBanner() {
        const banner = document.querySelector('#section-6 .urgency-banner');
        if (banner) {
            banner.style.opacity = '0';
            banner.style.transform = 'scale(0.95)';
            
            setTimeout(() => {
                banner.style.transition = 'all 0.8s ease-out';
                banner.style.opacity = '1';
                banner.style.transform = 'scale(1)';
            }, 200);
        }
    }

    function animateActionTimeline() {
        const actionSteps = document.querySelectorAll('#section-6 .action-step');
        actionSteps.forEach((step, index) => {
            step.style.opacity = '0';
            step.style.transform = 'translateX(-40px)';
            
            setTimeout(() => {
                step.style.transition = 'all 0.8s ease-out';
                step.style.opacity = '1';
                step.style.transform = 'translateX(0)';
            }, index * 400 + 600);
        });
    }

    function animateProtectionGrid() {
        const protectionItems = document.querySelectorAll('.protection-item');
        protectionItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.9)';
            
            setTimeout(() => {
                item.style.transition = 'all 0.6s ease-out';
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, index * 150 + 2000);
        });
    }

    // COUNTDOWN FUNCTIONALITY
    function setupCountdown() {
        // Set target date to Q4 2025 (December 31, 2025)
        const targetDate = new Date('2025-12-31T23:59:59');
        
        function updateCountdown() {
            const now = new Date();
            const difference = targetDate - now;
            
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            
            const countdownNumber = document.querySelector('.countdown-number');
            if (countdownNumber && days > 0) {
                countdownNumber.textContent = days;
            }
        }
        
        updateCountdown();
        setInterval(updateCountdown, 1000 * 60 * 60); // Update every hour
    }

    // ENHANCED NUMBER ANIMATION
    function animateNumber(element, duration = 2000) {
        if (!element || element.classList.contains('animated')) return;
        element.classList.add('animated');
        
        const text = element.textContent;
        const isPercentage = text.includes('%');
        const isCurrency = text.includes('€');
        const targetValue = parseFloat(text.replace(/[€%,.]/g, ''));
        
        if (isNaN(targetValue)) return;
        
        let startValue = 0;
        const startTime = performance.now();
        
        function updateNumber(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Easing function for smoother animation
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = startValue + (targetValue - startValue) * easedProgress;
            
            let displayValue;
            if (isCurrency) {
                displayValue = '€' + Math.floor(currentValue).toLocaleString();
            } else if (isPercentage) {
                displayValue = currentValue.toFixed(1) + '%';
            } else {
                displayValue = Math.floor(currentValue).toLocaleString();
            }
            
            element.textContent = displayValue;
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            } else {
                element.textContent = text; // Ensure exact final value
            }
        }
        
        requestAnimationFrame(updateNumber);
    }

    function animatePercentage(element, target, duration = 2000) {
        if (!element || element.classList.contains('animated')) return;
        element.classList.add('animated');
        
        let start = 0;
        const startTime = performance.now();
        
        function updatePercentage(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Smooth easing
            const easedProgress = 1 - Math.pow(1 - progress, 3);
            const currentValue = start + (target - start) * easedProgress;
            
            element.textContent = currentValue.toFixed(1) + '%';
            
            if (progress < 1) {
                requestAnimationFrame(updatePercentage);
            } else {
                element.textContent = target.toFixed(1) + '%';
            }
        }
        
        requestAnimationFrame(updatePercentage);
    }

    // ENHANCED BACKGROUND EFFECTS
    function createBackgroundEffects() {
        // Create subtle floating particles
        const particleCount = 20;
        const container = document.body;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'bg-particle';
            particle.style.cssText = `
                position: fixed;
                width: 2px;
                height: 2px;
                background: rgba(59, 130, 246, 0.3);
                border-radius: 50%;
                pointer-events: none;
                z-index: -1;
                left: ${Math.random() * 100}vw;
                top: ${Math.random() * 100}vh;
                animation: float ${5 + Math.random() * 10}s ease-in-out infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            container.appendChild(particle);
        }
    }

    function setupEnhancedEffects() {
        // Add CSS for enhanced animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0%, 100% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.05); opacity: 0.8; }
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
                25% { transform: translateY(-20px) translateX(10px); opacity: 0.6; }
                50% { transform: translateY(-10px) translateX(-5px); opacity: 0.8; }
                75% { transform: translateY(-30px) translateX(15px); opacity: 0.4; }
            }
            
            .section {
                transition: opacity 0.4s ease-out, transform 0.4s ease-out;
            }
            
            .metric-card, .summary-card, .catalyst-item, .brand-case, .action-step {
                transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
            }
            
            .metric-card:hover, .summary-card:hover {
                transform: translateY(-8px) scale(1.02);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
            }
            
            .projection-highlight, .growth-value-box {
                transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
            }
            
            .projection-highlight:hover, .growth-value-box:hover {
                transform: translateY(-5px) scale(1.02);
                box-shadow: 0 25px 50px rgba(212, 175, 55, 0.3);
            }
        `;
        document.head.appendChild(style);
    }

    function setupAnimationObserver() {
        // Intersection Observer for scroll-triggered animations
        animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    element.classList.add('in-view');
                }
            });
        }, { threshold: 0.2 });

        // Observe elements that should animate on scroll
        const observeElements = document.querySelectorAll(
            '.metric-card, .catalyst-item, .brand-case, .timing-phase, .summary-card, .action-step'
        );
        observeElements.forEach(el => animationObserver.observe(el));
    }

    // ENHANCED CHART FUNCTIONS
    function createRentalChart() {
        const canvas = document.getElementById('rental-income-chart');
        if (!canvas) return;

        console.log('Creating enhanced rental chart');

        if (activeCharts.rental) {
            activeCharts.rental.destroy();
        }

        activeCharts.rental = new Chart(canvas, {
            type: 'line',
            data: {
                labels: data.rental_projections.years,
                datasets: [{
                    label: 'Akkumulerede årlige lejeindtægter (€)',
                    data: data.rental_projections.accumulated_income,
                    borderColor: 'rgb(212, 175, 55)',
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: 'rgb(212, 175, 55)',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6,
                    pointHoverRadius: 8
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
                            callback: value => '€' + value.toLocaleString()
                        }, 
                        grid: { color: 'rgba(255,255,255,0.1)' }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    function createGrowthChart() {
        const canvas = document.getElementById('growth-timeline-chart');
        if (!canvas) return;

        console.log('Creating enhanced growth chart');

        if (activeCharts.growth) {
            activeCharts.growth.destroy();
        }

        activeCharts.growth = new Chart(canvas, {
            type: 'line',
            data: {
                labels: data.growth_timeline.periods,
                datasets: [
                    {
                        label: 'Ejendomsværdi (€)',
                        data: data.growth_timeline.property_value,
                        borderColor: 'rgb(59, 130, 246)',
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        borderWidth: 3,
                        fill: false,
                        tension: 0.3,
                        pointBackgroundColor: 'rgb(59, 130, 246)',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 6,
                        spanGaps: false
                    },
                    {
                        label: 'Akkumulerede lejeindtægter (€)',
                        data: data.growth_timeline.accumulated_rental,
                        borderColor: 'rgb(212, 175, 55)',
                        backgroundColor: 'rgba(212, 175, 55, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: 'rgb(212, 175, 55)',
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
                    duration: 2500,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    function createFDIChart() {
        const canvas = document.getElementById('fdi-chart');
        if (!canvas) return;

        console.log('Creating enhanced FDI chart');

        if (activeCharts.fdi) {
            activeCharts.fdi.destroy();
        }

        activeCharts.fdi = new Chart(canvas, {
            type: 'line',
            data: {
                labels: data.fdi_data.years,
                datasets: [{
                    label: 'Udenlandske direkte investeringer (Mio. €)',
                    data: data.fdi_data.fdi_amounts,
                    borderColor: 'rgb(59, 130, 246)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: 'rgb(59, 130, 246)',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 2,
                    pointRadius: 6
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
                            callback: value => value + ' Mio. €'
                        }, 
                        grid: { color: 'rgba(255,255,255,0.1)' }
                    }
                },
                animation: {
                    duration: 2000,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    // Window resize handler
    window.addEventListener('resize', function() {
        Object.values(activeCharts).forEach(chart => {
            if (chart) chart.resize();
        });
    });

    console.log('Complete Bellevue Residence Enhanced JavaScript loaded successfully');
});
