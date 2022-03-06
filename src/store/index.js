//该文件用于创建Vuex中最为核心的store
//引入vuex
import Vuex from "vuex"


//3.使用Vuex插件
import Vue from "vue"
Vue.use(Vuex)


//2.
//准备actions——用于响应组件中的动作
const actions = {}

//准备mutations——用于操作数据（state）
const mutations = {}

//准备state——用于存储数据
const state = {}

//创建store并导出store
export default new Vuex.Store({
    actions:actions,
    mutations:mutations,
    state:state,
})


