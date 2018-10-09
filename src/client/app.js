import Vue from "vue";
import { router } from "./routes";
import App from "./components/App";
import VueRouter from "vue-router";
Vue.use(VueRouter);

export function createApp() {
  const app = new Vue({
    store: require("./store").store,
    router,
    render: h => h(App),
  });
  return { app, router };
}
