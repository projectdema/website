import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import CustomAlert from "./components/CustomAlert.vue";
import ProjectDema from "./components/ProjectDema.vue";
import PageTitle from "./components/PageTitle.vue";


const app = createApp(App);

app
.component('CustomAlert', CustomAlert)
.component('ProjectDema', ProjectDema)
.component('PageTitle', PageTitle)

app.use(router);

app.mount("#app");
