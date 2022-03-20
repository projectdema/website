<template>
  <div class="navbar unselectable" id="navbar">
    <ul class="itself" id="navbar-itself">
      <li>
        <router-link to="/" class="navbar-link navbar-brand" tabindex="-1"><span>project</span><span>Dema</span></router-link>
      </li>

      <template v-for="route in $router.options.routes" :key="route.path">
        <div v-if="!['Login', 'Home'].includes(route.name)">
          <li>
            <router-link class="navbar-link" :to="route.path">{{ route.name }}</router-link>
          </li>
        </div>
        <div v-else-if="!['Home'].includes(route.name)">
          <li style="float: right">
            <router-link class="navbar-link" :to="route.path">{{ route.name }}</router-link>
          </li>
        </div>
      </template>
      <li style="float: right">
        <div class="navbar-link options">
          <a>⚙️</a>
          <div class="content">
            <div class="inner">
              <button id="themeSwitch" @click="toggleTheme" title="Alterar tema"></button>
            </div>
          </div>
        </div>
      </li>
      
    </ul>
  </div>
</template>

<script lang="ts">
// @ts-ignore
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
          btn.innerHTML = '<i class="fa-solid fa-toggle-off"> </i>';
        } else {
          btn.innerHTML = '<i class="fa-solid fa-toggle-on"> </i>';
        }
      } catch {
        setTimeout(() => this.setTheme(themeName), 5);
      }
    },
    toggleTheme() {
      let navbar = document.getElementById("navbar-itself") as any;
      navbar.style.transition = "all 0s ease";
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
      if (themeName === "light-theme") {
        this.setTheme("light-theme");
      } else {
        this.setTheme("dark-theme");
      }
    },
  },
  mounted() {
    // @ts-ignore
    this.loadTheme();
  }
};
</script>
