import Vue from "vue";
import App from "./App";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

require("./shared/pokemonTypes.scss");

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
}).$mount("#app");
