const ctx = document.getElementById('skillChart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'C#', 'SQL'],
    datasets: [{
      label: 'Skill Level (%)',
      data: [90, 85, 75, 80, 70, 65],
      backgroundColor: 'rgba(0, 191, 255, 0.8)'
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});
