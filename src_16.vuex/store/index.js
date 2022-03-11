//该文件用于创建Vuex中最为核心的store
//引入vuex

import Vue from "vue"

//3.使用Vuex插件
import Vuex from "vuex"
Vue.use(Vuex)


//2.
//准备actions——用于响应组件中的动作
const actions = {
    //使用第二步
    //业务逻辑要写在actions里
    //如果其中有一个逻辑很复杂，可以通过dispatch一层层调用
    odd(context,value) {
        if (context.state.sum % 2) {
            console.log("actions中的odd被调用了1")
            context.dispatch("demo1", value)
        }
    },
    demo1(context,value){
        console.log("actions中的demo1被调用了1")
        context.dispatch("demo2", value)
    },
    demo2(context,value){
        console.log("actions中的demo2被调用了1")
        context.commit("JIA", value)
    },
    //业务逻辑要写在actions里
    timerout(context,value) {
        setTimeout(()=> {
            console.log("actions中的timerout被调用了1")
            context.commit("JIA", value)
        },1000)
    }
}

//准备mutations——用于操作数据（state）
const mutations = {
    //使用第三步
    JIA(state,value){
        console.log("mutations中的JIA被调用了2")
        state.sum += value
    },
    JIAN(state,value){
        console.log("mutations中的JIAN被调用了2")
        state.sum -= value
    },
    ADD_PERSON(state,value){
        console.log("mutations中的ADD_PERSON被调用了2")
        state.personList.unshift(value)
    }
}

//准备state——用于存储数据
const state = {
    sum:0,   //当前的和
    school:"临川一中",
    subject:"数学",
    personList:[{id:"001",name:"张三"}]
}

//准备getter——用于将state中的数据进行加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

//创建store并导出store
export default new Vuex.Store({
    actions:actions,
    mutations:mutations,
    state:state,
    getters:getters
})


