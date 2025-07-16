import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";

import "./assets/tailwind.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
