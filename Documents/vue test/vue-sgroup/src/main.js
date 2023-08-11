import "./assets/main.css";

import { createApp } from "vue";
import App from "@/App.vue";
import RegisterForm from "../views/RegisterForm.vue";
import Form from "../views/Form.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import Notifications from "@kyvg/vue3-notification";
import DashBoard from "./components/DashBoard.vue";

const routes = [
  { path: "/", component: Form },
  { path: "/register", component: RegisterForm },
  { path: "/DashBoard", component: DashBoard },
  { path: "/:catchAll(.*)", component: Error },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).use(Notifications).mount("#app");
