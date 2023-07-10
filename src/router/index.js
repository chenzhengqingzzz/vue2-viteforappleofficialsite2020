/*
 * @Author: czqczqzzzzzz(czq)
 * @Email: tenchenzhengqing@qq.com
 * @Date: 2023-07-10 15:46:30
 * @LastEditors: 陈正清MacPro
 * @LastEditTime: 2023-07-10 15:48:51
 * @FilePath: /test/src/router/index.js
 * @Description: 
 * 
 * Copyright (c) by czqczqzzzzzz(czq), All Rights Reserved.
 */
import VueRouter from 'vue-router'
import Vue from 'vue'

import Home from '../components/Home/Home.vue'
import Mac from '../components/Mac/Mac.vue'
import iPad from "../components/iPad/iPad.vue";
import iPhone from "../components/iPhone/iPhone.vue";
import Music from "../components/Music/Music.vue";
import AirPodsDetails from "../components/Music/GoodsShow/AirPods Pro/AirPodsDetails.vue";


Vue.use(VueRouter)

var router=new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            component:Home,
        },
        {
            path:'/mac',
            component:Mac,
        },
        {
            path:'/ipad',
            component:iPad,
        },
        {
            path:'/iphone',
            component:iPhone,
        },
        {
            path:'/music',
            component:Music,
        },
        {
            path:'/music/airpodspro',
            component:AirPodsDetails,
        }

    ],
    mode:'history'
    
})

// 经验证，这个路由守卫没什么用，因为vue-router在跳转的路径相同的时候，在执行这个路由守卫之前就拦截了
router.beforeEach((to, from, next) => {
    // console.log(to.path===from.path)
    if(to.path===from.path){
        console.log('路由相等啦')
       return

    } else {
        next()
    }
})


export default router

