import Vue from "vue/dist/vue.js";
import VueRouter from "vue-router";
import { router } from "./routes";
import App from "./components/App";

Vue.use(VueRouter);
new Vue({
  router,
  // template: `
  // <div id="app">
  //     <h1>Route Matching</h1>
  //     <ul>
  //       <!--<li><router-link to="/">home</router-link></li>-->
  //       <!--<li><router-link to="/page1">/p1</router-link></li>-->
  //     </ul>
  //     <p>Route context</p>
  //     <pre>{{ JSON.stringify($route, null, 2) }}</pre>
  //   </div>
  // `,
  render: h => h(App),
}).$mount("#app");
