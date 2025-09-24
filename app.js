// Bellevue Residence App - JavaScript with Controlled Animations
document.addEventListener('DOMContentLoaded', function() {
    // Updated data for Bellevue Residence
    const data = {
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

    // Wait for DOM to be fully ready
    setTimeout(() => {
        setupNavigation();
        showSection(0);
    }, 100);

    function setupNavigation() {
        console.log('Setting up navigation...');
        
        // Breadcrumb clicks
        const breadcrumbs = document.querySelectorAll('.breadcrumb');
        breadcrumbs.forEach((breadcrumb, index) => {
            breadcrumb.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Breadcrumb', index, 'clicked');
                showSection(index);
            });
        });

        // Next button clicks
        const nextButtons = document.querySelectorAll('.next-btn');
        nextButtons.forEach((button) => {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                console.log('Next button clicked, current section:', currentSection);
                if (currentSection < totalSections - 1) {
                    showSection(currentSection + 1);
                }
            });
        });

        console.log('Navigation setup complete');
    }

    function showSection(index) {
        console.log('Showing section', index);
        
        if (index < 0 || index >= totalSections) {
            console.log('Invalid section index:', index);
            return;
        }

        // Clear existing charts
        Object.values(activeCharts).forEach(chart => {
            if (chart && typeof chart.destroy === 'function') {
                chart.destroy();
            }
        });
        activeCharts = {};

        // Hide all sections with explicit style changes
        const allSections = document.querySelectorAll('.section');
        allSections.forEach((section, i) => {
            section.classList.remove('active');
            section.style.display = 'none';
        });

        // Show target section with explicit style changes
        const targetSection = document.getElementById(`section-${index}`);
        if (targetSection) {
            targetSection.style.display = 'block';
            targetSection.classList.add('active');
            console.log('Showing section-' + index);
        } else {
            console.log('Section section-' + index + ' not found!');
            return;
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

        // Initialize section content with delay for DOM updates
        setTimeout(() => {
            initializeSection(index);
        }, 300);

        window.scrollTo(0, 0);
    }

    function initializeSection(index) {
        console.log('Initializing section', index);
        
        // Reset all animated elements
        const animatedElements = document.querySelectorAll('.animated');
        animatedElements.forEach(el => el.classList.remove('animated'));

        switch (index) {
            case 1: // Rental section
                setTimeout(() => {
                    animateReturnValues();
                    createRentalChart();
                }, 500);
                break;
            case 2: // Growth section  
                setTimeout(() => {
                    animateCounter();
                    createGrowthChart();
                    animateMilestones();
                }, 500);
                break;
            case 4: // Market position section
                setTimeout(() => {
                    createFDIChart();
                    animateHighlightNumbers();
                }, 500);
                break;
        }
    }

    // Enhanced Counter Animation Function (CONTROLLED)
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

    // Animate Return Values in Rental Section
    function animateReturnValues() {
        const returnElements = document.querySelectorAll('.value-number');
        console.log('Found', returnElements.length, 'value number elements');
        returnElements.forEach((element, index) => {
            const target = parseFloat(element.getAttribute('data-target')) || parseFloat(element.textContent);
            console.log('Animating value number', index, 'target:', target);
            setTimeout(() => {
                animateNumber(element, target, 2500, '', '', 1);
            }, index * 300);
        });
    }

    // Animate Counter for Main Value
    function animateCounter() {
        const counter = document.querySelector('#section-2 .value-number');
        if (counter && !counter.classList.contains('animated')) {
            const target = parseFloat(counter.getAttribute('data-target')) || 66.3;
            console.log('Animating counter target:', target);
            animateNumber(counter, target, 3000, '', '', 1);
        }
    }

    // Animate Highlight Numbers in Market Section
    function animateHighlightNumbers() {
        const highlightElements = document.querySelectorAll('#section-4 .highlight-number');
        console.log('Found', highlightElements.length, 'highlight number elements');
        highlightElements.forEach((element, index) => {
            const target = parseInt(element.getAttribute('data-target'));
            setTimeout(() => {
                animateNumber(element, target, 2000);
            }, index * 500);
        });
    }

    // CONTROLLED Milestone Animation (reduced intensity)
    function animateMilestones() {
        const milestoneCards = document.querySelectorAll('#section-2 .milestone-card');
        console.log('Found', milestoneCards.length, 'milestone cards');
        milestoneCards.forEach((card, index) => {
            const delay = parseInt(card.getAttribute('data-delay')) || (index * 200);
            
            // Reset animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0px)';
            }, delay);
        });
    }

    // CONTROLLED Chart Creation (reduced animation)
    function createRentalChart() {
        const canvas = document.getElementById('rental-income-chart');
        if (!canvas) {
            console.log('Rental chart canvas not found');
            return;
        }

        console.log('Creating rental chart');

        // Clear any existing chart
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
                    borderColor: '#00ff66',
                    backgroundColor: 'rgba(0, 255, 102, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#00ff66',
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
                            callback: value => '€' + value.toLocaleString()
                        }, 
                        grid: { color: 'rgba(255,255,255,0.1)' }
                    }
                },
                animation: {
                    duration: 2000, // Reduced from 3500
                    easing: 'easeOutQuart'
                },
                elements: {
                    line: { borderCapStyle: 'round' }
                }
            }
        });
    }

    function createGrowthChart() {
        const canvas = document.getElementById('growth-timeline-chart');
        if (!canvas) return;

        console.log('Creating growth chart');

        // Clear any existing chart
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
                        borderColor: '#1FB8CD',
                        backgroundColor: 'rgba(31, 184, 205, 0.1)',
                        borderWidth: 3,
                        fill: true,
                        tension: 0.3,
                        pointBackgroundColor: '#1FB8CD',
                        pointBorderColor: '#ffffff',
                        pointBorderWidth: 2,
                        pointRadius: 6,
                        spanGaps: false
                    },
                    {
                        label: 'Akkumulerede lejeindtægter (€)',
                        data: data.growth_timeline.accumulated_rental,
                        borderColor: '#00ff66',
                        backgroundColor: 'rgba(0, 255, 102, 0.1)',
                        borderWidth: 3,
                        fill: false,
                        tension: 0.4,
                        pointBackgroundColor: '#00ff66',
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
                    duration: 2500, // Reduced from 4000
                    easing: 'easeOutQuart'
                }
            }
        });
    }

    function createFDIChart() {
        const canvas = document.getElementById('fdi-chart');
        if (!canvas) return;

        console.log('Creating FDI chart');

        // Clear any existing chart
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
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#1FB8CD',
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
                    duration: 2000, // Reduced from 3500
                    easing: 'easeOutQuart'
                }
            }
        });
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

    console.log('Bellevue Residence JavaScript loaded with controlled animations');
});
