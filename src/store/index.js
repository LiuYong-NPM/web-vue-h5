import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
        // 存储 已缓存 页面 name
		keepAlive: []
	},
	mutations: {
		keepAlive: (state, keepAlive) => {
			state.keepAlive = keepAlive
		}
	},
	getters: {
		keepAlive: state => state.keepAlive
	}
});

export default store;