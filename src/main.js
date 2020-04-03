import Vue from 'vue'
import App from './App.vue'

// import VeeValidate from 'vee-validate';

// Vue.use(VeeValidate);

// import { ValidationProvider } from 'vee-validate';
// Vue.component('ValidationProvider', ValidationProvider)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
