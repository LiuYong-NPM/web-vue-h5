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

// vue-video-player视频播放器
import VueVideoPlayer from 'vue-video-player';
window.videojs = VueVideoPlayer.videojs;
require('vue-video-player/src/custom-theme.css');
require('video.js/dist/video-js.min.css');
require('video.js/dist/lang/zh-CN.js');
import 'video.js/dist/video-js.css';
import 'video.js/dist/video.min.js';
Vue.use(VueVideoPlayer);

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