<template>
    <div>
      <h1 class="text-[#101828] text-xl font-semibold pb-1">Spread of Agripreneurs Across Sectors</h1>
      <p class="text-[#667085] text-sm font-medium">Sorted by number of agripreneurs per sector</p>
      <canvas ref="barChart"></canvas>
    </div>
  </template>
  
  <script>
  import { Chart, BarController, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
  
  Chart.register(BarController, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  
  export default {
    name: 'BarChart',
    mounted() {
      const ctx = this.$refs.barChart.getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [
            'Fisheries',
            'Livestock Prod',
            'Agric Business',
            'Crop Production'
          ],
          datasets: [
            {
              label: 'Sector',
              data: [100, 150, 200, 250],
              backgroundColor: [
                '#FFC107',
                '#E91E63',
                '#3F51B5',
                '#FF5722'
              ],
            }
          ],
        },
        options: {
          indexAxis: 'y',
          scales: {
            x: {
              beginAtZero: true,
            },
          },
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: false,
            },
          },
        },
      });
    },
  };
  </script>
  
  <style scoped>
  canvas {
    max-width: 100%;
  }
  </style>
  