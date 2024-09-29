<template>
    <div class="w-full">
        <h1 class="text-[#101828] text-xl font-semibold pb-1">
      Output of Agripreneur in Lagos
    </h1>
    <p class="text-[#667085] text-sm font-medium">
      Sorted by the quantity of products per tonnes
    </p>
      <canvas ref="bubbleChart"></canvas>
    </div>
  </template>
  
  <script>
  import { Chart, BubbleController, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js'
  
  Chart.register(BubbleController, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend)
  
  export default {
    name: 'BubbleChart',
    mounted() {
      const ctx = this.$refs.bubbleChart.getContext('2d')
      new Chart(ctx, {
        type: 'bubble',
        data: {
          datasets: [
            {
              label: 'Apples',
              data: [{ x: 10, y: 50, r: 15 }],
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              borderColor: 'rgba(75, 192, 192, 1)'
            },
            {
              label: 'Bananas',
              data: [{ x: 20, y: 150, r: 10 }],
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgba(75, 192, 192, 1)'
            },
            {
              label: 'Cherries',
              data: [{ x: 30, y: 100, r: 20 }],
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
              borderColor: 'rgba(75, 192, 192, 1)'
            },
            {
              label: 'Dates',
              data: [{ x: 40, y: 250, r: 25 }],
              backgroundColor: 'rgba(153, 102, 255, 0.5)',
              borderColor: 'rgba(75, 192, 192, 1)'
            },
            {
              label: 'Elderberries',
              data: [{ x: 50, y: 200, r: 30 }],
              backgroundColor: 'rgba(255, 159, 64, 0.5)',
              borderColor: 'rgba(75, 192, 192, 1)'
            },
            {
              label: 'Figs',
              data: [{ x: 60, y: 80, r: 15 }],
              backgroundColor: 'rgba(255, 206, 86, 0.5)',
              borderColor: 'rgba(75, 192, 192, 1)'
            },
            {
              label: 'Grapes',
              data: [{ x: 70, y: 120, r: 20 }],
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
              borderColor: 'rgba(75, 192, 192, 1)'
            },
            {
              label: 'Honeydew',
              data: [{ x: 80, y: 180, r: 25 }],
              backgroundColor: 'rgba(153, 102, 255, 0.5)',
              borderColor: 'rgba(75, 192, 192, 1)'
            },
            {
              label: 'Indian Fig',
              data: [{ x: 90, y: 300, r: 30 }],
              backgroundColor: 'rgba(255, 159, 64, 0.5)',
              borderColor: 'rgba(75, 192, 192, 1)'
            },
            {
              label: 'Jackfruit',
              data: [{ x: 100, y: 220, r: 15 }],
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgba(75, 192, 192, 1)'
            },
            {
              label: 'Kiwi',
              data: [{ x: 110, y: 170, r: 20 }],
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
              borderColor: 'rgba(75, 192, 192, 1)'
            },
            {
              label: 'Lemons',
              data: [{ x: 120, y: 90, r: 25 }],
              backgroundColor: 'rgba(153, 102, 255, 0.5)',
              borderColor: 'rgba(75, 192, 192, 1)'
            },
            {
              label: 'Mangoes',
              data: [{ x: 130, y: 270, r: 30 }],
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
              bborderColor: 'rgba(75, 192, 192, 1)'
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            x: {
            type: 'linear',
              labels: ['Apples', 'Bananas', 'Cherries', 'Dates', 'Elderberries', 'Figs', 'Grapes', 'Honeydew', 'Indian Fig', 'Jackfruit', 'Kiwi', 'Lemons', 'Mangoes'],
              position: 'bottom',
              title: {
                display: true,
                text: 'Production per Trailer'
              },
              ticks: {
                callback: function(value, index, values) {
                  const labels = ['Apples', 'Bananas', 'Cherries', 'Dates', 'Elderberries', 'Figs', 'Grapes', 'Honeydew', 'Indian Fig', 'Jackfruit', 'Kiwi', 'Lemons', 'Mangoes']
                  return labels[index] || value
                }
              }
            },
            y: {
              title: {
                display: true,
                text: 'Production per Tonnes'
              },
              ticks: {
                callback: function(value) {
                  return value + ' tn'
                }
              }
            }
          },
          plugins: {
            legend: {
              display: false,
              position: 'top'
            },
            title: {
              display: false,
              text: 'Output of Agripreneur in Lagos'
            }
          }
        }
      })
    }
  }
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  