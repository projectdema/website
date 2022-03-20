import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import CustomAlert from "./components/PageUtils/CustomAlert.vue";
import PageTitle from "./components/PageUtils/PageTitle.vue";
import Footer from "./components/MainBlocks/Footer.vue";

const app = createApp(App);

app
.component('CustomAlert', CustomAlert)
.component('PageTitle', PageTitle)
.component('Footer', Footer)

app.use(router);

app.mount("#app");
