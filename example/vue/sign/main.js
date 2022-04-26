import Vue from 'vue';
import Dev from './App.vue';
Vue.config.productionTip = false;

new Vue({
    render: (h) => h(Dev),
}).$mount('#app');
