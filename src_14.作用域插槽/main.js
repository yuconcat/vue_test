//该文件是整个项目的入口文件

//引入Vue
import Vue from 'vue'
//引入App组件，它是所有组件的父组件
import App from './App.vue'


//关闭vue的生产提示
Vue.config.productionTip = false


new Vue({
    el:"#root",
    //    等价于render(createElement){return createElement("标签名","内容")}
    render: h => h(App),

})

