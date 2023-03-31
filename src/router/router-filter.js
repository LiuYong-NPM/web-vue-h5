/**
 * 路由拦截
 */
import router from '@/router';

router.beforeEach((to, from, next) => {
    next();
    return;
});

// 路由后置拦截器
router.afterEach( route => {
   console.log('route>>>>', route);
});