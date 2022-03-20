<script lang="ts" scoped>

import colorLib from '@kurkle/color';
// @ts-ignore
import Chart, { ChartOptions } from 'chart.js/auto';

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
                    tension: .25, 
                    fill: false, 
                    borderColor: dataset.backgroundColor,
                    hoverBackgroundColor: dataset.type === 'bar' || this.type === 'bar' ? colorLib(dataset.backgroundColor).alpha(0.5).rgbString() : dataset.backgroundColor,
                    hoverBorderColor: dataset.backgroundColor,
                    borderRadius: 2.5,
                    ...dataset,
                }
            }),
        },
        options: {
            maintainAspectRatio: false,
            transitions: {
                hide: {
                    animation: {
                        duration: 100,
                    }
                }, 
            },
            scales: {
                y: {
                    ticks: {
                        beginAtZero: true,
                        stepSize: 1,
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: "'Montserrat', sans-serif",
                            weight: '600',
                            size: 14
                        }
                    },
                }
            },
            responsive: true,
            // @ts-ignore
            ...this.options,
        } as ChartOptions,
        plugins: {
            // @ts-ignore
            ...this.plugins
        }
    }
    // @ts-ignore
    this.chart = new Chart(this.$refs[this.reference], config);
  }
}
</script>

<template>
    <div class="chart-container">
        <canvas :ref="reference"></canvas>
    </div>
</template>
