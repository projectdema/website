<script lang="ts">
    // @ts-ignore
    import LineChart from '../components/Chart.vue';

    let data = {
        labels: ['01/03', '02/03', '03/03', '04/03'],
        datasets: [
            {
                label: 'Example 1',
                backgroundColor: '#42b883',
                borderColor: '#42b883',
                hoverBackgroundColor: '#42b883',
                tension: .25,
                data: [1, 4, 3, 5],
            },
            {
                label: 'Example 2',
                backgroundColor: '#555dcc',
                borderColor: '#555dcc',
                tension: .25,
                hoverBackgroundColor: '#555dcc',
                data: [1, 2, 5, 8],
            }
        ]
    }

    let charts = [
        {
            type: 'line',
            id: 'line-chart',
            data: data,
        },
        {
            type: 'bar',
            id: 'bar-chart',
            data: data,
        }
    ];

    export default {
        name: 'Pesquisas',
        components: {
            LineChart,
        },
        data() {
            return {
                charts,
            }
        }
    }
</script>

<template>
    <div class="page-container researches">
        <div class="header">
            <h1>
                Pesquisas
            </h1>
            <p>
                Aqui você pode ver as pesquisas que foram realizadas até o momento.
            </p>
        </div>
        <div class="row">
            <div class="column left">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus error esse odio quis repellat quas eius corrupti praesentium vero! Sapiente tenetur adipisci, magni qui modi rem? Deleniti, atque nulla!
                </p>
            </div>
            <div class="column">
                <div class="graph">
                    <LineChart :chart="charts[0]"/>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="graph">
                    <LineChart :chart="charts[1]"/>
                </div>
            </div>
            <div class="column right">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus error esse odio quis repellat quas eius corrupti praesentium vero! Sapiente tenetur adipisci, magni qui modi rem? Deleniti, atque nulla!
                </p>
            </div>
        </div>
    </div>
</template>