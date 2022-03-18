<script lang="ts">
    export default {
        name: "PageTitle",
        props: {
            title: {
                type: String,
                required: true,
            },
            subtitle: {
                type: String,
                required: false,
            },
        },
    }
</script>

<template>
    <h1 class="page-title">
        <span>
            {{ title }}
        </span>
        <span v-if="subtitle">
            {{ subtitle }}
        </span>
    </h1>
</template>