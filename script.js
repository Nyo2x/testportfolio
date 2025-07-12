// Initialize Animate On Scroll
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  // Skills Chart Initialization
  const ctx = document.getElementById('skillsChart').getContext('2d');
  const skillsChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'C#', 'SQL'],
      datasets: [{
        label: 'Proficiency Level',
        data: [85, 80, 75, 70, 65, 60], // You can change this data
        borderColor: '#00bcd4',
        backgroundColor: 'rgba(0, 188, 212, 0.2)',
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#00bcd4',
        pointBorderColor: '#fff',
        pointHoverRadius: 6,
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: 'white'
          }
        }
      },
      scales: {
        x: {
          ticks: { color: 'white' },
          grid: { color: '#333' }
        },
        y: {
          ticks: { color: 'white' },
          grid: { color: '#333' }
        }
      }
    }
  });
});

console.log("📊 Portfolio loaded with animation and charts.");
