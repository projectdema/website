<template>
    <vue-3-chart-js
        :id="chart.id"
        :type="chart.type"
        :data="chart.data"
        @before-render="beforeRenderLogic"
    ></vue-3-chart-js>
</template>

<script lang="ts">
    // @ts-ignore
    import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';

    export default {
        props: {
            chart: {
                type: Object
            }
        },
        components: {
            Vue3ChartJs,
        },
        setup(props: any) {
            const chart = {
                type: props.chart.type,
                id: 'line-chart',
                data: props.chart.data,
                options: props.chart.options,
            }

            const beforeRenderLogic = (event: any) => {

            }

            return { chart, beforeRenderLogic };
        }
    }
</script>