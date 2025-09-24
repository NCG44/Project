// HIGH-TECH BELLEVUE RESIDENCE - Enhanced Blue Theme with Advanced Animations
document.addEventListener('DOMContentLoaded', function() {
    // Updated transaction analysis data with corrected 11.7% rental yield
    const data = {
        transaction_analysis: {
            purchase_amount: 143000,
            nightly_rate: 150,
            occupied_nights: 146,
            gross_rental_income: 21900,
            operating_costs: 5040,
            net_rental_income: 16860,
            annual_yield: 11.7, // CORRECTED: 11.7%
            projected_exit_price: 187333,
            capital_appreciation: 44333,
            three_year_cashflow: 50580,
            total_return: 94913,
            total_return_percentage: 66.3,
            occupancy_rate: 40,
            completion_year: 2027
        },
        rental_projections: {
            years: ['2027', '2028', '2029'],
            accumulated_income: [16860, 33720, 50580]
        },
        growth_timeline: {
            periods: ['Køb (2025)', 'Off-plan (2026)', 'Færdiggørelse Q1 2027', 'År 2 (2028)', 'År 3 (2029)'],
            property_value: [143000, 143000, 187333, null, null],
            accumulated_rental: [0, 0, 16860, 33720, 50580]
        },
        fdi_data: {
            years: ['2019', '2020', '2021', '2022', '2023', '2024'],
            fdi_amounts: [487, 356, 625, 758, 892, 1050]
        }
    };

    let currentSection = 0;
    const totalSections = 6;
    let activeCharts = {};
    let mouseX = 0;
    let mouseY = 0;

    // High-tech mouse tracking for enhanced effects
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Create dynamic cursor glow effect
        updateCursorGlow(e.clientX, e.clientY);
    });

    // Initialize high-tech app
    setTimeout(() => {
        setupAdvancedNavigation();
        showSection(0);
        initializeAdvancedAnimations();
        initializeProgressBar();
        initializeParticleEffects();
        createTechBackground();
    }, 100);

    function setupAdvancedNavigation() {
        console.log('Opsætter High-Tech Bellevue navigation...');
        
        // Enhanced breadcrumb navigation with tech effects
        const breadcrumbs = document.querySelectorAll('.breadcrumb');
        breadcrumbs.forEach((breadcrumb, index) => {
            breadcrumb.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Advanced section transition with tech effect
                triggerTechTransition();
                setTimeout(() => showSection(index), 200);
            });

            // Advanced hover tracking
            breadcrumb.addEventListener('mouseenter', function(e) {
                createHoverRipple(e.target, e.clientX, e.clientY);
            });
        });

        // Enhanced button navigation with particle effects
        const nextButtons = document.querySelectorAll('.next-btn, .cta-btn');
        nextButtons.forEach((button) => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Tech click animation
                createClickBurst(e.clientX, e.clientY);
                
                if (button.classList.contains('cta-btn')) {
                    if (button.classList.contains('primary')) {
                        showAdvancedContactDialog();
                    } else {
                        showAdvancedBrochureDialog();
                    }
                } else if (currentSection < totalSections - 1) {
                    triggerTechTransition();
                    setTimeout(() => showSection(currentSection + 1), 200);
                }
            });

            // Magnetic hover effect
            button.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                const moveX = x * 0.1;
                const moveY = y * 0.1;
                
                this.style.setProperty('--mouse-x', moveX + 'px');
                this.style.setProperty('--mouse-y', moveY + 'px');
                this.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.05)`;
            });

            button.addEventListener('mouseleave', function() {
                this.style.transform = '';
            });
        });

        console.log('High-tech navigation setup komplet');
    }

    function showSection(index) {
        console.log(`Viser high-tech Bellevue sektion ${index}`);
        
        if (index < 0 || index >= totalSections) return;

        // Clear existing charts
        Object.values(activeCharts).forEach(chart => {
            if (chart && typeof chart.destroy === 'function') {
                chart.destroy();
            }
        });
        activeCharts = {};

        // Advanced section transition
        const currentActiveSection = document.querySelector('.section.active');
        if (currentActiveSection) {
            currentActiveSection.style.transform = 'translateX(-50px) rotateY(-10deg) scale(0.95)';
            currentActiveSection.style.opacity = '0';
            currentActiveSection.style.filter = 'blur(8px) brightness(0.7)';
        }

        setTimeout(() => {
            // Hide all sections
            const allSections = document.querySelectorAll('.section');
            allSections.forEach(section => {
                section.classList.remove('active');
                section.style.display = 'none';
                section.style.transform = '';
                section.style.opacity = '';
                section.style.filter = '';
            });

            // Show target section with advanced animation
            const targetSection = document.getElementById(`section-${index}`);
            if (targetSection) {
                targetSection.style.display = 'block';
                targetSection.style.transform = 'translateX(50px) rotateY(10deg) scale(1.05)';
                targetSection.style.opacity = '0';
                targetSection.style.filter = 'blur(8px) brightness(1.3)';
                
                setTimeout(() => {
                    targetSection.classList.add('active');
                    targetSection.style.transform = 'translateX(0) rotateY(0deg) scale(1)';
                    targetSection.style.opacity = '1';
                    targetSection.style.filter = 'blur(0px) brightness(1)';
                }, 100);
            }

            // Enhanced breadcrumb animation
            const breadcrumbs = document.querySelectorAll('.breadcrumb');
            breadcrumbs.forEach((crumb, i) => {
                crumb.classList.remove('active', 'completed');
                if (i === index) {
                    crumb.classList.add('active');
                    crumb.style.transform = 'scale(1.2) rotateY(5deg)';
                    setTimeout(() => {
                        crumb.style.transform = '';
                    }, 400);
                } else if (i < index) {
                    crumb.classList.add('completed');
                }
            });

            currentSection = index;

            // Initialize section-specific content with delay
            setTimeout(() => {
                initializeAdvancedSection(index);
            }, 500);

        }, 300);

        window.scrollTo(0, 0);
    }

    function initializeAdvancedSection(index) {
        console.log(`Initialiserer high-tech Bellevue sektion ${index}`);
        
        switch (index) {
            case 0: // Hero section
                setTimeout(() => {
                    animateAdvancedMetricCards();
                    animateAdvancedBrandTags();
                    initializeTechCards();
                }, 300);
                break;
            case 1: // Rental section
                setTimeout(() => {
                    animateAdvancedRentalProjection();
                    createAdvancedRentalChart();
                    initializeTechGlowElements();
                }, 300);
                break;
            case 2: // Growth projections
                setTimeout(() => {
                    animateAdvancedGrowthPercentage();
                    createAdvancedGrowthChart();
                    initializeQuantumEffects();
                }, 300);
                break;
            case 3: // Off-plan strategy
                setTimeout(() => {
                    animateAdvancedOffPlanBenefits();
                    animateAdvancedProgressBar();
                    initializeHolographicEffects();
                }, 300);
                break;
            case 4: // Market position
                setTimeout(() => {
                    animateAdvancedBrandShowcase();
                    animateAdvancedDestinationShift();
                    createAdvancedFDIChart();
                    initializeTechShowcase();
                }, 300);
                break;
            case 5: // Property opportunity summary
                setTimeout(() => {
                    animateAdvancedSummaryCards();
                    animateAdvancedStatusItems();
                    initializeFinalTechEffects();
                }, 300);
                break;
        }
    }

    function initializeAdvancedAnimations() {
        // Enhanced intersection observer with tech effects
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Add tech entrance effect
                    const techEffect = document.createElement('div');
                    techEffect.style.cssText = `
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2));
                        pointer-events: none;
                        opacity: 1;
                        transition: opacity 1s ease;
                        z-index: -1;
                    `;
                    
                    entry.target.style.position = 'relative';
                    entry.target.appendChild(techEffect);
                    
                    setTimeout(() => {
                        techEffect.style.opacity = '0';
                        setTimeout(() => techEffect.remove(), 1000);
                    }, 500);
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        // Observe all animatable elements
        const animatableElements = document.querySelectorAll(
            '.metric-card, .advantage-item, .driver-card, .positioning-item, .summary-card, .step-card, .demand-item, .catalyst-item, .brand-case'
        );
        animatableElements.forEach(el => observer.observe(el));
    }

    // ADVANCED ANIMATION FUNCTIONS
    function animateAdvancedNumber(element, target, duration = 3000, suffix = '', prefix = '', decimals = 0) {
        if (!element || element.classList.contains('animated')) return;
        element.classList.add('animated');
        
        let start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        // Add tech glow during animation
        element.style.filter = 'brightness(1.3) drop-shadow(0 0 20px rgba(59, 130, 246, 0.6))';
        element.style.animation = 'quantumShift 0.1s ease-in-out infinite';
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
                // Reset effects
                setTimeout(() => {
                    element.style.filter = 'brightness(1) drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))';
                    element.style.animation = '';
                }, 500);
            }
            
            const displayValue = decimals > 0 ? current.toFixed(decimals) : Math.floor(current);
            element.textContent = prefix + displayValue + suffix;
        }, 16);
        
        // Create number particles during animation
        createNumberParticles(element);
    }

    function animateAdvancedMetricCards() {
        const cards = document.querySelectorAll('.metric-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'translateY(0) rotateX(0deg)';
                card.style.opacity = '1';
                
                // Add tech entrance burst
                createCardBurst(card);
                
                // Enhanced metric value animation
                const value = card.querySelector('.metric-value');
                if (value && value.textContent.includes('%')) {
                    const target = parseFloat(value.textContent) || 0;
                    animateAdvancedNumber(value, target, 4000, '%', '', 1);
                }
                
                // Add floating tech effect
                setTimeout(() => {
                    card.style.animation = 'techFloat 4s ease-in-out infinite';
                }, 2000);
                
            }, index * 400);
        });
    }

    function animateAdvancedBrandTags() {
        const tags = document.querySelectorAll('.brand-validation');
        tags.forEach((tag, index) => {
            setTimeout(() => {
                tag.style.transform = 'scale(1) rotateZ(0deg)';
                tag.style.opacity = '1';
                
                // Add scan line effect
                const scanLine = document.createElement('div');
                scanLine.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.6), transparent);
                    animation: techScan 2s ease-in-out;
                    pointer-events: none;
                `;
                tag.style.position = 'relative';
                tag.appendChild(scanLine);
                
                setTimeout(() => scanLine.remove(), 2000);
                
            }, 1800 + (index * 300));
        });
    }

    function animateAdvancedRentalProjection() {
        const projectionElement = document.querySelector('.projection-range');
        if (projectionElement) {
            console.log('Animating advanced rental projection to 11.7%');
            
            // Add holographic effect during animation
            projectionElement.style.background = 'linear-gradient(45deg, #000000, #3b82f6, #000000)';
            projectionElement.style.backgroundSize = '200% 200%';
            projectionElement.style.webkitBackgroundClip = 'text';
            projectionElement.style.webkitTextFillColor = 'transparent';
            projectionElement.style.animation = 'holographic 2s ease-in-out infinite';
            
            animateAdvancedNumber(projectionElement, data.transaction_analysis.annual_yield, 5000, '%', '', 1);
            
            setTimeout(() => {
                projectionElement.style.background = '';
                projectionElement.style.webkitBackgroundClip = '';
                projectionElement.style.webkitTextFillColor = '';
                projectionElement.style.animation = '';
            }, 5000);
        }
    }

    function animateAdvancedGrowthPercentage() {
        const growthElement = document.querySelector('.growth-percentage');
        if (growthElement) {
            // Add quantum shift effect
            growthElement.style.filter = 'brightness(1.5) saturate(1.5)';
            growthElement.style.animation = 'quantumShift 0.2s ease-in-out infinite';
            
            animateAdvancedNumber(growthElement, data.transaction_analysis.total_return_percentage, 5500, '%', '', 1);
            
            setTimeout(() => {
                growthElement.style.filter = '';
                growthElement.style.animation = '';
            }, 5500);
        }
    }

    // TECH EFFECT HELPER FUNCTIONS
    function createTechBackground() {
        const techBg = document.createElement('div');
        techBg.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(212, 175, 55, 0.02) 0%, transparent 50%);
            pointer-events: none;
            z-index: -2;
            animation: holographic 15s ease-in-out infinite;
        `;
        document.body.appendChild(techBg);
    }

    function updateCursorGlow(x, y) {
        // Create dynamic cursor glow that follows mouse
        let cursorGlow = document.getElementById('cursor-glow');
        if (!cursorGlow) {
            cursorGlow = document.createElement('div');
            cursorGlow.id = 'cursor-glow';
            cursorGlow.style.cssText = `
                position: fixed;
                width: 200px;
                height: 200px;
                border-radius: 50%;
                background: radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
                pointer-events: none;
                z-index: 9999;
                transition: opacity 0.3s ease;
                mix-blend-mode: screen;
            `;
            document.body.appendChild(cursorGlow);
        }
        
        cursorGlow.style.left = (x - 100) + 'px';
        cursorGlow.style.top = (y - 100) + 'px';
    }

    function createHoverRipple(element, x, y) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const size = 50;
        
        ripple.style.cssText = `
            position: absolute;
            left: ${x - rect.left - size/2}px;
            top: ${y - rect.top - size/2}px;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, transparent 70%);
            pointer-events: none;
            animation: techPulse 1s ease-out forwards;
            z-index: 10;
        `;
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        setTimeout(() => ripple.remove(), 1000);
    }

    function createClickBurst(x, y) {
        const burst = document.createElement('div');
        burst.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.8) 0%, rgba(6, 182, 212, 0.4) 50%, transparent 100%);
            pointer-events: none;
            z-index: 10000;
            animation: techPulse 0.6s ease-out forwards;
            transform: translate(-50%, -50%);
        `;
        document.body.appendChild(burst);
        setTimeout(() => burst.remove(), 600);
    }

    function createCardBurst(card) {
        const burst = document.createElement('div');
        burst.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%);
            pointer-events: none;
            z-index: -1;
            animation: techPulse 1.5s ease-out forwards;
            transform: translate(-50%, -50%);
        `;
        card.style.position = 'relative';
        card.appendChild(burst);
        setTimeout(() => burst.remove(), 1500);
    }

    function createNumberParticles(element) {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: absolute;
                    width: 4px;
                    height: 4px;
                    background: rgba(59, 130, 246, 0.8);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 10;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                `;
                
                const angle = (Math.PI * 2 * i) / 5;
                const distance = 50 + Math.random() * 30;
                const duration = 1000 + Math.random() * 500;
                
                element.style.position = 'relative';
                element.appendChild(particle);
                
                particle.animate([
                    { transform: 'translate(-50%, -50%) scale(0)', opacity: 1 },
                    { transform: `translate(${Math.cos(angle) * distance - 50}%, ${Math.sin(angle) * distance - 50}%) scale(1)`, opacity: 0 }
                ], {
                    duration: duration,
                    easing: 'ease-out'
                });
                
                setTimeout(() => particle.remove(), duration);
            }, i * 100);
        }
    }

    function triggerTechTransition() {
        // Create screen-wide tech transition effect
        const transition = document.createElement('div');
        transition.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1));
            pointer-events: none;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(transition);
        
        setTimeout(() => transition.style.opacity = '1', 10);
        setTimeout(() => {
            transition.style.opacity = '0';
            setTimeout(() => transition.remove(), 300);
        }, 400);
    }

    // Additional tech initialization functions
    function initializeTechCards() {
        const cards = document.querySelectorAll('.metric-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                createHoverRipple(this, this.offsetWidth / 2, this.offsetHeight / 2);
            });
        });
    }

    function initializeTechGlowElements() {
        const elements = document.querySelectorAll('.projection-highlight');
        elements.forEach(element => {
            element.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                this.style.setProperty('--glow-x', x + 'px');
                this.style.setProperty('--glow-y', y + 'px');
            });
        });
    }

    function initializeQuantumEffects() {
        const elements = document.querySelectorAll('.growth-value-box');
        elements.forEach(element => {
            setInterval(() => {
                if (Math.random() < 0.1) { // 10% chance every interval
                    element.style.animation = 'quantumShift 0.5s ease-in-out';
                    setTimeout(() => {
                        element.style.animation = 'techFloat 5s ease-in-out infinite';
                    }, 500);
                }
            }, 2000);
        });
    }

    function initializeHolographicEffects() {
        const elements = document.querySelectorAll('.timing-phase');
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.05))';
                element.style.animation = 'holographic 8s ease-in-out infinite';
            }, index * 600);
        });
    }

    function initializeTechShowcase() {
        const elements = document.querySelectorAll('.brand-case');
        elements.forEach(element => {
            element.addEventListener('mouseenter', function() {
                const scanLine = document.createElement('div');
                scanLine.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.3), transparent);
                    animation: techScan 1s ease-out;
                    pointer-events: none;
                    z-index: 1;
                `;
                this.style.position = 'relative';
                this.appendChild(scanLine);
                setTimeout(() => scanLine.remove(), 1000);
            });
        });
    }

    function initializeFinalTechEffects() {
        const cards = document.querySelectorAll('.summary-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.border = '1px solid rgba(59, 130, 246, 0.3)';
                card.style.animation = 'techFloat 4s ease-in-out infinite, techGlow 6s ease-in-out infinite';
            }, index * 800);
        });
    }

    function initializeParticleEffects() {
        // Create subtle floating particles in background
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                createFloatingParticle();
            }, i * 2000);
        }
        
        // Continue creating particles
        setInterval(createFloatingParticle, 5000);
    }

    function createFloatingParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 3px;
            height: 3px;
            background: rgba(59, 130, 246, 0.6);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            left: ${Math.random() * 100}%;
            top: 100%;
            box-shadow: 0 0 10px rgba(59, 130, 246, 0.8);
        `;
        document.body.appendChild(particle);
        
        particle.animate([
            { transform: 'translateY(0px)', opacity: 0 },
            { opacity: 1 },
            { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
        ], {
            duration: 15000 + Math.random() * 10000,
            easing: 'linear'
        });
        
        setTimeout(() => particle.remove(), 25000);
    }

    function initializeProgressBar() {
        const progressBar = document.querySelector('.progress-fill');
        if (progressBar) {
            progressBar.style.width = '0%';
        }
    }

    // Enhanced chart creation functions with tech effects
    function createAdvancedRentalChart() {
        const canvas = document.getElementById('rental-income-chart');
        if (!canvas) return;

        console.log('Creating advanced rental chart with tech effects');

        activeCharts.rental = new Chart(canvas, {
            type: 'line',
            data: {
                labels: data.rental_projections.years,
                datasets: [{
                    label: 'Akkumulerede årlige lejeindtægter (€)',
                    data: data.rental_projections.accumulated_income,
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    borderWidth: 6,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#3b82f6',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 4,
                    pointRadius: 12,
                    pointHoverRadius: 16,
                    shadowColor: 'rgba(59, 130, 246, 0.8)',
                    shadowBlur: 25
                }]
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
                            color: '#3b82f6',
                            font: { size: 14, weight: '500' }
                        }, 
                        grid: { 
                            color: 'rgba(59, 130, 246, 0.2)',
                            drawBorder: false
                        }
                    },
                    y: { 
                        ticks: { 
                            color: '#3b82f6',
                            font: { size: 14, weight: '500' },
                            callback: value => '€' + value.toLocaleString()
                        }, 
                        grid: { 
                            color: 'rgba(59, 130, 246, 0.2)',
                            drawBorder: false
                        }
                    }
                },
                animation: {
                    duration: 4000,
                    easing: 'easeOutQuart',
                    onProgress: function(animation) {
                        const progress = animation.currentStep / animation.numSteps;
                        const ctx = animation.chart.ctx;
                        
                        ctx.save();
                        ctx.shadowColor = 'rgba(59, 130, 246, 0.9)';
                        ctx.shadowBlur = 30 * progress;
                        ctx.restore();
                    }
                },
                elements: {
                    line: { borderCapStyle: 'round' },
                    point: {
                        hoverBackgroundColor: '#06b6d4',
                        hoverBorderColor: '#ffffff',
                        hoverBorderWidth: 6,
                        hoverRadius: 20
                    }
                }
            }
        });
    }

    function createAdvancedGrowthChart() {
        const canvas = document.getElementById('growth-timeline-chart');
        if (!canvas) return;

        console.log('Creating advanced growth chart with dual tech effects');

        activeCharts.growth = new Chart(canvas, {
            type: 'line',
            data: {
                labels: data.growth_timeline.periods,
                datasets: [
                    {
                        label: 'Ejendomsværdi (€)',
                        data: data.growth_timeline.property_value,
                        borderColor: '#d4af37',
                        backgroundColor: 'rgba(212, 175, 55, 0.2)',
                        borderWidth: 6,
                        fill: true,
                        tension: 0.3,
                        pointBackgroundColor: '#d4af37',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 4,
                        pointRadius: 12,
                        pointHoverRadius: 16,
                        spanGaps: false
                    },
                    {
                        label: 'Akkumulerede lejeindtægter (€)',
                        data: data.growth_timeline.accumulated_rental,
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        borderWidth: 5,
                        fill: false,
                        tension: 0.4,
                        pointBackgroundColor: '#3b82f6',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 3,
                        pointRadius: 10,
                        pointHoverRadius: 14
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
                            font: { size: 16, weight: '600' }
                        }
                    }
                },
                scales: {
                    x: { 
                        ticks: { color: '#3b82f6', font: { size: 14 } }, 
                        grid: { color: 'rgba(59, 130, 246, 0.2)' }
                    },
                    y: { 
                        ticks: { 
                            color: '#3b82f6',
                            font: { size: 14 },
                            callback: value => '€' + value.toLocaleString()
                        }, 
                        grid: { color: 'rgba(59, 130, 246, 0.2)' }
                    }
                },
                animation: {
                    duration: 4500,
                    easing: 'easeOutQuart',
                    onProgress: function(animation) {
                        const progress = animation.currentStep / animation.numSteps;
                        const ctx = animation.chart.ctx;
                        
                        ctx.save();
                        ctx.shadowColor = 'rgba(212, 175, 55, 0.7)';
                        ctx.shadowBlur = 35 * progress;
                        ctx.restore();
                    }
                }
            }
        });
    }

    function createAdvancedFDIChart() {
        const canvas = document.getElementById('fdi-chart');
        if (!canvas) return;

        console.log('Creating advanced FDI chart with cyan tech effects');

        activeCharts.fdi = new Chart(canvas, {
            type: 'line',
            data: {
                labels: data.fdi_data.years,
                datasets: [{
                    label: 'Udenlandske direkte investeringer (Mio. €)',
                    data: data.fdi_data.fdi_amounts,
                    borderColor: '#06b6d4',
                    backgroundColor: 'rgba(6, 182, 212, 0.2)',
                    borderWidth: 6,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#06b6d4',
                    pointBorderColor: '#ffffff',
                    pointBorderWidth: 4,
                    pointRadius: 12,
                    pointHoverRadius: 16
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { 
                    legend: { 
                        display: true,
                        labels: { 
                            color: '#ffffff',
                            font: { size: 16, weight: '600' }
                        }
                    }
                },
                scales: {
                    x: { 
                        ticks: { color: '#06b6d4', font: { size: 14 } }, 
                        grid: { color: 'rgba(6, 182, 212, 0.2)' }
                    },
                    y: { 
                        ticks: { 
                            color: '#06b6d4',
                            font: { size: 14 },
                            callback: value => value + ' Mio. €'
                        }, 
                        grid: { color: 'rgba(6, 182, 212, 0.2)' }
                    }
                },
                animation: {
                    duration: 4000,
                    easing: 'easeOutQuart',
                    onProgress: function(animation) {
                        const progress = animation.currentStep / animation.numSteps;
                        const ctx = animation.chart.ctx;
                        
                        ctx.save();
                        ctx.shadowColor = 'rgba(6, 182, 212, 0.8)';
                        ctx.shadowBlur = 30 * progress;
                        ctx.restore();
                    }
                }
            }
        });
    }

    // Enhanced dialog functions with tech effects
    function showAdvancedContactDialog() {
        console.log('Opening advanced contact dialog with tech effects...');
        const dialog = createAdvancedStyledDialog(
            'Kontakt os',
            `
            <div style="text-align: center; padding: 30px;">
                <div style="font-size: 48px; background: linear-gradient(45deg, #3b82f6, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 20px; animation: holographic 3s ease-in-out infinite;">📞</div>
                <h3 style="background: linear-gradient(45deg, #3b82f6, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 18px; font-family: 'Playfair Display', serif; animation: holographic 4s ease-in-out infinite;">Kontakt Bellevue Residence</h3>
                <p style="color: rgba(255,255,255,0.9); margin-bottom: 25px; line-height: 1.7; font-size: 16px;">
                    Vil du vide mere om Bellevue Residence? Kontakt vores eksperter for personlig rådgivning om denne unikke investering.
                </p>
                <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(6, 182, 212, 0.1)); border: 1px solid rgba(59, 130, 246, 0.4); border-radius: 15px; padding: 25px; margin: 25px 0; backdrop-filter: blur(15px); animation: techGlow 4s ease-in-out infinite;">
                    <p style="color: #3b82f6; font-weight: bold; margin-bottom: 12px; font-size: 16px;">Vi kan hjælpe med:</p>
                    <p style="color: rgba(255,255,255,0.85); font-size: 15px; line-height: 1.6;">
                        • Ejendomsvisning og enhedsvalg<br>
                        • Detaljeret transaktionsanalyse<br>
                        • Finansieringsmuligheder<br>
                        • Juridisk rådgivning og kontrakter
                    </p>
                </div>
                <button onclick="closeDialog()" style="background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); color: #fff; border: none; padding: 14px 35px; border-radius: 30px; font-weight: 600; cursor: pointer; text-transform: uppercase; font-size: 14px; box-shadow: 0 0 20px rgba(59, 130, 246, 0.4); font-family: 'Playfair Display', serif; letter-spacing: 1px; transition: all 0.4s ease; animation: techFloat 3s ease-in-out infinite;">
                    Luk
                </button>
            </div>
            `
        );
    }

    function showAdvancedBrochureDialog() {
        console.log('Opening advanced brochure dialog with tech effects...');
        const dialog = createAdvancedStyledDialog(
            'Download brochure',
            `
            <div style="text-align: center; padding: 30px;">
                <div style="font-size: 48px; background: linear-gradient(45deg, #06b6d4, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 20px; animation: holographic 3s ease-in-out infinite;">📋</div>
                <h3 style="background: linear-gradient(45deg, #06b6d4, #3b82f6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 18px; font-family: 'Playfair Display', serif; animation: holographic 4s ease-in-out infinite;">Få den komplette brochure</h3>
                <p style="color: rgba(255,255,255,0.9); margin-bottom: 25px; line-height: 1.7; font-size: 16px;">
                    Download den detaljerede brochure med alle informationer om Bellevue Residence og investeringsmuligheden.
                </p>
                <div style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(59, 130, 246, 0.1)); border: 1px solid rgba(6, 182, 212, 0.4); border-radius: 15px; padding: 25px; margin: 25px 0; backdrop-filter: blur(15px); animation: techGlow 4s ease-in-out infinite;">
                    <p style="color: #06b6d4; font-weight: bold; margin-bottom: 12px; font-size: 16px;">Brochuren indeholder:</p>
                    <p style="color: rgba(255,255,255,0.85); font-size: 15px; line-height: 1.6;">
                        • Komplet transaktionsanalyse (€143.000)<br>
                        • Projekterede 11,7% årlige lejeindtægter<br>
                        • 66,3% værditilvækst over 3 år<br>
                        • Plantegninger og højkvalitetsbilleder<br>
                        • Juridiske vilkår og betalingsplan
                    </p>
                </div>
                <button onclick="closeDialog()" style="background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%); color: #fff; border: none; padding: 14px 35px; border-radius: 30px; font-weight: 600; cursor: pointer; text-transform: uppercase; font-size: 14px; box-shadow: 0 0 20px rgba(6, 182, 212, 0.4); font-family: 'Playfair Display', serif; letter-spacing: 1px; transition: all 0.4s ease; animation: techFloat 3s ease-in-out infinite;">
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
            animation: advancedFadeIn 0.5s ease-out;
        `;
        
        dialog.innerHTML = `
            <div style="
                background: linear-gradient(135deg, #1a2332 0%, #0f1419 50%, rgba(59, 130, 246, 0.1) 100%);
                border: 1px solid rgba(59, 130, 246, 0.4);
                border-radius: 25px;
                max-width: 600px;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 25px 80px rgba(0, 0, 0, 0.6), 0 0 40px rgba(59, 130, 246, 0.3);
                position: relative;
                backdrop-filter: blur(25px);
                animation: advancedSlideIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            ">
                <div style="
                    background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%);
                    color: #fff;
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
                        animation: techScan 3s ease-in-out infinite;
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
        
        window.closeDialog = function() {
            closeAdvancedDialog();
        };
        
        function closeAdvancedDialog() {
            dialog.style.animation = 'advancedFadeOut 0.4s ease-in';
            setTimeout(() => {
                document.body.removeChild(dialog);
            }, 400);
        }
        
        return dialog;
    }

    // Remaining animation functions (simplified due to length)
    function animateAdvancedOffPlanBenefits() {
        const stages = document.querySelectorAll('.timing-phase');
        stages.forEach((stage, index) => {
            setTimeout(() => {
                stage.style.transform = 'translateX(0) rotateY(0deg)';
                stage.style.opacity = '1';
                stage.style.animation = 'techFloat 5s ease-in-out infinite';
            }, index * 600);
        });
    }

    function animateAdvancedProgressBar() {
        const progressBar = document.querySelector('.progress-fill');
        if (progressBar) {
            setTimeout(() => {
                progressBar.style.width = '50%';
                progressBar.style.animation = 'techGlow 3s ease-in-out infinite';
                progressBar.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.6)';
            }, 1500);
        }
    }

    function animateAdvancedBrandShowcase() {
        const brandItems = document.querySelectorAll('.brand-case');
        brandItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.transform = 'translateY(0) rotateX(0deg)';
                item.style.opacity = '1';
                item.style.animation = 'techFloat 6s ease-in-out infinite';
            }, index * 400);
        });
    }

    function animateAdvancedDestinationShift() {
        const destinations = document.querySelectorAll('.old-market, .new-market');
        destinations.forEach((dest, index) => {
            setTimeout(() => {
                dest.style.transform = 'scale(1) rotateY(0deg)';
                dest.style.opacity = '1';
                dest.style.animation = 'techFloat 7s ease-in-out infinite';
            }, index * 800);
        });
        
        const arrow = document.querySelector('.market-transition .market-arrow');
        if (arrow) {
            setTimeout(() => {
                arrow.style.transform = 'scale(1) rotate(0deg)';
                arrow.style.opacity = '1';
                arrow.style.animation = 'holographic 4s ease-in-out infinite';
            }, 1200);
        }
    }

    function animateAdvancedSummaryCards() {
        const summaryCards = document.querySelectorAll('.summary-card');
        summaryCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'translateY(0) rotateX(0deg)';
                card.style.opacity = '1';
                card.style.animation = 'techFloat 5s ease-in-out infinite, techGlow 8s ease-in-out infinite';
                
                const value = card.querySelector('.summary-value');
                if (value) {
                    const text = value.textContent;
                    if (text.includes('%')) {
                        const target = parseFloat(text) || 0;
                        animateAdvancedNumber(value, target, 3000, '% over 3 år', '', 1);
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
                item.style.animation = 'techFloat 4s ease-in-out infinite';
                
                const urgentIcon = item.querySelector('.status-icon.urgent');
                if (urgentIcon) {
                    urgentIcon.style.animation = 'techPulse 1.5s ease-in-out infinite';
                }
            }, index * 400);
        });
    }

    // Enhanced keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' && currentSection < totalSections - 1) {
            e.preventDefault();
            triggerTechTransition();
            setTimeout(() => showSection(currentSection + 1), 200);
        } else if (e.key === 'ArrowLeft' && currentSection > 0) {
            e.preventDefault();
            triggerTechTransition();
            setTimeout(() => showSection(currentSection - 1), 200);
        }
    });

    // Add tech CSS animations dynamically
    const techStyles = document.createElement('style');
    techStyles.textContent = `
        @keyframes advancedFadeIn {
            from { opacity: 0; backdrop-filter: blur(0px); }
            to { opacity: 1; backdrop-filter: blur(20px); }
        }
        
        @keyframes advancedFadeOut {
            from { opacity: 1; backdrop-filter: blur(20px); }
            to { opacity: 0; backdrop-filter: blur(0px); }
        }
        
        @keyframes advancedSlideIn {
            from { transform: translateY(-100px) scale(0.8) rotateX(-10deg); opacity: 0; }
            to { transform: translateY(0) scale(1) rotateX(0deg); opacity: 1; }
        }
    `;
    document.head.appendChild(techStyles);

    console.log('High-Tech Bellevue Residence app loaded with advanced blue theme animations');
});
