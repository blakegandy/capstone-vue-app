import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import axios from "axios";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import AppointmentIndex from "../views/AppointmentIndex.vue";
import UserIndex from "../views/UserIndex.vue";
import UserShow from "../views/UserShow.vue";
import UserEdit from "../views/UserEdit.vue";
import AppointmentEdit from "../views/AppointmentEdit.vue";
import ProductEdit from "../views/ProductEdit.vue";
import ProductShow from "../views/ProductShow.vue";
import ProductNew from "../views/ProductNew.vue";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "/";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  {
    path: "/appointments",
    name: "appointment-index",
    component: AppointmentIndex,
  },
  { path: "/users", name: "users-index", component: UserIndex },
  { path: "/users/:id", name: "users-show", component: UserShow },
  {
    path: "/users/:id/edit",
    name: "users-edit",
    component: UserEdit,
  },
  {
    path: "/appointments/:id/edit",
    name: "appointments-edit",
    component: AppointmentEdit,
  },
  {
    path: "/products/:id/edit",
    name: "products-edit",
    component: ProductEdit,
  },
  {
    path: "/products/:id",
    name: "products-show",
    component: ProductShow,
  },
  {
    path: "/products",
    name: "products-new",
    component: ProductNew,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
