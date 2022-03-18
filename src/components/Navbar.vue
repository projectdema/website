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
              <button id="themeSwitch" @click="toggleTheme" title="Alterar tema"></button>
              <button class="" onclick="" title="Ligar/Desligar coleta de dados">Bah</button>
            </div>
          </div>
        </div>
      </li>
      
    </ul>
  </div>
</template>

<script lang="ts">
import SwitchSFX from '@/assets/sounds/switch.mp3';

export default {
  name: "Navbar",
  methods: {
    setTheme(themeName: string) {
      localStorage.setItem("theme", themeName);
      document.documentElement.className = themeName;

      try {
        let btn = document.getElementById("themeSwitch") as any;
        if (themeName === "dark-theme") {
          btn.innerText = "🔦";
        } else {
          btn.innerText = "🌚";
        }
      } catch {
        setTimeout(() => this.setTheme(themeName), 5);
      }
    },
    toggleTheme() {
      let themeName = localStorage.getItem("theme") as string;
      if (themeName === "dark-theme") {
        this.setTheme("light-theme");
      } else {
        this.setTheme("dark-theme");
      }
      new Audio(SwitchSFX).play();
    },
    loadTheme() {
      let themeName = localStorage.getItem("theme") as string;
      if (themeName === "dark-theme") {
        this.setTheme("dark-theme");
      } else {
        this.setTheme("light-theme");
      }
    },
  },
  mounted() {
    this.loadTheme();
  }
};
</script>
