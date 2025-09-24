// REFINED HIGH-TECH BELLEVUE RESIDENCE - Final Version with Small Enhancements
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

    // REMOVED: Cursor glow effect - no longer tracking mouse for glow
    // High-tech mouse tracking for enhanced effects (keeping for magnetic buttons only)
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        // REMOVED: updateCursorGlow(e.clientX, e.clientY);
    });

    // Initialize high-tech app
    setTimeout(() => {
        setupAdvancedNavigation();
        showSection(0);
        initializeAdvancedAnimations();
        initializeProgressBar();
        initializeParticleEffects();
        createTechBackground();
        // NEW: Initialize subtle enhancements
        initializeSubtleEnhancements();
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

            // Advanced hover tracking with subtle sound feedback simulation
            breadcrumb.addEventListener('mouseenter', function(e) {
                createHoverRipple(e.target, e.clientX, e.clientY);
                // NEW: Add subtle vibration simulation for premium feel
                if (navigator.vibrate) {
                    navigator.vibrate(10);
                }
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
                
                // NEW: Enhanced haptic feedback
                if (navigator.vibrate) {
                    navigator.vibrate([20, 10, 20]);
                }
                
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

            // Enhanced magnetic hover effect with improved smoothness
            button.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                // NEW: Improved magnetic calculation with smoother movement
                const distance = Math.sqrt(x * x + y * y);
                const maxDistance = Math.min(rect.width, rect.height) / 2;
                const intensity = Math.max(0, 1 - distance / maxDistance);
                
                const moveX = x * 0.08 * intensity;
                const moveY = y * 0.08 * intensity;
                
                this.style.setProperty('--mouse-x', moveX + 'px');
                this.style.setProperty('--mouse-y', moveY + 'px');
                this.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1.02 + intensity * 0.05})`;
            });

            button.addEventListener('mouseleave', function() {
                this.style.transform = '';
                this.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                setTimeout(() => {
                    this.style.transition = '';
                }, 400);
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

        // Advanced section transition with improved timing
        const currentActiveSection = document.querySelector('.section.active');
        if (currentActiveSection) {
            currentActiveSection.style.transform = 'translateX(-30px) rotateY(-8deg) scale(0.96)';
            currentActiveSection.style.opacity = '0';
            currentActiveSection.style.filter = 'blur(6px) brightness(0.8)';
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

            // Show target section with improved animation
            const targetSection = document.getElementById(`section-${index}`);
            if (targetSection) {
                targetSection.style.display = 'block';
                targetSection.style.transform = 'translateX(30px) rotateY(8deg) scale(1.04)';
                targetSection.style.opacity = '0';
                targetSection.style.filter = 'blur(6px) brightness(1.2)';
                
                setTimeout(() => {
                    targetSection.classList.add('active');
                    targetSection.style.transform = 'translateX(0) rotateY(0deg) scale(1)';
                    targetSection.style.opacity = '1';
                    targetSection.style.filter = 'blur(0px) brightness(1)';
                }, 100);
            }

            // Enhanced breadcrumb animation with better timing
            const breadcrumbs = document.querySelectorAll('.breadcrumb');
            breadcrumbs.forEach((crumb, i) => {
                crumb.classList.remove('active', 'completed');
                if (i === index) {
                    crumb.classList.add('active');
                    crumb.style.transform = 'scale(1.15) rotateY(3deg)';
                    setTimeout(() => {
                        crumb.style.transform = '';
                    }, 500);
                } else if (i < index) {
                    crumb.classList.add('completed');
                }
            });

            currentSection = index;

            // Initialize section-specific content with improved delay
            setTimeout(() => {
                initializeAdvancedSection(index);
            }, 400);

        }, 250);

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
                }, 200);
                break;
            case 1: // Rental section
                setTimeout(() => {
                    animateAdvancedRentalProjection();
                    createAdvancedRentalChart();
                    initializeTechGlowElements();
                }, 200);
                break;
            case 2: // Growth projections
                setTimeout(() => {
                    animateAdvancedGrowthPercentage();
                    createAdvancedGrowthChart();
                    initializeQuantumEffects();
                }, 200);
                break;
            case 3: // Off-plan strategy
                setTimeout(() => {
                    animateAdvancedOffPlanBenefits();
                    animateAdvancedProgressBar();
                    initializeHolographicEffects();
                }, 200);
                break;
            case 4: // Market position
                setTimeout(() => {
                    animateAdvancedBrandShowcase();
                    animateAdvancedDestinationShift();
                    createAdvancedFDIChart();
                    initializeTechShowcase();
                }, 200);
                break;
            case 5: // Property opportunity summary
                setTimeout(() => {
                    animateAdvancedSummaryCards();
                    animateAdvancedStatusItems();
                    initializeFinalTechEffects();
                }, 200);
                break;
        }
    }

    function initializeAdvancedAnimations() {
        // Enhanced intersection observer with tech effects
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    
                    // Add subtle tech entrance effect (reduced intensity)
                    const techEffect = document.createElement('div');
                    techEffect.style.cssText = `
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(6, 182, 212, 0.1));
                        pointer-events: none;
                        opacity: 1;
                        transition: opacity 0.8s ease;
                        z-index: -1;
                    `;
                    
                    entry.target.style.position = 'relative';
                    entry.target.appendChild(techEffect);
                    
                    setTimeout(() => {
                        techEffect.style.opacity = '0';
                        setTimeout(() => techEffect.remove(), 800);
                    }, 300);
                }
            });
        }, { 
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all animatable elements
        const animatableElements = document.querySelectorAll(
            '.metric-card, .advantage-item, .driver-card, .positioning-item, .summary-card, .step-card, .demand-item, .catalyst-item, .brand-case'
        );
        animatableElements.forEach(el => observer.observe(el));
    }

    // NEW: Initialize subtle enhancements
    function initializeSubtleEnhancements() {
        // Add subtle loading state indicators
        addLoadingStateIndicators();
        
        // Initialize smooth scroll behavior
        initializeSmoothScrolling();
        
        // Add keyboard accessibility improvements
        enhanceKeyboardNavigation();
        
        // Initialize focus management
        initializeFocusManagement();
    }

    function addLoadingStateIndicators() {
        // Add subtle loading indicators for charts
        const chartContainers = document.querySelectorAll('.chart-container');
        chartContainers.forEach(container => {
            const loadingIndicator = document.createElement('div');
            loadingIndicator.className = 'chart-loading';
            loadingIndicator.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 40px;
                height: 40px;
                border: 2px solid rgba(59, 130, 246, 0.3);
                border-top: 2px solid #3b82f6;
                border-radius: 50%;
                animation: spin 1s linear infinite;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            container.style.position = 'relative';
            container.appendChild(loadingIndicator);
        });

        // Add spin animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                0% { transform: translate(-50%, -50%) rotate(0deg); }
                100% { transform: translate(-50%, -50%) rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }

    function initializeSmoothScrolling() {
        // Add smooth scroll behavior to the entire page
        document.documentElement.style.scrollBehavior = 'smooth';
        
        // Enhanced smooth scrolling with easing
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                    });
                }
            });
        });
    }

    function enhanceKeyboardNavigation() {
        // Enhanced tab navigation
        const focusableElements = document.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        focusableElements.forEach(element => {
            element.addEventListener('focus', function() {
                this.style.outline = '2px solid #3b82f6';
                this.style.outlineOffset = '2px';
                this.style.boxShadow = '0 0 0 4px rgba(59, 130, 246, 0.2)';
            });
            
            element.addEventListener('blur', function() {
                this.style.outline = '';
                this.style.outlineOffset = '';
                this.style.boxShadow = '';
            });
        });
    }

    function initializeFocusManagement() {
        // Manage focus when sections change
        const originalShowSection = showSection;
        window.showSection = function(index) {
            originalShowSection(index);
            
            // Focus on the new section for screen readers
            setTimeout(() => {
                const activeSection = document.querySelector('.section.active');
                if (activeSection) {
                    const firstFocusable = activeSection.querySelector('h1, h2, h3, button, [tabindex="0"]');
                    if (firstFocusable) {
                        firstFocusable.focus();
                    }
                }
            }, 600);
        };
    }

    // ADVANCED ANIMATION FUNCTIONS (keeping all existing ones, with small improvements)
    function animateAdvancedNumber(element, target, duration = 3000, suffix = '', prefix = '', decimals = 0) {
        if (!element || element.classList.contains('animated')) return;
        element.classList.add('animated');
        
        let start = 0;
        const increment = target / (duration / 16);
        let current = start;
        
        // Add subtle tech glow during animation (reduced intensity)
        element.style.filter = 'brightness(1.2) drop-shadow(0 0 15px rgba(59, 130, 246, 0.4))';
        element.style.animation = 'quantumShift 0.08s ease-in-out infinite';
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
                // Reset effects with smooth transition
                setTimeout(() => {
                    element.style.filter = 'brightness(1) drop-shadow(0 0 8px rgba(59, 130, 246, 0.2))';
                    element.style.animation = '';
                }, 400);
            }
            
            const displayValue = decimals > 0 ? current.toFixed(decimals) : Math.floor(current);
            element.textContent = prefix + displayValue + suffix;
        }, 16);
        
        // Create subtle number particles during animation
        createNumberParticles(element);
    }

    function animateAdvancedMetricCards() {
        const cards = document.querySelectorAll('.metric-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'translateY(0) rotateX(0deg)';
                card.style.opacity = '1';
                
                // Add subtle tech entrance burst
                createCardBurst(card);
                
                // Enhanced metric value animation
                const value = card.querySelector('.metric-value');
                if (value && value.textContent.includes('%')) {
                    const target = parseFloat(value.textContent) || 0;
                    animateAdvancedNumber(value, target, 3500, '%', '', 1);
                }
                
                // Add floating tech effect with improved timing
                setTimeout(() => {
                    card.style.animation = 'techFloat 5s ease-in-out infinite';
                }, 1800);
                
            }, index * 350);
        });
    }

    function animateAdvancedBrandTags() {
        const tags = document.querySelectorAll('.brand-validation');
        tags.forEach((tag, index) => {
            setTimeout(() => {
                tag.style.transform = 'scale(1) rotateZ(0deg)';
                tag.style.opacity = '1';
                
                // Add subtle scan line effect
                const scanLine = document.createElement('div');
                scanLine.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), transparent);
                    animation: techScan 1.5s ease-in-out;
                    pointer-events: none;
                `;
                tag.style.position = 'relative';
                tag.appendChild(scanLine);
                
                setTimeout(() => scanLine.remove(), 1500);
                
            }, 1600 + (index * 250));
        });
    }

    function animateAdvancedRentalProjection() {
        const projectionElement = document.querySelector('.projection-range');
        if (projectionElement) {
            console.log('Animating advanced rental projection to 11.7%');
            
            // Add subtle holographic effect during animation
            projectionElement.style.background = 'linear-gradient(45deg, #000000, #3b82f6, #000000)';
            projectionElement.style.backgroundSize = '200% 200%';
            projectionElement.style.webkitBackgroundClip = 'text';
            projectionElement.style.webkitTextFillColor = 'transparent';
            projectionElement.style.animation = 'holographic 1.8s ease-in-out infinite';
            
            animateAdvancedNumber(projectionElement, data.transaction_analysis.annual_yield, 4200, '%', '', 1);
            
            setTimeout(() => {
                projectionElement.style.background = '';
                projectionElement.style.webkitBackgroundClip = '';
                projectionElement.style.webkitTextFillColor = '';
                projectionElement.style.animation = '';
            }, 4200);
        }
    }

    function animateAdvancedGrowthPercentage() {
        const growthElement = document.querySelector('.growth-percentage');
        if (growthElement) {
            // Add subtle quantum shift effect
            growthElement.style.filter = 'brightness(1.3) saturate(1.3)';
            growthElement.style.animation = 'quantumShift 0.15s ease-in-out infinite';
            
            animateAdvancedNumber(growthElement, data.transaction_analysis.total_return_percentage, 4800, '%', '', 1);
            
            setTimeout(() => {
                growthElement.style.filter = '';
                growthElement.style.animation = '';
            }, 4800);
        }
    }

    // TECH EFFECT HELPER FUNCTIONS (keeping all, removing cursor glow)
    function createTechBackground() {
        const techBg = document.createElement('div');
        techBg.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: 
                radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.02) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(6, 182, 212, 0.02) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(212, 175, 55, 0.01) 0%, transparent 50%);
            pointer-events: none;
            z-index: -2;
            animation: holographic 20s ease-in-out infinite;
        `;
        document.body.appendChild(techBg);
    }

    // REMOVED: updateCursorGlow function - no longer needed

    function createHoverRipple(element, x, y) {
        const ripple = document.createElement('div');
        const rect = element.getBoundingClientRect();
        const size = 40; // Reduced size for subtlety
        
        ripple.style.cssText = `
            position: absolute;
            left: ${x - rect.left - size/2}px;
            top: ${y - rect.top - size/2}px;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%);
            pointer-events: none;
            animation: techPulse 0.8s ease-out forwards;
            z-index: 10;
        `;
        
        element.style.position = 'relative';
        element.appendChild(ripple);
        setTimeout(() => ripple.remove(), 800);
    }

    function createClickBurst(x, y) {
        const burst = document.createElement('div');
        burst.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background: radial-gradient(circle, rgba(59, 130, 246, 0.6) 0%, rgba(6, 182, 212, 0.3) 50%, transparent 100%);
            pointer-events: none;
            z-index: 10000;
            animation: techPulse 0.5s ease-out forwards;
            transform: translate(-50%, -50%);
        `;
        document.body.appendChild(burst);
        setTimeout(() => burst.remove(), 500);
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
            background: radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%);
            pointer-events: none;
            z-index: -1;
            animation: techPulse 1.2s ease-out forwards;
            transform: translate(-50%, -50%);
        `;
        card.style.position = 'relative';
        card.appendChild(burst);
        setTimeout(() => burst.remove(), 1200);
    }

    function createNumberParticles(element) {
        for (let i = 0; i < 4; i++) { // Reduced from 5 to 4 for subtlety
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.style.cssText = `
                    position: absolute;
                    width: 3px;
                    height: 3px;
                    background: rgba(59, 130, 246, 0.6);
                    border-radius: 50%;
                    pointer-events: none;
                    z-index: 10;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                `;
                
                const angle = (Math.PI * 2 * i) / 4;
                const distance = 40 + Math.random() * 20;
                const duration = 900 + Math.random() * 300;
                
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
            }, i * 120);
        }
    }

    function triggerTechTransition() {
        // Create subtle screen-wide tech transition effect
        const transition = document.createElement('div');
        transition.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(6, 182, 212, 0.05));
            pointer-events: none;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.25s ease;
        `;
        document.body.appendChild(transition);
        
        setTimeout(() => transition.style.opacity = '1', 10);
        setTimeout(() => {
            transition.style.opacity = '0';
            setTimeout(() => transition.remove(), 250);
        }, 350);
    }

    // Additional tech initialization functions (keeping all with minor improvements)
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
                if (Math.random() < 0.08) { // Reduced from 0.1 to 0.08 for subtlety
                    element.style.animation = 'quantumShift 0.4s ease-in-out';
                    setTimeout(() => {
                        element.style.animation = 'techFloat 5s ease-in-out infinite';
                    }, 400);
                }
            }, 2500); // Increased interval for less frequent effects
        });
    }

    function initializeHolographicEffects() {
        const elements = document.querySelectorAll('.timing-phase');
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.background = 'linear-gradient(135deg, rgba(59, 130, 246, 0.08), rgba(6, 182, 212, 0.04))';
                element.style.animation = 'holographic 10s ease-in-out infinite';
            }, index * 700);
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
                    background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.25), transparent);
                    animation: techScan 0.8s ease-out;
                    pointer-events: none;
                    z-index: 1;
                `;
                this.style.position = 'relative';
                this.appendChild(scanLine);
                setTimeout(() => scanLine.remove(), 800);
            });
        });
    }

    function initializeFinalTechEffects() {
        const cards = document.querySelectorAll('.summary-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.border = '1px solid rgba(59, 130, 246, 0.25)';
                card.style.animation = 'techFloat 5s ease-in-out infinite, techGlow 8s ease-in-out infinite';
            }, index * 600);
        });
    }

    function initializeParticleEffects() {
        // Create subtle floating particles in background (reduced quantity)
        for (let i = 0; i < 6; i++) { // Reduced from 10 to 6
            setTimeout(() => {
                createFloatingParticle();
            }, i * 3000);
        }
        
        // Continue creating particles with longer intervals
        setInterval(createFloatingParticle, 8000); // Increased from 5000 to 8000
    }

    function createFloatingParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 2px;
            height: 2px;
            background: rgba(59, 130, 246, 0.4);
            border-radius: 50%;
            pointer-events: none;
            z-index: -1;
            left: ${Math.random() * 100}%;
            top: 100%;
            box-shadow: 0 0 6px rgba(59, 130, 246, 0.6);
        `;
        document.body.appendChild(particle);
        
        particle.animate([
            { transform: 'translateY(0px)', opacity: 0 },
            { opacity: 1 },
            { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
        ], {
            duration: 18000 + Math.random() * 12000,
            easing: 'linear'
        });
        
        setTimeout(() => particle.remove(), 30000);
    }

    function initializeProgressBar() {
        const progressBar = document.querySelector('.progress-fill');
        if (progressBar) {
            progressBar.style.width = '0%';
        }
    }

    // Enhanced chart creation functions with improved loading states
    function createAdvancedRentalChart() {
        const canvas = document.getElementById('rental-income-chart');
        if (!canvas) return;

        // Show loading indicator
        const container = canvas.closest('.chart-container');
        const loader = container.querySelector('.chart-loading');
        if (loader) {
            loader.style.opacity = '1';
        }

        console.log('Creating advanced rental chart with tech effects');

        setTimeout(() => {
            activeCharts.rental = new Chart(canvas, {
                type: 'line',
                data: {
                    labels: data.rental_projections.years,
                    datasets: [{
                        label: 'Akkumulerede årlige lejeindtægter (€)',
                        data: data.rental_projections.accumulated_income,
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.18)',
                        borderWidth: 5,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#3b82f6',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 3,
                        pointRadius: 10,
                        pointHoverRadius: 14,
                        shadowColor: 'rgba(59, 130, 246, 0.7)',
                        shadowBlur: 20
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
                                    size: 15,
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
                                font: { size: 13, weight: '500' }
                            }, 
                            grid: { 
                                color: 'rgba(59, 130, 246, 0.15)',
                                drawBorder: false
                            }
                        },
                        y: { 
                            ticks: { 
                                color: '#3b82f6',
                                font: { size: 13, weight: '500' },
                                callback: value => '€' + value.toLocaleString()
                            }, 
                            grid: { 
                                color: 'rgba(59, 130, 246, 0.15)',
                                drawBorder: false
                            }
                        }
                    },
                    animation: {
                        duration: 3500,
                        easing: 'easeOutQuart',
                        onProgress: function(animation) {
                            const progress = animation.currentStep / animation.numSteps;
                            const ctx = animation.chart.ctx;
                            
                            ctx.save();
                            ctx.shadowColor = 'rgba(59, 130, 246, 0.8)';
                            ctx.shadowBlur = 25 * progress;
                            ctx.restore();
                        },
                        onComplete: function() {
                            // Hide loading indicator
                            if (loader) {
                                loader.style.opacity = '0';
                            }
                        }
                    },
                    elements: {
                        line: { borderCapStyle: 'round' },
                        point: {
                            hoverBackgroundColor: '#06b6d4',
                            hoverBorderColor: '#ffffff',
                            hoverBorderWidth: 4,
                            hoverRadius: 16
                        }
                    }
                }
            });
        }, 300);
    }

    function createAdvancedGrowthChart() {
        const canvas = document.getElementById('growth-timeline-chart');
        if (!canvas) return;

        // Show loading indicator
        const container = canvas.closest('.chart-container');
        const loader = container.querySelector('.chart-loading');
        if (loader) {
            loader.style.opacity = '1';
        }

        console.log('Creating advanced growth chart with dual tech effects');

        setTimeout(() => {
            activeCharts.growth = new Chart(canvas, {
                type: 'line',
                data: {
                    labels: data.growth_timeline.periods,
                    datasets: [
                        {
                            label: 'Ejendomsværdi (€)',
                            data: data.growth_timeline.property_value,
                            borderColor: '#d4af37',
                            backgroundColor: 'rgba(212, 175, 55, 0.18)',
                            borderWidth: 5,
                            fill: true,
                            tension: 0.3,
                            pointBackgroundColor: '#d4af37',
                            pointBorderColor: '#ffffff',
                            pointBorderWidth: 3,
                            pointRadius: 10,
                            pointHoverRadius: 14,
                            spanGaps: false
                        },
                        {
                            label: 'Akkumulerede lejeindtægter (€)',
                            data: data.growth_timeline.accumulated_rental,
                            borderColor: '#3b82f6',
                            backgroundColor: 'rgba(59, 130, 246, 0.18)',
                            borderWidth: 4,
                            fill: false,
                            tension: 0.4,
                            pointBackgroundColor: '#3b82f6',
                            pointBorderColor: '#ffffff',
                            pointBorderWidth: 3,
                            pointRadius: 8,
                            pointHoverRadius: 12
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
                                font: { size: 15, weight: '600' }
                            }
                        }
                    },
                    scales: {
                        x: { 
                            ticks: { color: '#3b82f6', font: { size: 13 } }, 
                            grid: { color: 'rgba(59, 130, 246, 0.15)' }
                        },
                        y: { 
                            ticks: { 
                                color: '#3b82f6',
                                font: { size: 13 },
                                callback: value => '€' + value.toLocaleString()
                            }, 
                            grid: { color: 'rgba(59, 130, 246, 0.15)' }
                        }
                    },
                    animation: {
                        duration: 4000,
                        easing: 'easeOutQuart',
                        onProgress: function(animation) {
                            const progress = animation.currentStep / animation.numSteps;
                            const ctx = animation.chart.ctx;
                            
                            ctx.save();
                            ctx.shadowColor = 'rgba(212, 175, 55, 0.6)';
                            ctx.shadowBlur = 30 * progress;
                            ctx.restore();
                        },
                        onComplete: function() {
                            if (loader) {
                                loader.style.opacity = '0';
                            }
                        }
                    }
                }
            });
        }, 300);
    }

    function createAdvancedFDIChart() {
        const canvas = document.getElementById('fdi-chart');
        if (!canvas) return;

        // Show loading indicator
        const container = canvas.closest('.chart-container');
        const loader = container.querySelector('.chart-loading');
        if (loader) {
            loader.style.opacity = '1';
        }

        console.log('Creating advanced FDI chart with cyan tech effects');

        setTimeout(() => {
            activeCharts.fdi = new Chart(canvas, {
                type: 'line',
                data: {
                    labels: data.fdi_data.years,
                    datasets: [{
                        label: 'Udenlandske direkte investeringer (Mio. €)',
                        data: data.fdi_data.fdi_amounts,
                        borderColor: '#06b6d4',
                        backgroundColor: 'rgba(6, 182, 212, 0.18)',
                        borderWidth: 5,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#06b6d4',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 3,
                        pointRadius: 10,
                        pointHoverRadius: 14
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
                                font: { size: 15, weight: '600' }
                            }
                        }
                    },
                    scales: {
                        x: { 
                            ticks: { color: '#06b6d4', font: { size: 13 } }, 
                            grid: { color: 'rgba(6, 182, 212, 0.15)' }
                        },
                        y: { 
                            ticks: { 
                                color: '#06b6d4',
                                font: { size: 13 },
                                callback: value => value + ' Mio. €'
                            }, 
                            grid: { color: 'rgba(6, 182, 212, 0.15)' }
                        }
                    },
                    animation: {
                        duration: 3500,
                        easing: 'easeOutQuart',
                        onProgress: function(animation) {
                            const progress = animation.currentStep / animation.numSteps;
                            const ctx = animation.chart.ctx;
                            
                            ctx.save();
                            ctx.shadowColor = 'rgba(6, 182, 212, 0.7)';
                            ctx.shadowBlur = 25 * progress;
                            ctx.restore();
                        },
                        onComplete: function() {
                            if (loader) {
                                loader.style.opacity = '0';
                            }
                        }
                    }
                }
            });
        }, 300);
    }

    // Enhanced dialog functions (keeping existing with small improvements)
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
                <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(6, 182, 212, 0.08)); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 15px; padding: 25px; margin: 25px 0; backdrop-filter: blur(15px); animation: techGlow 5s ease-in-out infinite;">
                    <p style="color: #3b82f6; font-weight: bold; margin-bottom: 12px; font-size: 16px;">Vi kan hjælpe med:</p>
                    <p style="color: rgba(255,255,255,0.85); font-size: 15px; line-height: 1.6;">
                        • Ejendomsvisning og enhedsvalg<br>
                        • Detaljeret transaktionsanalyse<br>
                        • Finansieringsmuligheder<br>
                        • Juridisk rådgivning og kontrakter
                    </p>
                </div>
                <button onclick="closeDialog()" style="background: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%); color: #fff; border: none; padding: 14px 35px; border-radius: 30px; font-weight: 600; cursor: pointer; text-transform: uppercase; font-size: 14px; box-shadow: 0 0 15px rgba(59, 130, 246, 0.3); font-family: 'Playfair Display', serif; letter-spacing: 1px; transition: all 0.4s ease; animation: techFloat 4s ease-in-out infinite;">
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
                <div style="background: linear-gradient(135deg, rgba(6, 182, 212, 0.12), rgba(59, 130, 246, 0.08)); border: 1px solid rgba(6, 182, 212, 0.3); border-radius: 15px; padding: 25px; margin: 25px 0; backdrop-filter: blur(15px); animation: techGlow 5s ease-in-out infinite;">
                    <p style="color: #06b6d4; font-weight: bold; margin-bottom: 12px; font-size: 16px;">Brochuren indeholder:</p>
                    <p style="color: rgba(255,255,255,0.85); font-size: 15px; line-height: 1.6;">
                        • Komplet transaktionsanalyse (€143.000)<br>
                        • Projekterede 11,7% årlige lejeindtægter<br>
                        • 66,3% værditilvækst over 3 år<br>
                        • Plantegninger og højkvalitetsbilleder<br>
                        • Juridiske vilkår og betalingsplan
                    </p>
                </div>
                <button onclick="closeDialog()" style="background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%); color: #fff; border: none; padding: 14px 35px; border-radius: 30px; font-weight: 600; cursor: pointer; text-transform: uppercase; font-size: 14px; box-shadow: 0 0 15px rgba(6, 182, 212, 0.3); font-family: 'Playfair Display', serif; letter-spacing: 1px; transition: all 0.4s ease; animation: techFloat 4s ease-in-out infinite;">
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
            background: rgba(0, 0, 0, 0.85);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            backdrop-filter: blur(15px);
            animation: advancedFadeIn 0.4s ease-out;
        `;
        
        dialog.innerHTML = `
            <div style="
                background: linear-gradient(135deg, #1a2332 0%, #0f1419 50%, rgba(59, 130, 246, 0.08) 100%);
                border: 1px solid rgba(59, 130, 246, 0.3);
                border-radius: 25px;
                max-width: 600px;
                max-height: 80vh;
                overflow-y: auto;
                box-shadow: 0 25px 80px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.2);
                position: relative;
                backdrop-filter: blur(20px);
                animation: advancedSlideIn 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
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
                        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
                        animation: techScan 4s ease-in-out infinite;
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
            dialog.style.animation = 'advancedFadeOut 0.3s ease-in';
            setTimeout(() => {
                document.body.removeChild(dialog);
            }, 300);
        }
        
        return dialog;
    }

    // Remaining animation functions (keeping all existing ones with minor improvements)
    function animateAdvancedOffPlanBenefits() {
        const stages = document.querySelectorAll('.timing-phase');
        stages.forEach((stage, index) => {
            setTimeout(() => {
                stage.style.transform = 'translateX(0) rotateY(0deg)';
                stage.style.opacity = '1';
                stage.style.animation = 'techFloat 6s ease-in-out infinite';
            }, index * 500);
        });
    }

    function animateAdvancedProgressBar() {
        const progressBar = document.querySelector('.progress-fill');
        if (progressBar) {
            setTimeout(() => {
                progressBar.style.width = '50%';
                progressBar.style.animation = 'techGlow 4s ease-in-out infinite';
                progressBar.style.boxShadow = '0 0 15px rgba(59, 130, 246, 0.5)';
            }, 1200);
        }
    }

    function animateAdvancedBrandShowcase() {
        const brandItems = document.querySelectorAll('.brand-case');
        brandItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.transform = 'translateY(0) rotateX(0deg)';
                item.style.opacity = '1';
                item.style.animation = 'techFloat 7s ease-in-out infinite';
            }, index * 300);
        });
    }

    function animateAdvancedDestinationShift() {
        const destinations = document.querySelectorAll('.old-market, .new-market');
        destinations.forEach((dest, index) => {
            setTimeout(() => {
                dest.style.transform = 'scale(1) rotateY(0deg)';
                dest.style.opacity = '1';
                dest.style.animation = 'techFloat 8s ease-in-out infinite';
            }, index * 600);
        });
        
        const arrow = document.querySelector('.market-transition .market-arrow');
        if (arrow) {
            setTimeout(() => {
                arrow.style.transform = 'scale(1) rotate(0deg)';
                arrow.style.opacity = '1';
                arrow.style.animation = 'holographic 5s ease-in-out infinite';
            }, 1000);
        }
    }

    function animateAdvancedSummaryCards() {
        const summaryCards = document.querySelectorAll('.summary-card');
        summaryCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'translateY(0) rotateX(0deg)';
                card.style.opacity = '1';
                card.style.animation = 'techFloat 6s ease-in-out infinite, techGlow 10s ease-in-out infinite';
                
                const value = card.querySelector('.summary-value');
                if (value) {
                    const text = value.textContent;
                    if (text.includes('%')) {
                        const target = parseFloat(text) || 0;
                        animateAdvancedNumber(value, target, 2800, '% over 3 år', '', 1);
                    }
                }
            }, index * 400);
        });
    }

    function animateAdvancedStatusItems() {
        const statusItems = document.querySelectorAll('.status-item');
        statusItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.transform = 'translateX(0) rotateY(0deg)';
                item.style.opacity = '1';
                item.style.animation = 'techFloat 5s ease-in-out infinite';
                
                const urgentIcon = item.querySelector('.status-icon.urgent');
                if (urgentIcon) {
                    urgentIcon.style.animation = 'techPulse 1.8s ease-in-out infinite';
                }
            }, index * 300);
        });
    }

    // Enhanced keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowRight' && currentSection < totalSections - 1) {
            e.preventDefault();
            triggerTechTransition();
            setTimeout(() => showSection(currentSection + 1), 150);
        } else if (e.key === 'ArrowLeft' && currentSection > 0) {
            e.preventDefault();
            triggerTechTransition();
            setTimeout(() => showSection(currentSection - 1), 150);
        } else if (e.key === 'Escape') {
            // Close any open dialogs
            const dialogs = document.querySelectorAll('[style*="position: fixed"]');
            dialogs.forEach(dialog => {
                if (dialog.style.zIndex === '10000' && typeof window.closeDialog === 'function') {
                    window.closeDialog();
                }
            });
        }
    });

    // Add enhanced tech CSS animations dynamically
    const techStyles = document.createElement('style');
    techStyles.textContent = `
        @keyframes advancedFadeIn {
            from { opacity: 0; backdrop-filter: blur(0px); }
            to { opacity: 1; backdrop-filter: blur(15px); }
        }
        
        @keyframes advancedFadeOut {
            from { opacity: 1; backdrop-filter: blur(15px); }
            to { opacity: 0; backdrop-filter: blur(0px); }
        }
        
        @keyframes advancedSlideIn {
            from { transform: translateY(-80px) scale(0.85) rotateX(-8deg); opacity: 0; }
            to { transform: translateY(0) scale(1) rotateX(0deg); opacity: 1; }
        }
        
        /* Enhanced focus styles for accessibility */
        *:focus-visible {
            outline: 2px solid #3b82f6 !important;
            outline-offset: 2px !important;
            box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.2) !important;
        }
    `;
    document.head.appendChild(techStyles);

    console.log('Refined High-Tech Bellevue Residence app loaded with subtle enhancements');
});
