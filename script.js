// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  const ctx = document.getElementById('skillsChart').getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['C#', 'Java', 'HTML', 'CSS', 'Unity'],
      datasets: [{
        label: 'Proficiency (%)',
        data: [80, 75, 90, 85, 70],
        borderColor: '#00bcd4',
        backgroundColor: 'rgba(0, 188, 212, 0.2)',
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: '#00bcd4',
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          max: 100,
          ticks: {
            color: 'white'
          },
          grid: {
            color: '#333'
          }
        },
        x: {
          ticks: {
            color: 'white'
          },
          grid: {
            color: '#333'
          }
        }
      },
      plugins: {
        legend: {
          labels: {
            color: 'white'
          }
        }
      }
    }
  });
});
