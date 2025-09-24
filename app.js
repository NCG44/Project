// Bellevue Residence ejendomsapp - final version med FDI chart og opdateret betalingsplan
document.addEventListener('DOMContentLoaded', function() {
    // Real transaction analysis data fra Norden Capital Group
    const data = {
        transaction_analysis: {
            purchase_amount: 148000,
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
            occupancy_rate: 40, // Konservativ 40% belægning
            completion_year: 2027 // Forventet færdiggørelse Q1 2027
        },
        rental_projections: {
            years: ['2027', '2028', '2029', '2030'],
            annual_income: [16860, 16860, 16860, 16860]
        },
        growth_timeline: {
            years: ['År 1', 'År 2', 'År 3'],
            annual_cashflow: [16860, 16860, 16860],
            cumulative_cashflow: [16860, 33720, 50580],
            capital_appreciation: [0, 22000, 44333],
            total_value: [16860, 55720, 94913]
        },
        fdi_data: {
            years: ['2019', '2020', '2021', '2022', '2023', '2024'],
            fdi_amounts: [487, 356, 625, 758, 892, 1050] // Millioner EUR
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
        const nextButtons = document.querySelectorAll('.next-btn, .cta-btn, .action-btn');
        nextButtons.forEach((button) => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Håndter forskellige button typer
                if (button.classList.contains('cta-btn')) {
                    if (button.classList.contains('primary')) {
                        showPropertyDialog();
                    } else {
                        showConsultationDialog();
                    }
                } else if (button.classList.contains('book-meeting')) {
                    showMeetingDialog();
                } else if (button.classList.contains('download-brochure')) {
                    showBrochureDialog();
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
                    createRentalIncomeChart();
                }, 500);
                break;
            case 2: // Værditilvækst projektioner
                setTimeout(() => {
                    animateGrowthPercentage();
                    createGrowthTimelineChart();
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
                    createFDIChart();
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

    // Animation funktioner
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
                
                // Animer metric værdierne
                const value = card.querySelector('.metric-value');
                if (value && value.textContent.includes('%')) {
                    const target = parseFloat(value.textContent) || 0;
                    animateNumber(value, target, 2500, '%', '', 1);
                }
            }, index * 200);
        });
    }

    function animateBrandTags() {
        const tags = document.querySelectorAll('.brand-validation');
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
            animateNumber(projectionElement, data.transaction_analysis.annual_yield, 3000, '%', '', 1);
        }
    }

    function animateGrowthPercentage() {
        const growthElement = document.querySelector('.growth-percentage');
        if (growthElement) {
            animateNumber(growthElement, data.transaction_analysis.total_return_percentage, 3500, '%', '', 1);
        }
    }

    function animateOffPlanBenefits() {
        const stages = document.querySelectorAll('.timing-phase');
        stages.forEach((stage, index) => {
            setTimeout(() => {
                stage.style.transform = 'translateX(0)';
                stage.style.opacity = '1';
            }, index * 400);
        });
    }

    function animateProgressBar() {
        const progressBar = document.querySelector('.progress-fill');
        if (progressBar) {
            setTimeout(() => {
                progressBar.style.width = '50%';
            }, 1000);
        }
    }

    function animateBrandShowcase() {
        const brandItems = document.querySelectorAll('.brand-case');
        brandItems.forEach((item, index) => {
            setTimeout(() => {
                item.style.transform = 'translateY(0)';
                item.style.opacity = '1';
            }, index * 300);
        });
    }

    function animateDestinationShift() {
        const destinations = document.querySelectorAll('.old-market, .new-market');
        destinations.forEach((dest, index) => {
            setTimeout(() => {
                dest.style.transform = 'scale(1)';
                dest.style.opacity = '1';
            }, index * 600);
        });
        
        // Animer pil
        const arrow = document.querySelector('.market-transition .market-arrow');
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
                
                // Animer værdier i summary cards
                const value = card.querySelector('.summary-value');
                if (value) {
                    const text = value.textContent;
                    if (text.includes('%')) {
                        const target = parseFloat(text) || 0;
                        animateNumber(value, target, 2000, '% over 3 år', '', 1);
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

    // Chart oprettelse funktioner
    function createRentalIncomeChart() {
        const canvas = document.getElementById('rental-income-chart');
        if (!canvas) return;

        console.log('Opretter årlige lejeindtægt chart');

        activeCharts.rental = new Chart(canvas, {
            type: 'bar',
            data: {
                labels: data.rental_projections.years,
                datasets: [
                    {
                        label: 'Projekterede årlige lejeindtægter (€)',
                        data: data.rental_projections.annual_income,
                        backgroundColor: 'rgba(212, 175, 55, 0.8)',
                        borderColor: '#d4af37',
                        borderWidth: 2,
                        borderRadius: 8,
                        borderSkipped: false,
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
                                size: 14,
                                weight: '500'
                            }
                        }
                    }
                },
                scales: {
                    x: { 
                        ticks: { 
                            color: '#ffffff',
                            font: {
                                size: 12,
                                weight: '500'
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
                                size: 12,
                                weight: '500'
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
                    duration: 2000,
                    easing: 'easeOutBounce',
                    delay: function(context) {
                        return context.dataIndex * 300;
                    }
                }
            }
        });
    }

    function createGrowthTimelineChart() {
        const canvas = document.getElementById('growth-timeline-chart');
        if (!canvas) return;

        console.log('Opretter værditilvækst timeline chart');

        activeCharts.growth = new Chart(canvas, {
            type: 'line',
            data: {
                labels: data.growth_timeline.years,
                datasets: [
                    {
                        label: 'Årlige lejeindtægter (€)',
                        data: data.growth_timeline.annual_cashflow,
                        borderColor: '#16a085',
                        backgroundColor: 'rgba(22, 160, 133, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#16a085',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 6
                    },
                    {
                        label: 'Akkumuleret kapitalvækst (€)',
                        data: data.growth_timeline.capital_appreciation,
                        borderColor: '#d4af37',
                        backgroundColor: 'rgba(212, 175, 55, 0.1)',
                        borderWidth: 3,
                        fill: false,
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
                        labels: { 
                            color: '#ffffff',
                            font: {
                                size: 14,
                                weight: '500'
                            }
                        }
                    }
                },
                scales: {
                    x: { 
                        ticks: { 
                            color: '#ffffff',
                            font: {
                                size: 12,
                                weight: '500'
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
                                size: 12,
                                weight: '500'
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
                    duration: 2500,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    function createFDIChart() {
        const canvas = document.getElementById('fdi-chart');
        if (!canvas) return;

        console.log('Opretter FDI chart');

        activeCharts.fdi = new Chart(canvas, {
            type: 'line',
            data: {
                labels: data.fdi_data.years,
                datasets: [
                    {
                        label: 'Udenlandske direkte investeringer (Mio. €)',
                        data: data.fdi_data.fdi_amounts,
                        borderColor: '#16a085',
                        backgroundColor: 'rgba(22, 160, 133, 0.1)',
                        borderWidth: 4,
                        fill: true,
                        tension: 0.4,
                        pointBackgroundColor: '#16a085',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 3,
                        pointRadius: 8
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
                                size: 14,
                                weight: '500'
                            }
                        }
                    }
                },
                scales: {
                    x: { 
                        ticks: { 
                            color: '#ffffff',
                            font: {
                                size: 12,
                                weight: '500'
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
                                size: 12,
                                weight: '500'
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
                    duration: 2500,
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    // Dialog funktioner
    function showPropertyDialog() {
        console.log('Åbner ejendoms reservering dialog...');
        const dialog = createStyledDialog(
            'Reservér din enhed',
            `
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 48px; color: #d4af37; margin-bottom: 20px;">Ejendom</div>
                <h3 style="color: #d4af37; margin-bottom: 15px;">Tak for din interesse i Bellevue Residence!</h3>
                <p style="color: rgba(255,255,255,0.9); margin-bottom: 20px; line-height: 1.6;">
                    Du overvejer en klog beslutning med projekterede 11,7% årlige lejeindtægter og 66,3% forventet værditilvækst over 3 år.
                </p>
                <div style="background: rgba(212, 175, 55, 0.1); border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 12px; padding: 20px; margin: 20px 0;">
                    <p style="color: #d4af37; font-weight: bold; margin-bottom: 10px;">Betalingsplan:</p>
                    <p style="color: rgba(255,255,255,0.8); font-size: 14px;">
                        • 1. rate: 50% ved kontraktunderskrift<br>
                        • 2. rate: 20% december 2025<br>
                        • 3. rate: 20% juli 2026<br>
                        • Sidste rate: 10% ved færdiggørelse januar 2027
                    </p>
                </div>
                <button onclick="closeDialog()" style="background: #d4af37; color: #000; border: none; padding: 12px 30px; border-radius: 25px; font-weight: bold; cursor: pointer; text-transform: uppercase;">
                    Luk
                </button>
            </div>
            `
        );
        
        console.log('Ejendoms interesse registreret for Bellevue Residence');
    }

    function showConsultationDialog() {
        console.log('Åbner konsultation booking dialog...');
        const dialog = createStyledDialog(
            'Book transaktionsanalyse',
            `
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 48px; color: #16a085; margin-bottom: 20px;">Konsultation</div>
                <h3 style="color: #16a085; margin-bottom: 15px;">Book personlig transaktionsanalyse</h3>
                <p style="color: rgba(255,255,255,0.9); margin-bottom: 20px; line-height: 1.6;">
                    Lad vores eksperter guide dig gennem den detaljerede transaktionsanalyse for Bellevue Residence.
                </p>
                <div style="background: rgba(22, 160, 133, 0.1); border: 1px solid rgba(22, 160, 133, 0.3); border-radius: 12px; padding: 20px; margin: 20px 0;">
                    <p style="color: #16a085; font-weight: bold; margin-bottom: 10px;">Inkluderer:</p>
                    <p style="color: rgba(255,255,255,0.8); font-size: 14px;">
                        • Detaljeret gennemgang af 11,7% årlige lejeindtægter<br>
                        • 66,3% værditilvækst over 3 år<br>
                        • Risikoevaluering og markedsanalyse<br>
                        • Projekt 50% færdigstillet - risikominimering
                    </p>
                </div>
                <button onclick="closeDialog()" style="background: #16a085; color: #fff; border: none; padding: 12px 30px; border-radius: 25px; font-weight: bold; cursor: pointer; text-transform: uppercase;">
                    Luk
                </button>
            </div>
            `
        );
    }

    function showMeetingDialog() {
        console.log('Åbner møde booking dialog...');
        const dialog = createStyledDialog(
            'Book møde',
            `
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 48px; color: #d4af37; margin-bottom: 20px;">Møde</div>
                <h3 style="color: #d4af37; margin-bottom: 15px;">Book personligt møde</h3>
                <p style="color: rgba(255,255,255,0.9); margin-bottom: 20px; line-height: 1.6;">
                    Mød vores eksperter ansigt til ansigt for en dybdegående gennemgang af Bellevue Residence.
                </p>
                <div style="background: rgba(212, 175, 55, 0.1); border: 1px solid rgba(212, 175, 55, 0.3); border-radius: 12px; padding: 20px; margin: 20px 0;">
                    <p style="color: #d4af37; font-weight: bold; margin-bottom: 10px;">Mødet inkluderer:</p>
                    <p style="color: rgba(255,255,255,0.8); font-size: 14px;">
                        • Projektgennemgang med 3D visualiseringer<br>
                        • Live transaktionsanalyse<br>
                        • Besigtigelse af lignende enheder<br>
                        • Personlig rådgivning om betalingsplan
                    </p>
                </div>
                <button onclick="closeDialog()" style="background: #d4af37; color: #000; border: none; padding: 12px 30px; border-radius: 25px; font-weight: bold; cursor: pointer; text-transform: uppercase;">
                    Luk
                </button>
            </div>
            `
        );
    }

    function showBrochureDialog() {
        console.log('Åbner brochure download dialog...');
        const dialog = createStyledDialog(
            'Brochure',
            `
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 48px; color: #16a085; margin-bottom: 20px;">📋</div>
                <h3 style="color: #16a085; margin-bottom: 15px;">Download brochure</h3>
                <p style="color: rgba(255,255,255,0.9); margin-bottom: 20px; line-height: 1.6;">
                    Få den komplette brochure med alle detaljer om Bellevue Residence direkte til din email.
                </p>
                <div style="background: rgba(22, 160, 133, 0.1); border: 1px solid rgba(22, 160, 133, 0.3); border-radius: 12px; padding: 20px; margin: 20px 0;">
                    <p style="color: #16a085; font-weight: bold; margin-bottom: 10px;">Brochuren indeholder:</p>
                    <p style="color: rgba(255,255,255,0.8); font-size: 14px;">
                        • Komplet transaktionsanalyse<br>
                        • Højkvalitets billeder og plantegninger<br>
                        • Detaljeret markedsanalyse<br>
                        • Juridiske vilkår og betalingsplan
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

    console.log('Bellevue Residence app indlæst med alle finale features');
});
