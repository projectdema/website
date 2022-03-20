<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/MainBlocks/Navbar.vue";
</script>

<template>
  <Navbar/>

  <RouterView/>
</template>

<script lang="ts">
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
