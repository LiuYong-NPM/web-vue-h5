import Vue from 'vue';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import App from './App.vue';
import router from './router';
import store from './store/index';
import {
    defaultRootId
} from './config/index';
import '@/assets/styles/index';

import axios from 'axios';
import VueAxios from 'vue-axios';
import * as echarts from 'echarts';
Vue.prototype.$echarts = echarts;

Vue.use(VueAxios, axios);

import VConsole from 'vconsole';
new VConsole();

// 引入 vant-ui
import vant from 'vant';
import 'vant/lib/index.css';
Vue.use(vant);

import mixins from './mixins/index';
Vue.mixin(mixins);

import {
    Dialog,
    Toast,
    Loading
} from 'vant';
Vue.prototype.$dialog = Dialog;
Vue.prototype.$toast = Toast;
Vue.prototype.$loading = Loading;

Vue.config.productionTip = false;

new Vue({
    el: defaultRootId,
    router,
    store,
    render: h => h(App)
});