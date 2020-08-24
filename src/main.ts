import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { ApmVuePlugin } from "@elastic/apm-rum-vue";

Vue.config.productionTip = false;

Vue.use(ApmVuePlugin, {
  router,
  config: {
    serviceName: "app-name",
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
