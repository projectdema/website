<template>
  <div class="outter-navbar unselectable">
    <ul class="navbar">
      <li class="brand rainbow"><span>project</span><span>Dema</span></li>

      <template v-for="route in $router.options.routes" :key="route.path">
        <div v-if="route.name !== 'Login'">
          <li>
            <router-link :to="route.path">{{ route.name }}</router-link>
          </li>
        </div>
        <div v-else>
          <li style="float: right">
            <router-link :to="route.path">{{ route.name }}</router-link>
          </li>
        </div>
      </template>

      <li style="float: right">
        <button style="float: right" id="themeSwitch" onclick="toggleTheme()">
          Switch
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Navbar",
};
</script>
