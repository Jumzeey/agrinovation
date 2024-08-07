
<template>
    <div>
      <h2>Spread of Agripreneurs Across Sectors</h2>
      <p>Sorted by number of agripreneurs per sector</p>
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script>
  import { Bar } from 'chart.js';
  
  export default {
    mounted() {
      this.renderChart();
    },
    methods: {
      renderChart() {
        new Bar(this.$refs.chartCanvas, {
          data: {
            labels: ['Livestock Prod:4000', 'Fisheries:4000', 'Agric Business', 'Crop Production'],
            datasets: [
              {
                label: 'Sector',
                data: [450, 400, 350, 300],
                backgroundColor: ['#355c7d', '#6c5b7b', '#c06c84', '#f67280', '#f8b195'],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              x: {
                beginAtZero: true,
              },
            },
          },
        });
      },
    },
  };
  </script>
  
  <style scoped>
  h2 {
    text-align: center;
  }
  p {
    text-align: center;
    font-size: 14px;
    color: gray;
  }
  div {
    width: 100%;
    height: 500px;
  }
  </style>
  