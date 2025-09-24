// Bellevue Residence ejendomsapp - ADVANCED VISUAL VERSION with Teaser-inspired animations
document.addEventListener('DOMContentLoaded', function() {
    // Updated transaction analysis data with corrected patterns
    const data = {
        transaction_analysis: {
            purchase_amount: 143000,
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
            occupancy_rate: 40,
            completion_year: 2027
        },
        // Updated rental projections with ACCUMULATED YEARLY data 2027-2029
        rental_projections: {
            years: ['2027', '2028', '2029'],
            accumulated_income: [16860, 33720, 50580] // Accumulated yearly rental income
        },
        // Corrected growth timeline - Property value stops at Q1 2027, rental continues to År 3
        growth_timeline: {
            periods: ['Køb (2025)', 'Off-plan (2026)', 'Færdiggørelse Q1 2027', 'År 2 (2028)', 'År 3 (2029)'],
            property_value: [143000, 143000, 187333, null, null], // Stops at Q1 2027 (completion)
            accumulated_rental: [0, 0, 16860, 33720, 50580] // Continues to År 3
        },
        fdi_data: {
            years: ['2019', '2020', '2021', '2022', '2023', '2024'],
            fdi_amounts: [487, 356, 625, 758, 892, 1050]
        }
    };

    let currentSection = 0;
    const totalSections = 6;
    let activeCharts = {};

    // ADVANCED ANIMATION SYSTEM
    let mouseX = 0;
    let mouseY = 0;
    
    // Track mouse for magnetic effects
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Initialiser app med avancerede effekter
    setTimeout(() => {
        setupNavigation();
        showSection(0);
        initializeAdvancedAnimations();
        initializeProgressBar();
        initializeMagneticEffects();
        initializeParallaxEffects();
    }, 100);

    function setupNavigation() {
        console.log('Opsætter Bellevue Residence navigation med avancerede effekter...');
        
        // Enhanced Breadcrumb navigation med hover tracking
        const breadcrumbs = document.querySelectorAll('.breadcrumb');
        breadcrumbs.forEach((breadcrumb, index) => {
            breadcrumb.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Advanced section transition
                showSectionWithTransition(index);
            });

            // Advanced hover effects
            breadcrumb.addEventListener('mouseenter', function(e) {
                this.style.setProperty('--x', (e.clientX - this.offsetLeft - this.offsetWidth/2) * 0.1 + 'px');
                this.style.setProperty('--y', (e.clientY - this.offsetTop - this.offsetHeight/2) * 0.1 + 'px');
            });
        });

        // Enhanced Next button navigation
        const nextButtons = document.querySelectorAll('.next-btn, .cta-btn');
        nextButtons.forEach((button) => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Advanced button click animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // Håndter forskellige button typer
                if (button.classList.contains('cta-btn')) {
                    if (button.classList.contains('primary')) {
                        showAdvancedContactDialog();
                    } else {
                        showAdvancedBrochureDialog();
                    }
                } else if (currentSection < totalSections - 1) {
                    showSectionWithTransition(currentSection + 1);
                }
            });

            // Magnetic hover effect for buttons
            button.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                this.style.setProperty('--x', x * 0.15 + 'px');
                this.style.setProperty('--y', y * 0.15 + 'px');
            });

            button.addEventListener('mouseleave', function() {
                this.style.setProperty('--x', '0px');
                this.style.setProperty('--y', '0px');
            });
        });

        console.log('Avanceret navigation setup fuldført');
    }

    function showSection(index) {
        showSectionWithTransition(index);
    }

    function showSectionWithTransition(index) {
        console.log(`Viser Bellevue sektion ${index} med avancerede overgange`);
        
        if (index < 0 || index >= totalSections) return;

        // Advanced section transition
        const currentActiveSection = document.querySelector('.section.active');
        if (currentActiveSection) {
            currentActiveSection.style.transform = 'translateX(-100px)';
            currentActiveSection.style.opacity = '0';
            currentActiveSection.style.filter = 'blur(5px)';
        }

        // Ryd eksisterende charts
        Object.values(activeCharts).forEach(chart => {
            if (chart && typeof chart.destroy === 'function') {
                chart.destroy();
            }
        });
        activeCharts = {};

        setTimeout(() => {
            // Skjul alle sektioner
            const allSections = document.querySelectorAll('.section');
            allSections.forEach(section => {
                section.classList.remove('active');
                section.style.display = 'none';
                section.style.transform = '';
                section.style.opacity = '';
                section.style.filter = '';
            });

            // Vis målsektion med advanced animation
            const targetSection = document.getElementById(`section-${index}`);
            if (targetSection) {
                targetSection.style.display = 'block';
                targetSection.style.transform = 'translateX(100px)';
                targetSection.style.opacity = '0';
                targetSection.style.filter = 'blur(5px)';
                
                setTimeout(() => {
                    targetSection.classList.add('active');
                    targetSection.style.transform = 'translateX(0)';
                    targetSection.style.opacity = '1';
                    targetSection.style.filter = 'blur(0px)';
                }, 50);
            }

            // Enhanced breadcrumb animation
            const breadcrumbs = document.querySelectorAll('.breadcrumb');
            breadcrumbs.forEach((crumb, i) => {
                crumb.classList.remove('active', 'completed');
                if (i === index) {
                    crumb.classList.add('active');
                    crumb.style.transform = 'scale(1.1)';
                    setTimeout(() => {
                        crumb.style.transform = '';
                    }, 300);
                } else if (i < index) {
                    crumb.classList.add('completed');
                }
            });

            currentSection = index;

            // Initialiser sektion-specifikt indhold med delay
            setTimeout(() => {
                initializeAdvancedSection(index);
            }, 400);

        }, 200);

        window.scrollTo(0, 0);
    }

    function initializeAdvancedSection(index) {
        console.log(`Initialiserer avanceret Bellevue sektion ${index}`);
        
        switch (index) {
            case 0: // Hero sektion
                setTimeout(() => {
                    animateAdvancedMetricCards();
                    animateAdvancedBrandTags();
                    initializeMagneticCards();
                }, 500);
                break;
            case 1: // Lejeindtægt sektion
                setTimeout(() => {
                    animateAdvancedRentalProjection();
                    createAdvancedRentalChart();
                    initializeFloatingElements();
                }, 500);
                break;
            case 2: // Værditilvækst projektioner
                setTimeout(() => {
                    animateAdvancedGrowthPercentage();
                    createAdvancedGrowthChart();
                    initializeBreathingAnimation();
                }, 500);
                break;
            case 3: // Off-plan strategi
                setTimeout(() => {
                    animateAdvancedOffPlanBenefits();
                    animateAdvancedProgressBar();
                    initializeRippleEffects();
                }, 500);
                break;
            case 4: // Markedsposition
                setTimeout(() => {
                    animateAdvancedBrandShowcase();
                    animateAdvancedDestinationShift();
                    createAdvancedFDIChart();
                    initializeShimmerEffects();
                }, 500);
                break;
            case 5: // Ejendomsmulighed sammenfatning
                setTimeout(() => {
                    animateAdvancedSummaryCards();
                    animateAdvancedStatusItems();
                    initializePulsingEffects();
                }, 500);
                break;
        }
    }

    function initializeAdvancedAnimations() {
        // Enhanced intersection observer med 3D effects
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Advanced sequential animation
                    const siblings = Array.from(entry.target.parentNode.children);
                    const index = siblings.indexOf(entry.target);
                    entry.target.style.animationDelay = `${index * 100}ms`;
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observer alle animerbare elementer
        const animatableElements = document.querySelectorAll(
            '.metric-card, .advantage-item, .driver-card, .positioning-item, .summary-card, .step-card, .demand-item, .catalyst-item, .brand-case'
        );
        animatableElements.forEach(el => observer.observe(el));
    }

    function initializeMagneticEffects() {
        // Magnetic effect for interactive elements
        const magneticElements = document.querySelectorAll('.metric-card, .projection-highlight, .growth-value-box, .cta-btn, .next-btn');
        
        magneticElements.forEach(element => {
            element.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const moveX = x * 0.1;
                const moveY = y * 0.1;
                
                this.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.02)`;
            });

            element.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }

    function initializeParallaxEffects() {
        // Subtle parallax for background elements
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-image, .rental-image, .growth-image, .position-image, .opportunity-image');
            
            parallaxElements.forEach(element => {
                const speed = 0.1;
                element.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    function initializeProgressBar() {
        const progressBar = document.querySelector('.progress-fill');
        if (progressBar) {
            progressBar.style.width = '0%';
        }
    }

    // ADVANCED ANIMATION FUNCTIONS
    function animateNumber(element, target, duration = 2000, suffix = '', prefix = '', decimals = 0) {
        if (!element || element.classList.contains('animated')) return;
        element.classList.add('animated');
        
        let start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        // Add sparkle effect during animation
        element.style.textShadow = '0 0 20px rgba(212, 175, 55, 0.8)';
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
                // Reset text shadow
                setTimeout(() => {
                    element.style.textShadow = '0 0 10px rgba(212, 175, 55, 0.3)';
                }, 500);
            }
            
            const displayValue = decimals > 0 ? current.toFixed(decimals) : Math.floor(current);
            element.textContent = prefix + displayValue + suffix;
            
            // Pulsing effect during counting
            const scale = 1 + Math.sin(current / target * Math.PI) * 0.05;
            element.style.transform = `scale(${scale})`;
        }, 16);
    }

    function animateAdvancedMetricCards() {
        const cards = document.querySelectorAll('.metric-card');
        cards.forEach((card, index) => {
            // Staggered entrance animation
            setTimeout(() => {
                card.style.transform = 'translateY(0) rotateX(0deg)';
                card.style.opacity = '1';
                
                // Add floating animation
                card.style.animation = `floatingCard 3s ease-in-out infinite ${index * 0.5}s`;
                
                // Enhanced metric värde animation
                const value = card.querySelector('.metric-value');
                if (value && value.textContent.includes('%')) {
                    const target = parseFloat(value.textContent) || 0;
                    animateNumber(value, target, 3000, '%', '', 1);
                }
                
                // Add subtle glow animation
                setTimeout(() => {
                    card.style.animation += ', morphingGlow 4s ease-in-out infinite';
                }, 1000);
                
            }, index * 300);
        });
    }

    function animateAdvancedBrandTags() {
        const tags = document.querySelectorAll('.brand-validation');
        tags.forEach((tag, index) => {
            setTimeout(() => {
                tag.style.transform = 'scale(1) rotateZ(0deg)';
                tag.style.opacity = '1';
                
                // Add shimmer effect
                const shimmer = document.createElement('div');
                shimmer.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                    animation: shimmerEffect 2s ease-in-out infinite;
                    pointer-events: none;
                `;
                tag.style.position = 'relative';
                tag.appendChild(shimmer);
                
            }, 1500 + (index * 250));
        });
    }

    function animateAdvancedRentalProjection() {
        const projectionElement = document.querySelector('.projection-range');
        if (projectionElement) {
            // Enhanced number animation with glow effect
            projectionElement.style.filter = 'brightness(1.2)';
            animateNumber(projectionElement, data.transaction_analysis.annual_yield, 4000, '%', '', 1);
            
            setTimeout(() => {
                projectionElement.style.filter = '';
            }, 4000);
        }
    }

    function animateAdvancedGrowthPercentage() {
        const growthElement = document.querySelector('.growth-percentage');
        if (growthElement) {
            // Advanced growth animation with multiple effects
            growthElement.style.filter = 'brightness(1.3) saturate(1.5)';
            animateNumber(growthElement, data.transaction_analysis.total_return_percentage, 4500, '%', '', 1);
            
            setTimeout(() => {
                growthElement.style.filter = '';
            }, 4500);
        }
    }

    function animateAdvancedOffPlanBenefits() {
        const stages = document.querySelectorAll('.timing-phase');
        stages.forEach((stage, index) => {
            setTimeout(() => {
                stage.style.transform = 'translateX(0) rotateY(0deg)';
                stage.style.opacity = '1';
                
                // Add breathing animation
                setTimeout(() => {
                    stage.style.animation = 'breathingCard 4s ease-in-out infinite';
                }, 1000);
                
            }, index * 600);
        });
    }

    function animateAdvancedProgressBar() {
        const progressBar = document.querySelector('.progress-fill');
        if (progressBar) {
            setTimeout(() => {
                progressBar.style.width = '50%';
                progressBar.style.animation = 'pulseGlow 2s ease-in-out infinite';
            }, 1500);
        }
    }

    function animateAdvancedBrandShowcase() {
        const brandItems = document.querySelectorAll('.brand-case');
        brandItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.transform = 'translateY(0) rotateX(0deg)';
                item.style.opacity = '1';
                
                // Add hover anticipation effect
                item.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-8px) rotateX(2deg) scale(1.02)';
                    this.style.boxShadow = '0 15px 40px rgba(212, 175, 55, 0.2)';
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0) rotateX(0deg) scale(1)';
                    this.style.boxShadow = '';
                });
                
            }, index * 400);
        });
    }

    function animateAdvancedDestinationShift() {
        const destinations = document.querySelectorAll('.old-market, .new-market');
        destinations.forEach((dest, index) => {
            setTimeout(() => {
                dest.style.transform = 'scale(1) rotateY(0deg)';
                dest.style.opacity = '1';
                
                // Add subtle floating animation
                dest.style.animation = `floatingCard 5s ease-in-out infinite ${index * 2}s`;
                
            }, index * 800);
        });
        
        // Enhanced arrow animation
        const arrow = document.querySelector('.market-transition .market-arrow');
        if (arrow) {
            setTimeout(() => {
                arrow.style.transform = 'scale(1) rotate(0deg)';
                arrow.style.opacity = '1';
                arrow.style.animation = 'textSparkle 3s ease-in-out infinite';
            }, 1200);
        }
    }

    function animateAdvancedSummaryCards() {
        const summaryCards = document.querySelectorAll('.summary-card');
        summaryCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'translateY(0) rotateX(0deg)';
                card.style.opacity = '1';
                
                // Enhanced floating animation
                card.style.animation = `floatingCard 4s ease-in-out infinite ${index * 1}s`;
                
                // Enhanced værdi animation
                const value = card.querySelector('.summary-value');
                if (value) {
                    const text = value.textContent;
                    if (text.includes('%')) {
                        const target = parseFloat(text) || 0;
                        animateNumber(value, target, 3000, '% over 3 år', '', 1);
                    }
                }
                
            }, index * 500);
        });
    }

    function animateAdvancedStatusItems() {
        const statusItems = document.querySelectorAll('.status-item');
        statusItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.transform = 'translateX(0) rotateY(0deg)';
                item.style.opacity = '1';
                
                // Add pulse effect for urgent items
                const urgentIcon = item.querySelector('.status-icon.urgent');
                if (urgentIcon) {
                    urgentIcon.style.animation = 'borderRipple 1.5s ease-in-out infinite';
                }
                
            }, index * 400);
        });
    }

    // ADVANCED HELPER FUNCTIONS
    function initializeMagneticCards() {
        const cards = document.querySelectorAll('.metric-card');
        cards.forEach(card => {
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const rotateX = y * -0.1;
                const rotateY = x * 0.1;
                
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });
    }

    function initializeFloatingElements() {
        const floatingElements = document.querySelectorAll('.demand-item');
        floatingElements.forEach((element, index) => {
            element.style.animation = `floatingCard 4s ease-in-out infinite ${index * 0.8}s`;
        });
    }

    function initializeBreathingAnimation() {
        const breathingElements = document.querySelectorAll('.catalyst-item');
        breathingElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.animation = `breathingCard 5s ease-in-out infinite ${index * 0.5}s`;
            }, 1000);
        });
    }

    function initializeRippleEffects() {
        const riskItems = document.querySelectorAll('.risk-item');
        riskItems.forEach(item => {
            item.addEventListener('click', function() {
                // Create ripple effect
                const ripple = document.createElement('div');
                ripple.style.cssText = `
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(212, 175, 55, 0.3);
                    transform: scale(0);
                    animation: rippleAnimation 0.8s ease-out;
                    pointer-events: none;
                    width: 100px;
                    height: 100px;
                    left: 50%;
                    top: 50%;
                    margin-left: -50px;
                    margin-top: -50px;
                `;
                
                this.style.position = 'relative';
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 800);
            });
        });
    }

    function initializeShimmerEffects() {
        const brandCases = document.querySelectorAll('.brand-case');
        brandCases.forEach((brandCase, index) => {
            setTimeout(() => {
                const shimmer = document.createElement('div');
                shimmer.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.1), transparent);
                    animation: shimmerEffect 3s ease-in-out infinite;
                    pointer-events: none;
                `;
                brandCase.style.position = 'relative';
                brandCase.appendChild(shimmer);
            }, index * 1000);
        });
    }

    function initializePulsingEffects() {
        const summaryCards = document.querySelectorAll('.summary-card');
        summaryCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.animation += ', pulseGlow 3s ease-in-out infinite';
            }, 2000 + index * 500);
        });
    }

    // ADVANCED CHART FUNCTIONS with enhanced effects

    function createAdvancedRentalChart() {
        const canvas = document.getElementById('rental-income-chart');
        if (!canvas) return;

        console.log('Opretter avanceret akkumulerede årlige lejeindtægt chart');

        activeCharts.rental = new Chart(canvas, {
            type: 'line',
            data: {
                labels: data.rental_projections.years,
                datasets: [
                    {
                        label: 'Akkumulerede årlige lejeindtægter (€)',
                        data: data.rental_projections.accumulated_income,
                        borderColor: '#d4af37',
                        backgroundColor: 'rgba(212, 175, 55, 0.15)',
                        borderWidth: 6,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#d4af37',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 4,
                        pointRadius: 12,
                        pointHoverRadius: 15,
                        shadowColor: 'rgba(212, 175, 55, 0.8)',
                        shadowBlur: 20,
                        shadowOffsetX: 0,
                        shadowOffsetY: 0
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { 
                    legend: { 
                        display: true,
                        labels: { 
                            color: '#ffffff',
                            font: {
                                size: 16,
                                weight: '600',
                                family: "'Inter', sans-serif"
                            }
                        }
                    }
                },
                scales: {
                    x: { 
                        ticks: { 
                            color: '#ffffff',
                            font: {
                                size: 14,
                                weight: '500',
                                family: "'Inter', sans-serif"
                            }
                        }, 
                        grid: { 
                            color: 'rgba(255,255,255,0.1)',
                            drawBorder: false
                        }
                    },
                    y: { 
                        ticks: { 
                            color: '#ffffff',
                            font: {
                                size: 14,
                                weight: '500',
                                family: "'Inter', sans-serif"
                            },
                            callback: value => '€' + value.toLocaleString()
                        }, 
                        grid: { 
                            color: 'rgba(255,255,255,0.1)',
                            drawBorder: false
                        }
                    }
                },
                animation: {
                    duration: 4000,
                    easing: 'easeOutQuart',
                    onProgress: function(animation) {
                        const chart = animation.chart;
                        const ctx = chart.ctx;
                        const progress = animation.currentStep / animation.numSteps;
                        
                        // Enhanced glow effect
                        ctx.save();
                        ctx.shadowColor = 'rgba(212, 175, 55, 0.9)';
                        ctx.shadowBlur = 30 * progress;
                        ctx.restore();
                    }
                },
                elements: {
                    line: {
                        borderCapStyle: 'round',
                        borderJoinStyle: 'round'
                    },
                    point: {
                        hoverBackgroundColor: '#ffd700',
                        hoverBorderColor: '#ffffff',
                        hoverBorderWidth: 6,
                        hoverRadius: 18
                    }
                }
            }
        });
    }

    function createAdvancedGrowthChart() {
        const canvas = document.getElementById('growth-timeline-chart');
        if (!canvas) return;

        console.log('Opretter avanceret værditilvækst chart');

        activeCharts.growth = new Chart(canvas, {
            type: 'line',
            data: {
                labels: data.growth_timeline.periods,
                datasets: [
                    {
                        label: 'Ejendomsværdi (€)',
                        data: data.growth_timeline.property_value,
                        borderColor: '#d4af37',
                        backgroundColor: 'rgba(212, 175, 55, 0.15)',
                        borderWidth: 6,
                        fill: true,
                        tension: 0.2,
                        pointBackgroundColor: '#d4af37',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 4,
                        pointRadius: 12,
                        pointHoverRadius: 15,
                        spanGaps: false
                    },
                    {
                        label: 'Akkumulerede lejeindtægter (€)',
                        data: data.growth_timeline.accumulated_rental,
                        borderColor: '#16a085',
                        backgroundColor: 'rgba(22, 160, 133, 0.15)',
                        borderWidth: 5,
                        fill: false,
                        tension: 0.4,
                        pointBackgroundColor: '#16a085',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 3,
                        pointRadius: 10,
                        pointHoverRadius: 13
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { 
                    legend: { 
                        display: true,
                        labels: { 
                            color: '#ffffff',
                            font: {
                                size: 16,
                                weight: '600',
                                family: "'Inter', sans-serif"
                            }
                        }
                    }
                },
                scales: {
                    x: { 
                        ticks: { 
                            color: '#ffffff',
                            font: {
                                size: 14,
                                weight: '500',
                                family: "'Inter', sans-serif"
                            }
                        }, 
                        grid: { 
                            color: 'rgba(255,255,255,0.1)',
                            drawBorder: false
                        }
                    },
                    y: { 
                        ticks: { 
                            color: '#ffffff',
                            font: {
                                size: 14,
                                weight: '500',
                                family: "'Inter', sans-serif"
                            },
                            callback: value => '€' + value.toLocaleString()
                        }, 
                        grid: { 
                            color: 'rgba(255,255,255,0.1)',
                            drawBorder: false
                        }
                    }
                },
                animation: {
                    duration: 4500,
                    easing: 'easeOutQuart',
                    onProgress: function(animation) {
                        const chart = animation.chart;
                        const ctx = chart.ctx;
                        const progress = animation.currentStep / animation.numSteps;
                        
                        // Dual glow effect
                        ctx.save();
                        ctx.shadowColor = 'rgba(212, 175, 55, 0.7)';
                        ctx.shadowBlur = 35 * progress;
                        ctx.restore();
                    }
                },
                elements: {
                    line: {
                        borderCapStyle: 'round',
                        borderJoinStyle: 'round'
                    },
                    point: {
                        hoverBackgroundColor: '#ffd700',
                        hoverBorderColor: '#ffffff',
                        hoverBorderWidth: 6,
                        hoverRadius: 18
                    }
                }
            }
        });
    }

    function createAdvancedFDIChart() {
        const canvas = document.getElementById('fdi-chart');
        if (!canvas) return;

        console.log('Opretter avanceret FDI chart');

        activeCharts.fdi = new Chart(canvas, {
            type: 'line',
            data: {
                labels: data.fdi_data.years,
                datasets: [
                    {
                        label: 'Udenlandske direkte investeringer (Mio. €)',
                        data: data.fdi_data.fdi_amounts,
                        borderColor: '#16a085',
                        backgroundColor: 'rgba(22, 160, 133, 0.15)',
                        borderWidth: 6,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#16a085',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 4,
                        pointRadius: 12,
                        pointHoverRadius: 15
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { 
                    legend: { 
                        display: true,
                        labels: { 
                            color: '#ffffff',
                            font: {
                                size: 16,
                                weight: '600',
                                family: "'Inter', sans-serif"
                            }
                        }
                    }
                },
                scales: {
                    x: { 
                        ticks: { 
                            color: '#ffffff',
                            font: {
                                size: 14,
                                weight: '500',
                                family: "'Inter', sans-serif"
                            }
                        }, 
                        grid: { 
                            color: 'rgba(255,255,255,0.1)',
                            drawBorder: false
                        }
                    },
                    y: { 
                        ticks: { 
                            color: '#ffffff',
                            font: {
                                size: 14,
                                weight: '500',
                                family: "'Inter', sans-serif"
                            },
                            callback: value => value + ' Mio. €'
                        }, 
                        grid: { 
                            color: 'rgba(255,255,255,0.1)',
                            drawBorder: false
                        }
                    }
                },
                animation: {
                    duration: 4000,
                    easing: 'easeOutQuart',
                    onProgress: function(animation) {
                        const chart = animation.chart;
                        const ctx = chart.ctx;
                        const progress = animation.currentStep / animation.numSteps;
                        
                        // Green glow effect
                        ctx.save();
                        ctx.shadowColor = 'rgba(22, 160, 133, 0.8)';
                        ctx.shadowBlur = 30 * progress;
                        ctx.restore();
                    }
                },
                elements: {
                    line: {
                        borderCapStyle: 'round',
                        borderJoinStyle: 'round'
                    },
                    point: {
                        hoverBackgroundColor: '#20b2aa',
                        hoverBorderColor: '#ffffff',
                        hoverBorderWidth: 6,
                        hoverRadius: 18
                    }
                }
            }
        });
    }

    // ADVANCED DIALOG FUNCTIONS
    function showAdvancedContactDialog() {
        console.log('Åbner avanceret kontakt dialog...');
        const dialog = createAdvancedStyledDialog(
            'Kontakt os',
            `
            <div style="text-align: center; padding: 25px;">
                <div style="font-size: 48px; color: #d4af37; margin-bottom: 20px; animation: textSparkle 2s ease-in-out infinite;">📞</div>
                <h3 style="color: #d4af37; margin-bottom: 18px; font-family: 'Playfair Display', serif;">Kontakt Bellevue Residence</h3>
                <p style="color: rgba(255,255,255,0.9); margin-bottom: 25px; line-height: 1.7; font-size: 16px;">
                    Vil du vide mere om Bellevue Residence? Kontakt vores eksperter for personlig rådgivning om denne unikke investering.
                </p>
                <div style="background: rgba(212, 175, 55, 0.12); border: 1px solid rgba(212, 175, 55, 0.35); border-radius: 15px; padding: 25px; margin: 25px 0; animation: morphingGlow 3s ease-in-out infinite;">
                    <p style="color: #d4af37; font-weight: bold; margin-bottom: 12px; font-size: 16px;">Vi kan hjælpe med:</p>
                    <p style="color: rgba(255,255,255,0.85); font-size: 15px; line-height: 1.6;">
                        • Ejendomsvisning og enhedsvalg<br>
                        • Detaljeret transaktionsanalyse<br>
                        • Finansieringsmuligheder<br>
                        • Juridisk rådgivning og kontrakter
                    </p>
                </div>
                <button onclick="closeDialog()" style="background: linear-gradient(135deg, #d4af37 0%, #ffd700 50%, #b8860b 100%); color: #000; border: none; padding: 14px 35px; border-radius: 30px; font-weight: 600; cursor: pointer; text-transform: uppercase; font-size: 14px; box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4); font-family: 'Playfair Display', serif; letter-spacing: 1px; transition: all 0.3s ease;">
                    Luk
                </button>
            </div>
            `
        );
    }

    function showAdvancedBrochureDialog() {
        console.log('Åbner avanceret brochure dialog...');
        const dialog = createAdvancedStyledDialog(
            'Download brochure',
            `
            <div style="text-align: center; padding: 25px;">
                <div style="font-size: 48px; color: #16a085; margin-bottom: 20px; animation: textSparkle 2s ease-in-out infinite;">📋</div>
                <h3 style="color: #16a085; margin-bottom: 18px; font-family: 'Playfair Display', serif;">Få den komplette brochure</h3>
                <p style="color: rgba(255,255,255,0.9); margin-bottom: 25px; line-height: 1.7; font-size: 16px;">
                    Download den detaljerede brochure med alle informationer om Bellevue Residence og investeringsmuligheden.
                </p>
                <div style="background: rgba(22, 160, 133, 0.12); border: 1px solid rgba(22, 160, 133, 0.35); border-radius: 15px; padding: 25px; margin: 25px 0; animation: morphingGlow 3s ease-in-out infinite;">
                    <p style="color: #16a085; font-weight: bold; margin-bottom: 12px; font-size: 16px;">Brochuren indeholder:</p>
                    <p style="color: rgba(255,255,255,0.85); font-size: 15px; line-height: 1.6;">
                        • Komplet transaktionsanalyse (€143.000)<br>
                        • Projekterede 11,7% årlige lejeindtægter<br>
                        • 66,3% værditilvækst over 3 år<br>
                        • Plantegninger og højkvalitetsbilleder<br>
                        • Juridiske vilkår og betalingsplan
                    </p>
                </div>
                <button onclick="closeDialog()" style="background: linear-gradient(135deg, #16a085 0%, #20b2aa 100%); color: #fff; border: none; padding: 14px 35px; border-radius: 30px; font-weight: 600; cursor: pointer; text-transform: uppercase; font-size: 14px; box-shadow: 0 6px 20px rgba(22, 160, 133, 0.4); font-family: 'Playfair Display', serif; letter-spacing: 1px; transition: all 0.3s ease;">
                    Luk
                </button>
            </div>
            `
        );
    }

    function createAdvancedStyledDialog(title, content) {
        const dialog = document.createElement('div');
        dialog.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            backdrop-filter: blur(20px);
            animation: dialogFadeIn 0.3s ease-out;
        `;
        
        dialog.innerHTML = `
            <div style="
                background: linear-gradient(135deg, #1a2332 0%, #0f1419 100%);
                border: 1px solid rgba(212, 175, 55, 0.35);
                border-radius: 25px;
                max-width: 550px;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6);
                position: relative;
                backdrop-filter: blur(20px);
                animation: dialogSlideIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            ">
                <div style="
                    background: linear-gradient(135deg, #d4af37 0%, #ffd700 30%, #b8860b 100%);
                    color: #000;
                    padding: 25px;
                    text-align: center;
                    font-weight: bold;
                    font-size: 20px;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    font-family: 'Playfair Display', serif;
                    position: relative;
                    overflow: hidden;
                ">
                    <div style="
                        position: absolute;
                        top: 0;
                        left: -100%;
                        width: 100%;
                        height: 100%;
                        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
                        animation: shimmerEffect 2s ease-in-out infinite;
                    "></div>
                    ${title}
                </div>
                ${content}
            </div>
        `;
        
        // Enhanced close functionality
        dialog.addEventListener('click', function(e) {
            if (e.target === dialog) {
                closeAdvancedDialog();
            }
        });
        
        document.body.appendChild(dialog);
        
        // Enhanced close function
        window.closeDialog = function() {
            closeAdvancedDialog();
        };
        
        function closeAdvancedDialog() {
            dialog.style.animation = 'dialogFadeOut 0.3s ease-in';
            setTimeout(() => {
                document.body.removeChild(dialog);
            }, 300);
        }
        
        return dialog;
    }

    // Keyboard navigation med enhanced effects
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' && currentSection < totalSections - 1) {
            e.preventDefault();
            showSectionWithTransition(currentSection + 1);
        } else if (e.key === 'ArrowLeft' && currentSection > 0) {
            e.preventDefault();
            showSectionWithTransition(currentSection - 1);
        }
    });

    // Add CSS keyframes for advanced animations
    const style = document.createElement('style');
    style.textContent = `
        @keyframes dialogFadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes dialogFadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
        
        @keyframes dialogSlideIn {
            from { transform: translateY(-50px) scale(0.9); opacity: 0; }
            to { transform: translateY(0) scale(1); opacity: 1; }
        }
        
        @keyframes rippleAnimation {
            to { transform: scale(4); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    console.log('Avanceret Bellevue Residence app indlæst med Teaser-inspirerede animationer');
});
