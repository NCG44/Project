// Bellevue Residence ejendomsapp - enhanced with better typography and animated charts
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
        // Corrected growth timeline - Property value stops at År 2, rental continues to År 3
        growth_timeline: {
            periods: ['Køb (2025)', 'Off-plan (2026)', 'Færdiggørelse Q1 2027', 'År 2 (2028)', 'År 3 (2029)'],
            property_value: [143000, 143000, 187333, 187333, null], // Stops at År 2
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

    // Initialiser app
    setTimeout(() => {
        setupNavigation();
        showSection(0);
        initializeAnimations();
        initializeProgressBar();
    }, 100);

    function setupNavigation() {
        console.log('Opsætter Bellevue Residence navigation...');
        
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
                
                // Håndter forskellige button typer
                if (button.classList.contains('cta-btn')) {
                    if (button.classList.contains('primary')) {
                        showContactDialog();
                    } else {
                        showBrochureDialog();
                    }
                } else if (currentSection < totalSections - 1) {
                    showSection(currentSection + 1);
                }
            });
        });

        console.log('Navigation setup fuldført');
    }

    function showSection(index) {
        console.log(`Viser Bellevue sektion ${index}`);
        
        if (index < 0 || index >= totalSections) return;

        // Ryd eksisterende charts
        Object.values(activeCharts).forEach(chart => {
            if (chart && typeof chart.destroy === 'function') {
                chart.destroy();
            }
        });
        activeCharts = {};

        // Skjul alle sektioner
        const allSections = document.querySelectorAll('.section');
        allSections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });

        // Vis målsektion
        const targetSection = document.getElementById(`section-${index}`);
        if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.classList.add('active');
        }

        // Opdater breadcrumbs
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

        // Initialiser sektion-specifikt indhold
        setTimeout(() => {
            initializeSection(index);
        }, 300);

        window.scrollTo(0, 0);
    }

    function initializeSection(index) {
        console.log(`Initialiserer Bellevue sektion ${index}`);
        
        switch (index) {
            case 0: // Hero sektion
                setTimeout(() => {
                    animateMetricCards();
                    animateBrandTags();
                }, 500);
                break;
            case 1: // Lejeindtægt sektion
                setTimeout(() => {
                    animateRentalProjection();
                    createAccumulatedRentalChart();
                }, 500);
                break;
            case 2: // Værditilvækst projektioner
                setTimeout(() => {
                    animateGrowthPercentage();
                    createEnhancedGrowthChart();
                }, 500);
                break;
            case 3: // Off-plan strategi
                setTimeout(() => {
                    animateOffPlanBenefits();
                    animateProgressBar();
                }, 500);
                break;
            case 4: // Markedsposition
                setTimeout(() => {
                    animateBrandShowcase();
                    animateDestinationShift();
                    createEnhancedFDIChart();
                }, 500);
                break;
            case 5: // Ejendomsmulighed sammenfatning
                setTimeout(() => {
                    animateSummaryCards();
                    animateStatusItems();
                }, 500);
                break;
        }
    }

    function initializeAnimations() {
        // Tilføj intersection observer for scroll-udløste animationer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1 });

        // Observer alle animerbare elementer
        const animatableElements = document.querySelectorAll(
            '.metric-card, .advantage-item, .driver-card, .positioning-item, .summary-card, .step-card'
        );
        animatableElements.forEach(el => observer.observe(el));
    }

    function initializeProgressBar() {
        const progressBar = document.querySelector('.progress-fill');
        if (progressBar) {
            progressBar.style.width = '0%';
        }
    }

    // Enhanced Animation funktioner
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
                
                // Animer metric værdierne med enhanced effects
                const value = card.querySelector('.metric-value');
                if (value && value.textContent.includes('%')) {
                    const target = parseFloat(value.textContent) || 0;
                    animateNumber(value, target, 3000, '%', '', 1);
                }
            }, index * 250);
        });
    }

    function animateBrandTags() {
        const tags = document.querySelectorAll('.brand-validation');
        tags.forEach((tag, index) => {
            setTimeout(() => {
                tag.style.transform = 'scale(1)';
                tag.style.opacity = '1';
            }, 1200 + (index * 200));
        });
    }

    function animateRentalProjection() {
        const projectionElement = document.querySelector('.projection-range');
        if (projectionElement) {
            animateNumber(projectionElement, data.transaction_analysis.annual_yield, 3500, '%', '', 1);
        }
    }

    function animateGrowthPercentage() {
        const growthElement = document.querySelector('.growth-percentage');
        if (growthElement) {
            animateNumber(growthElement, data.transaction_analysis.total_return_percentage, 4000, '%', '', 1);
        }
    }

    function animateOffPlanBenefits() {
        const stages = document.querySelectorAll('.timing-phase');
        stages.forEach((stage, index) => {
            setTimeout(() => {
                stage.style.transform = 'translateX(0)';
                stage.style.opacity = '1';
            }, index * 500);
        });
    }

    function animateProgressBar() {
        const progressBar = document.querySelector('.progress-fill');
        if (progressBar) {
            setTimeout(() => {
                progressBar.style.width = '50%';
            }, 1200);
        }
    }

    function animateBrandShowcase() {
        const brandItems = document.querySelectorAll('.brand-case');
        brandItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.transform = 'translateY(0)';
                item.style.opacity = '1';
            }, index * 350);
        });
    }

    function animateDestinationShift() {
        const destinations = document.querySelectorAll('.old-market, .new-market');
        destinations.forEach((dest, index) => {
            setTimeout(() => {
                dest.style.transform = 'scale(1)';
                dest.style.opacity = '1';
            }, index * 700);
        });
        
        // Animer pil
        const arrow = document.querySelector('.market-transition .market-arrow');
        if (arrow) {
            setTimeout(() => {
                arrow.style.transform = 'scale(1) rotate(0deg)';
                arrow.style.opacity = '1';
            }, 1000);
        }
    }

    function animateSummaryCards() {
        const summaryCards = document.querySelectorAll('.summary-card');
        summaryCards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transform = 'translateY(0)';
                card.style.opacity = '1';
                
                // Animer værdier i summary cards
                const value = card.querySelector('.summary-value');
                if (value) {
                    const text = value.textContent;
                    if (text.includes('%')) {
                        const target = parseFloat(text) || 0;
                        animateNumber(value, target, 2500, '% over 3 år', '', 1);
                    }
                }
            }, index * 450);
        });
    }

    function animateStatusItems() {
        const statusItems = document.querySelectorAll('.status-item');
        statusItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.transform = 'translateX(0)';
                item.style.opacity = '1';
            }, index * 350);
        });
    }

    // ENHANCED CHART FUNCTIONS with glow effects and left-to-right animation

    function createAccumulatedRentalChart() {
        const canvas = document.getElementById('rental-income-chart');
        if (!canvas) return;

        console.log('Opretter akkumulerede årlige lejeindtægt chart');

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
                        borderWidth: 5,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#d4af37',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 4,
                        pointRadius: 10,
                        pointHoverRadius: 12,
                        shadowColor: 'rgba(212, 175, 55, 0.6)',
                        shadowBlur: 15,
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
                    duration: 3000,
                    easing: 'easeOutQuart',
                    onProgress: function(animation) {
                        // Left-to-right reveal animation
                        const chart = animation.chart;
                        const ctx = chart.ctx;
                        const meta = chart.getDatasetMeta(0);
                        const progress = animation.currentStep / animation.numSteps;
                        
                        // Add glow effect
                        ctx.save();
                        ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
                        ctx.shadowBlur = 20 * progress;
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
                        hoverBorderWidth: 5,
                        hoverRadius: 15
                    }
                }
            }
        });
    }

    function createEnhancedGrowthChart() {
        const canvas = document.getElementById('growth-timeline-chart');
        if (!canvas) return;

        console.log('Opretter enhanced værditilvækst chart');

        // Filter out null values for property value (stops at År 2)
        const propertyValueData = data.growth_timeline.property_value.filter(val => val !== null);
        const propertyValueLabels = data.growth_timeline.periods.slice(0, propertyValueData.length);

        activeCharts.growth = new Chart(canvas, {
            type: 'line',
            data: {
                labels: data.growth_timeline.periods,
                datasets: [
                    {
                        label: 'Ejendomsværdi (€) - Stops efter År 2',
                        data: data.growth_timeline.property_value,
                        borderColor: '#d4af37',
                        backgroundColor: 'rgba(212, 175, 55, 0.15)',
                        borderWidth: 5,
                        fill: true,
                        tension: 0.2,
                        pointBackgroundColor: '#d4af37',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 4,
                        pointRadius: 10,
                        pointHoverRadius: 12,
                        spanGaps: false // Don't connect null values
                    },
                    {
                        label: 'Akkumulerede lejeindtægter (€) - Fortsætter til År 3',
                        data: data.growth_timeline.accumulated_rental,
                        borderColor: '#16a085',
                        backgroundColor: 'rgba(22, 160, 133, 0.15)',
                        borderWidth: 4,
                        fill: false,
                        tension: 0.4,
                        pointBackgroundColor: '#16a085',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 3,
                        pointRadius: 8,
                        pointHoverRadius: 10
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
                    duration: 3500,
                    easing: 'easeOutQuart',
                    onProgress: function(animation) {
                        // Enhanced glow effect for both lines
                        const chart = animation.chart;
                        const ctx = chart.ctx;
                        const progress = animation.currentStep / animation.numSteps;
                        
                        ctx.save();
                        ctx.shadowColor = 'rgba(212, 175, 55, 0.6)';
                        ctx.shadowBlur = 25 * progress;
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
                        hoverBorderWidth: 5,
                        hoverRadius: 15
                    }
                }
            }
        });
    }

    function createEnhancedFDIChart() {
        const canvas = document.getElementById('fdi-chart');
        if (!canvas) return;

        console.log('Opretter enhanced FDI chart');

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
                        borderWidth: 5,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#16a085',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 4,
                        pointRadius: 10,
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
                    duration: 3000,
                    easing: 'easeOutQuart',
                    onProgress: function(animation) {
                        // Green glow effect
                        const chart = animation.chart;
                        const ctx = chart.ctx;
                        const progress = animation.currentStep / animation.numSteps;
                        
                        ctx.save();
                        ctx.shadowColor = 'rgba(22, 160, 133, 0.6)';
                        ctx.shadowBlur = 20 * progress;
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
                        hoverBorderWidth: 5,
                        hoverRadius: 15
                    }
                }
            }
        });
    }

    // Updated dialog functions
    function showContactDialog() {
        console.log('Åbner kontakt dialog...');
        const dialog = createStyledDialog(
            'Kontakt os',
            `
            <div style="text-align: center; padding: 25px;">
                <div style="font-size: 48px; color: #d4af37; margin-bottom: 20px;">📞</div>
                <h3 style="color: #d4af37; margin-bottom: 18px; font-family: 'Playfair Display', serif;">Kontakt Bellevue Residence</h3>
                <p style="color: rgba(255,255,255,0.9); margin-bottom: 25px; line-height: 1.7; font-size: 16px;">
                    Vil du vide mere om Bellevue Residence? Kontakt vores eksperter for personlig rådgivning om denne unikke investering.
                </p>
                <div style="background: rgba(212, 175, 55, 0.12); border: 1px solid rgba(212, 175, 55, 0.35); border-radius: 15px; padding: 25px; margin: 25px 0;">
                    <p style="color: #d4af37; font-weight: bold; margin-bottom: 12px; font-size: 16px;">Vi kan hjælpe med:</p>
                    <p style="color: rgba(255,255,255,0.85); font-size: 15px; line-height: 1.6;">
                        • Ejendomsvisning og enhedsvalg<br>
                        • Detaljeret transaktionsanalyse<br>
                        • Finansieringsmuligheder<br>
                        • Juridisk rådgivning og kontrakter
                    </p>
                </div>
                <button onclick="closeDialog()" style="background: linear-gradient(135deg, #d4af37 0%, #ffd700 50%, #b8860b 100%); color: #000; border: none; padding: 14px 35px; border-radius: 30px; font-weight: bold; cursor: pointer; text-transform: uppercase; font-size: 14px; box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);">
                    Luk
                </button>
            </div>
            `
        );
        
        console.log('Kontakt interesse registreret for Bellevue Residence');
    }

    function showBrochureDialog() {
        console.log('Åbner brochure dialog...');
        const dialog = createStyledDialog(
            'Download brochure',
            `
            <div style="text-align: center; padding: 25px;">
                <div style="font-size: 48px; color: #16a085; margin-bottom: 20px;">📋</div>
                <h3 style="color: #16a085; margin-bottom: 18px; font-family: 'Playfair Display', serif;">Få den komplette brochure</h3>
                <p style="color: rgba(255,255,255,0.9); margin-bottom: 25px; line-height: 1.7; font-size: 16px;">
                    Download den detaljerede brochure med alle informationer om Bellevue Residence og investeringsmuligheden.
                </p>
                <div style="background: rgba(22, 160, 133, 0.12); border: 1px solid rgba(22, 160, 133, 0.35); border-radius: 15px; padding: 25px; margin: 25px 0;">
                    <p style="color: #16a085; font-weight: bold; margin-bottom: 12px; font-size: 16px;">Brochuren indeholder:</p>
                    <p style="color: rgba(255,255,255,0.85); font-size: 15px; line-height: 1.6;">
                        • Komplet transaktionsanalyse (€143.000)<br>
                        • Projekterede 11,7% årlige lejeindtægter<br>
                        • 66,3% værditilvækst over 3 år<br>
                        • Plantegninger og højkvalitetsbilleder<br>
                        • Juridiske vilkår og betalingsplan
                    </p>
                </div>
                <button onclick="closeDialog()" style="background: linear-gradient(135deg, #16a085 0%, #20b2aa 100%); color: #fff; border: none; padding: 14px 35px; border-radius: 30px; font-weight: bold; cursor: pointer; text-transform: uppercase; font-size: 14px; box-shadow: 0 6px 20px rgba(22, 160, 133, 0.4);">
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
            background: rgba(0, 0, 0, 0.85);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            backdrop-filter: blur(15px);
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
                ">
                    ${title}
                </div>
                ${content}
            </div>
        `;
        
        // Luk på baggrund klik
        dialog.addEventListener('click', function(e) {
            if (e.target === dialog) {
                closeDialog();
            }
        });
        
        document.body.appendChild(dialog);
        
        // Gør closeDialog globalt tilgængelig
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

    console.log('Bellevue Residence app indlæst med enhanced typography og animated charts');
});
