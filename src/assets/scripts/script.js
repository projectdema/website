function headerBannerResize() {
  try {
    let hb = document.getElementById('header-banner')

    let scale = Number(hb.attributes.getNamedItem('scale').value);

    if (!scale) hb.width = window.innerWidth * (0.430);
    else hb.width = window.innerWidth * (0.430 * scale);
  } catch {}
}

(function () {
  headerBannerResize();
})();

window.onload = () => {
  headerBannerResize();
}

window.onresize = () => {
  headerBannerResize();
}