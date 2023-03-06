import { createApp } from "vue";
import Pagination from "v-pagination-3";

import App from "@/App.vue";
import router from "@/router";
import "@/assets/main.css";

import { addAuthenticationHeaders } from "@/api/interceptors/authentication";

import axios from "axios";

axios.interceptors.request.use(addAuthenticationHeaders);

const app = createApp(App);

app.use(router);

app.component("AppPagination", Pagination);

app.mount("#app");
