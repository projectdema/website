// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;

  try {
    let btn = document.getElementById("themeSwitch");
    if (themeName === "dark-theme") {
      btn.innerText = "🔦";
    } else {
      btn.innerText = "🌚";
    }
  } catch {
    setTimeout(() => setTheme(themeName), 5);
  }
}
// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "dark-theme") {
    setTheme("light-theme");
  } else {
    setTheme("dark-theme");
  }
}
// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem("theme") === "dark-theme") {
    setTheme("dark-theme");
  } else {
    setTheme("light-theme");
  }
})();
