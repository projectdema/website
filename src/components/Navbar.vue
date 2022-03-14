<template>
  <div class="navbar" id="navbar">
    <ul class="itself">
      <li id="navbar-brand" class="navbar-brand"><span>project</span><span>Dema</span></li>

      <template v-for="route in $router.options.routes" :key="route.path">
        <div v-if="route.name !== 'Login'">
          <li>
            <router-link class="navbar-link" :to="route.path">{{ route.name }}</router-link>
          </li>
        </div>
        <div v-else>
          <li style="float: right">
            <router-link class="navbar-link" :to="route.path">{{ route.name }}</router-link>
          </li>
        </div>
      </template>
      <li style="float: right">
        <div class="options navbar-link">
          <a>⚙️</a>
          <div class="content">
            <div class="inner">
              <button id="themeSwitch" onclick="toggleTheme()" title="Alterar tema"></button>
              <button class="" onclick="" title="Ligar/Desligar coleta de dados">Bah</button>
            </div>
          </div>
        </div>
      </li>
      
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "Navbar",
};
</script>
