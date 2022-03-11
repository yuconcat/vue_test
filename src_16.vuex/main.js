//该文件是整个项目的入口文件

//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'

//关闭vue的生产提示
Vue.config.productionTip = false


//1.
//引入插件
import vueResource from "vue-resource"
//使用插件
Vue.use(vueResource)


//3.引入store
import store from "./store/index"


new Vue({
    el:"#root",
    render: h => h(App),

    //3.引入store
    store:store

})

