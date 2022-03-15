<script lang="ts" scoped>
// @ts-ignore
import { Chart } from 'chart.js';

export default {
  props: ['type', 'data', 'options', 'plugins', 'reference'],
  setup(props: any) {
    
  },
  mounted() {
    const config = {
        type: this.type ?? 'line',
        data: {
            labels: this.data.labels,
            datasets: this.data.datasets.map((dataset) => {
                return { 
                    ...dataset, 
                    tension: .25, 
                    fill: false, 
                    hoverBackgroundColor: dataset.backgroundColor 
                }
            }),
        },
        options: {
            ...this.options,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            responsive: true,
        },
        plugins: {
            ...this.plugins
        }
    }
    new Chart(this.$refs[this.reference], config);
  }
}
</script>

<template>
    <div class="chart-container">
        <canvas :ref="reference"></canvas>
    </div>
</template>