import unKeepAliveData from '@/mixins/unKeepAliveData'

export default {
    created() {
        // 进入页面后在URL中添加标志，作为判断是否不存在可返回的页面的依据
        // this.setGoIndex();
    },

    methods: {
        /**
        * @created by 刘勇 2022-11-13 11:39:28
        * @Updated by 刘勇 2022-11-13 11:39:28
        * @description 返回-公共
        */
        onClickLeft() {
            this.$router.back(-1);
            // if (location.href.indexOf('goIndex=true')) {
            //     this.$router.back(-1);
            // } else {
            //     history.back();
            // }
        },

        /**
        * @created by 刘勇 2023-03-13 11:38:33
        * @Updated by 刘勇 2023-03-13 11:38:33
        * @description 进入页面后在URL中添加标志，作为判断是否不存在可返回的页面的依据
        */
        setGoIndex() {
            if (window.history.length <= 1) {
                if (location.href.indexOf('?') === -1) {
                    window.location.href = `${location.href}?goIndex=true`;
                } else if(location.href.indexOf('?') !== -1 && location.href.indexOf('goIndex') === -1) {
                    window.location.href = `${location.href}&goIndex=true`;
                }
            }
        }
    },

    /**
    * @created by 刘勇 2022-11-18 11:36:58
    * @Updated by 刘勇 2022-11-18 11:36:58
    * @description 页面 keep-alive 缓存机制（注意：缓存页面必须定义name&keepAlive属性）
    */
    beforeRouteLeave(to, from, next) {
        // 情况特殊的页面在自己页面自行编写缓存机制，即添加钩子函数beforeRouteLeave
        const tempArr = ['demo'];

        if (tempArr.indexOf(from.name) === -1) {
            // 从vuex中取出缓存页面数据
            let keepAlive = this.$store.getters.keepAlive || [];

            // 缓存页面前往以下页面，清除缓存
            const unKeepAliveArr = unKeepAliveData[from.name] || [];

            if (from.meta.keepAlive) {
                // 【离开】缓存页面之前，【清除】缓存

                // 检查缓存页面的name是否已经存储到keepAlive
                const index = keepAlive.lastIndexOf(from.name);

                // 是否前往指定页面
                const flag = unKeepAliveArr.includes(to.name);

                // 【清除】缓存
                if (index !== -1 && flag) keepAlive.splice(index, 1);

                // 特殊情况：从缓存页面A跳转到缓存页面B
                if (to.meta.keepAlive) {
                    // 【进入】缓存页面之前，【添加】缓存

                    // 检查缓存页面的name是否已经存储到keepAlive
                    const index = keepAlive.lastIndexOf(to.name);

                    // 【添加】缓存
                    if (index === -1) keepAlive.push(to.name);                
                }
                
            } else {
                // 【进入】缓存页面之前，【添加】缓存
                if (to.meta.keepAlive) {
                    // 检查缓存页面的name是否已经存储到keepAlive
                    const index = keepAlive.lastIndexOf(to.name);

                    // 【添加】缓存
                    if (index === -1) keepAlive.push(to.name);
                }
            }

            // 缓存页面数据存储到vuex
            this.$store.commit('keepAlive', keepAlive);
        }

        next();
    }
}