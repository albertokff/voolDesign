import { createApp } from "vue";
import { createPinia } from "pinia"
import { createVuetify } from 'vuetify'
import App from "./App.vue";
import FirebasePlugin from "./firebase/firebasePlugin";
import router from "./router";
import BootstrapVueNext from "bootstrap-vue-next";
import VueApexCharts from "vue3-apexcharts";
import VueFeather from 'vue-feather';

import 'vuetify/dist/vuetify.min.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

import "./assets/custom.scss";

const app = createApp(App)
const pinia = createPinia()
const Vuetify = createVuetify()

app.use(pinia)
app.use(Vuetify)
app.use(FirebasePlugin)
app.use(router)
app.use(VueApexCharts)
app.use(BootstrapVueNext)
app.component(VueFeather.name!.toString(), VueFeather)
app.mount("#app")
