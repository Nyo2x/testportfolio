AOS.init();

const ctx = document.getElementById('skillChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'C#', 'SQL'],
    datasets: [{
      label: 'Skill Level (%)',
      data: [90, 85, 75, 80, 70, 65],
      borderColor: 'rgba(0,191,255,0.8)',
      backgroundColor: 'rgba(0,191,255,0.2)',
      tension: 0.4,
      fill: true,
      pointRadius: 5
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});
