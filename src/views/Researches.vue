<script lang="ts">
    // @ts-ignore
    import Chart from '../components/Chart.vue';

    let charts = [
        {
                labels: ['01/03', '07/03', '14/03', '21/03', '28/03'],
                datasets: [
                    {
                        label: 'Psicologico',
                        borderColor: '#42b883',
                        backgroundColor: '#42b883',
                        data: [8, 4, 3, 5, 2],
                    },
                    {
                        label: 'Notas',
                        borderColor: '#555dcc',
                        backgroundColor: '#555dcc',
                        data: [4, 6, 5, 5, 8],
                    }
                ]
        },
        {
            labels: ['01/03', '07/03', '14/03', '21/03', '28/03'],
            datasets: [
                {
                    label: 'Psicologico',
                    borderColor: '#42b883',
                    backgroundColor: '#42b883',
                    data: [8, 4, 3, 5, 2],
                },
                {
                    label: 'Notas',
                    borderColor: '#8b5ac7',
                    backgroundColor: '#8b5ac7',
                    data: [4, 6, 5, 5, 8],
                }
            ]
        }
    ];

    export default {
        name: 'Pesquisas',
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
    <div class="page-container researches">
        <div class="header" ref="header">
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
                    <Chart :type="'line'" :data="charts[0]" :reference="'graph1'"/>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="column">
                <div class="graph">
                    <Chart :type="'bar'" :data="charts[1]" :reference="'graph2'"/>
                </div>
            </div>
            <div class="column right">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus error esse odio quis repellat quas eius corrupti praesentium vero! Sapiente tenetur adipisci, magni qui modi rem? Deleniti, atque nulla!
                </p>
                <a class="btn red" href="#">Button</a>
                <a class="btn violet-blue" href="#">Button</a>
                <a class="btn pastel" href="#">Button</a>
                <a class="btn ksu-purple">Button</a>
                <button class="btn disabled">Button</button>
            </div>
        </div>
        <div class="row">
            <div class="column left">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus accusamus error esse odio quis repellat quas eius corrupti praesentium vero! Sapiente tenetur adipisci, magni qui modi rem? Deleniti, atque nulla!
                </p>
            </div>
            
        </div>
    </div>
</template>