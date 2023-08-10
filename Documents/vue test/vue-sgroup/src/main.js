import "./assets/main.css";

import { createApp,  } from "vue";
import App from "@/App.vue";
import RegisterForm from "@/components/RegisterForm.vue";
import Form from "@/components/Form.vue";
import { createRouter , createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: Form },
  { path: '/register', component: RegisterForm },
  {path: '/:catchAll(.*)',
        component: Error}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})



createApp(App).use(router).mount("#app");
