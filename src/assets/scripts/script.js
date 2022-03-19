window.onscroll = function() {
  let ph = document.getElementById('page-header')
  let currentScrollPos = window.pageYOffset;
  if ((ph.offsetHeight - 25) > currentScrollPos) {
    document.getElementById("navbar").classList.remove("navbar-ghost");
  } else {
    document.getElementById("navbar").classList.add("navbar-ghost");
  }
}