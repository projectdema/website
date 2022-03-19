<script lang="ts">
    export default {
        name: "PageTitle",
        props: {
            title: {
                type: String,
                required: false,
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
        <span class="title">
            {{ title }}
        </span>
        <span v-if="subtitle" class="subtitle">
            {{ subtitle }}
        </span>
    </h1>
</template>