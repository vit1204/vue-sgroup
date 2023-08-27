import { createRouter, createWebHashHistory } from "vue-router"
import LoginForm from "../views/LoginForm.vue"
import RegisterForm from "../views/RegisterForm.vue"
import UserItem from "../views/User/UserItem.vue"

const routes = [
    {path: "/", component: LoginForm},
    {path: "/register", component: RegisterForm},
   {path: "/DashBoard", component: UserItem},
    { path: "/:catchAll(.*)", component: Error },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
