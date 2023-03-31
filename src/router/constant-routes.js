/**
 * 路由功能
 */
import staticRouter from './static-router.json';
import { startPage } from '../config/index';
import trendArr from './router-trends';

const constantRoutes = [];

// 添加路由首页
constantRoutes.push({
    path: '/',
    redirect: startPage
});

// 添加自动生成路由
constantRoutes.push(...trendArr);

// 添加静态配置路由
Object.keys(staticRouter).forEach(item => {
    constantRoutes.push({
        path: `/${item}`,
        component: () => Promise.resolve(require('@/views/' + staticRouter[item].default)),
        name: `${staticRouter[item].default}`
    });
});

export default constantRoutes;