/**
 * 根据目录动态生成路由
 */
const routerArr = [];
const routerFliter = [];
const tempArr = [];

const files = require.context('../views', true, /\.vue$/);

files.keys().map(path => {
    if (path.indexOf('components') === -1) {
        let isTrendsRoute = files(path).default.trendsRoute;
        if (!isTrendsRoute) return;

        const routePath = path.split('./')[1].replace('.vue', '');
        var flag = true;
        if (routerFliter.length > 0) {
            flag = false;
            for(var i = 0; i < routerFliter.length; i++) {
                if(flag) {
                    break;
                }

                if (routerFliter[i].indexOf('/*') !== -1) {
                    var temp = routerFliter[i].replace('/*', '');
                    if (('/' + routePath).indexOf(temp) !== -1) {
                        flag = true;
                    }
                } else if (routerFliter[i].indexOf(routePath) !== -1) {
                    flag = true;
                }
            }
        }

        if (flag) {
            tempArr.push(`'${files(path).default.name}' : ${routePath}`);
            routerArr.push({
                path: '/' + routePath,
                name: files(path).default.name,
                meta: {
                    sort: files(path).default.sort || 1,
                    keepAlive: files(path).default.keepAlive || false
                },
                component: resolve => require(['@/views/' + routePath], resolve)
            });
        }
    }
});

// console.log('routerArr>>>', JSON.stringify(routerArr));
export default routerArr;