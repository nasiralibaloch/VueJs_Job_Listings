import { createApp } from "vue";
import App from "./App.vue";
//import Toast from "vue-toustification";
import "vue-toustification/dist/index.css";

import "./assets/tailwind.css";
import "primeicons/primeicons.css";

import router from "./Router";

const app = createApp(App);
app.use(router);
app.mount("#app");
