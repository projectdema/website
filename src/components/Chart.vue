<script lang="ts" scoped>
// @ts-ignore
import { Chart } from 'chart.js';

export default {
  props: ['type', 'data', 'options', 'plugins', 'reference'],
  setup(props: any) {
    
  },
  mounted() {
    const config = {
        // @ts-ignore
        type: this.type ?? 'line',
        data: {
            // @ts-ignore
            labels: this.data.labels,
            // @ts-ignore
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
            // @ts-ignore
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
            // @ts-ignore
            ...this.plugins
        }
    }
    // @ts-ignore
    new Chart(this.$refs[this.reference], config);
  }
}
</script>

<template>
    <div class="chart-container">
        <canvas :ref="reference"></canvas>
    </div>
</template>
