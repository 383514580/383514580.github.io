import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Index from './view/Index'
import Detail from './view/Detail'
// 路由配置
const routes = [
    { path: '/', component: Index },
    { path: '/index', component: Index, name: 'index' },
    { path: '/detail/:id', component: Detail, name: 'detail' }, {
        path: '/test',
        component: resolve => {
            require.ensure(['components/Test'], () => {
                resolve(require('components/Test'))
            })
        },
        name: 'test'
    }
];
// 初始化路由
export default new VueRouter({
    // mode: 'history',
    routes,
    // scrollBehavior(to, from, savedPosition) {
    //     console.log(savedPosition)
    //     if (savedPosition) {
    //         return savedPosition
    //     } else {
    //         return { x: 0, y: 0 }
    //     }
    // }
})
