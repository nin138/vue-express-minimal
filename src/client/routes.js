import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import VueRouter from "vue-router";
export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Page1,
    },
    {
      path: "/page2",
      component: Page2,
    },
  ],
});
