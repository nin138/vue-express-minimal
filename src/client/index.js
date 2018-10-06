import Vue from "vue/dist/vue.js";
import VueRouter from "vue-router";
import Vuex from "vuex";
import { router } from "./routes";
import App from "./components/App";

Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
  store: require("./store").store,
  router,
  render: h => h(App),
}).$mount("#app");
