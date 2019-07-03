import Vue from 'vue'
import App from './App.vue'
import './plugins/virtual-scroller'
import './assets/reset.css'

Vue.config.productionTip = false

new Vue({ render: h => h(App) }).$mount('#app')
