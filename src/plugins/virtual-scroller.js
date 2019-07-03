import Vue from 'vue'
import VueVirtualScroller, { RecycleScroller } from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

Vue.use(VueVirtualScroller)

Vue.component('RecycleScroller', RecycleScroller)
