import Vue from 'vue';
import Router from 'vue-router';
import constantRoutes from './constant-routes';
import routerArr from './router-trends';
import { startPage } from '../config/index';

Vue.use(Router);
const router = new Router();

const originalPush = Router.prototype.push;
Router.prototype.push = function(location) {
    return originalPush.call(this, location).catch(err => err)
};

constantRoutes.forEach(item => {
    router.addRoute(item);
});

routerArr.forEach(item => {
    router.addRoute(startPage, item);
});

export default router;
