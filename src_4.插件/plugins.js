export default {
    //插件本质是一个包含install方法的对象，第一个参数时Vue，之后的参数是插件使用者传递的参数的数据
    install(Vue,x,y){
        console.log("install",Vue)

    //    给Vue原型上添加一个方法（vm和vc就都能用了）
        Vue.prototype.hello =()=>{
            alert("xxx",x,y)
        }

        //插件是写一些全局可用的功能，和混合区别在于，
        // 混合是复用组件内的配置，混合既可以全局混合，
        // 也可以单独混合，组件则全局使用，不需要每次都引入
    }
}