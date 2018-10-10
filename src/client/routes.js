import VueRouter from "vue-router";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Counter from "./components/Counter";
import Time from "./components/Time";

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Page1 },
    { path: "/page2", component: Page2 },
    { path: "/counter", component: Counter },
    { path: "/time", component: Time },
  ],
});
