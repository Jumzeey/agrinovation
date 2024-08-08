<template>
  <div>
    <h2>Spread of Agripreneurs Across Sectors</h2>
    <p>Sorted by number of agripreneurs per sector</p>
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
          'Livestock Prod:4000',
          'Livestock Prod:4000',
          'Livestock Prod:4000',
          'Livestock Prod:4000',
          'Livestock Prod:4000',
          'Livestock Prod:4000',
        ],
        datasets: [
          {
            label: 'Fisheries',
            data: [100, 150, 200, 250, 300, 350],
            backgroundColor: '#FFC107',
          },
          {
            label: 'Livestock Prod',
            data: [100, 150, 200, 250, 300, 350],
            backgroundColor: '#E91E63',
          },
          {
            label: 'Agric Business',
            data: [100, 150, 200, 250, 300, 350],
            backgroundColor: '#3F51B5',
          },
          {
            label: 'Fisheries',
            data: [100, 150, 200, 250, 300, 350],
            backgroundColor: '#2196F3',
          },
          {
            label: 'Crop Production',
            data: [100, 150, 200, 250, 300, 350],
            backgroundColor: '#FF5722',
          },
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
            display: true,
            text: 'Spread of Agripreneurs Across Sectors',
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
  height: 400px;
}
</style>
