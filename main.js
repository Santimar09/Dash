
        // Configurar Chart.js
        Chart.defaults.font.family = 'Segoe UI';
        Chart.defaults.font.size = 11;

        // Gráfico de Evidencias
        const evidencesCtx = document.getElementById('evidencesChart').getContext('2d');
        new Chart(evidencesCtx, {
            type: 'doughnut',
            data: {
                labels: ['Evidencias Aceptadas', 'Evidencias Rechazadas'],
                datasets: [{
                    data: [6656, 956],
                    backgroundColor: ['#2ecc71', '#e74c3c'],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1.2,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            padding: 15,
                            usePointStyle: true,
                            font: {
                                size: 11
                            }
                        }
                    }
                },
                layout: {
                    padding: {
                        top: 10,
                        bottom: 10,
                        left: 10,
                        right: 10
                    }
                }
            }
        });

        // Gráfico de Capacitaciones
        const trainingCtx = document.getElementById('trainingChart').getContext('2d');
        new Chart(trainingCtx, {
            type: 'bar',
            data: {
                labels: ['Estudiantes', 'Docentes', 'Manuales Est.', 'Manuales Eq.Academ'],
                datasets: [{
                    label: 'Cantidad',
                    data: [719, 345, 4, 11],
                    backgroundColor: ['#9b59b6', '#1abc9c', '#f39c12', '#e74c3c'],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio: 1.2,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            font: {
                                size: 10
                            }
                        }
                    },
                    x: {
                        ticks: {
                            font: {
                                size: 10
                            },
                            maxRotation: 45,
                            minRotation: 0
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                },
                layout: {
                    padding: {
                        top: 10,
                        bottom: 10,
                        left: 10,
                        right: 10
                    }
                }
            }
        });
