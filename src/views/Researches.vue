<script lang="ts">
    // @ts-ignore
    import Chart from '../components/PageUtils/Chart.vue';

    let charts = [
        {
                labels: ['01/03', '07/03', '14/03', '21/03', '28/03'],
                datasets: [
                    {
                        label: 'Psicológico',
                        backgroundColor: '#42b883',
                        data: [8, 4, 3, 5, 2],
                    },
                    {
                        type: "bar",
                        label: 'Média de Nota',
                        backgroundColor: 'rgba(86, 94, 205, 0.75)',
                        data: [4, 6, 5, 5, 8],
                        barPercentage: 0.5,
                    }
                ]
        },
        {

                labels: ['01/03', '07/03', '14/03', '21/03', '28/03'],
                datasets: [
                    {
                        label: 'Psicológico',
                        borderColor: '#42b883',
                        backgroundColor: '#42b883',
                        data: [8, 4, 3, 5, 2],
                    },
                    {
                        label: 'Média de Nota',
                        backgroundColor: 'rgba(86, 94, 205, 0.75)',
                        data: [4, 6, 5, 5, 8],

                    }
                ]
        },
    ];

    export default {
        components: {
            Chart,
        },
        data() {
            return {
                charts,
            }
        }
    }
</script>

<template>
    <div class="page">
        <div class="page-header" id="page-header">
            <div class="header-left">
                <img class="header-banner" src="@/assets/svgs/pie.svg" style="transform: scaleX(-1);"/>
            </div>
            <div class="header-right center-y">
                <div class="text-box center-it">
                    <PageTitle subtitle="RESEARCHES"></PageTitle>
                    <p class="page-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae mollitia laborum, error eligendi reprehenderit a, repellendus eum blanditiis, necessitatibus vitae modi. Sequi repudiandae nostrum error!
                    </p>
                </div>
            </div>
        </div>

        <div class="page-body secondary">
            <div class="two-column-row" id="notas">
                <div class="column">
                    <h2 class="title">
                        LOREM IPSUM
                    </h2>
                    <p class="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus error esse odio quis repellat quas eius corrupti praesentium vero! Sapiente tenetur adipisci, magni qui modi rem? Deleniti, atque nulla!
                    </p>
                </div>
                <div class="column">
                    <div class="graph">
                        <Chart :type="'line'" :data="charts[0]" :reference="'graph1'"/>
                    </div>
                </div>
            </div>
        </div>
        <div class="page-body secondary">
            <div class="two-column-row">
                <div class="column">
                    <div class="graph">
                        <Chart :type="'bar'" :data="charts[1]" :reference="'graph2'" :options="{legend: {
                    display: false
                }}"/>
                    </div>
                </div>
                <div class="column">
                    <p class="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus error esse odio quis repellat quas eius corrupti praesentium vero! Sapiente tenetur adipisci, magni qui modi rem? Deleniti, atque nulla!
                    </p>
                </div>
            </div>
        </div>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
        <br>
    </div>
</template>