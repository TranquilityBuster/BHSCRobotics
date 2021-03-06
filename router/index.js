import Vue from "vue";
import App from "./App";
import router from "./router";

import "bulma/css/bulma.css";

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});
